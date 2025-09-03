import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faHouse, faLocationDot } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from './Profile.module.scss'

const cx = classNames.bind(styles)

function Profile() { 
            const[user, setUser] = useState([])
            const[loading, setLoading] = useState(true)

            useEffect(() => {
                fetch('https://jsonplaceholder.typicode.com/users/1')
                .then(res => res.json())
                .then(data => {
                    setUser(data) 
                    setLoading(false)
                })
            }
            ,[])
            return (
                   <div className={cx('container')}>
                        <h1 className={cx('title')}>Profile Card</h1>
                        <img className={cx('avatar')} src ='https://static.vecteezy.com/system/resources/previews/036/280/650/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg' alt="Avatar"/>
                        <p className={cx('name')}>{user.name}</p>
                        <div className={cx('icon-list')}>
                            <FontAwesomeIcon icon={faFacebook} className={cx("social")} />
                            <FontAwesomeIcon icon={faGoogle} className={cx("social")} />
                            <FontAwesomeIcon icon={faInstagram} className={cx("social")} />
                            <FontAwesomeIcon icon={faTwitter} className={cx("social")} />
                        </div>
                        {loading ?  
                        <p className= {cx('loading')}>Đang tải...</p> :  (
                        <div className = {cx('wrapper')}>
                            <div className={cx("content")}>
                                <FontAwesomeIcon icon={faEnvelope}/>
                                <p>Email: {user.email}</p>
                            </div>
                            <div className={cx("content")}>
                                 <FontAwesomeIcon icon={faPhone}/>
                               <p> Phone: {user.phone}</p>
                            </div>
                            <div className={cx("content")}>
                                 <FontAwesomeIcon icon={faHouse}/>
                               <p> Website: {user.website}</p>
                            </div>
                            <div className={cx("content")}>
                                 <FontAwesomeIcon icon={faLocationDot}/>
                                <p>Address: {user?.address?.street}, {user?.address?.city}</p>
                            </div>
                        </div>
                        )}
                        <button className={cx("btn")}>Connect</button>

                   </div>
                   
            )
        }

export default Profile;