import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {FaUser, FaHome, FaBriefcase, FaEnvelope} from 'react-icons/fa';

const BasicNav = () =>{
    return(
        <Navbar className="menu-vertical">
            <Nav>
                <NavLink to="/"><FaHome /><h3 className="hme">Home</h3></NavLink>
                <NavLink to="about"><FaUser /><h3 className="abut">About ME</h3></NavLink>
                <NavLink to="portfolio"><FaBriefcase /><h3 className="abut">Portfolio</h3></NavLink>
                <NavLink to="contact"><FaEnvelope /><h3 className="abut">Contact</h3></NavLink>
            </Nav>
        </Navbar>
    )
}

export default BasicNav;