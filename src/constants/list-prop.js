export const initBoard = Array(10).fill([
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
]);

export const winnerBy = {
  WinnerRow: "Winner Row",
  WinnerRowBlock: "Winner Row Block",
  WinnerColumn: "Winner Column",
  WinnerColumnBlock: "Winner Column Block",
  WinnerDiagonalRowPlus: "Winner Diagonal Row Plus",
  WinnerDiagonalRowPlusBlock: "Winner Diagonal Row Plus Block",
  WinnerDiagonalRowMinus: "Winner Diagonal Row Minus",
  WinnerDiagonalRowMinusBlock: "Winner Diagonal Row Minus Block",
};
