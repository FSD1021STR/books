import React, {useContext} from "react";
import {UserContext} from '../contexts/userContext'

function Userbox() {

    const user = useContext(UserContext)
  
    return (
      <div>
        <p>Hola, {user.name}</p>
        <img src={user.avatar} />
        <hr />
      </div>
    )
  }

export default Userbox;