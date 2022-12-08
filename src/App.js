import classNames from 'classnames/bind'
import style from './App.module.scss'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Game from './Game/Game';
import Home from './Home/Home';

const cx = classNames.bind(style)

function App() {
  
  return (
    <BrowserRouter>
        <div className={cx('App')}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/game' element={<Game />} />
        </Routes>
        </div>
    </BrowserRouter>
    
  );
}

export default App;
