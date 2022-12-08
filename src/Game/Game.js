import classNames from 'classnames/bind'
import style from './Game.module.scss'

import { createContext, useState } from 'react';
import Board from '../Board/Board'
import CalculatorWinner from  '../CalculatorWinner'
import Modal from '../Global/Modal'
import { Link } from 'react-router-dom';

const cx = classNames.bind(style)
export const Player = createContext()

function Game() {
  const [init, setInit] = useState(Array(9).fill(null))
  const [isX, setIsX] = useState(true)
  const [score, setScore] = useState(0)
  
  const winner = CalculatorWinner(init)

  const handleClick = (index) => {
    const initCopy = [...init]

    if (winner || initCopy[index]) return;

    initCopy[index] = isX ? 'X' : 'O';

    setInit(initCopy)
    setIsX(!isX)
  }

  const handlePlayAgain = () => {
    
  }

  const handleReset = () => {
    const reset = Array(9).fill(null)
    setInit(reset)
  }

  return (
    <Player.Provider value={isX}>
      <div className={cx('Game')}>
       <div className={cx('header')}>
        <div className={cx('back-to-home')}>
            <Link to='/'>
              <button className={cx('back-btn')}>X</button>
            </Link> 
        </div>
          <h1 className={cx('title')}>
            Welcome to <br />
            <span>Tic Tac Toe</span>
          </h1>
       </div>

       <div className={cx('content')}>
        <div className={cx('wrapper-body')}>
          <Board board={init} onClick={handleClick} />
          <div className={cx('turn')}>
            <h4 className={cx('player-1', 'player', !winner && isX && 'my-turn')}>PLAYER : <br />
              <span className={cx('player-1--X')}>X</span>
              <span className={cx('score')}>Score : {winner && isX===false ? score + 1 : score}</span>
            </h4>
            <h4 className={cx('player-2', 'player', !winner && isX === false && 'my-turn')}>PLAYER : <br />
              <span className={cx('player-2--O')}>O</span>
              <span className={cx('score')}>Score : {winner && isX ? score + 1 : score}</span>

            </h4>
          </div>
        </div>
       </div>
      
       <div className={cx('footer')}>
        <h3 className={cx('is-winner')}>Winner is : {winner ? (isX ? 'O' : 'X') : 'Chua co'}</h3>
        <button className={cx('reset-game')} onClick={handleReset}>Reset Game</button>
       </div>

       {/* <Modal className={cx('modal--when-winner')}>
        <h3>Chien thang</h3>
       </Modal> */}
      
      </div>

      
    </Player.Provider>
  );
}

export default Game;
