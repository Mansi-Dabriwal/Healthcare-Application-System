
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbarcomp';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Logindoc from './pages/Logindoc';
import LoginPatient from './pages/LoginPatient';
import DoctorPortal from './pages/DoctorPortal';
import Payment from './pages/Payment';
function App() {
  return (
    <div className="App">
      <Router>
     
      <Routes>          
                        <Route path='/' element={<Home/>} />
                        <Route path='/home' element={<Home/>} />
                        <Route path='/About' element={<About/>} />
                        <Route path='/Logindoc' element={<Logindoc/>} />
                        <Route path='/LoginPatient' element={<LoginPatient/>} />
                        <Route path='/DoctorPortal' element={<DoctorPortal/>}/>
                        <Route path='/Payment' element={<Payment/>}/>
                        
                        
     </Routes>
      </Router>
    </div>
  );
}

export default App;
