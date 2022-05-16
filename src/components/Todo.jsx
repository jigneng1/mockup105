import React, { useState } from 'react';
import './Todo.css'
import moment from 'moment';

function Todo() {
    const [todoList, setTodoList] = useState([]);
    const [title, setTitle] = useState('');
    const handleInput = (e) => {
        setTitle(e.target.value);
    }
    const onSave = () => {
        const date = moment(new Date()).format('MMM Do YY')
        const name1 = title;
        setTodoList([...todoList, { name: name1, Date: date, isDone: false }]);
    }
    const renderTodo = todoList.map((e) => {
        return <div className='card w-30 m-2'>
            <div class="card-body">
                <h5 className="card-title">{e.name}</h5>
                <span className="card-text px-5">{e.Date}</span>
                <input type='checkbox' />
            </div>
        </div>
    })


    return (
        <div className='body'>
            <div className='box form text-center container'>
                <h1>What do you need to do </h1>
                <div >
                    <input type="text" onChange={handleInput} />
                    <button onClick={onSave} className='btn btn-success px-2 ms-2'>add!</button>
                </div>
                <div className='d-flex justify-content-around'>
                    <div className='card p-5'>
                        <p>To-dos</p>
                        <h5>{todoList.length}</h5>
                    </div>
                    <div className='card p-5'>
                        <p>Done Tasks</p>
                        <h5>4</h5>
                    </div>
                    <div className='card p-5'>
                        <p>Undone Tasks</p>
                        <h5>6</h5>
                    </div>
                </div>
                <div className='d-flex flex-wrap'>
                    {renderTodo}
                </div>
            </div>
        </div>


    );
}
export default Todo;