import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';

const Footer = () => {
    return (
        <AppBar position="static" style={{ backgroundColor: '#333', color: '#fff' }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Typography variant="h6" gutterBottom>
                                About Omega Clinic
                            </Typography>
                            <Typography variant="body2" component="p">
                                Omega Clinic is a leading healthcare provider committed to delivering high-quality medical services.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Typography variant="h6" gutterBottom>
                                Contact Us
                            </Typography>
                            <Typography variant="body2" component="p">
                                Address: 1234 Main Street, City, Country
                            </Typography>
                            <Typography variant="body2" component="p">
                                Phone: +1 234 567 8901
                            </Typography>
                            <Typography variant="body2" component="p">
                                Email: info@omegaclinic.com
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" gutterBottom>
                                Connect with Us
                            </Typography>
                            <div>
                                <IconButton aria-label="facebook" color="inherit" component="a" href="https://www.facebook.com">
                                    <Facebook />
                                </IconButton>
                                <IconButton aria-label="instagram" color="inherit" component="a" href="https://www.instagram.com">
                                    <Instagram />
                                </IconButton>
                                <IconButton aria-label="twitter" color="inherit" component="a" href="https://www.twitter.com">
                                    <Twitter />
                                </IconButton>
                                <IconButton aria-label="linkedin" color="inherit" component="a" href="https://www.linkedin.com">
                                    <LinkedIn />
                                </IconButton>
                            </div>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Footer;
