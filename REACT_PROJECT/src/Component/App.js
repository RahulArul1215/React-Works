import React from "react";
import Signin from "../Signin";
// import Page from "../Page";
import Page from "../Page";
// import About from "../About";
import { Notready } from "../Notready";
// import Bottombar from "../Bottombar";
import './App.css'
import {Routes ,Route} from "react-router-dom";
const App =()=>{
    return(
        <>
            <Routes>
                <Route path="/" element={<Page/>}/>
              <Route path='/Sign_in' element={<Signin/>}> </Route>
              <Route path='/About_in' element={<Notready/>}></Route>
              <Route path='/About_in1' element={<Notready/>}></Route>
              <Route path='/About_in2' element={<Notready/>}></Route>
              <Route path='/About_in3' element={<Notready/>}></Route>
            </Routes>
        </>
    )
}
export default App;