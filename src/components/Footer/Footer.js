import React from 'react';
import {NavLink} from 'react-router-dom';
import './Footer.css';

class Footer extends React.Component{
  render(){
    return(
      <div className="footer">
        <div className="footer-1">
            <small>Anand Singh</small>
            <small>singh.anand.225409@gmail.com</small> <br/>
            <small>"Still much more to do"</small>
        </div>
        <div className="footer-2">
          <a href="https://linkedin.com/in/anand-singh-766109174" target="_blank"><i className="fa fa-linkedin"></i></a> <br/>
          <a href="https://github.com/passenger37" target="_blank"><i className="fa fa-github"></i></a>
        </div>
      </div>
    );
  }
}

export default Footer;
