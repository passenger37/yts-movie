import React, { Fragment } from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';
import icon from  '../../assests/icon.png';
class header extends React.Component{
  render(){

    return(
      <Fragment >
        <div className='header-container'>
          <NavLink to="/" className="navlink" ><img src={icon} alt="icon" className="header_icon"/></NavLink>
          <h1>YtsMovies</h1>
          <div>
            <NavLink to="/login" className="navlink">Login </NavLink>
            <NavLink to="/Signup" className="navlink">Signup</NavLink>
          </div>
        </div>
      </Fragment>
    );
  }
}


export default header;
