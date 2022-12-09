import classNames from 'classnames/bind'
import style from './Game.module.scss'

import { createContext, useRef, useState } from 'react';
import Board from '../Board/Board'
import CalculatorWinner from  '../CalculatorWinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '../Global/Modal'
import { Link } from 'react-router-dom';
import { faCheck, faHouse, faPencil } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style)
export const Player = createContext()

function Game() {
  const name1Ref = useRef()
  const name2Ref = useRef()
  const [init, setInit] = useState(Array(9).fill(null))
  const [isX, setIsX] = useState(true)
  const [score, setScore] = useState(0)
  

  // Condition For Winner
  
  const winner = CalculatorWinner(init)

  const handleClick = (index) => {
    const initCopy = [...init]

    if (winner || initCopy[index]) return;

    initCopy[index] = isX ? 'X' : 'O';

    setInit(initCopy)
    setIsX(!isX)
  }


  // Handle Change Name Player
  const [changeNameBtn1, setChangeNameBtn1] = useState(false)
  const [changeNameBtn2, setChangeNameBtn2] = useState(false)
  const [name1, setName1] = useState('')
  const [name2, setName2] = useState('')

  const handleChangeName1 = () => {
    setChangeNameBtn1(!changeNameBtn1)
  }

  const handleChangeName2 = () => {
    setChangeNameBtn2(!changeNameBtn2)
  }

  const textName1 = (e) => {
    const value = e.target.value
    setName1(value)
  }

  const textName2 = (e) => {
    const value = e.target.value
    setName2(value)
  }



  // Reset Game
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
              <button className={cx('back-btn')}><FontAwesomeIcon icon={faHouse} /></button>
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
            <h4 className={cx('player-1', 'player', !winner && isX && 'my-turn')}>
              <div className={cx('name-player')}>
              {changeNameBtn1 ? 
                <input ref={name1Ref} className={cx('input-name')} value={name1} onChange={textName1} /> 
              : 
                <span className={cx('name')}>{name1 === '' ? 'Player 1' : name1}</span>
              }
                <button onClick={handleChangeName1} className={cx('change-name')}>{changeNameBtn1 ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faPencil} />}</button>
                <br />
              </div>
              
              <span className={cx('player-1--X')}>X</span>
              <span className={cx('score')}>Score : {winner && isX===false ? score + 1 : score}</span>
            </h4>

            <h4 className={cx('player-2', 'player', !winner && isX === false && 'my-turn')}>
              <div className={cx('name-player')}>
                {changeNameBtn2 ? 
                  <input ref={name2Ref} className={cx('input-name')} value={name2} onChange={textName2} /> 
                : 
                  <span className={cx('name')} >{name2 === '' ? 'Player 2' : name2}</span>
                }
                <button onClick={handleChangeName2} className={cx('change-name')}>{changeNameBtn2 ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faPencil} />}</button>
                <br />
              </div>
              
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
