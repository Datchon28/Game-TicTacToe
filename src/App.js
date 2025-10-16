import classNames from "classnames/bind";
import style from "./App.module.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import BigBoard from "./BigBoard";
import GameMain from "./Game";
import ChoiceCharacter from "./ChoiceCharacters";
import InfinityBoard from "./Game/InfinityBoard";

import music from "./assets/music-game/music-game.mp3";
import { useEffect, useRef } from "react";

const cx = classNames.bind(style);

function App() {
  const ref = useRef();

  useEffect(() => {
    const enableAudio = () => {
      if (ref.current) {
        ref.current.muted = false;
        ref.current.play();
      }
    };
    const App = document.getElementById("App-game");
    App.addEventListener("click", enableAudio);
    return () => App.removeEventListener("click", enableAudio);
  }, []);

  return (
    <BrowserRouter>
      <div id="App-game" className={cx("App")}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/game" element={<BigBoard />} /> */}
          <Route path="/game/:id" element={<GameMain />} />
          <Route path="/ready/:id" element={<ChoiceCharacter />} />
          <Route path="/iff" element={<InfinityBoard />} />
        </Routes>
        <audio
          id="music-game"
          ref={ref}
          src={music}
          autoPlay
          loop
          muted
        ></audio>
      </div>
    </BrowserRouter>
  );
}

export default App;
