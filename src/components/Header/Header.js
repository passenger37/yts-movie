import React, { Fragment } from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';

class header extends React.Component{
  render(){

    return(
      <Fragment >
        <div className='header-container'>
          <NavLink to="/" className="navlink">Logo</NavLink>
          <NavLink to="/login" className="navlink">Login </NavLink>
          <NavLink to="/Signup" className="navlink">Signup</NavLink>
        </div>
      </Fragment>
    );
  }
}


export default header;
