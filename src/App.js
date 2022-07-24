import React from 'react';
import './App.css';
import { Route, Routes } from "react-router";
import CheckInBox from './components/CheckInBox/CheckInBox';
import { useSelector } from 'react-redux/';
import TodoPage from './components/TodoPage/TodoPage';

const App = () => {
  const {login} = useSelector(state => state.createAccount)


  return (
    <div>
      {/* {!login ? <TodoPage/> : <div  className='center'><CheckInBox/></div>} */}
      <Routes>
      <Route path="/" element={<CheckInBox />} />
      <Route path="/login" element={<CheckInBox />} />
      <Route path="/todo" element={<TodoPage/>} />
    </Routes>
    </div>
  )
}

export default App