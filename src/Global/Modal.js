import classNames from 'classnames/bind'
import style from '../Global'

const cx = classNames.bind(style)

function Modal({ children }) {
    return (
        <div className={cx('modal')}>
            {children}
        </div>
    );
}

export default Modal;