import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Nav from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/contact";
import Login from "./components/login";
const App = () => {
  return ( 
    <div className="greatContainer">
    <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>

        </Routes>
      </Router>
      </div>
    
   );
}
 
export default App;