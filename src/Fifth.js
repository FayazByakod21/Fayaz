import React from "react";
import bro1 from "./Used Images/bro1.png";

let DrivingProperty = () => {

    return (<>
        <div className="container-fluid text-center position-relative " style={{ marginTop: "15%" }}>
            <h2 className="fw-bold"> Driving Property Inquiries to Conversions</h2>
            <p className="fs-4 mt-4">Streamlined Strategies for Real Estate Success</p>

            <div className="container-fluid row justify-content-space-between mt-5">

                <div className="col-md-6 mt-5">
                    <img className="w-75 d-grid start-0 ms-5" src={bro1} />
                </div>
                <div className="col-md-6 text-start  gx-5 mt-5">
                    <h2 className="fw-bold">Optimized Path to Property Purchase</h2>
                    <p className="fs-4 mt-4 mb-4">In the dynamic realm of real estate, the journey from a property inquiry to a successful conversion demands a well-crafted approach. At Osumare, we specialize in guiding potential buyers through this journey seamlessly, maximizing inquiries-turned-conversions with expert strategies.</p>
                    <button class="btn btn-primary col-md-5 p-3 rounded-pill align-self-start mb-5" type="button">Get started</button>

                </div>
            </div>
        </div>
    </>)
}
export default DrivingProperty;