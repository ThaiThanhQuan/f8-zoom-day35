import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({
    primary = false, 
    bordered = false, 
    rounded = false, 
    disabled = false,
    loading = false,
    size = "medium",
    href,
    className,
    onClick,  
    children, 
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps
    }

    if(disabled || loading){
        Object.keys(props).forEach((key) => {
            if(key.startsWith('on')){
                delete props[key]
            }
        })
    }

    if(href){
        props.href = href
        props.className = cx("btn_a")
        Comp = 'a'
    }

    if(loading){
        children = <FontAwesomeIcon icon={faSpinner} className={cx('spinner')}/>
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        bordered,
        rounded,
        [size]: size,
        disabled,
        loading
    })
    return (<Comp className = {classes}  {...props}>
            <span className={cx('title')}>{children}</span>
    </Comp> );
}

Button.prototype = {
    primary: PropTypes.bool,
    bordered: PropTypes.bool,
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    size: PropTypes.string,
    href: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
}

export default Button;