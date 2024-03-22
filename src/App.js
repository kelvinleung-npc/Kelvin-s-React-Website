import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/home";
import WorldTravel from "./Components/WorldTravel";
import {NavbarHome} from "./Components/Navbar"; 
function App() {
  return (
    <>
    <NavbarHome />    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/WorldTravel" element={<WorldTravel />} />
      </Routes>
    </>
  );
}

export default App;