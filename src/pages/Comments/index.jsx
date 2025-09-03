import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from './Comments.module.scss'

const cx = classNames.bind(styles)

function Comments() {
            const[comments, setComments] = useState([])
            const[formData, setFormData] = useState({
                name: "",
                email: "",
                body: ""
            })

            useEffect(() => {
                fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
                .then(reps => reps.json())
                .then(data => setComments(data))
            },[])

            const handleChange = (e) => {
                const {name, value} = e.target
                setFormData(prev => (
                    {...prev, 
                        [name]: value
                    }))

            }
            const handleSubmit = (e) => {
                e.preventDefault();
                const newComments = {...formData}
                setComments([newComments, ...comments])
                setFormData({name: "", email: "", body: ""})
            }
           return (
            <div className={cx('wrapper')}>
                <h1 className={cx("header")}>Comments</h1>
                <form onSubmit={handleSubmit} className={cx("comment-form")}>
                    <div className={cx("form-group")}>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <div className={cx("form-group")}>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    </div>

                    <div className={cx("form-group")}>
                    <label>Body:</label>
                    <textarea
                        name="body"
                        required
                        value={formData.body}
                        onChange={handleChange}
                        rows={4}
                    />
                    </div>

                <button className={cx("btn-submit")}>Submit Comment</button>
                </form>
                {comments.map(comment => (
                    <div className={cx("comment")} key={comment.id}>
                        <img className={cx("comment-avatar")} src = "https://ui-avatars.com/api/?name=${name}&background=random" alt='user' />
                            <div className={cx("comment-content")}>
                                <div className={cx("comment-header")}>
                                    <p className={cx("comment-name")}>{comment.name}</p> 
                                    <p className={cx("comment-time")}>2 giờ trước</p> 
                                </div>

                                <p className={cx("comment-email")}>{comment.email}</p> 
                                <p className={cx("comment-body")}>{comment.body}</p>    

                                 <div className={cx("comment-footer")}>
                                    <p className={cx("comment-like")}><FontAwesomeIcon icon={faThumbsUp}/> 255</p>
                                    <p className={cx("comment-reply")}>Reply</p>
                                </div>
                            </div>
                    </div>
                ))}
            </div>
           )
           
        }

export default Comments;