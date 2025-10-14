import classNames from "classnames/bind";
import style from "../../../../Global/GlobalStyle.scss";

const cx = classNames.bind(style);

function HeaderGame({
  player,
  avarPlayer1,
  avarPlayer2,
  shapePlayer,
  timeTurn,
}) {
  return (
    <div
      className={cx("header-game py-3 px-4 flex justify-between items-center")}
      style={{ backgroundColor: "rgba(0,0,0,0.35)" }}
    >
      <div className="player-info flex">
        <div className={`avatar ${player === 1 && 'border-[0.175rem] border-solid border-emerald-500'}`}>
          <img alt="avatar" src={avarPlayer1} />
        </div>
        <div className="mt-0 pl-2">
          <h4 className="font-semibold text-base text-white">Người chơi 1</h4>
          <div className="text-white flex items-center gap-2 ">
            <img
              alt="shape"
              src={shapePlayer.shapePlayer1.character}
              className=" max-w-7 pt-1"
            />
             <span className={`bg-[#1dab1d] p-[0.15rem] text-xs rounded-sm ${player === 2 && "opacity-0"}`}>Your turn</span>
          </div>
        </div>
      </div>
      <div className="score-time text-white flex items-center gap-3">
        <p
          className={`time text-xl font-medium ${
            timeTurn <= 10 ? "text-red-500" : "text-green-500"
          } ${player === 2 && "opacity-0"} ${timeTurn === null && "opacity-0"}`}
        >
          {timeTurn + "s"}
        </p>
        <div className="score text-2xl bg-[#e98c29] rounded-md p-2 ">
          <span>0</span>
          <span className="px-3">-</span>
          <span>0</span>
        </div>
        <p
          className={`time text-xl font-medium ${
            timeTurn <= 10 ? "text-red-500" : "text-green-500"
          } ${player === 1 && "opacity-0"} ${timeTurn === null && "opacity-0"}`}
        >
          {timeTurn + "s"}
        </p>
      </div>
      <div className="player-info flex">
        <div className="mt-0 pr-2">
          <h4 className="font-semibold text-base text-white">Người chơi 2</h4>
          <div className="text-white flex items-center gap-2 ">
            <span className={`bg-[#1dab1d] p-[0.15rem] text-xs rounded-sm ${player === 1 && "opacity-0"}`}>Your turn</span>
            <img
              alt="shape"
              src={shapePlayer.shapePlayer2.character}
              className=" max-w-7 pt-1 float-right"
            />
          </div>
        </div>
        <div className={`avatar ${player === 2 && 'border-[0.175rem] border-solid border-emerald-500'}`}>
          <img alt="avatar" src={avarPlayer2} />
        </div>
      </div>
    </div>
  );
}

export default HeaderGame;
