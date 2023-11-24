import React from "react";
import { useState } from "react";
import axios from 'axios';
export default function Signup(){
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post(`http://localhost:4000/users`,
        {
            name,email,password
        }
        )
        .then(
            res=>{
                console.log(res)
            }
        )
        .catch(
            err=>{
                console.log(err)
            }
        )

    }
    return(
        <div>
            <center><h2>Login Page</h2></center><br/><br/><br/>
                <form onSubmit={handleSubmit}>
                <center>
                <label>Name</label>
                <input type="text" value={name} onChange={(event)=>{setName(event.target.value)}}/><br/><br/>
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