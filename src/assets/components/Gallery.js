import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import '../css/main.css'; // Import your CSS file
import Das from '../images/DrDas.jpg';
import Kathie from '../images/DrKathie.jpg';
import Samanta from '../images/DrSamanta.jpg';
import Reddy from '../images/DrReddy.jpg';
import Madhu from '../images/DrMadhu.jpg';
import Bose from '../images/DrBose.jpg';
import Vipin from '../images/DrVipin.jpg';

function Gallery() {

    const images = [
        { src: Das, title: 'Dr. Das', description: 'Description for Dr. Das' },
        { src: Vipin, title: 'Dr. Vipin', description: 'Description for Dr. Vipin' },
        { src: Samanta, title: 'Dr. Samanta', description: 'Description for Dr. Samanta' },
        { src: Madhu, title: 'Dr. Madhu', description: 'Description for Dr. Madhu' },
        { src: Reddy, title: 'Dr. Reddy', description: 'Description for Dr. Reddy' },
        { src: Kathie, title: 'Dr. Kathie', description: 'Description for Dr. Kathie' },
        { src: Bose, title: 'Dr. Bose', description: 'Description for Dr. Bose' }
    ];

    return (
        <Grid container direction="column" spacing={1} className="gallery-container" justifyContent="center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            <Grid><h2>Gallery</h2></Grid>
            <Grid container direction="row" spacing={1} className="gallery-container" justifyContent="center" alignItems="flex-start">
            {images.map((image, index) => (
                <Grid item xs={12} sm={5} md={3} key={index} className='gallery-item'>
                    <Card>
                        <CardMedia
                            component="img"
                            height="200"
                            image={image.src}
                            alt={image.title}
                        />
                        <CardContent>
                            <Typography variant="h6" component="div">
                                {image.title}
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography variant="body2" color="textSecondary">
                                {image.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
            </Grid>
        </Grid>
    );
}

export default Gallery;
