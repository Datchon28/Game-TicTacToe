import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import style from './Home.module.scss';

const cx = classNames.bind(style)

function Home({ onClick }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('title')}>
                    <span className={cx('tic')}>TIC</span>
                    <span className={cx('tac')}>TAC</span>
                    <br />
                    <span className={cx('toe')}>TOE</span>
                </div>
            </div>

            <div className={cx('body')}>
                <Link to="/game">
                    <button className={cx('start-game-btn')}>Start Game</button>
                </Link>
                <button className={cx('setting-btn')}>Settings</button>
            </div>
        </div>
    );
}

export default Home;