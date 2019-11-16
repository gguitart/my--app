// import { func } from "prop-types";

import React from 'react';
import './style.css'
// import ReactDOM from 'react-dom';
// import Button from '@material-ui/core/Button';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/Button';
// import MenuIcon from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Button';
// import classes from '@material-ui/core/Button';

  

// <AppBar position="static">
//   <Toolbar>
//     <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//       <MenuIcon />
//     </IconButton>
//     <Typography variant="h6" className={classes.title}>
//       News
//     </Typography>
//     <Button color="inherit">Login</Button>
//   </Toolbar>
// </AppBar>

function Navbar (props) {
  return (
    <div className="topPage" 
    >
    <h1>NAVBAR BABY</h1>
  <h2>Score: {props.playerScore}</h2>
</div>
  )
}
export default Navbar;