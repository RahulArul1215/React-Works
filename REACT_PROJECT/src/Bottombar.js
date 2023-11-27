import React from 'react';
import { TextField, Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Bottom.css';

export default function Bottombar() {
  const Insta = () => {
        return ()=>{
          <a href='#'>hi </a>
        }
  }
  return (
    <>
    <div className='body99'>
    <div className="container_99">
      <div className="subs99">
        <div className="text_199">
          <div>
            <h1 className="h1-199">Subscribe to Receive<br />Latest Updates</h1>
          </div>
        </div>
        <div className="txt-box99">
          <TextField
            sx={{ backgroundColor: '#f9533a',height:'55px', width: '110%', marginBottom: '10px' }}
            placeholder="Your Email"
            />
          <Button
            type="button"
            variant="contained"
            color="success"
            sx={{ backgroundColor: '#18091b', height: '60px' }}
            >
            Subscribe Now
          </Button>
        </div>
      </div>
      <div className="bott99">
        {/* <div style={{justifyContent:'center',alignItems:'center' ,display:'flex', flexDirection:'column'}}> */}
        <div className="social-icons99">
          <InstagramIcon onCLick = {Insta} className="insta99" />
          <TwitterIcon className="twit99" />
          <FacebookIcon className="fb99" />
        </div>
        <div className="explore-section99">
          <h1 className="exp-h99">Explore</h1>
          <ul className="ul99">
            <li className="exp99">About us</li>
            <li className="exp99">Testimonials</li>
            <li className="exp99">Careers</li>
            <li className="exp99">Career Detail</li>
            <li className="exp99">Faq’s</li>
          </ul>
        </div>
        {/* </div> */}
        <div className="useful-links99">
          <h1 className="use-li99">Useful Links</h1>
          <ul className="ul-299">
            <li className="exp99">Credit Card</li>
            <li className="exp99">Saving Account</li>
            <li className="exp99">Apply for Loans</li>
            <li className="exp99">Mobile Application</li>
          </ul>
        </div>
        <p className="para-199">Copyright &copy; under the act of 1996</p>
      </div>
    </div>
    </div>
  </>
  );
}