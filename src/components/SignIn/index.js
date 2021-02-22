import React from 'react';
import './style.css';
import { BiUserCircle } from 'react-icons/bi';

const signIn = () => {
    return (
        <div className='box'>
            <form className='form'>
                <BiUserCircle className='user_icon'/>
                <label className='iconText'>Sign in</label>
                <input type="username" className='username' placeholder='Username'/>
                <input type="password" className='password' placeholder='Password'/>
                <button className='sign_in_btn'>Sign in</button>
            </form>
        </div>
    )
}

export default signIn