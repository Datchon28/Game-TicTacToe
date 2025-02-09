import classNames from "classnames/bind";
import style from "../Global/GlobalStyle.scss";
import { useEffect, useState } from "react";

const cx = classNames.bind(style);

function Player({
  player,
  currentPlayer,
  shape,
  useFor = "play",
  youWin = false,
}) {
  let [score, setScore] = useState(0);

  useEffect(() => {
    if (youWin) {
      setScore(score + 1);
    }
  }, [youWin]);

  return (
    <div className="card-player">
      {player === currentPlayer && useFor === "play" && (
        <div className="turn-title">Your turn</div>
      )}
      <div
        id={"player-" + player}
        className={cx("player", `${currentPlayer === player && "this-turn"}`)}
      >
        <div className="avatar">
          <img
            alt=""
            src="https://img.freepik.com/free-vector/hand-drawn-side-profile-cartoon-illustration_23-2150517171.jpg"
          />
        </div>
        <div className="name-player">
          <h4>Dat</h4>
          <img alt="" src={shape} />
        </div>
        <div>{score}</div>
      </div>
    </div>
  );
}

export default Player;
