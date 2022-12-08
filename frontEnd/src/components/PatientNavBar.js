import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { CiSettings } from 'react-icons/fa';
import { useNavigate } from "react-router";

function PatientNavBar() {

  const navigate = useNavigate();
  function logOut()
  {
    localStorage.clear();
    navigate("/home");
  }
  return ( 
    <nav id="navbar-example2" class="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
    <div class="container">
      <a href="#" class="navbar-brand">Doc101</a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navmenu">
        <ul class="navbar-nav ms-auto nav-pills">
          <li class="nav-item">
            <a href="/patient" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="/patientP" class="nav-link">Book Appointment</a>
          </li>
          <li class="nav-item">
            <a href="/bookingHistory" class="nav-link">Booking History</a>
          </li>
          <li class="nav-item">
            <a href="/patientDiagnosis" class="nav-link">Review Diagnosis</a>
          </li>
          <li class="nav-item">
            <a href="/settings" class="nav-link">Settings</a>
          </li>
          <li class="nav-item">
          <a class="btn btn-primary logout" data-toggle="dropdown" onClick={logOut}>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default PatientNavBar;