import React from 'react';
import Layout from '../components/Layout.js'


import pic04 from '../assets/Images/4.png'
import pic07 from '../assets/Images/7.png'
import pic08 from '../assets/Images/8.png'
import pic09 from '../assets/Images/9.png'
import pic11 from '../assets/Images/11.png'
import pic12 from '../assets/Images/12.png'
import pic14 from '../assets/Images/13.png'
import pic15 from '../assets/Images/14.png'
import pic16 from '../assets/Images/15.png'
import pic17 from '../assets/Images/16.png'
import pic18 from '../assets/Images/18.png'
import pic19 from '../assets/Images/19.png'
import pic20 from '../assets/Images/98.png'
import pic21 from '../assets/Images/97.png'



const IndexPage = () => (
       <Layout>
          {/* backround image */}
        <div className="xy"></div>
          {/* yellow box image */}
        <div className= "yz"></div>
          {/* small navbar */}
        <div className="n p">
            <ul>
                  <li className = "o"><img src={pic17}  height="18vw" width="auto"  alt="" /></li>
                  <li className = "o"><img src={pic15}  height="18vw" width="auto"  alt="" /></li>
                  <li className = "o"><img src={pic16}  height="18vw" width="auto"  alt="" /></li>
                  <li className = "o q"><img src={pic19}  height="21vw" width="auto"  alt="" /></li>
                  <li className = "o r"><img src={pic18}  height="18vw" width="auto"  alt="" /><p>INFO@NEXUSCORPLTD.AE</p></li>
            </ul>
        </div>
       
        {/* big navbar */}
        <div className ="m">
            <ul>
                  <li>HOME</li>
                  <li>SERVICES</li>
                  <li>PORTFOLIO</li>
                  <li>CLIENTS</li>
                  <li>ABOUT</li>
                  <li>AWARDS</li>
                  <li>CONTACT</li>
                  <li><button>0800 0321770</button></li>
            </ul>
        </div>
        {/* nexus image */}
        <div className = 'c'>
            <div>
                <img src={pic04} alt="" />
            </div> 
        </div>
          
          {/* intro heading */}
            <div className = 'd'>
                <div>
                    <h4>Lets's Talk</h4>
                    <h1>Ideas</h1>
                   
                    <p>Dubai's leading <strong>Digital Agency</strong><br />
                    Just got better</p>
                    <button>GET STARTED</button>
                </div>
            </div>
            <div className = "vr"></div>
        
          
         {/* services background image */}
        <div className= "x"><img src={pic21} alt="" /></div>


  {/* services section */}
  <div className="k">
            {/* services heading */}
            <div className= "i">
                <div className = "j l">
                    <h1>Services</h1>
                    <h3>We Offer</h3>
                    <div className = "u"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipicizing elit, sed do eiusmod tempor incicidunt ut labore et dolore magna allqua.</p>
                    
                </div> 
            <div>
        {/* services box section */}
        <div className ="e">
            
            <div className= "f">
                <img src={pic08}  height="50vw" width="50vw"  alt="" />
                <h6>MOBILE APPLICATION DEVELOPMENT</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipicizing elit, sed do eiusmod tempor. </p>
                <div className = "v"></div>
            </div>
        
            <div className= "f s t">
                < img src={pic07}  height="50vw" width="auto"  alt="" />
                <h6>ENTERPRISE APPLICATION DEVELOPMENT</h6>
                <p>Lorem ipsum dolor sit amet,consectetur adipicizing elit, sed do eiusmod tempor. </p>
                <div className = "v"></div>
            </div>
            
            <div className= "f"> 
                <img src={pic09}  height="50vw" width="auto"  alt="" />
                <h6>BRAND IDENTITY</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipicizing elit, sed do eiusmod tempor. </p>
                <div className = "v"></div>
            </div>
            
            <div className= "f">
                <img src={pic11}    alt="" />
                <h6>IOT <br/>DEVELOPMENT</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipicizing elit, sed do eiusmod tempor. </p>
                <div className = "v"></div>
            </div>
        
            <div className= "f">
                <img src={pic12}  height="50vw" width="auto"  alt="" />
                <h6>BIG DATA<br /> SERVICES</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipicizing elit, sed do eiusmod tempor. </p>
                <div className = "v"></div>
            </div>
        
            <div className= "f"> 
                <img src={pic14}  height="50vw" width="auto"  alt="" />
                <h6>CLOUD SERVICES & SOLUTIONS</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipicizing elit, sed do eiusmod tempor. </p>
                <div className = "v"></div>
            </div>
        
        </div>
    
    </div>
    
        </div>  
        </div>
        {/* arrow button */}
        <button className= "w but"><img src={pic20} alt="" /></button>
      </Layout>
  
);

export default IndexPage;
