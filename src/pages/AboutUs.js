import React from "react";
import ProgressBar from "../components/ProgressBar";

import Info from "../components/aboutcomp/Info";
import PersonalInfo from "../components/aboutcomp/PersonalInfo";
import Experience from "../components/aboutcomp/Experience";
import Education from "../components/aboutcomp/Education";

const AboutUs = () =>{
    return(
        <>
        <section className="mt-0 aboutmain w100 mainsection">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1><span className="about">ABOUT <span className="me">ME</span></span></h1>

                        <div className="container">
                            <div className="row">
                                <div className="col-6 text-start">
                                    <Info />
                                </div>
                                <div className="col-6 p-0"> 
                                    <PersonalInfo />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid mainsdiv mt-5 pt-5 pb-5">
                        <h2>My Skills</h2>
                        <div className="row">
                                <ProgressBar />
                        </div>
                    </div>

                    <div className="container-fluid mainsdiv mt-5 pt-5">
                        <h2 className="mb-3">Experience</h2>
                        <div className="row">
                                <Experience />
                        </div>
                    </div>

                    <div className="container-fluid mainsdiv mt-5 pt-5">
                        <h2 className="mb-3">Education</h2>
                        <div className="row">
                            <Education />
                        </div>
                    </div>

                </div>
            </div>

        </section>
        </>
    )
}

export default AboutUs;