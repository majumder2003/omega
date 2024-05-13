import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import App from '../../App';
import LoadGif from '../images/heart-load.gif';

const Loader = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <img src={LoadGif} alt="Loading..." />
      {/* <CircularProgress /> */}
    </Grid>
  );
};

const Load = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate app loading for 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? <Loader /> : <App />}
    </>
  );
};

export default Load;
