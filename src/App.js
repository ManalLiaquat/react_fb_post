import React, { Component } from 'react';
import logo from './logo.svg';
import SimpleAppBar from "./Components/Navbar/Navbar";
import FBPost from "./Components/FB_Post/FB_Post";

// material ui
import { Button, Typography, Grid, Paper } from "@material-ui/core";
import NavigateNext from "@material-ui/icons/NavigateNext";
// material ui

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    const paperStyle = { padding: "20px", margin: "20px" };
    return (
      <div>
        <SimpleAppBar />
        <Grid container spacing={24} style={paperStyle} direction="row" justify="space-evenly" alignItems="center">
          {/* <Grid item xs={6}>
            <Paper style={paperStyle}>Inputs here</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper style={paperStyle}>
            </Paper>
          </Grid> */}
          <FBPost></FBPost>
        </Grid>
        {/* <Button variant="contained" color="primary" >Click</Button> */}
      </div>
    );
  }
}

export default App;
