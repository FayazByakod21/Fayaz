import React from "react";
import logo1 from "./Used Images/virtual_10569504 2.png";
import logo2 from "./Used Images/online-store_3929777 2.png";
import logo3 from "./Used Images/3d_9345318 2.png";
import logo4 from "./Used Images/augmented-reality_7065057 2.png";
import logo5 from "./Used Images/weather_534564 2.png";
import logo6 from "./Used Images/mass_9984040 2.png";
import logo7 from "./Used Images/3d-model_9040866 3.png";
import logo8 from "./Used Images/medal_2439078 (1) 1.png";

let DrivingProperty1 = () => {
    return (<>
        <div className="container-fluid text-center mt-5">
            <h2 className="fw-bold">Driving Property Inquiries to Conversions</h2>
            <div className="container fs-4 abc">

                <div className="row ">
                    <div className="col-md-6">
                        <img src={logo1} />
                        <h3 className="mt-4 fw-bold"> Call-to-Action Optimization</h3>
                        <p className="mt-4">Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates. </p>
                    </div>
                    <div className="col-md-6">
                        <img src={logo2} />
                        <h3 className="mt-4 fw-bold">Landing Page Efficiency </h3>
                        <p className="mt-4">Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission. </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img src={logo3} />
                        <h3 className="mt-4 fw-bold"> Social Proof Utilization</h3>
                        <p className="mt-4"> Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action</p>
                    </div>
                    <div className="col-md-6">
                        <img src={logo4} />
                        <h3 className="mt-4 fw-bold">Mobile-Friendly Experience </h3>
                        <p className="mt-4"> With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid text-center abc" style={{ marginTop: "10%" }}>
            <h2 className="fw-bold">Our Expertise in Action</h2>
            <div className="container  fs-4 abc" style={{ marginTop: "6%" }}>
                <div className="row ">
                    <div className="col-md-6">
                        <img src={logo5} />
                        <h3 className="mt-4 fw-bold">Effective CTAs </h3>
                        <p>  See how our strategic CTAs drove a significant increase in property inquiries and accelerated sales for a real estate agency.</p>
                    </div>
                    <div className="col-md-6">
                        <img src={logo6} />
                        <h3 className="mt-4 fw-bold">Conversion-Optimized Landing Pages </h3>
                        <p> Explore a case study where our landing page optimization increased property lead conversion rates by 30%</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img src={logo7} />
                        <h3 className="mt-4 fw-bold"> Trust Building with Social Proof</h3>
                        <p>Discover how leveraging client testimonials boosted buyer confidence, leading to higher conversion rates for a property development project </p>
                    </div>
                    <div className="col-md-6">

                        <img src={logo8} />
                        <h3 className="mt-4 fw-bold">Mobile-First Success: </h3>
                        <p className="mt-4"> Learn how our mobile-responsive design approach resulted in a 25% increase in inquiries from mobile users for a real estate agency. </p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default DrivingProperty1;