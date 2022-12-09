import classNames from 'classnames/bind'
import style from './Cell.module.scss'

import { useContext } from 'react';
import { Player } from '../Game/Game';

const cx = classNames.bind(style)

function Cell({ value, onClick }) {
    const { isX } = useContext(Player)
    return (
        <button className={cx('cell')} onClick={onClick}><span className={cx('value', value === 'X' ? 'this-is-X' : 'this-is-O')}>{value}</span></button>
    );
}

export default Cell;