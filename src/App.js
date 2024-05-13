import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './assets/pages/Home';
import Services from './assets/pages/Services';
import Doctor from './assets/pages/Doctor';
import Login from './assets/pages/Login';
import Register from './assets/pages/Register';
import Appointment from './assets/pages/Appointment';
import Profile from './assets/pages/Profile';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/service" element={<Services />} />
          <Route path="/doctors" element={<Doctor />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
