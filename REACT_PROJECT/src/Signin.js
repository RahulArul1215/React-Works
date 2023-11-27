import './Signin.css';
import {useState} from 'react';
import {UserCircle } from 'lucide-react';
// import {Link, Route,Routes} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Signin = () => {
  const a=useNavigate();
  const [su,setsu] =useState(true);
  const handlesu=()=>{
    setsu(!su)
  }
  const handc1 = () =>{
     a('/');
  }
  return (
   <>
      <div className='body1'>
        {/* <div className='backbank'>
</div> */}
{/* <div className='whole'> */}
       <div className="container">
        <div className="userlog"><UserCircle size={40} color="black" strokeWidth={1} /> <h2 className='h2'>Log In</h2></div>
        <h3 className={su?'loginno':'login'} >Have an Account</h3>
        <form className='form1'>
        <input  type='text' className='uname' placeholder=' Account no'/>
        <input type='password' className='password' placeholder=' password' required/>
        <button className='libutton' onClick={handc1}>Log in</button>
        </form>
        <div className=''></div>
        <button  className={su?'log':'log1'} onClick={handlesu}>Log in</button>
        <div className={su? 'new':'sur'} ></div>
       </div>
       
       <div className="container2">
       <div className="user"><UserCircle size={40} color="black" strokeWidth={1} /> <h2>Sign Up</h2></div>
        <h3 className={su?'create':'createno'} > Create Account</h3>
        <form>
        <input  type='text' className='uname1' placeholder=' Account no'/>
        <input type='password' className='password1' placeholder=' password' required/>
        <input type='password' className='conpassword' placeholder=' confirm password'/>
        <button className='sibutton' onClick={handc1}>Sign up</button>
        </form>
         
        <button  onClick={handlesu} className={su?'sub':'sub1'}>Sign up</button>
        <div className={su?'sur':'sul'} ></div>
       </div>
       {/* </div>    */}
   
      </div>
   </>
  )
}

export default Signin;
