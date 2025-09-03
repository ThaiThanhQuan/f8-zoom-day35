import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from './Products.module.scss'

const cx = classNames.bind(styles)

function Products() {
            
            const[posts, setPosts] = useState([])
            const[loading, setLoading] = useState(true)
            const [selectedPost, setSelectedPost] = useState({});
            const[open, setOpen]= useState(false)

            useEffect(() => {
                fetch('https://jsonplaceholder.typicode.com/posts?_limit=12')
                .then(reps => reps.json())
                .then(data => {
                    setPosts(data)
                    setLoading(false)
                })
            },[])

             const upper = ((title)=> {
                return title.charAt(0).toUpperCase() + title.slice(1)
            })

            const cutText = ((text) => {
                if(text.length > 100){
                    return text.substring(0,100) + '...'
                }
            })
            const showModal = ((id) => {
                const post = posts.find(post => post.id === id);
                 if (post) {
                     setOpen(true)
                     setSelectedPost(post)
                }
                
            })
            const hideModal = (() => {
                setOpen(false)
                setSelectedPost({})
            })

            return(
               <div className={cx('wrapper')}>
                   <div>
                        <h1 className={cx("header")}>PRODUCT LIST</h1>
                       { loading ? <p className={cx('loading')}>Đang tải...</p> : (
                            posts.map(post => (
                                <ul key={post.id} className={cx("content")}>
                                    <div className={cx("content-header")}>
                                        <li className={cx("content-id")}>{post.id}</li>
                                        <li className={cx("content-title")}>{upper(post.title)}</li>
                                    </div>
                                   <div className={cx("content-footer")}>
                                        <li className={cx("content-body")}>{cutText(post.body)}</li>
                                        <button className={cx("btn")} onClick = {() => showModal(post.id)}>Xem chi tiết</button>
                                   </div>
                                </ul>
                            )))}
                    </div>

                    <div className={cx("modal", { open })}>
                        <div className={cx("modal-container")}>
                            <header className={cx("modal-header")}>
                               <p className={cx("modal-header-title")}> POST INFORMATION</p>
                                <FontAwesomeIcon icon={faCircleXmark} className={cx("modal-close")} onClick = {() => hideModal()}/>
                            </header>
                            

                            <div className={cx("modal-body")}>
                                {selectedPost && (
                                    <ul className={cx("content-modal")}>
                                        <div className={cx("content-modal-header")}>
                                        <li className={cx("content-modal-id")}>{selectedPost.id}</li>
                                        <li className={cx("content-modal-title")}>{selectedPost.title}</li>
                                        </div>
                                        <div className={cx("content-modal-body")}>
                                            <li className={cx("content-modal-body-text")}>{selectedPost.body}</li>
                                        </div>
                                    </ul>
                                )}
                            </div>

                            <footer className={cx("modal-footer")}>
                                <button className={cx("modal-btn")} onClick = {() => hideModal()}>Close</button>
                            </footer>
                        </div>
                    </div>
               </div>
                
            )
        }
export default Products;