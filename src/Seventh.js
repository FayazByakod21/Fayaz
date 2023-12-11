import React from "react";
import Tabish from "./Used Images/Tabish formal photo (1) 1.png"
import Video from "./Used Images/Video.png";
import Symbol from "./Used Images/Symbol.png";
import leftarr from "./Used Images/Vector (1).png";
import rightarr from "./Used Images/Vector.png";

let Mind = () => {
    return (<>
        <div className="container-fluid position-relative" style={{ marginTop: "10%" }}>
            <div className="position-relative container-fluid  d-grid text-center">
                <h2 className="mt-5 z-1 fw-bold mb-4"> Your Peace of Mind</h2>
                <p className="h4 fw-normal z-1 lh-base">Through our conversion-focused strategies, we ensure that property<br /> seekers are not just visitors, but engaged prospects ready to make <br /> their next move in the real estate market</p>
                <div>
                    <div className="btn btn-primary  col-md-2 rounded-pill z-1 p-3 mt-4">Get started</div>
                </div>
                <div className="position-absolute z-0 bg-primary end-0 col-4 text-end  container-fluid left-bg z-0">
                </div>
                <div className="position-absolute z-0  start-0 col-4 text-center container-fluid right-bg">

                </div>
            </div>
        </div>

        <div className="conatiner-fluid position-relative text-center  " style={{ marginTop: "15%" }}>
            <h2 className="mt-5 fw-bold">What Our Pharma Partners Say</h2>
            <p className="fs-4 mb-5">Driving Transformations, One Brand at a Time</p>

            <div className="container p-1 shad rounded col-md-9">
                <div className="row m-5">
                    <div className="col-md-6 vimg">
                        <img src={Video} />
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="row d-flex align-items-center ms-4 mt-5">
                            <div className="col-2">
                                <img class="logot" src={Tabish} />
                            </div>
                            <div className="col-6">
                                <h4 className="fw-bold ms-3 text-start">Tabish Khan</h4>
                            </div>
                            <div className="col-4">
                                <img class="symbol" src={Symbol} />
                            </div>
                            <p class="fs-3 text-start mt-3">Osumare's expertise in pharma<br /> marketing is unparalleled. Their<br /> strategies helped us navigate<br /> complex regulations while driving remarkable growth.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 ">
                <div className="btn btn-outline-primary p-4 rounded-circle me-4">🡨</div>
                <div className="btn btn-outline-primary p-4 rounded-circle ms-4">🡪</div>
            </div>
        </div>
    </>)

}
export default Mind;