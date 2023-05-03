import React from "react";
import { Link, NavLink } from "react-router-dom";
// import pic from '../assets/profile1.png';
import pic from '../assets/puneet-pic.jpg';


const Home = () =>{
    return(
        <>
        <section className="mt-0 homemain w100 tp40">
            <div className="container z-ndex ">
                <div className="row aboutme">
                    <div className="col-4 picarea">
                        <img src={pic} alt="" className="img-fluid" />
                    </div>
                    <div className="col-8 contentarea"> 
                        <h1>I'M PUNEET KUMAR.</h1>
                        <h2>Sr. WEB DESIGNER</h2>
                        <p>I'm a India based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                        <NavLink className="morebtn">
                            More About Me
                        </NavLink>
                        
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Home;