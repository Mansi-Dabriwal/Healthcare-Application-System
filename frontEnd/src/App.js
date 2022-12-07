import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbarcomp";
import Home from "./pages/Home";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import PatientSignUp from "./pages/PatientSignUp";
import PatientPortal from "./pages/PatientPortal";
import Settings from "./pages/Settings";
import PatientP from "./pages/PatientP";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Logindoc from "./pages/Logindoc";
import LoginPatient from "./pages/LoginPatient";
import Survey from "./pages/Survey";
// import Resources from "./pages/Resources";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Logindoc" element={<Logindoc />} />
          <Route path="/LoginPatient" element={<LoginPatient />} />
          <Route path="/patient" element={<PatientPortal />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/patientP" element={<PatientP />} />
          <Route path="/PatientSignUp" element={<PatientSignUp />} />
          <Route path="/Survey" element={<Survey />} />
          {/* <Route path="/Resources" element={<Resources />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
