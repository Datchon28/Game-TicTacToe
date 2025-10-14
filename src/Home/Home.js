import { useState, useEffect } from "react";

import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import style from "./Home.module.scss";
import { v4 } from "uuid";

import imageBackground from '../assets/img/background-home.png'

const cx = classNames.bind(style);

function Home({ onClick }) {
   const id = v4();
  const [bgLoaded, setBgLoaded] = useState(false);
  const [bgUrl, setBgUrl] = useState('');

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
    <div style={{ backgroundImage: `url(${bgUrl})` }} className={cx("wrapper")}>
      {!bgLoaded && (
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10
        }}>
          <p>Loading...</p>
        </div>
      )}

      {/* <div className={cx("header")}>
        <div className={cx("title")}>
          <span className={cx("tic")}>TIC</span>
          <span className={cx("tac")}>TAC</span>
          <br />
          <span className={cx("toe")}>TOE</span>
        </div>
      </div> */}

      <div className={cx("body")}>
        <Link to={`/ready/${id}`} className="w-60">
          <button className={cx("start-game-btn")}>Play Offline</button>
        </Link>
        <Link to={`/ready/${id}`} className="w-60">
          <button className={cx("start-game-btn")}>Play Online</button>
        </Link>
        <Link className="w-60">
          <button className={cx("start-game-btn")}>Settings</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
