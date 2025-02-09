import { useEffect, useRef, useState } from "react";
import style from "./bigboard.module.scss";
import classNames from "classnames/bind";
import { Button } from "@headlessui/react";

import conditionWin from "../ConditionGame";
import Player from "../Players";
import { winnerPlayer } from "../ConditionGame/winner-gamer";
import { initBoard } from "../constants/list-prop";
import MenuGame from "./components/menu-game";
import music from "../assets/music-game/music-game.mp3";

const cx = classNames.bind(style);

function BigBoard() {
  const [init, setInit] = useState(initBoard);

  const shapePlayer = {
    shapePlayer1: JSON.parse(localStorage.getItem("pl1")),
    shapePlayer2: JSON.parse(localStorage.getItem("pl2")),
  };
  const [player, setPlayer] = useState(1);
  const [checkWinner, setCheckWinner] = useState(false);
  const [winner, setWinner] = useState(false);

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
    conditionWin(initCop) && setCheckWinner(conditionWin(initCop));
    setPlayer(player === 1 ? 2 : 1);
  };

  useEffect(() => {
    if (checkWinner) {
      winnerPlayer(init, checkWinner);
      setInit(winnerPlayer(init, checkWinner));
      setWinner(true);
    }
  }, [checkWinner]);

  const playAgain = () => {
    setWinner(false);
    setCheckWinner(false);
    setInit(initBoard);
  };

  return (
    <div className="wrapper-game">
      <div className="col-player">
        <Player
          player={1}
          currentPlayer={player}
          shape={shapePlayer.shapePlayer1.character}
          youWin={winner && player === 2}
        />
        <div className="settings">
          <MenuGame
            winner={winner}
            playAgain={playAgain}
            winnerIs={winner && player === 2 ? 1 : 2}
          />
        </div>
      </div>
      <div className="board-play">
        <div className={cx("big-board-wrapper")}>
          <table id="table-game">
            <tbody className={cx(`${winner && "have-winner"}`)}>
              {init.map((row, index) => (
                <tr key={index}>
                  {row.map((item, indexRow) => (
                    <td key={indexRow}>
                      <div
                        className={cx(
                          "bo",
                          " flex justify-center items-center text-center 2xl:w-16 2xl:h-16 xl:w-14 xl:h-14 w-10 h-10 p-2",
                          `${item !== null && "bo-selected"}`,
                          `${item?.blockWin ? "block-win" : ""}`
                        )}
                        onClick={(e) => addX(index, indexRow, item)}
                      >
                        {item !== null && (
                          <img
                            src={
                              item?.use === shapePlayer.shapePlayer1.name
                                ? shapePlayer.shapePlayer1.character
                                : shapePlayer.shapePlayer2.character
                            }
                          />
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-player">
        <Player
          player={2}
          currentPlayer={player}
          shape={shapePlayer.shapePlayer2.character}
          youWin={winner && player === 1}
        />

        <div className="settings">
          <Button className="text-white">Chat</Button>
        </div>
      </div>
    </div>
  );
}

export default BigBoard;
