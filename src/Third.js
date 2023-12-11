import React from "react";
import logo1 from "./Used Images/Our Service/Seo.png";
import logo2 from "./Used Images/Our Service/PPC.png";
import logo3 from "./Used Images/Our Service/Vector.png";
import logo4 from "./Used Images/Our Service/content.png";
import logo5 from "./Used Images/Our Service/Vector (2).png";
import logo6 from "./Used Images/Our Service/Vector (3).png";
import logo7 from "./Used Images/Our Service/Data driven.png";
import logo8 from "./Used Images/Our Service/Vector (4).png";





let ServicesOffering = () => {
  return (<>

  <div className="container-fluid text-center logos g-lg-1 " style={{marginTop:"10%"}}>
    <div className="">

  <h2 className="fw-bold pt-5 " >Our Service Offering</h2>
<p className="fs-4">Strategies that Drive Property Market Excellence</p>
</div>

    <div class="row g-lg-5 mt-3 fs-6 lh-base m-5 gap-4">
      <div className="col p-4">
       <img src={logo1} />
      <h5 className="fw-bold mt-2">Automotive SEO</h5>
      <p className="mt-3">Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today</p>
 
      </div>
      <div className="col p-4">
       <img src={logo2} />
      <h5 className="fw-bold mt-2">PPC Precision</h5>
      <p className="mt-3">Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns.</p>
 
      </div>
      <div className="col p-4">
       <img src={logo3} />
      
      <h5 className="fw-bold mt-2">Social Acceleration</h5>
      <p className="mt-3"> Engage and influence your audience across social media platforms, amplifying your brand's presence and connection.</p>
 
      </div>
      <div className="col p-4">
       <img src={logo4} />
    
      <h5 className="fw-bold mt-2">Content Excellence</h5>
      <p className="mt-3">Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement.</p>
 
      </div>
    </div>
    <div class="row g-lg-1 fs-6 lh-base m-5 gap-4">
      <div className="col p-4">
        <img src={logo5} />
   
      <h5 className="fw-bold mt-2">Web Design</h5>
      <p className="mt-3">Transform visitors into customers with high-performance websites designed for seamless user experiences and increased conversions.</p>

      </div>
      <div className="col p-4">
        <img src={logo6} />
     
      <h5 className="fw-bold mt-2">Data-Driven Insights</h5>
      <p className="mt-3">Leverage data to refine your strategies, making informed decisions that drive revenue growth.</p>

      </div>
      <div className="col p-4">
       <img src={logo7} />
     
      <h5 className="fw-bold mt-2">End-to-End Solutions</h5>
      <p className="mt-3">From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey.</p>
 
      </div>
      <div className="col p-4">
      <img src={logo8} />

      <h5 className="fw-bold mt-2">Video marketing</h5>
      <p className="mt-3">Unleash the Power of Video Marketing: Captivate, Engage, and Elevate Your Brand with Compelling Visual Stories.x</p>
      </div>
    </div>
    <button class="btn btn-primary col-md-2 p-3 rounded-pill align-self-start mb-5" type="button">Get started</button>        
  </div>
  </>);
}
export default ServicesOffering;
