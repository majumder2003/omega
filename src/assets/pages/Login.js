import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import LoginComp from '../components/LoginComp'

function Login() {
    return (
        <div>
            <NavBar />
            <LoginComp /><br />
            <Footer />
        </div>
    )
}

export default Login