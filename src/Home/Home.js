import { useState, useEffect } from "react";

import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import style from "./Home.module.scss";
import { v4 } from "uuid";

import imageBackground from "../assets/img/background-home.png";
import SettingModal from "./components/SettingModal";

const cx = classNames.bind(style);

function Home({ onClick }) {
  const id = v4();
  const [bgLoaded, setBgLoaded] = useState(false);
  const [bgUrl, setBgUrl] = useState("");
  const [isOpenSetting, setIsOpenSetting] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imageBackground;
    img.onload = () => {
      setBgUrl(img.src);
      setTimeout(() => {
        setBgLoaded(true);
      }, 200);
    };
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${bgUrl})` }}
      className={cx(
        "wrapper w-full h-full flex flex-col items-center bg-cover bg-no-repeat bg-center max-lg:bg-bottom"
      )}
    >
      {!bgLoaded && (
        <div className=" absolute bg-white flex items-center justify-center z-10 inset-0">
          <p>Loading...</p>
        </div>
      )}

      <div className={cx("header")}>
        <div className={cx("title")}>
          <h1 className="px-20">
            <span className={cx("tic")}>TIC</span>{" "}
            <span className={cx("tac")}>TAC</span>{" "}
            <span className={cx("toe")}>TOE</span>
          </h1>
        </div>
      </div>

      <div className={cx("body flex-1 flex items-center justify-center")}>
        <div className="button-game-home h-full flex items-center justify-center flex-col">
          <Link to={`/ready/${id}`} className="w-60">
            <button className={cx("start-game-btn")}>Play Offline</button>
          </Link>
          <Link to={`/ready/${id}`} className="w-60">
            <button className={cx("start-game-btn")}>Play Online</button>
          </Link>
          <Link className="w-60">
            <button
              className={cx("start-game-btn")}
              onClick={() => setIsOpenSetting(true)}
            >
              Settings
            </button>
          </Link>
        </div>
      </div>

      <SettingModal
        isOpenModal={isOpenSetting}
        onSave={() => setIsOpenSetting(!isOpenSetting)}
      />
    </div>
  );
}

export default Home;
