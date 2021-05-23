import React from 'react';
import { useHistory } from "react-router-dom";

const LoginRouteHandler = () => {
    if(localStorage.getItem("jwt")) {
      return  ""
    } else {
        return     <li id="login">
        <a href="/login">Log in</a>
    <div className="line"></div>
  </li>
    }
};
const RegRouteHandler = () => {
    if(localStorage.getItem("jwt")) {
      return  ""
    } else {
        return <li id="reg">
        <a href="/reg" id="registration">Registration</a>
        <div className="line"></div>
      </li>
    }
};
const LogoutRouteHandler = () => {
    if(localStorage.getItem("jwt")) {
      return    <li id="logged">
      <a href="/" id="logout" onClick={Logout}>Log out</a>
      <div className="line"></div>
    </li>
    } else {
        return ""
    }
};
const Logout = () => {
    // const history = useHistory();
    localStorage.clear();
    // history.push("/login")
}
const Nav = () => {
    return (
        <header>
        <h1><span>welcome to </span>StudentsApi</h1>
        <nav>
          <ul className="nav-links" id="nav">
            <li>
              <a href="/">Home</a>
              <div className="line"></div>
            </li>
            {/* <li id="login">
              <a href="/login">Log in</a>
              <div className="line"></div>
            </li> */}
            <LoginRouteHandler/>
           <LogoutRouteHandler/>
            <RegRouteHandler />
          </ul>
        </nav>
      </header>
    )
}

export default Nav
