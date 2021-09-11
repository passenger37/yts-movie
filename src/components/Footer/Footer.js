import React from 'react';
import {NavLink} from 'react-router-dom';
import './Footer.css';

class Footer extends React.Component{
  render(){
    return(
      <div className="footer">
        <div className="footer-1">
            <small>Anand Singh</small>
            <small>anandsingh7571970002@gmail.com</small> <br/>
            <small>"Still much more to do"</small>
        </div>
        <div className="footer-2">
          {/* <NavLink to="linkedin.com/in/anand-singh-766109174"><i className="fa fa-linkedin"></i></NavLink> <br/>
          <NavLink to="https://github.com/passenger37" ><i className="fa fa-github"></i></NavLink> */}
          <a href="linkedin.com/in/anand-singh-766109174"><i className="fa fa-linkedin" ></i></a> <br/> 
           <a href="https://github.com/passenger37"><i className="fa fa-github"></i></a> 

           {/* 
           
           TODO: External Link for linked in and github
           
           <Route path='/privacy-policy' component={() => { 
     window.location.href = 'https://example.com/1234'; 
     return null;
}}/>
           
           
           */}
        </div>
      </div>
    );
  }
}

export default Footer;
