import React, {useState} from "react";
import { useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { addTodo } from "../../redux/action";
import { addProgressTodo } from "../../redux/action";
import { addCompletedTodo } from "../../redux/action";
import Avatar from "../Avatar/Avatar";
import Searchbox from "../Searchbox/Searchbox";
import Sidebar from "../Sidebar/Sidebar";
import avatar_group from "./../../images/avatar_group.png";
import Todos from "../Todos/Todos";
import "./TodoPage.css";

const TodoPage = () => {
  const {todo, inProgressTodo, completedTodo} = useSelector(state => state.todos);

 
  const [todos, setTodos] = useState({
    title:"",
    body:""
  });
 

  //add Todo
  const dispatch = useDispatch();

  //Adding Todo
  const addTodoHandler = () => {
    dispatch(addTodo(todos))
  }
  

  //Adding Progress Todo
  const addProgressTodoHandler = () => {
    dispatch(addProgressTodo(todos))
  }

  //Adding Completed Todo
  const addCompletedTodoHandler = () => {
    dispatch(addCompletedTodo(todos))
  }


  const handleInput = (name, value) => {
    setTodos({...todos, [name]:value});
    {console.log(todos)}
  //  dispatch(addTodo(todos))
  }


  return (
    <div className="todoPage">
      <Sidebar></Sidebar>
      <div className="todo_details">
        <div className="todo_header">
          <Searchbox></Searchbox>
          <div className="avatar_group">
            <img src={avatar_group}></img>
          </div>
          <Avatar></Avatar>
        </div>
        <div className="project_heading">Project</div>
        <div className="todo_status">
          <Todos todo_title="To do" list={todo} add_todo={addTodoHandler} handleInput={handleInput}></Todos>
          <Todos todo_title="In Progress" list={inProgressTodo} add_todo={addProgressTodoHandler} handleInput={handleInput}></Todos>
          <Todos todo_title="Completed" list={completedTodo} add_todo={addCompletedTodoHandler} handleInput={handleInput}></Todos>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
