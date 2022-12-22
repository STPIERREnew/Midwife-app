import Navbar from "./Navbar"
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { Route, Routes} from "react-router-dom"


function App() {
  return (
    <>
    <Navbar/>
    <div className="navbar">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Portfolio" element={<Portfolio/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>

    </div>
    </>
  );
}

export default App;
