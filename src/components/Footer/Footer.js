import React from 'react';
import {NavLink} from 'react-router-dom';
import './Footer.css';

class Footer extends React.Component{
  render(){
    return(
      <div className="footer">
        <div className="footer-1">
            <small>Akshat Mittal</small>
            <small>akshatmittal.0007@gmail.com</small> <br/>
            <small>"Still much more to do"</small>
        </div>
        <div className="footer-2">
          <a href="https://linkedin.com/in/akshat-mittal-4604301b6" target="_blank"><i className="fa fa-linkedin"></i></a> <br/>
          <a href="https://github.com/drifter089" target="_blank"><i className="fa fa-github"></i></a>
        </div>
      </div>
    );
  }
}

export default Footer;
