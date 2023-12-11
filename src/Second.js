import React from "react";
import cuate from "./Used Images/cuate.png";

function Second() {
    return (<>
        <div className="container   text-start" style={{ marginTop: "30%" }}>
            <h2 className="fw-bold text-center">Real Estate-Focused Digital Mastery</h2>
            <div className="row mt-5">
                <div className="col-md-6 mt-3"><img className="img-info" src={cuate} /></div>

                <div className="col-md-6 mt-3 ">
                    <h3 className="text-start fs-2">Unlock the Potential of Digital Real Estate Excellencex</h3>
                    <p className="fs-5 lh-lg mt-4">At Osumare, we understand that the real estate landscape demands a digital presence that aligns with the intricacies of property marketing. Our range of specialized services is meticulously designed to catapult your brand's success in the ever-evolving digital property market.</p>
                    <button class="btn btn-primary col-md-5 rounded-pill align-self-start p-3" type="button">Get started</button>
                </div>
            </div>
        </div>
    </>);
}
export default Second;