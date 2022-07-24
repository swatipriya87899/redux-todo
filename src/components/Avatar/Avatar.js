import React from 'react';
import { useSelector } from 'react-redux';
import {CgProfile} from 'react-icons/cg';
import './Avatar.css'

const Avatar = () => {

    //Name for avatar
    const {userProfile} = useSelector(state => state.createAccount)
  
  return (
    <div className='avatar'>
        <div className='avatar_name'>{userProfile.name}</div>
        <CgProfile color= "#9A9A9A" size="1.5rem"/>
    </div>
  )
}

export default Avatar