import React from "react";
// import { Form } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
// import Footer from "../components/footer/Footer";
import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import PageNotFound from "../pages/PageNotFound";

const AppRouter = () => {

    return(
        <BrowserRouter>
        <Header />
            <Routes>
                <Route exact activeClassName='active' path="/" element={<Home />}></Route>
                <Route path="about" element={<AboutUs />}></Route>
                <Route path="portfolio" element={<Portfolio />}></Route>
                <Route path="contact" element={<Contact/>}></Route>
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
            {/* <Footer /> */}
        </BrowserRouter>
    )
}

export default AppRouter;