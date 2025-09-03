import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";

import classNames from "classnames/bind";
import styles from './Todo.module.scss'

const cx = classNames.bind(styles)

    let uniqId = 0;

    function Todo() {
        const [inputValue, setInputValue] = useState('');
        const [todos, setTodos] = useState([]);

        const handleInputChange = (e) => {
            setInputValue(e.target.value); 
        };

        const handleSubmit = (e) => {
            e.preventDefault(); 
            if (inputValue.trim()) {
                setTodos([...todos, { id: ++uniqId, text: inputValue,
                    completed: false }]);
                setInputValue(''); 
            }
        }

        const handleDelete = (id) => {
            setTodos(todos.filter(todo => todo.id != id))
        }

        const handleCheck = (id) => {
            setTodos(
                todos.map(todo => 
                    todo.id === id 
                    ? {...todo, completed: !todo.completed}
                    : todo
            ))
        }

        return (
            <div className= {cx("container")}>
                <h1 className = {cx("title")}>TODO LIST</h1>
                <form onSubmit={handleSubmit}>
                    <div className = {cx("input_wrapper")}>
                        <input
                            className= {cx("input_box")}
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Nhập task mới..."
                        />
                        <button 
                            type="submit" 
                            className={cx( "btn")}>Thêm
                        </button>
                    </div>

                    <ul className= {cx("todo_list")}>
                    {todos.length > 0  ? (todos.map(todo => (
                        <li key={todo.id}> 
                            <span className= {`${cx('text')} ${todo.completed ? cx('dash') : ''}`} > 
                                    {todo.text} 
                            </span>
                            <div className= {cx("actions")}>
                               <FontAwesomeIcon icon={faTrash} className={cx("btn_delete")}  onClick = {() => handleDelete(todo.id)}/>
                                <input 
                                    className= {cx("btn_check")}
                                    type="checkbox" onClick = {() => handleCheck(todo.id)}/>
                            </div>
                        </li>)))
                        : <p className= {cx('no_text')}>Chưa có task nào. Hãy thêm task đầu tiên!</p>
                    }  
                    </ul>

                        <div className={cx("stats")}>
                        <h4 className= {cx('text')}>Thống kê </h4>
                        <span className= {cx('text')}>Tổng: {todos.length}</span>
                        <span className= {cx('text')}> Hoàn thành: {todos.filter(todo => todo.completed).length} </span>
                        <span className= {cx('text')}> Còn lại: {todos.filter(todo => !todo.completed).length}</span>
                    </div>
                </form>
            </div>

        )
    }

export default Todo;