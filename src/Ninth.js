import React from "react";

let Contact = () => {
    return (
        <>
          <div className="container-fluid position-relative mt-5 z-2 " style={{overflow:"hidden"}} >
                <div className="position-relative container-fluid  d-grid text-center">
                  
            <div className="container-fluid position-relative text-center my-5 z-1">
                <div className="w-75 m-auto">
                    <h2 className="fw-bold">Connect with our Digital Marketing Experts</h2>
                    <p className="fs-5">Reach Out for Tailored Strategies and Results-Driven Solutions. <br />
                        Let's Elevate Your Online Presence Together</p>
                    <div className=" rounded-4 p-3 text-center log-c mt-5 mb-5 m-5 p-1">

                        <div className="row text-start">
                            <div className="col-md-6  ps-5  ">
                                <div className="my-2 ">
                                    <label for="exampleFormControlInput1" class="form-label"><h6>Name</h6></label>
                                    <input type="email" class="form-control col-8" id="exampleFormControlInput1" placeholder="Enter your name"></input>
                                </div>
                                <div className="my-2">
                                    <label for="exampleFormControlInput1" class="form-label"><h6>Phone</h6></label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Number"></input>

                                </div>
                                <div className="my-2">
                                    <label for="exampleFormControlInput1" class="form-label"><h6>Email</h6></label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Total No. of Vehicles"></input>

                                </div>
                            </div>
                            <div className="col-md-6 pe-5 p-2 ">
                                <label for="exampleFormControlTextarea1" class="form-label"><h6>Message</h6></label>
                                <textarea class="form-control" style={{ height: "90%" }} id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                        <button className="btn btn-primary p-3 col-md-5 rounded-5 mt-5" style={{marginBottom:"5vh"}}>Get Started</button>
                    </div>
                </div>
            </div>
            
                    <div className="position-absolute z-0 bg-primary end-0 col-4 text-end  container-fluid left-bg z-0">
                    </div>
                    <div className="position-absolute z-0  start-0 col-4 text-center container-fluid right-bg">
                    </div>
                </div>
            </div>

        </>)
}
export default Contact;