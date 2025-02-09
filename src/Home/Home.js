import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import style from "./Home.module.scss";
import { v4 } from "uuid";

const cx = classNames.bind(style);

function Home({ onClick }) {
  const id = v4();
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <div className={cx("title")}>
          <span className={cx("tic")}>TIC</span>
          <span className={cx("tac")}>TAC</span>
          <br />
          <span className={cx("toe")}>TOE</span>
        </div>
      </div>

      <div className={cx("body")}>
        <Link to={`/ready/${id}`}>
          <button className={cx("start-game-btn")}>Play Offline</button>
        </Link>
        <Link to={`/ready/${id}`}>
          <button className={cx("start-game-btn")}>Play Online</button>
        </Link>
        <button className={cx("setting-btn")}>Settings</button>
      </div>
    </div>
  );
}

export default Home;
