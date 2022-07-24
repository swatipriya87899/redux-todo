import React from 'react';
import './Searchbox.css';
import {BiSearch} from 'react-icons/bi'

const Searchbox = () => {
  return (
    <div className='search_box'>
        <BiSearch className='search_icon' size="1.3rem"/>
        <input type="text" placeholder="Search" className='search_bar'></input>
    </div>
  )
}

export default Searchbox