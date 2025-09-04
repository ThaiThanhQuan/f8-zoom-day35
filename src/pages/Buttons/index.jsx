import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInbox } from "@fortawesome/free-solid-svg-icons";

import Button from "../../components/Button";
import classNames from "classnames/bind";
import styles from './Buttons.module.scss'

const cx = classNames.bind(styles)
function Buttons() {
    return ( 
        <div className= {cx('wrapper')}>
            <Button size="medium">Click me</Button> 
            <Button primary>Primary Button</Button> 
            <Button href="https://google.com" target="_blank">Go to Google</Button> 
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
            <Button bordered>Bordered</Button>
            <Button rounded>Rounded</Button>
            <Button primary rounded>Primary Rounded</Button>
            <Button onClick={() => alert('Clicked!')}> Click Alert </Button>
            <Button disabled onClick={() => alert('Should not show')}>Disabled Button</Button>
            <Button loading onClick={() => console.log('Should not log')}>Loading Button</Button>
            <Button className="my-custom-class" primary > Custom Styled </Button>
            <Button primary><span><FontAwesomeIcon icon={faInbox}/></span> Send Email</Button>
        </div>
    );
}

export default Buttons;