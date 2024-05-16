import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import DoctList from '../components/DoctorList'

function Doctor() {
    return (
        <div>
            <NavBar />
            <DoctList /><br />
            <Footer />
        </div>
    )
}

export default Doctor