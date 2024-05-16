import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, ListItemIcon, ThemeProvider, createTheme, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import '../css/custom.css';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import GroupIcon from '@mui/icons-material/Group';
import LockIcon from '@mui/icons-material/Lock';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

function NavBar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [darkTheme, setDarkTheme] = useState(true); // Initially set to dark theme

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const theme = createTheme({
    palette: {
      mode: darkTheme ? 'dark' : 'light', // Toggle between dark and light mode
      primary: {
        main: darkTheme ? '#000000' : '#ffffff', // Black or primary color
      },
      secondary: {
        main: darkTheme ? '#ffffff' : '#ffffff', // White color for both themes
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Omega Clinic
            </Typography>
            <Button color="inherit" onClick={toggleTheme}>
              {darkTheme ? 'Light Theme' : 'Dark Theme'}
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer}>
          <List>
            <ListItem button component={Link} to="/">
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/service">
              <ListItemIcon><LocalHospitalIcon /></ListItemIcon>
              <ListItemText primary="Services" />
            </ListItem>
            <ListItem button component={Link} to="/doctors">
              <ListItemIcon><GroupIcon /></ListItemIcon>
              <ListItemText primary="Doctors" />
            </ListItem>
            <ListItem button component={Link} to="/login">
              <ListItemIcon><LockIcon /></ListItemIcon>
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem button component={Link} to="/register">
              <ListItemIcon><AssignmentIndIcon /></ListItemIcon>
              <ListItemText primary="New Here" />
            </ListItem>
            <ListItem button component={Link} to="/appointment">
              <ListItemIcon><CalendarTodayIcon /></ListItemIcon>
              <ListItemText primary="Book Appointment" />
            </ListItem>
          </List>
        </Drawer>
      </div>
    </ThemeProvider>
  );
}

export default NavBar;
