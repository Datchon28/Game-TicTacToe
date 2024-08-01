import classNames from "classnames/bind";
import style from "./App.module.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import BigBoard from "./BigBoard";
import GameMain from "./Game";

const cx = classNames.bind(style);

function App() {
  return (
    <BrowserRouter>
      <div className={cx("App")}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/game" element={<BigBoard />} /> */}
          <Route path="/game" element={<GameMain />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
