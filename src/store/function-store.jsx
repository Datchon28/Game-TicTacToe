import React, { useEffect, useState } from "react";
import Store from "./store";

let changeData = false;

export default function ReducerDataPlayer() {
  let dataPlayer1;
  let dataPlayer2;

  const getDataPlayer = () => {
    return {
      dataPlayer1,
      dataPlayer2,
    };
  };

  const setDataPlayer = (data, indexPlayer) => {
    if (indexPlayer === 0) {
      dataPlayer1 = data;
    } else {
      dataPlayer2 = data;
    }
  };

  return {
    initialValue: {
      dataPlayer1: null,
      dataPlayer2: null,
    },
    getData: getDataPlayer,
    setData: setDataPlayer,
  };
}

export const dispatchStore = (data, numberPlayer) => {
  changeData = true;
  return ReducerDataPlayer().setData(data, numberPlayer);
};
