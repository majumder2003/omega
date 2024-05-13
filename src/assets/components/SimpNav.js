import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import "../css/main.css";
function NavBar() {
    return (
        <AppBar position="fixed" style={{ backgroundColor: 'transparent', boxShadow: 'none', color: 'black' }} xs={6} md={0}>
            <Toolbar style={{ justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Omeg@
                    </Typography>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/service">Services</Button>
                    <Button color="inherit" component={Link} to="/doctors">Doctors</Button>
                    <Button color="inherit" component={Link} to="/login">Login</Button>
                    <Button color="inherit" component={Link} to="/register">New Here?</Button>
                </div>
                <div>
                    <Button className='blinking' color="inherit" component={Link} to="/appointment">Book Appointment</Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar