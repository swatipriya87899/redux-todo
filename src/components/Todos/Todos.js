import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import {GrFormAdd} from 'react-icons/gr';
import avatar  from './../../images/avatar.png'
import './Todos.css';

const Todos = ({todo_title, list, add_todo, handleInput}) => {


  const changeHandle = (e) => {
    const name= e.target.name;
    const value= e.target.value;
    handleInput(name, value);
  }



  return (
      <div className='todo_box'>
        <div className='todo_title'>{todo_title}</div>
        <div className='add_button' onClick={add_todo}><GrFormAdd></GrFormAdd></div>
        <div className='all_todos'>
          {list &&
            list.map((todo)=> {
              return(
                <div className='todo_card'>
                  <input className='todo_card_title' value={todo.title} placeholder='Give your task a title' onChange={changeHandle} name="title"></input>
                  <textarea className='todo_card_body' value={todo.description} placeholder='Description...' onChange={changeHandle} name="body" ></textarea>
                  <div className='todo_avatar'><img src={avatar}></img></div>
                </div>
              )
            })
          }
        </div>
      </div>
  )
}

export default Todos