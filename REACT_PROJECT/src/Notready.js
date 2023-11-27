import React from 'react';
import './Notready.css';
import { useNavigate } from 'react-router-dom';
export const Notready = () => {
  const vv=useNavigate();
  const handclick69 = () => {
      vv('/')
  }
  return (
    <>
    <div className='Bod'><h1>Server Under Maintanence</h1>
    <div className='click-div'>
    <h3><button className='click-but' onClick={handclick69}>Click here </button> to go back</h3>
    </div>
    </div>
    </>
  )
}
