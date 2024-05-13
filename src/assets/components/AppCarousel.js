import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import '../css/main.css';

function AppCarousel() {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      <div>
        <img src={image3} alt='omega' style={{ maxHeight: '100vh' }} />
      </div>
      <div>
        <img src={image1} alt='omega' style={{ maxHeight: '100vh' }}/>
      </div>
      <div>
        <img src={image2} alt='omega' style={{ maxHeight: '100vh' }} />
      </div>
    </Carousel>
  );
}

export default AppCarousel;
