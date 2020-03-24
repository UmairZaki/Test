import React from 'react';
import Layout from '../components/Layout.js'


import pic01 from '../assets/Images/1.png'
// import pic02 from '../assets/1mages/2.png'
import pic03 from '../assets/Images/3.png'
import pic04 from '../assets/Images/4.png'
import pic05 from '../assets/Images/5.png'
import pic06 from '../assets/Images/6.png'
import pic07 from '../assets/Images/7.png'
import pic08 from '../assets/Images/8.png'
import pic09 from '../assets/Images/9.png'
import pic10 from '../assets/Images/10.png'
import pic11 from '../assets/Images/11.png'
import pic13 from '../assets/Images/12.png'
// import pic14 from '../assets/Images/13.png'



const IndexPage = () => (
       <Layout>
  
    
      
        <section>
        <div className="xy"></div>
        <div className= "yz">
        <img src={pic06}  height="850px" width="auto"  alt="" />
        </div>
        
        </section>
       
        <div className= "a"></div>
        

     
      <section>
        <div className= "b">
        
        <div className = 'c'>
          <div>
          <img src={pic04}  height="40px" width="auto"  alt="" />
          </div>
          </div>

          <div className = 'd'>
            <div>
            <h4>Lets's Talk</h4>
            <h1>Ideas</h1>
            <p>Dubai's leading <strong>Digital Agency</strong><br/>
            Just got better</p>
            <button>GET STARTED</button>
          </div>
          </div>

        <div className ="e">
        <div className= "f">
        <img src={pic08}  height="50px" width="auto"  alt="" />
        <h6>MOBILE APPLICATION DEVELOPMENT</h6>
        </div>
        <div className= "f">
        <img src={pic07}  height="50px" width="auto"  alt="" />
        </div>
        <div className= "f"> 
        <img src={pic09}  height="50px" width="auto"  alt="" />
        </div>
        </div>
        
        
        
        <div>
        <img src={pic07}  height="50px" width="auto"  alt="" />
        </div>
        </div>
        
        </section>

      </Layout>
  
);

export default IndexPage;
