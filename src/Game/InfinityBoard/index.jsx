import { useState } from "react";
import style from "../../BigBoard/bigboard.module.scss";
import classNames from "classnames/bind";
import a from "../../assets/img/bg-home.jpg";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const cx = classNames.bind(style);

function InfinityBoard() {
  const [init, setInit] = useState(Array.from({ length: 30 }, () => Array(40).fill(null)));

  const [winner, setWinner] = useState(false);

  return (
    <div className="wrapper-game-iff w-full h-full">
      <div className="board-play w-full h-full">
        {/* <TransformWrapper>
          <TransformComponent>
            <img src="http://localhost:3000/static/media/background-home.7484d21898c7bf5f2091.png" alt="test" />
          </TransformComponent>
        </TransformWrapper> */}
        <div className={cx("big-board-wrapperr w-full h-full")}>
          <TransformWrapper
            initialScale={1}
            centerOnInit={true}
            minScale={0.8}
            maxScale={2}
            wheel={{ step: 0.1 }}
          >
            <TransformComponent wrapperStyle={{ width: '100%', height: '100%' }}>
              <table id="table-game">
                <tbody className={cx(`${winner && "have-winner"}`)}>
                  {init.map((row, index) => (
                    <tr key={index}>
                      {row.map((item, indexRow) => (
                        <td key={indexRow}>
                          <div
                            className={cx(
                              "bo",
                              " flex justify-center items-center text-center 2xl:w-16 2xl:h-16 xl:w-14 xl:h-14 w-12 h-12 p-2",
                              `${item !== null && "bo-selected"}`,
                              `${item?.blockWin ? "block-win" : ""}`
                            )}
                          ></div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </TransformComponent>
          </TransformWrapper>
        </div>
      </div>
    </div>
  );
}

export default InfinityBoard;
