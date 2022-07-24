import React,{useState} from 'react'
import { signup } from '../../redux/action';
import { useDispatch } from 'react-redux';
import './Signup.css'

const Signup = ({showSignUp}) => {

    //For Sending data to redux
    const dispatch = useDispatch();

    //Storing new user data
    const [signupData, setSignupData] = useState({
        name:'',
        email:'',
        password:'', 
    })

    //On Filling the Data 
    const handleInput = (e) => {
         const name = e.target.name;
         const value = e.target.value;
         setSignupData({...signupData, [name]: value})
    }

    //On Sending Request For Signup
    const handleSubmit= (e) => {
        e.preventDefault();
        dispatch(signup(signupData))
        showSignUp(false)
    }

    
    
  return (
    <div className='signin'>
        <form action='' onSubmit={handleSubmit}>
            <input type="text" value={signupData.name} name="name" placeholder="Full Name" onChange={handleInput} required autoComplete="off"></input>
            <input type="email" value={signupData.email} name="email" placeholder="Email" onChange={handleInput} required autoComplete="off"></input>
            <input type="text" value={signupData.password} name="password" placeholder="Password" onChange={handleInput} required autoComplete="off"></input>
            <button type='"submit'>Signup</button>
        </form>
    </div>
  )
}

export default Signup