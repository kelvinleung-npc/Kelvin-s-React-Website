import React from "react";
import {NavbarHome,NavbarTravel} from "../Components/Navbar.jsx";
import Opener from "../Components/Opener.jsx";

import {AboutMe,Education,Certifications,WorkExperience,ContactMe} from "../Components/Remaining.jsx";


function HomePage() {
  return (
    <div>
      <NavbarHome />
      <Opener />
      <div className = "remainingSection background">
        <AboutMe/>
        <Education/>
        <Certifications/>
        <WorkExperience/>
        <ContactMe />

      </div>
      
    </div>
  );
}

export default HomePage;
