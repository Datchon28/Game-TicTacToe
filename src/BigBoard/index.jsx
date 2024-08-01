import { useEffect, useRef, useState } from "react";
import style from "./bigboard.module.scss";
import classNames from "classnames/bind";

import xIcon from "../assets/img/x.png";
import oIcon from "../assets/img/o.png";
import conditionWin from "../ConditionGame";
import Player from "../Players";

const cx = classNames.bind(style);

function BigBoard() {
  const [init, setInit] = useState(
    Array(10).fill([
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ])
  );

  const [player, setPlayer] = useState(1);
  const [checkWinner, setCheckWinner] = useState();
  const [winner, setWinner] = useState();

  const addX = async (e, index, indexRow) => {
    if (winner === "Have Winner") {
      return;
    }
    const initCop = [...init];
    const useCop = [...initCop[index]];

    useCop[indexRow] = {
      player: player,
      use: player === 1 ? "x" : "o",
      blockWin: false,
    };
    initCop[index] = useCop;

    setInit(initCop);
    conditionWin(initCop) && setCheckWinner(conditionWin(initCop));
    setPlayer(player === 1 ? 2 : 1);
  };

  const displayWinner = (winnerData) => {
    const copyData = [...init];
    switch (winnerData.winnerBy) {
      case "Winner Row": {
        copyData.forEach((row, indexRow) => {
          if (indexRow === winnerData.row) {
            row.forEach((col, indexCol) => {
              if (indexCol === winnerData.col) {
                col["blockWin"] = true;
                for (let i = 1; i < 4; i++) {
                  row[indexCol + i]["blockWin"] = true;
                }
              }
            });
          }
        });
        break;
      }

      case "Winner Row Block": {
        if (winnerData.row !== 0 && winnerData.col !== 0) {
          copyData[winnerData.row][winnerData.col]["blockWin"] = true;
          for (let i = 1; i < 5; i++) {
            copyData[winnerData.row][winnerData.col + i]["blockWin"] = true;
          }
        } else if (winnerData.row === 0 && winnerData.col !== 0) {
          copyData[0][winnerData.col]["blockWin"] = true;
          for (let i = 1; i < 5; i++) {
            copyData[0][winnerData.col + i]["blockWin"] = true;
          }
        } else if (winnerData.row === 0 && winnerData.col === 0) {
          copyData[winnerData.row][winnerData.col + 1]["blockWin"] = true;
          for (let i = 1; i < 5; i++) {
            copyData[0][winnerData.col + i + 1]["blockWin"] = true;
          }
        }
        break;
      }
      case "Winner Column": {
        if (winnerData.row !== 0 && winnerData.col !== 0) {
          if (winnerData.row === copyData.length - 1) {
            for (let i = 0; i < 4; i++) {
              copyData[winnerData.row - i][winnerData.col]["blockWin"] = true;
            }
          } else {
            for (let i = 0; i < 4; i++) {
              copyData[winnerData.row + i][winnerData.col]["blockWin"] = true;
            }
          }
        } else if (winnerData.row === 0 && winnerData.col === 0) {
          for (let i = 0; i < 4; i++) {
            copyData[winnerData.row + i][0]["blockWin"] = true;
          }
        } else if (winnerData.row === 0 && winnerData.col !== 0) {
          for (let i = 0; i < 4; i++) {
            copyData[0 + i][winnerData.col]["blockWin"] = true;
          }
        } else if (winnerData.row !== 0 && winnerData.col === 0) {
          for (let i = 0; i < 4; i++) {
            copyData[winnerData.row + i][0]["blockWin"] = true;
          }
        }
        break;
      }
      case "Winner Column Block": {
        if (winnerData.row !== 0 && winnerData.col !== 0) {
          for (let i = 0; i < 5; i++) {
            copyData[winnerData.row + i][winnerData.col]["blockWin"] = true;
          }
        } else if (winnerData.row !== 0 && winnerData.col === 0) {
          for (let i = 0; i < 5; i++) {
            copyData[winnerData.row + i][0]["blockWin"] = true;
          }
        } else if (winnerData.row === 0 && winnerData.col === 0) {
          for (let i = 0; i < 5; i++) {
            copyData[winnerData.row + i + 1][0]["blockWin"] = true;
          }
        } else if (winnerData.row === 0 && winnerData.col !== 0) {
          for (let i = 0; i < 5; i++) {
            copyData[winnerData.row + i][winnerData.col]["blockWin"] = true;
          }
        }
        break;
      }
      case "Winner Diagonal Row Plus": {
        if (winnerData.row !== 0 && winnerData.col !== 0) {
          if (copyData[winnerData.row].length - 1 === winnerData.col) {
            for (let i = 0; i < 4; i++) {
              copyData[winnerData.row - i][winnerData.col - i][
                "blockWin"
              ] = true;
            }
          } else {
            for (let i = 0; i < 4; i++) {
              copyData[winnerData.row + i][winnerData.col + i][
                "blockWin"
              ] = true;
            }
          }
        } else if (winnerData.row !== 0 && winnerData.col === 0) {
          for (let i = 0; i < 4; i++) {
            copyData[winnerData.row + i][winnerData.col + i]["blockWin"] = true;
          }
        } else if (winnerData.row === 0 && winnerData.col === 0) {
          for (let i = 0; i < 4; i++) {
            copyData[winnerData.row + i][winnerData.col + i]["blockWin"] = true;
          }
        } else if (winnerData.row === 0 && winnerData.col !== 0) {
          for (let i = 0; i < 4; i++) {
            copyData[winnerData.row + i][winnerData.col + i]["blockWin"] = true;
          }
        }

        break;
      }
      case "Winner Diagonal Row Plus Block": {
        if (winnerData.row !== 0 && winnerData.col !== 0) {
          for (let i = 0; i < 5; i++) {
            copyData[winnerData.row + i][winnerData.col + i]["blockWin"] = true;
          }
        } else if (winnerData.row === 0 && winnerData.col === 0) {
          for (let i = 0; i < 5; i++) {
            copyData[winnerData.row + i + 1][winnerData.col + i + 1][
              "blockWin"
            ] = true;
          }
        }

        break;
      }
      case "Winner Diagonal Row Minus": {
        if (winnerData.row !== 0 && winnerData.col !== 0) {
          if (winnerData.row === copyData.length - 1) {
            for (let i = 0; i < 4; i++) {
              copyData[winnerData.row - i][winnerData.col + i][
                "blockWin"
              ] = true;
            }
          } else {
            for (let i = 0; i < 4; i++) {
              copyData[winnerData.row + i][winnerData.col - i][
                "blockWin"
              ] = true;
            }
          }
        } else if (winnerData.row !== 0 && winnerData.col === 0) {
          for (let i = 0; i < 4; i++) {
            copyData[winnerData.row - i][winnerData.col + i]["blockWin"] = true;
          }
        } else if (winnerData.row === 0 && winnerData.col === 0) {
        } else if (winnerData.row === 0 && winnerData.col !== 0) {
          for (let i = 0; i < 4; i++) {
            copyData[winnerData.row + i][winnerData.col - i]["blockWin"] = true;
          }
        }

        break;
      }
      case "Winner Diagonal Row Minus Block": {
        copyData.forEach((row, indexRow) => {
          if (indexRow === winnerData.row) {
            row.forEach((col, indexCol) => {
              if (indexCol === winnerData.col) {
                col["blockWin"] = true;
                for (let i = 1; i < 5; i++) {
                  copyData[indexRow + i][indexCol - i]["blockWin"] = true;
                }
              }
            });
          }
        });
        break;
      }
    }

    setInit(copyData);
    setWinner("Have Winner");
  };

  useEffect(() => {
    if (checkWinner) {
      displayWinner(checkWinner);
    }
  }, [checkWinner]);

  return (
    <div className="wrapper-game">
      <Player />
      <div className="board-play">
        <div className={cx("big-board-wrapper")}>
          <table id="table-game">
            <tbody>
              {init.map((row, index) => (
                <tr key={index}>
                  {row.map((item, indexRow) => (
                    <td key={indexRow}>
                      <div
                        className={cx(
                          "bo",
                          `${item?.blockWin === true ? "block-win" : ""}`
                        )}
                        onClick={(e) => addX(e, index, indexRow)}
                      >
                        {item !== null && item?.use === "x" && (
                          <img src={xIcon} />
                        )}
                        {item !== null && item?.use === "o" && (
                          <img src={oIcon} />
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
      <Player />
    </div>
  );
}

export default BigBoard;
