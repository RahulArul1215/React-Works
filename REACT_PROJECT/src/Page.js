import React from 'react'
import './Page.css'
import {CreditCard,TabletSmartphone,BookLock,Landmark} from 'lucide-react'
import MiniStatement from './Bot'
import Bottombar from './Bottombar'
import { useNavigate } from 'react-router-dom'
import Contone from './Rahul'
import { useState } from 'react'
// import { Bot } from 'lucide-react'
// import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
// import Signin from './Signin'
// import projectvideo from './projectvideo.mp4'
export const Page = () => {
  const [log_1,log_no] = useState(true);

  const a = useNavigate();
   const bb=useNavigate();
   const handchange=()=>{
   a('/Sign_in');
   log_no(!log_1);
   };
   const handabout=()=>{
      bb('/About_in');
   };
  return (
    <>
    <div className='body77'>
    <div className='nav'>
      <div className='blacktop'><h1 className='markf'>Big dreams, bright future – banking with vision at our zone</h1></div>
      <div className='redbox'></div>
      <div className="tri"></div>
      <div className="trib"></div>
      <div className='navigation'>
        <button className="nb">Home</button>
        <button className="nb" onClick={handabout}>About</button>
        <button className="nb" onClick={handabout}>Services</button>
        <button className="nb" onClick={handabout}>Page</button>
        <button className="nb" onClick={handabout}>Contact</button>
        <input className='login77' onClick={handchange} type="button" value="Log In"/>
      </div>
    </div>
      <div className='bodybo'>
        <div className='video'></div>
     <h1 className='abc1'>Open Current </h1> <h1 className='abc2'>Account</h1>
    <h1 className='abc3'> Online</h1>
        </div>
    <div className='Rahul'><Contone/></div>
    <div className='bot'><MiniStatement/></div>
     <div className='botdis'><h1>24/7 assisted with Chat Bot</h1></div>
    </div>
      <div className='ourservice'>
     <h1 className='servtxt'> OUR SERVICES </h1>
     <h1 className='servt'>Online Banking at Your Fingertips</h1>
      <div className="box887">
      <Landmark className='icon1887' size={38} />
        <center>
            <h3 className='h3887'><center>
All Bank Account</center></h3>
        </center>
            <p className='p887'></p>
          <div className="hover-content887"></div>
    </div>
      <div className="box887">
      <BookLock className='icon1887' size={38} />
        <center>
            <h3 className='h3887'><center>Private Banking</center></h3>
        </center>
            <p className='p887'></p>
          <div className="hover-content887"></div>
    </div>
      <div className="box887">
        <TabletSmartphone className='icon1887'size={38} />
        <center>
            <h3 className='h3887'><center>
Mobile & Web Banking</center></h3>
        </center>
            <p className='p887'></p>
          <div className="hover-content887"></div>
    </div>
      <div className="box887">
               <CreditCard className='icon1887' size={38} />
        <center> 
            <h3 className='h3887'><center>
Fixed Term Accounts</center></h3>
        </center>
            <p className='p887'></p>
          <div className="hover-content887"></div>
    </div>
      </div>
    <footer className='footer'><Bottombar/></footer>
    </>
  )
}
export default Page;





