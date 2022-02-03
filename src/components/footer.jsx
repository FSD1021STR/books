import React,{useContext} from "react";
import {UserContext} from '../contexts/userContext';

function Footer() {

    const user = useContext(UserContext)
  
    return (
      <div className='footer'>
        <hr />
        <p>Adiós, {user.name}</p>
      </div>
    )
  }

export default Footer;