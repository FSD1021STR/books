import React,{useContext} from "react";
import {UserContext} from "../contexts/userContext";

function Main() {

    const user = useContext(UserContext)
    
    return (
      <div className='main'>
        <p>{user.name} {user.surname}</p>
        <p>Tienes {user.posts} posts</p>
        <p>Tienes {user.likes} likes</p>
      </div>
    )
  }

export default Main;