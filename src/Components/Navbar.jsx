import React from "react";

function NavbarHome (){
    return(
    <div className="navbar">
    <a href="/">About</a>
    <a href="#Education">Education</a>
    <a href="#Certifications">Certifications</a>
    <a href="#WorkExperience">Work Experience</a>
    <a href="#ContactMe">Contact Me</a>
    <a href="/WorldTravel">World Travel</a>
    </div>
    );
}

function NavbarTravel (){
    return(
    <div className="navbar">
    <a href="/">Home</a>
    </div>
    );
}
export {NavbarHome,NavbarTravel}; 
