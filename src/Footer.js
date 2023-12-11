import React from "react";
import  s1 from "./Used Images/Social/Vector.png";
import s2 from "./Used Images/Social/Vector (1).png";
import s3 from "./Used Images/Social/Vector (2).png";
import s4 from "./Used Images/Social/Vector5.png";
import s5 from "./Used Images/Social/Vector (3).png";
import s6 from "./Used Images/Social/Vector (4).png";
import logo from "./Used Images/OsumareLogo.png";

 let footer =()=>{
    return(<>
    <div className="container-fluid p-5" style={{backgroundColor:"white"}} >
            <div className="row text-start   bg-primary-subtle rounded-4  " style={{margin:"3%",}}>
                <div className="col-4 text-left p-5">
                    <div>
                        <img style={{width:"8vw"}} src={logo}/>
                        <p className="mt-3">The best digital marketing agency in Pune with a proven track record of consistently delivering quality service</p>
                    </div>
                    <div>
                        <h4>Address</h4>
                        <p>
                            Survey No. 43, Pathare <br />
                            Thube Nagar, Nagar <br />
                            Road, Kharadi, Pune-14, <br />
                            Maharastra, India.<br />
                        </p>
                    </div>
                    <div>
                        <h4>Contacts</h4>
                        <p>hello@osumare.in</p>
                        <p>+91 8459 8762 26</p>
                    </div>
                </div>
                <div className="col-4 p-5">
                    <h3>Menu</h3>
                        <p className="mt-5">Home</p>
                        <p>About</p>
                        <p>Services</p>
                        <p>Work</p>
                        <p>Blog</p>
                        <p>Career</p>
                    
                </div>
                <div className="col-md-4 p-5 ">
                    <h3>Social</h3>

                    <div className="row social mt-5">
                    <div className="col-3"> <img src={s1} /> </div>
                    <div className="col-3"><img src={s2} /> </div>
                    <div className="col-3"><img src={s3} /> </div>
                    <div className="col-3"><img src={s4} /> </div>
                </div>
                <div className="row social mt-5">
                    <div className="col-3"> <img src={s5} /> </div>
                    <div className="col-3"><img src={s6} /> </div>
                    <div className="col-6"> </div>
                   
                </div>
                    
                </div>
            </div>
            <h6 className="text-center">© 2023 Osumare. All rights reserved.</h6>
        </div>
        </>
    )
 }
 export default footer;