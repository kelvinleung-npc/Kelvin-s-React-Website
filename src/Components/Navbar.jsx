import React from "react";
import {Link} from "react-router-dom";
function NavbarHome (){
    return(
    <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/WorldTravel">
                World Travel
            </Link>
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
