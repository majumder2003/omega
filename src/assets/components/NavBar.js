import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import GroupIcon from '@mui/icons-material/Group';
import LockIcon from '@mui/icons-material/Lock';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';


function NavBar() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: 'transparent', color: 'black' }}>
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
  );
}

export default NavBar;
