import React, { Component, Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Portfolio from './Portfolio';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Fragment>
          <AppBar position="static" color="inherit" className="app-bar" >
            <Toolbar className="header">
              <img src="images\header1-1024x342.jpg" alt="terri flinn" className="header-img" />
              <div>
                <Button color="inherit">Home</Button>
                <Button color="inherit">About</Button>
              </div>
            </Toolbar>
          </AppBar>
          <Portfolio handleOpen={this.handleOpen} />
        </Fragment>
      </div>
    );
  }
}

export default App;
