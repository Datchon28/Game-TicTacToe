import { useState } from "react";
import BigBoard from "../BigBoard";
import Player from "../Players";

function GameMain() {
  return (
    <>
      <BigBoard />
      <div className="bg-alpha"></div>
      <div className="bg-beta"></div>
    </>
  );
}

export default GameMain;
