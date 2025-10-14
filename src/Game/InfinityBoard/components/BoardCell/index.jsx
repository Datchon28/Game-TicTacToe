import classNames from "classnames/bind";
import style from "../../../../Global/GlobalStyle.scss";
import { useState, useEffect } from "react";

const cx = classNames.bind(style);

function BoardCell({ indexItem, indexRow, item,  shapePlayer, onClick }) {
  return (
    <td>
      <div
        className={cx(
          "bo",
          " flex justify-center items-center text-center 2xl:w-16 2xl:h-16 xl:w-14 xl:h-14 w-12 h-12 p-2",
          `${item !== null && "bo-selected"}`,
          `${item?.blockWin ? "block-win" : ""}`
        )}
        onClick={(e) => onClick(indexItem, indexRow, item)}
      >
        {item !== null && (
          <img
            alt=""
            src={
              item?.use === shapePlayer.shapePlayer1.name
                ? shapePlayer.shapePlayer1.character
                : shapePlayer.shapePlayer2.character
            }
          />
        )}
      </div>
    </td>
  );
}

export default BoardCell;
