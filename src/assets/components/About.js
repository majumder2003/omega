import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import image1 from '../images/abt-img1.jpg';
import image2 from '../images/abt-img2.jpg';
import image3 from '../images/abt-img3.jpg';
// import image4 from '../images/abt-img4.jpg';

function About() {
    return (
        <div>
            <h2>About Us</h2>
            <Grid container spacing={2}>
                <Grid item xs={12} md={0}>
                    <Card style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                        <CardContent>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={6}>
                                    <img src={image1} alt="about1" style={{ width: '100%', marginRight: '10px' }} />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body1" style={{ fontSize: 26 }}>
                                        At Omega Clinic, we are dedicated to providing exceptional healthcare services with a
                                        focus on compassion, excellence, and innovation. Our state-of-the-art facility,
                                        coupled with a team of experienced healthcare professionals, allows us to deliver
                                        personalized care tailored to meet the unique needs of each patient.
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={6}>
                                    <Typography variant="body1" style={{ fontSize: 26 }}>
                                        <b>Our Mission:</b>
                                        <br />
                                        Our mission at Omega Clinic is to promote health and wellness by delivering high-quality,
                                        comprehensive medical care in a supportive and patient-centered environment.
                                        We strive to enhance the lives of our patients through evidence-based practices,
                                        cutting-edge technology, and a commitment to continuous improvement.
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <img src={image2} alt="about2" style={{ width: '100%', marginRight: '10px' }} />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={6}>
                                    <img src={image3} alt="about3" style={{ width: '100%', marginRight: '10px' }} />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body1" style={{ fontSize: 26 }}>
                                        <b>Expert Care Team:</b><br />

                                        At Omega Clinic, our team consists of board-certified physicians, skilled nurses,
                                        and allied healthcare professionals who are passionate about providing superior
                                        care to our patients. With expertise in a wide range of medical specialties, we collaborate closely
                                        to ensure seamless coordination of care and optimal outcomes for our patients.
                                    </Typography>
                                </Grid>
                            </Grid>
                            {/* <Grid container spacing={2} alignItems="center">
                                <Grid item xs={6}>
                                    <Typography variant="body1" style={{ fontSize: 26 }}>
                                        <b>Patient-Centered Approach:</b>
                                        <br />
                                        At Omega Clinic, we prioritize the needs and preferences of our patients above all else. 
                                        We believe in fostering strong doctor-patient relationships built on trust, open communication, 
                                        and mutual respect. Our team takes the time to listen to your concerns, answer your questions, 
                                        and involve you in the decision-making process regarding your healthcare.
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <img src={image4} alt="about4" style={{ width: '100%', marginRight: '10px' }} />
                                </Grid>
                            </Grid> */}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default About;
