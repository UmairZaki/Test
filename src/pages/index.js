import React from 'react';
import Layout from '../components/Layout.js'


import pic01 from '../assets/Images/1.png'
// import pic02 from '../assets/1mages/2.jpeg'
import pic03 from '../assets/Images/3.png'
import pic04 from '../assets/Images/4.png'
import pic05 from '../assets/Images/5.png'
import pic06 from '../assets/Images/6.png'
import pic07 from '../assets/Images/7.png'
import pic08 from '../assets/Images/8.png'
import pic09 from '../assets/Images/9.png'
import pic11 from '../assets/Images/11.png'
import pic12 from '../assets/Images/12.png'
import pic14 from '../assets/Images/13.png'



const IndexPage = () => (
       <Layout>
  
    
      
        <section>
        <div className="xy"></div>
        <div className= "yz">

        </div>
        
        </section>
       
        <div className= "">
          <div className ="m">
            <ul>
              <li>HOME</li>
              <li>SERVISES</li>
              <li>PORTFOLIO</li>
              <li>CLIENTS</li>
              <li>ABOUT</li>
              <li>AWARDS</li>
              <li>CONTACT</li>
              <li><button>0800 0321770</button></li>
            </ul>
          </div>
          </div>
        

     
      
        
        <div className = 'c'>
          <div>
          <img src={pic04}    alt="" />
          </div>
          </div>
          

          
          <div className ="h">
          <div className = 'd'>
            <div>
            <h4>Lets's Talk</h4>
            
            
            <h1>Ideas</h1>
            
            <p>Dubai's leading <strong>Digital Agency</strong><br />
            Just got better</p>
            <button>GET STARTED</button>
          </div>
          
          </div>
          <div className = "g"></div>
          </div>
          
         




        <div className="k">


        <div className= "i">
        <div className = "j l">
          <h1>Services</h1>
          <h3>We Offer</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipicizing elit, sed do eiusmod tempor incicidunt ut labore et dolore magna allqua.</p>
          <button>-------</button>
        </div>
        <div>
        
        <div className ="e">
        <div className= "f">
        <img src={pic08}  height="50vw" width="50vw"  alt="" />
        <h6>MOBILE APPLICATION DEVELOPMENT</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipicizing elit, sed do eiusmod tempor. </p>
        </div>
        <div className= "f">
        <img src={pic07}  height="50vw" width="auto"  alt="" />
        <h6>ENTERPRISE APPLICATION DEVELOPMENT</h6>
        <p>Lorem ipsum dolor sit amet,consectetur adipicizing elit, sed do eiusmod tempor. </p>
        </div>
        <div className= "f"> 
        <img src={pic09}  height="50vw" width="auto"  alt="" />
        <h6>BRAND IDENTITY</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipicizing elit, sed do eiusmod tempor. </p>
        </div>
        </div>
        

        <div className ="e">
        <div className= "f">
        <img src={pic11}    alt="" />
        <h6>IOT <br/>DEVELOPMENT</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipicizing elit, sed do eiusmod tempor. </p>
        </div>
        <div className= "f">
        <img src={pic12}  height="50vw" width="auto"  alt="" />
        <h6>BIG DATA<br /> SERVICES</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipicizing elit, sed do eiusmod tempor. </p>
        </div>
        <div className= "f"> 
        <img src={pic14}  height="50vw" width="auto"  alt="" />
        <h6>CLOUD SERVICE & SOLUTIONS</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipicizing elit, sed do eiusmod tempor. </p>
        </div>
        </div>
        </div>
        
        </div>  
        </div>

      </Layout>
  
);

export default IndexPage;
