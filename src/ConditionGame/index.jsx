import * as AllConditions from "./conditions";

const Conditions = AllConditions.default;

export default function conditionWin(array) {
  for (let k = 0; k < array.length; k++) {
    for (let i = 0; i < array[k].length; i++) {
      if (array[k][i] !== null) {
        if (k === 0 && i === 0) {
          console.log("a");
          const result = Conditions.conditionOuterMostTopLeft(
            array,
            array[k],
            k,
            i
          );
          if (result !== null) {
            const winner = {
              row: k,
              col: i,
              winnerBy: result,
            };
            return winner;
          }
        } else if (k === 0 && i === array[k].length - 1) {
          console.log("b");
          const result = Conditions.conditionOuterMostTopRight(
            array,
            array[k],
            k,
            i
          );
          if (result !== null) {
            const winner = {
              row: k,
              col: i,
              winnerBy: result,
            };
            return winner;
          }
        } else if (k === array.length - 1 && i === 0) {
          console.log("c");
          const result = Conditions.conditionOuterMostBottomLeft(
            array,
            array[k],
            k,
            i
          );
          if (result !== null) {
            const winner = {
              row: k,
              col: i,
              winnerBy: result,
            };
            return winner;
          }
        } else if (k === array.length - 1 && i === array[k].length - 1) {
          console.log("d");
          const result = Conditions.conditionOuterMostBottomRight(
            array,
            array[k],
            k,
            i
          );
          if (result !== null) {
            const winner = {
              row: k,
              col: i,
              winnerBy: result,
            };
            return winner;
          }
        } else if (k === 0 && i > 0 && i < array[k].length - 1) {
          console.log("e");
          const result = Conditions.conditionOuterMostTopFree(
            array,
            array[k],
            k,
            i
          );
          if (result !== null) {
            const winner = {
              row: k,
              col: i,
              winnerBy: result,
            };
            return winner;
          }
        } else if (k > 0 && k < array.length - 1 && i === 0) {
          console.log("f");
          const result = Conditions.conditionOuterMostLeftFree(
            array,
            array[k],
            k,
            i
          );
          if (result !== null) {
            const winner = {
              row: k,
              col: i,
              winnerBy: result,
            };
            return winner;
          }
        } else if (k > 0 && k < array.length - 1 && i === array[k].length - 1) {
          console.log("g");
          const result = Conditions.conditionOuterMostRightFree(
            array,
            array[k],
            k,
            i
          );
          if (result !== null) {
            const winner = {
              row: k,
              col: i,
              winnerBy: result,
            };
            return winner;
          }
        } else if (k === array.length - 1 && i > 0 && i < array[k].length - 1) {
          console.log("h");
          const result = Conditions.conditionOuterMostBottomFree(
            array,
            array[k],
            k,
            i
          );
          if (result !== null) {
            const winner = {
              row: k,
              col: i,
              winnerBy: result,
            };
            return winner;
          }
        } else {
          const result = Conditions.conditionAllFree(array, array[k], k, i);
          if (result !== null) {
            const winner = {
              row: k,
              col: i,
              winnerBy: result,
            };
            return winner;
          }
        }
      }
    }
  }

  return;
}
