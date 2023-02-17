import React from "react";
import NavbarMenu from "./components/Navbar/NavbarMenu";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Learn from "./components/Learn/Learn";
import Work from "./components/Work/Work"

function App() {
  return (
  <>

  <Router>
  <NavbarMenu/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/SearchUser" element={<About/>}/>
      <Route path="/learn" element={<Learn/>}/>
      <Route path="/work" element={<Work/>}/>
      <Route path="*" element={<h1>404 NOT FOUND </h1>}/>
    </Routes>
  </Router>
  
  
  </>
  );
}

export default App;
