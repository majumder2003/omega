import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import RegisterNow from '../components/RegisterNow'
import '../css/main.css';

function Register() {
    return (
        <div>
            <NavBar />
            <RegisterNow className="reg-container" />
            <Footer className="footer-container" />
        </div>
    )
}

export default Register