import React from "react";
import Navbar from "./Navbar.jsx";
import Logo from "./Logo.jsx";
import {Link, useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import  {logout, reset} from '../features/auth//authSclice.js'
//import { setLocation } from "../Home.jsx";

export default function Header({ profile = null }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  function handleTextBoxKey(e) {
    if (e.keyCode === 13) {
      e.preventDefault(); // Ensure it is only this code that runs

      //set location
      const locationString = e.target.value;
      console.log(`location in Header: ${locationString}`);
      localStorage.setItem("location", locationString);
      window.location.replace("/");
    }
  }

  return (
    <header className="header">
      <Logo />

      <Navbar />

      <input
        type="text"
        className="search-box"
        id="search-box"
        placeholder="Search"
        onKeyDown={handleTextBoxKey}
      />

      {user ? (
        <a className="cta" href="#" id="sign-in" onClick={onLogout}>
        <button className='btn' onClick={onLogout}>SIGN OUT</button>
      </a>

        
      ) : (
        <a className="cta" href="#" id="sign-in">
          <Link to='/login'>
          <button>SIGN IN</button>
                </Link>
        </a>
      )}
    </header>
  );
}
