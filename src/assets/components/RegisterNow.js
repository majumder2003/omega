import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, ToggleButton, ToggleButtonGroup, Grid } from '@mui/material';

const RegisterNow = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        chamberAddress: '',
        department: '',
        fees: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({
        username: '',
        email: '',
        phone: '',
        chamberAddress: '',
        department: '',
        fees: '',
        password: '',
        confirmPassword: '',
    });
    const [userType, setUserType] = useState('patient');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const handleUserTypeChange = (event, newUserType) => {
        if (newUserType) {
            setUserType(newUserType);
        }
    };

    const handlePatientSubmit = (formData) => {
        const { username, email, phone, password, confirmPassword } = formData;
        // Submit only patient data
        console.log('Patient form submitted:', { username, email, phone, password, confirmPassword });
    };

    const handleDoctorSubmit = (formData) => {
        // Logic to submit doctor data
        console.log('Doctor form submitted:', formData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, email, phone, chamberAddress, department, fees, password, confirmPassword } = formData;
        let newErrors = {};
        if (!username) {
            newErrors.username = 'Username is required';
        }
        if (!email) {
            newErrors.email = 'Email is required';
        }
        if (!phone) {
            newErrors.phone = 'Phone is required';
        }
        if (userType === 'doctor') {
            if (!chamberAddress) {
                newErrors.chamberAddress = 'Chamber Address is required';
            }
            if (!department) {
                newErrors.department = 'Department is required';
            }
            if (!fees) {
                newErrors.fees = 'Fees is required';
            }
        }
        if (!password) {
            newErrors.password = 'Password is required';
        } else if (password !== confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            if (userType === 'patient') {
                handlePatientSubmit(formData);
            } else if (userType === 'doctor') {
                handleDoctorSubmit(formData);
            }
        }
    };

    return (
        <Grid container justifyContent="center" alignItems="center" style={{ height: '110vh' }}>
            <Grid item xs={12} sm={8} md={4}>
                <Card sx={{ boxShadow: 4 }}>
                    <CardContent>
                        <ToggleButtonGroup
                            value={userType}
                            exclusive
                            onChange={handleUserTypeChange}
                            aria-label="user type"
                            style={{ marginBottom: '1rem' }}
                        >
                            <ToggleButton value="patient" aria-label="patient">
                                Patient
                            </ToggleButton>
                            <ToggleButton value="doctor" aria-label="doctor">
                                Doctor
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <Typography variant="h5" gutterBottom>
                            Register as a {userType.charAt(0).toUpperCase() + userType.slice(1)}
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                label="Username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                error={!!errors.username}
                                helperText={errors.username}
                                margin="normal"
                            />
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
                                label="Phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                error={!!errors.phone}
                                helperText={errors.phone}
                                margin="normal"
                            />
                            {userType === 'doctor' && (
                                <>
                                    <TextField
                                        fullWidth
                                        label="Chamber Address"
                                        name="chamberAddress"
                                        value={formData.chamberAddress}
                                        onChange={handleChange}
                                        error={!!errors.chamberAddress}
                                        helperText={errors.chamberAddress}
                                        margin="normal"
                                    />
                                    <TextField
                                        fullWidth
                                        label="Department"
                                        name="department"
                                        value={formData.department}
                                        onChange={handleChange}
                                        error={!!errors.department}
                                        helperText={errors.department}
                                        margin="normal"
                                    />
                                    <TextField
                                        fullWidth
                                        label="Fees"
                                        name="fees"
                                        value={formData.fees}
                                        onChange={handleChange}
                                        error={!!errors.fees}
                                        helperText={errors.fees}
                                        margin="normal"
                                    />
                                </>
                            )}
                            <TextField
                                fullWidth
                                label="Password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                error={!!errors.password}
                                helperText={errors.password || errors.confirmPassword}
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                label="Confirm Password"
                                name="confirmPassword"
                                type="password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                error={!!errors.confirmPassword}
                                helperText={errors.confirmPassword}
                                margin="normal"
                            />
                            <Button type="submit" variant="contained" color="primary" fullWidth>
                                Register
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default RegisterNow;
