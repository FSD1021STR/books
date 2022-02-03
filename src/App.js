import logo from './logo.svg';
import './App.css';
import React, {createContext, useContext, useEffect, useState} from "react";
import {UserContext} from './contexts/userContext'
import Layout from './components/layout';

function App() {


  const [UserLogged,setUserLogged] = useState({});

  //useEffect(()=>{
    fetch('https://randomuser.me/api/')
      .then((response)=>response.json())
      .then((json)=>setUserLogged({
        "name": json.results[0].name.first,
        "surname": json.results[0].name.last,
        "avatar": json.results[0].picture.thumbnail,
        "likes": 100,
        "posts": 3200
      }))
      .catch((error) => console.log(error))
    //});

  return (
    <UserContext.Provider value={UserLogged}>
      <Layout />
    </UserContext.Provider>
  );
}





export default App;
