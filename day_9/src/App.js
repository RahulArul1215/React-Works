import React from 'react';
import Navbar from './Component/Navbar';
import Login from './Component/Login';
import Home from './Component/Home';
import Signup from './Component/Signup';
import { Route,Routes } from 'react-router-dom';
function App() {
  return(
    <>
      <Navbar/>
        <Routes>
          <Route path='/signup' element={<Signup/>}/>          
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
    </>

  );
}

export default App;
