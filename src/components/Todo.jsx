import React, { useState } from 'react';
import './Todo.css'
import moment from 'moment';
import Item from './Item';
function Todo() {
    const [todoList, setTodoList] = useState([]);
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const handleInput = (e) => {
        setTitle(e.target.value);
    }
    const handleCalendar=(e)=>{
        setDate(e.target.value);
    }
    const onSave = () => {
        const date1 = moment(date).format('Do MMM YY')
        const name1 = title;
        setTodoList([...todoList, { id:Math.random(),name: name1, Date: date1, isDone: false }]);
    }
    return (
        <div className='body d-flex'>
            <div className='box form text-center m-auto container'>
                <h1 className='p-3'>What do you need to do </h1>
                <div className='p-4'>
                    <input className='m-2'  type="text" onChange={handleInput} /><br></br>
                    <input type="date" onChange={handleCalendar}/>
                    <button onClick={onSave} className='btn btn-success px-2 ms-2'>add!</button>
                </div>
                <div className='d-flex justify-content-around'>
                    <div className='card p-5'>
                        <p>To-dos</p>
                        <h5>{todoList.length}</h5>
                    </div>
                    <div className='card p-5'>
                        <p>Done Tasks</p>
                        <h5>{todoList.filter((e)=>{
                            return e.isDone === true;
                        }).length}</h5>
                    </div>
                    <div className='card p-5'>
                        <p>Undone Tasks</p>
                        <h5>{todoList.filter((e)=>{
                            return e.isDone === false;
                        }).length}</h5>
                    </div>
                </div>
                <div className='d-flex flex-wrap'>
                    {todoList.map((e,index)=>{
                        return <Item element={e} key={index} list={todoList} setlist={setTodoList}/>
                    })}
                </div>
            </div>
        </div>


    );
}
export default Todo;