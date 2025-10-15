import classNames from "classnames/bind";
import style from "../../Global/GlobalStyle.scss";
import { useState, useEffect } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import conditionWin from "../../ConditionGame";
import { winnerPlayer } from "../../ConditionGame/winner-gamer";

import ava1 from "../../assets/img/ava1.svg";
import { initBoardInfinity } from "../../constants/list-prop";
import BoardCell from "./components/BoardCell";
import HeaderGame from "./components/HeaderGame";
import WinnerModal from "../GameModal/WinnerModal";
import ReadyGameModal from "../GameModal/ReadyGameModal";

const cx = classNames.bind(style);

function InfinityBoard() {
  const [init, setInit] = useState(initBoardInfinity);

  const roomInfo = JSON.parse(sessionStorage.getItem("roomInfo"));
  const shapePlayer = {
    shapePlayer1: JSON.parse(sessionStorage.getItem("pl1")),
    shapePlayer2: JSON.parse(sessionStorage.getItem("pl2")),
  };

  const [player, setPlayer] = useState(1);
  const [checkWinner, setCheckWinner] = useState(false);
  const [winner, setWinner] = useState(false);

  const [timeTurn, setTimeTurn] = useState(null);

  const startGame = (type) => {
    // 1 is StartGame
    // 2 is PlayAgain
    if (type === 2) {
      setInit(initBoardInfinity);
    }
    setWinner(false);
    setCheckWinner(false);
    setTimeTurn(30);
  };

  const addX = async (index, indexRow, item) => {
    if (winner) return;
    if (item !== null) return;

    const initCop = [...init];
    const useCop = [...initCop[index]];

    useCop[indexRow] = {
      player: player,
      use:
        player === 1
          ? shapePlayer.shapePlayer1.name
          : shapePlayer.shapePlayer2.name,
      blockWin: false,
    };
    initCop[index] = useCop;

    setInit(initCop);

    const haveWinner = await conditionWin(initCop);
    setCheckWinner(haveWinner);

    setPlayer(player === 1 ? 2 : 1);
    setTimeTurn(30);
  };

  const plusScorePlayer = (player) => {
    sessionStorage.setItem(
      "roomInfo",
      JSON.stringify({
        ...roomInfo,
        scorePlayer1:
          player === 2 ? roomInfo.scorePlayer1 + 1 : roomInfo.scorePlayer1,
        scorePlayer2:
          player === 1 ? roomInfo.scorePlayer2 + 1 : roomInfo.scorePlayer2,
      })
    );
  };

  const handlePanning = (e) => {
    console.log(e);
  };

  useEffect(() => {
    if (checkWinner) {
      winnerPlayer(init, checkWinner);
      setInit(winnerPlayer(init, checkWinner));
      setWinner(true);
      setTimeTurn(null);
      plusScorePlayer(player);
    }
  }, [checkWinner]);

  useEffect(() => {
    if (timeTurn <= 0) return;

    const countdown = setInterval(() => {
      setTimeTurn((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(countdown);
  }, [timeTurn]);

  return (
    <div id={roomInfo.id} className="wrapper-game-iff w-full h-full">
      <div className="board-play w-full h-full">
        <div
          className={cx(
            "infinity-board-wrapper w-full h-full flex flex-col justify-center"
          )}
        >
          <HeaderGame
            roomInfo={roomInfo}
            player={player}
            shapePlayer={shapePlayer}
            avarPlayer1={ava1}
            avarPlayer2={ava1}
            timeTurn={timeTurn}
          />
          <TransformWrapper
            initialScale={0.9}
            centerOnInit={true}
            minScale={0.8}
            maxScale={2}
            wheel={{ step: 0.1 }}
            onPanning={handlePanning}
          >
            <TransformComponent
              wrapperStyle={{ width: "100%", height: "100%" }}
            >
              <table id="table-game" className="table-iff">
                <tbody className={cx(`${winner && "have-winner"}`)}>
                  {init.map((row, index) => (
                    <tr key={index}>
                      {row.map((item, indexRow) => (
                        <BoardCell
                          key={indexRow}
                          item={item}
                          indexItem={index}
                          indexRow={indexRow}
                          shapePlayer={shapePlayer}
                          onClick={() => addX(index, indexRow, item)}
                        />
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </TransformComponent>
          </TransformWrapper>
        </div>
      </div>
      <WinnerModal
        open={winner}
        playAgain={() => startGame(2)}
        winnerIs={winner && player === 2 ? 1 : 2}
      />

      <ReadyGameModal onStartGame={() => startGame(1)} />
    </div>
  );
}

export default InfinityBoard;
