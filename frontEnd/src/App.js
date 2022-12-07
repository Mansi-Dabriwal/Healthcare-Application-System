
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbarcomp';
import Home from './pages/Home';
import About from './pages/About';
import PatientP from './pages/PatientP';
import PatientPortal from './pages/PatientPortal';
import Settings from './pages/Settings';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Logindoc from './pages/Logindoc';
import LoginPatient from './pages/LoginPatient';
import PatientPortal from './pages/PatientPortal';
import Settings from './pages/Settings';
import PatientP from './pages/PatientP';
import PatientForm from './components/PatientForm';
import PatientSignUp from './pages/PatientSignUp';

import Payment from './pages/Payment';
function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Logindoc' element={<Logindoc />} />
          <Route path='/LoginPatient' element={<LoginPatient />} />
          <Route path="/patient" element={<PatientPortal />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/patientP" element={<PatientP />} />
          <Route path="/patient-form" element={<PatientForm />} />
          <Route path="/patientSignUp" element={<PatientSignUp/>} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
