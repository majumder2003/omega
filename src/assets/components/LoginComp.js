import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, Grid } from '@mui/material';
import { Google, Phone, Lock } from '@mui/icons-material';
import '../css/main.css';

const LoginComp = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = formData;
        let newErrors = {};
        if (!email) {
            newErrors.email = 'Email is required';
        }
        if (!password) {
            newErrors.password = 'Password is required';
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            // Submit the form
            console.log('Form submitted:', formData);
        }
    };

    const handleGoogleLogin = () => {
        // Handle Google login
        console.log('Login with Google');
    };

    const handlePhoneLogin = () => {
        // Handle phone login
        console.log('Login with Phone');
    };

    const handleOTPLogin = () => {
        // Handle OTP login
        console.log('Login with OTP');
    };

    return (
        <Grid container justifyContent="center" alignItems="center" height="83vh">
            <Grid item xs={12} sm={8} md={4}>
                <Card variant="outlined" sx={{ boxShadow: 4 }}>
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                            Login
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                error={!!errors.email}
                                helperText={errors.email}
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                label="Password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                error={!!errors.password}
                                helperText={errors.password}
                                margin="normal"
                            />
                            <Button type="submit" variant="contained" color="success" fullWidth>
                                <Lock /> Login with Password
                            </Button>
                        </form>
                        <Typography variant="subtitle1" align="center" gutterBottom>
                            OR
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={4}>
                                <Button onClick={handleGoogleLogin} variant="outlined" fullWidth>
                                    <Google /> Google
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Button onClick={handlePhoneLogin} variant="outlined" fullWidth>
                                    <Phone /> Phone
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Button onClick={handleOTPLogin} variant="outlined" fullWidth>
                                    <Lock /> OTP
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default LoginComp;
