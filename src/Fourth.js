import React from "react";
import Frame from "./Used Images/DigitalLandscape/Frame 892.png"
import logo2 from "./Used Images/DigitalLandscape/Vector.png";
import logo1 from "./Used Images/DigitalLandscape/Vector3.png";
import logo3 from "./Used Images/DigitalLandscape/Vector (1).png";
import logo4 from "./Used Images/DigitalLandscape/Vector (2).png"

let DigitalLandscape = () => {
    return (<>
        
        <div className="container-fluid mt-5 position-relative main-div">
            <div className="text-center">
                <h2 className="fw-bold">Navigating Real Estate's Digital Landscape</h2>
                <p className="fs-4">Insights for Real Estate Marketing Advantage</p>
            </div>

            <div className="container row " style={{margin:"5%"}}>

                <div className="col-md-6 z-1 logo position-relative mt-5">
                    <div className="row mb-3 d-flex align-items-center log rounded p-4">
                        <div className="col-sm-2 text-center"><img src={logo1} /></div>
                        <div className="col-sm-10">
                            <h2>Market Trends Analysis</h2>
                            <p>Predictive insights to guide real estate strategies.</p>
                        </div>
                    </div>
                    <div className="row mb-3 d-flex align-items-center log rounded p-4">
                        <div className="col-md-2  text-center"><img src={logo2} /></div>
                        <div className="col-md-10">
                            <h2>Market Trends Analysis</h2>
                            <p>Predictive insights to guide real estate strategies.</p></div>
                    </div>
                    <div className="row mb-3 d-flex align-items-center log rounded p-4">
                        <div className="col-md-2  text-center"><img src={logo3} /></div>
                        <div className="col-md-10">
                            <h2>Market Trends Analysis</h2>
                            <p>Predictive insights to guide real estate strategies.</p></div>
                    </div>
                    <div className="row mb-3 d-flex align-items-center log rounded p-4">
                        <div className="col-md-2  text-center"><img src={logo4} /></div>
                        <div className="col-md-10">
                            <h2>Market Trends Analysis</h2>
                            <p>Predictive insights to guide real estate strategies.</p></div>
                    </div>
                </div>
                <div className="col-md-6  position-absolute end-0 left text-center " style={{marginRight:"8%"}}>
                    <img class="col-md-3" src={Frame} />
                </div>
                <div className="position-relative mb-5"></div>
            </div>
        </div>
    </>);
}
export default DigitalLandscape;