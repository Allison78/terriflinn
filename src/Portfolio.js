import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import LightBox from './LightBox';
import './Portfolio.scss';

const imageArray = [...Array(12).keys()];

class Portfolio extends Component {
  state = {
    open: false,
    imgNo: '1',
  }

  handleOpen = (imgNo) => {
    this.setState({
      open: true,
      imgNo,
    });
  }

  navigate = (direction) => {
    let imgNo = this.state.imgNo;
    if(direction === 'forward') {
      imgNo = parseInt(this.state.imgNo, 10) === imageArray.length ?
        '1' : `${parseInt(this.state.imgNo, 10) + 1}`;
    } else {
      imgNo = parseInt(this.state.imgNo, 10) === 1 ?
        `${imageArray.length}` : `${parseInt(this.state.imgNo, 10) - 1}`;
    }
    this.setState({
      imgNo,
    });
  }

  handleClose = () => {
    this.setState({
      open: false,
      imgNo: '1',
    });
  }
  render() {
    return (
      <div>
        <Fragment>
          <div className="grid-container">
            <Grid container spacing={24}>
              {imageArray.map(img => (
                <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={img}>
                  <button onClick={() => this.handleOpen(`${img + 1}`)} className="tn-button">
                    <img
                      src={`images/portfolio/${img + 1}.jpg`}
                      alt={`portfolio-${img + 1}`}
                      className="portfolio-thumbnail"
                    />
                  </button>
                </Grid>
              ))}
            </Grid>
          </div>
        </Fragment>
        <Fragment>
          <LightBox
            open={this.state.open}
            handleClose={this.handleClose}
            imgNo={this.state.imgNo}
            navigate={this.navigate}
          />
        </Fragment>
      </div>
    );
  }
} 

export default Portfolio;
