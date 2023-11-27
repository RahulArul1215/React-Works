import React from 'react'
import './About.css';
// import { Button } from '@mui/material';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
export default function About() {
  return (
    <div className='body69'>
        {/* <div className='contain69'> */}
            <div className='img69'>
               <h1 className='h169-1'>Brief but brilliant history</h1>
               <ArrowCircleDownIcon sx={{width:'40px',height:'40px'}} className='Arrow69'/>
            </div>
        {/* </div> */}
        {/* <div className='contain69-2'>
            <div className='chan69'>
                <h1 className='h169-2'>Changing the way Britain banks</h1></div>
                <div className='para69-1'>
                        <p className='p69-01'>We’ve built a different kind of high street bank. A bank with stores that are open when it suits you, where you can walk in without an appointment and leave with a working account, debit card and all. A bank that tells you exactly what you’re getting, in language that actually makes sense. A bank that puts you first.</p>
                </div>
        </div> */}
        <div className='tags69'>
            <div className='firtag69-1'>
                <div className='img69-1'>
                   <img className='imgcon69' alt = 'poda dei' src='https://www.metrobankonline.co.uk/globalassets/balloons-red.png?width=185&format=webp&quality=85'></img>
                    <h3 className='h369-1'>Committed to customer service</h3>
                    <p className='para69-02'>We are committed to providing you with unparalleled levels of service and convenience. This is why our stores are open early 'til late. We offer a super-quick account opening, on the spot card printing as well as a 24/7 London-based contact centre.</p>
                </div>
            </div>
            <div className='firtag69-2'>
              <img className='imgcon69-2' alt = 'poda dei' src='https://www.metrobankonline.co.uk/globalassets/mpin_shirt.png?width=185&format=webp&quality=85'></img>
                <h3 className='h369-2'>Bringing personal service back to banking</h3>
                <p className='para69-03'>We’re here to help, just walk in at a time that’s right for you – no need to book an appointment. See our</p>
                <p><a href='/' className='anch69-1'>store opening hours.</a></p>    
            </div>
            <div className='firtag69-3'>
              <img className='imgcon69-3' alt = 'poda dei' src='https://www.metrobankonline.co.uk/globalassets/metro-man-red.png?width=185&format=webp&quality=85'></img>
                <h3 className='h369-3'>Banking. But better</h3>
                <p className='para69-04'>We keep our products simple and we do the same for our rates and charges, so you’ll always know exactly what you’re getting. No more nasty surprises in the small print.</p>
            </div>
        </div>
        {/* <div className='bottom69'> */}
        {/* <div className='awards-section'>
        <h2 className='awards-heading'>Award-winning service</h2>
        <img src='https://www.metrobankonline.co.uk/globalassets/illustrations/moneywise_logo-4.png?width=120&format=webp&quality=85' alt='moneywise' className='img69-01'></img>
        <img src='https://www.metrobankonline.co.uk/globalassets/illustrations/moneywise_logo-4.png?width=120&format=webp&quality=85' alt='moneywise' className='img69-02'></img>
        <p className='awards-description-1'>
          Most Trusted Financial Provider (highly commended) <br />
          2018 Best Current Account provider
        </p>
        <Button variant="outlined" sx={{height:'40px',width:'200px', ":hover":{backgroundColor:'rgb(86, 86, 234)'}}} className='Button-1'>All our rewards</Button>
        <p className='awards-description-2'>
        2018 Best Current Account<br/>provider
        </p>
        <Button variant="outlined" sx={{height:'40px',width:'200px', ":hover":{backgroundColor:'rgb(86, 86, 234)'}}} className='Button-2'>All our rewards</Button>
      </div>
    </div> */}
      </div>
  );
}