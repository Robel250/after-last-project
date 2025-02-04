import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom'
import { enqueueSnackbar, useSnackbar } from 'notistack'


const Login = () => {
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const navigate=useNavigate();
    const {enqueueSnackbar}=useSnackbar();
    const handleLogin=()=>{
      axios
      .post('https://after-last-projectbackend.onrender.com/user/signin',{email,password})
      .then(response=>{
        const {email}=response.data;
        console.log('Username:',email);
        localStorage.setItem('token',response.data.token);
        localStorage.setItem('user',response.data.email)
        enqueueSnackbar('Login successful',{variant:'success'});
        navigate('/home',{state:{email}});
      })
      .catch(error=>{
        enqueueSnackbar('Login failed',{ variant:'error'});
        console.log(error);
      });
    };
  return (
    <div className='p-4'>
      <h1 className='mx-4 my-4'>signin </h1>
      <div className='p-4'>
        <div className='my-4'>
          <label className='mx-3 mr-4'>Email</label>
          <input type="text"
                  value={email}
                  onChange={e=>setemail(e.target.value)} 
                  className='px-4 py-2'/>
        </div>
        <div className='my-4'>
          <label className='mx-3 mr-4'>Password</label>
          <input type="text"
                 value={password}
                 onChange={e=>setpassword(e.target.value)} 
                 className='px-4 py-2'/>

        </div>
        <button className='btn btn-primary mx-4 my-2 p-2' style={{width:300}} onClick={handleLogin}>sign in</button>
        <div>
          <p className='mx-4'>Don't have an account <Link to='/signup'>Sign up</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login
