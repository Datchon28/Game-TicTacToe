import classNames from 'classnames/bind'
import Cell from '../Cell/Cell';
import style from './Board.module.scss'

const cx = classNames.bind(style)


function Board({ board, onClick }) {
        

    return (
        <div className={cx('board')}>
            {board.map((item, index) => (
                <Cell value={item} key={index} onClick={() => onClick(index)} />
            ))}
        </div>
    );
}

export default Board;