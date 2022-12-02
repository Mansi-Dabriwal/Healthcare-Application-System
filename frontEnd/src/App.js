
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbarcomp';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
     
      <Routes>          
                        <Route path='/' element={<Home/>} />
                        <Route path='/home' element={<Home/>} />
                        <Route path='/About' element={<About/>} />
                        
                        
     </Routes>
      </Router>
    </div>
  );
}

export default App;
