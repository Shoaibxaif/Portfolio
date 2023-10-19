import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



function App() {
  return (
     <div  >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
     
      </Router>
     </div>
 
  );
}

export default App;
