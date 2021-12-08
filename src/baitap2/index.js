import React from "react";
import Header from "./header";
import Carousel from "./carousel";
import Wwd from "./wwd";
import Listcard from "./list-card";
import Contact from "./contact";
import Footer from "./footer";

export default function Baitap2(){
    return(
        <div>
            <Header/>
            <Carousel/>
            <div className="container">
                <div className="row">
                    <Wwd/>
                    <Contact/>
                </div>
            </div>
            <Listcard/>
            <Footer/>
        </div>
    )
}