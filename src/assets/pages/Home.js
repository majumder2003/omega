import React from 'react';
import NavBar from '../components/NavBar';
import AppCarousel from '../components/AppCarousel';
import About from '../components/About';
import '../css/main.css';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

function Home() {
    return (
        <div>
            <div className="navbar-container">
                <NavBar />
            </div>
            <div className="carousel-container">
                <AppCarousel />
            </div>
            <div className="about-container">
                <About />
            </div>
            <div>
                <Gallery />
            </div>
            <div className='footer-container'>
                <Footer />
            </div>
        </div>
    );
}

export default Home;