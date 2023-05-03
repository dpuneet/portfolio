import React from "react";
import {FaRegBuilding} from 'react-icons/fa';


const Education = () =>{
    return(
        <section className="education-sec"> 
            <div className="row">
                    <div className="col-lg-12 m-15px-tb">
                            <div className="resume-box">
                                    <ul>
                                            <li>
                                                    <div className="icon"><FaRegBuilding /> </div>
                                                    <span className="time open-sans-font text-uppercase"> Passing Year - 2007</span>
                                                    <h5 className="poppins-font text-uppercase"> B.A (Bachelor of Fine Arts)
                                                    <span className="place open-sans-font">Delhi Open University</span></h5>
                                                    <p className="open-sans-font">Grades : B</p>
                                            </li>


                                            <li>
                                                    <div className="icon"><FaRegBuilding /></div>
                                                    <span className="time open-sans-font text-uppercase"> Passing Year - 2003</span>
                                                    <h5 className="poppins-font text-uppercase"> Senior Secondary<span
                                                                    className="place open-sans-font">Haryana University</span></h5>
                                                    <p className="open-sans-font">Grades : B</p>
                                            </li>


                                            <li>
                                                    <div className="icon"><FaRegBuilding /></div>
                                                    <span className="time open-sans-font text-uppercase"> Passing Year - 2010</span>
                                                    <h5 className="poppins-font text-uppercase"> Diploma in Multimedia<span
                                                                    className="place open-sans-font">Arena (Aptech)</span></h5>
                                                    <p className="open-sans-font">Grades : B</p>
                                            </li>


                                            
                                                                                

                                    </ul>
                            </div>
                    </div>
            </div>
        </section>
    )
}
export default Education;