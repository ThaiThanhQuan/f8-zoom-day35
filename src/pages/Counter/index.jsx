import { useState } from "react";

import classNames from "classnames/bind";
import styles from './Counter.module.scss'

const cx = classNames.bind(styles)

    function Counter() {
        const [count, setCount]  = useState(0)
                
                return (
                    <div className={cx('wrapper')}>
                        <h1 
                            className = {count > 0 ? cx('positive') : count < 0 ? cx('negative') : cx('zero')}>
                            {count}
                        </h1>
                        <h4 className = {cx("context")}>
                            {count > 0 ? 'Dương' : count < 0 ? 'Âm' : 'Bằng không'}
                        </h4>
                        <div className={cx("container")}>
                            <button onClick = {() => ( setCount(count + 1))} className={cx("increase")}>+</button>
                            <button onClick = {() => ( setCount(count - 1))} className={cx("decrease")}>-</button>
                        </div>
                            <button onClick = {() => ( setCount(0))} className={cx("reset")}>Reset</button>
                    </div>
                )
    }

export default Counter;