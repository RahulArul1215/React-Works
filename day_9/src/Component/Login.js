import React from "react";
import { useState } from "react";
import axios from 'axios';

export default function Login(){
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(email)
        console.log(password)
        axios.get(`http://localhost:4000/users?email=${email}&password=${password}`)
        .then(
            res=>{
                if(res.data.length>0){
                    alert('login successful')
                }
                else{
                    alert('invalid info')
                }
            }
        )
    }
    return(
        <div>
            <center><h2>Login Page</h2></center><br/><br/><br/>
                <form onSubmit={handleSubmit}>
                <center>
                <label>Email</label>
                <input type="Email" value={email} onChange={(event)=>{setEmail(event.target.value)}}/><br/><br/>
                <label>Password</label>
                <input type="Password" value={password} onChange={(event)=>{setPassword(event.target.value)}}/><br/><br/>
                <input type="button" onClick={handleSubmit} lable="Submit"/>
                </center>
            </form>
        </div>
    );
}