import React from "react";

import "./index.css";
import bro from "./Used Images/bro.png";
import OsumareLogo from "./Used Images/OsumareLogo.png";
import Frame from "./Used Images/Frame 6.png";


function Nav() {
    return (<>
        <nav class="navbar fixed-top p-1">
            <div class="container-fluid">
                <a class="navbar-brand ms-5"> <img src={OsumareLogo} /> </a>
                <button class="btn btn-outline-primary rounded-pill col-md-2 me-5 p-2 text-black border-black" type="submit">Contect</button>
            </div>
        </nav>.
        <div className="contaainet-fluid bg-img position-relative " style={{ marginTop: "2%", height: "140vh" }}>.
            <div className="text-center  " style={{ marginTop: "30vh", fontSize: "3.5rem" }}>
                <h1 className="fw-normal">  Elevate <span class="fw-bold ">Real Estate Success</span> with</h1>
                <h1 style={{ fontSize: "3.5rem" }} className="fw-normal" >Osumare's Digital Expertise</h1>
                <p className="fs-4">Tailored Solutions for Thriving in the Digital Real Estate Landscape</p>
                <button class="btn btn-primary d-grid gap-2 col-md-3 mx-auto rounded-pill p-2 fw-bold fs-4" type="button">Get started</button>

                <div className="rounder-circle dot-light  text-center position-absolute end-0 col-md-5 top-0 text-end over-div container-fluid" style={{ marginTop: "5%", height: "80vh" }}>

                </div>
            </div>
            <div className="text-center" style={{ marginTop: "12%" }}>
                <img class="home-img position-relative" src={bro} />
                <img class="text-img position-absolute" src={Frame} />

            </div>
        </div>

    </>);
}
export default Nav;
