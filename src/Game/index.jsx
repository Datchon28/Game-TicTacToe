import { useState } from "react";
import BigBoard from "../BigBoard";
import Player from "../Players";
import InfinityBoard from "./InfinityBoard";

function GameMain() {
  return (
    <>
      {/* <BigBoard /> */}
      <InfinityBoard />
      {/* <div className="bg-alpha"></div>
      <div className="bg-beta"></div> */}
    </>
  );
}

export default GameMain;
