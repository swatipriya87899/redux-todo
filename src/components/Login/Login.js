import React,{useState} from 'react';
import { login } from '../../redux/action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {

    const dispatch = useDispatch();
    const {createAccount} = useSelector(state=>state)

    
    const navigate = useNavigate();

    const [loginCredentials, setLoginCredentials] = useState({
        email:'',
        password:'',
    })

    const handleInput = (e) => {
        const name= e.target.name;
        const value =  e.target.value;
        setLoginCredentials({...loginCredentials, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let isLoggedIn=false;
        //Check for account create or not
        if(createAccount.signupinfo.length>0)
        {
            createAccount.signupinfo.map((user)=>{
                if(user.email=== loginCredentials.email && user.password=== loginCredentials.password){
                isLoggedIn=true;
                dispatch(login(user));
                navigate('/todo');
                }
            })
            if(!isLoggedIn)
            alert("Invalid Credentails")
        }
        else
        alert("Please create an account")
    }


  return (
    <div className='login'>
        <div className='login_title'>To Contine</div> 
        <div className='login_subtitle'>We need name & Email</div>   
        <form onSubmit={handleSubmit}>
        <input type="email" value={loginCredentials.email} name="email" onChange={handleInput} placeholder="Email" autoComplete='off'></input> 
        <input type="text" value={loginCredentials.password} name="password" onChange={handleInput} placeholder="Password" autoComplete='off'></input>
        <button type='submit'>Log In</button>
        </form>
    </div>
  )
}

export default Login