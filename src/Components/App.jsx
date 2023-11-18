import React from "react";
import Navbar from "./Navbar.jsx";
import Opener from "./Opener.jsx";
import {AboutMe,Education,Certifications,WorkExperience,ContactMe} from "./Remaining.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Opener />
      <div class = "remainingSection">
        <AboutMe/>
        <Education/>
        <Certifications/>
        <WorkExperience/>
        <ContactMe />
      </div>
      
    </div>
  );
}

export default App;
