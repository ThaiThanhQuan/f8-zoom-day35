import { NavLink } from "react-router";
import classNames from "classnames/bind";
import styles from './Navigation.module.scss'

const cx = classNames.bind(styles)

const getActive = ({isActive}) => cx('app', {active: isActive})


function Navigation() {
    return ( 
        <>
            <h1 className={cx('title')}>Can you choose an app?</h1>
              <nav className={cx('wrapper')}>
                    <NavLink className={getActive} to='/'>Home</NavLink>
                    <NavLink className={getActive} to='/counter'>Counter App</NavLink>
                    <NavLink className={getActive} to='/todo'>Todo List App</NavLink>
                    <NavLink className={getActive} to='/profile'>Profile Card</NavLink>
                    <NavLink className={getActive} to='/products'>Product List</NavLink>
                    <NavLink className={getActive} to='/comments'>Comment System</NavLink>
                    <NavLink className={getActive} to='/weather'>Weather App</NavLink>
                    <NavLink className={getActive} to='/buttons'>Button Components</NavLink>
                </nav>
        </>

     );
}

export default Navigation;