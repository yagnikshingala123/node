import React, { useState } from 'react'
import axios from "axios";

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    function createPost() {
        axios
          .post(process.env.REACT_APP_API_KEY + "/register", {
            name:name,
            email: email,
            password: password,
            cpassword:confirmPassword
          })
          .then((response) => {
            console.log(response);
          });
      }
    
    //   if (!post) return "No post!"
    return (
        <div className='register'>
            <h1>Register</h1>
            <label>Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className='inputBox' type='text' placeholder='Enter Name' />
            <label>Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className='inputBox' type='text' placeholder='Enter Email' />
            <label>Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} className='inputBox' type='password' placeholder='Enter Password' />
            <label>Confirm Password</label>
            <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className='inputBox' type='password' placeholder='Enter Password' />
            <button onClick={createPost} className='appButton' type='button'>Sign Up</button>
        </div>
    )
}

export default SignUp