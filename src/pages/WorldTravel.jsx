import React from "react";
import {NavbarTravel} from "../Components/Navbar.jsx";
import WorldMap from '../Components/WorldMap.jsx';
function WorldTravel() {
    return (
        <div className="background">
            <NavbarTravel />
            <WorldMap/>
        </div>
    )
}

export default WorldTravel;