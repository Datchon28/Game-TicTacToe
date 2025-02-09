import { winnerBy } from "../constants/list-prop";

export const winnerPlayer = (initData, winnerData) => {
  const copyData = [...initData];
  switch (winnerData.winnerBy) {
    case winnerBy.WinnerRow: {
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
    case winnerBy.WinnerRowBlock: {
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
    case winnerBy.WinnerColumn: {
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
    case winnerBy.WinnerColumnBlock: {
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
    case winnerBy.WinnerDiagonalRowPlus: {
      if (winnerData.row !== 0 && winnerData.col !== 0) {
        if (copyData[winnerData.row].length - 1 === winnerData.col) {
          for (let i = 0; i < 4; i++) {
            copyData[winnerData.row - i][winnerData.col - i]["blockWin"] = true;
          }
        } else {
          for (let i = 0; i < 4; i++) {
            copyData[winnerData.row + i][winnerData.col + i]["blockWin"] = true;
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
    case winnerBy.WinnerDiagonalRowPlusBlock: {
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
    case winnerBy.WinnerDiagonalRowMinus: {
      if (winnerData.row !== 0 && winnerData.col !== 0) {
        if (winnerData.row === copyData.length - 1) {
          for (let i = 0; i < 4; i++) {
            copyData[winnerData.row - i][winnerData.col + i]["blockWin"] = true;
          }
        } else {
          for (let i = 0; i < 4; i++) {
            copyData[winnerData.row + i][winnerData.col - i]["blockWin"] = true;
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
    case winnerBy.WinnerDiagonalRowMinusBlock: {
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

  return copyData;
};
