import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//import Api from "./api.jsx";
import Header from "./components-home/Header.jsx";
import Home from "./pages/Home.jsx";
import Login from './pages/Login'
import Register from './pages/Register'
import MapPage from "./pages/MapPage.jsx";

export default function App() {
  //console.log("null localstorage: " + localStorage.getItem("e"));
  const location = localStorage.getItem("location");
  !(location != null) && localStorage.setItem("location", "toronto");
  return (
    <>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home location={location} />} />
        <Route path="/toronto" element={<Home location={"toronto"} />} />
        
        {/*<Route path="/apii" element={<Api />} />*/}
        <Route path="/map" element={<MapPage />} />
        <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
      </Routes>
      
    </>
  );
}
