import React from 'react'
import { FaDownload } from "react-icons/fa";
const Info =()=> {
  return (
    <>
        <h2 className='head'>Personal Info</h2>
        <p className='text-white'>My goal is to become associated with a company where I can utilize my skills and gain further
experience while enhancing the company’s productivity and reputation.</p>
                                    <ul class="about-list list-unstyled open-sans-font">
                                        <li><span class="title">First name</span>
                                        <span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">Puneet</span></li>
                                        <li><span class="title">Last name</span><span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">Dubey</span></li>
                                        <li><span class="title">Age</span><span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">39 Years</span></li>
                                        <li><span class="title">Nationality</span><span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">Indian</span></li>
                                        <li><span class="title">Freelance</span><span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block green">Available</span></li>
                                        <li><span class="title">Address</span><span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">Faridabad</span></li>
                                        <li><span class="title">Phone</span><span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">8700795446</span></li>
                                        <li><span class="title">Email</span><span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">you@mail.com</span></li>
                                        <li><span class="title">Skype</span><span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block "> puneet985</span></li>
                                        <li><span class="title">Language</span><span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">Hindi, English</span></li>
                                    </ul>
                                    <div className="col">
                                    <a class="button-cv" href="/assets/img/sample.pdf">
                                        <span className="download-text">Download CV </span>
                                        <span className="button-icon"> <FaDownload /> </span> </a>
                                    </div>
    </>
  )
}

export default Info
