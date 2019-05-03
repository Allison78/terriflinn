import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import descriptions from './descriptions';
import './Lightbox.scss';

const LightBox = ({ open, handleClose, imgNo, navigate }) => (
  <Modal
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
    open={open}
    onClose={handleClose}
    className="lightbox"
  >
    <div className="lightbox-container">
      <div className="portfolio">
        <div className="icon-container">
          <IconButton
            color="primary"
            aria-label="previous"
            className="nav-bar"
            onClick={() => navigate('backward')}
          >
            <Icon fontSize="large">chevron_left</Icon>
          </IconButton>
        </div>
        <div className="portfolio-img-container">
          <div className="portfolio-img">
            <img src={`images/portfolio/${imgNo}.jpg`} alt={imgNo} className="img" />
          </div>
          <div className="descriptions">
            <div>{descriptions[imgNo].client}</div>
            <div>{descriptions[imgNo].description}</div>
            <div>{descriptions[imgNo].skills.join(' ~ ')}</div>
          </div>
        </div>
        <div className="icon-container">
        <IconButton
            color="primary"
            aria-label="next"
            className="nav-bar"
            onClick={() => navigate('forward')}
          >
            <Icon fontSize="large">chevron_right</Icon>
          </IconButton>
        </div>
      </div>
      
    </div>
    
  </Modal>
);

LightBox.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  imgNo: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default LightBox;
