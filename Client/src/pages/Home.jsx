import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

import ReactDOM from "react-dom/client";
import React from "react";

import notFoundErrorIcon from "../assets/not-found.png";

import axios from "axios";
import qs from 'qs'

import Left from "../components-home/Left.jsx";
import Right from "../components-home/Right.jsx";

export default function Home({ location }) {
  const [data, setData] = useState(null);
  const navigate = useNavigate()
  const {user} = useSelector((state)=>state.auth)
  let errorJson = null;

  console.log("location: " + location);

  let error = false;

  useEffect(() => {
    if(!user){
      navigate('/login')
    }

    const URL = "http://localhost:8000/api/weather?location=" + location;

    axios
      .get(URL)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [location, user, navigate]);

  if (data != null) {
    error = data.error != null;
    errorJson = data.error;
    if (!error) {
      localStorage.setItem("lat", data.location.lat);
      localStorage.setItem("lng", data.location.lon);
    }
    console.log(`is error null? (data.error) ${data.error == null}`);
    console.log(`is error null? (error boolean) ${!error}`);
  } else {
    console.log("data is null");
  }

  return !error ? (
    <main className="main">
      {data === null ? (
        <div className="message-container">
          <h1 className="message">Loading...</h1>
        </div>
      ) : (
        <div className="columns">
          <Left
            current={data.current}
            today={data.forecast.forecastday[0]}
            location={data.location}
          />
          <Right forecast={data.forecast} />
        </div>
      )}
    </main>
  ) : (
    <main className="main">
      <div className="message-container">
        <h1 className="message">{errorJson.message}</h1>
        {errorJson.code == 1006 ? (
          <h3 className="error-instructions">
            Make sure you have typed your location in correctly
          </h3>
        ) : (
          <h3 className="error-instructions">
            Something went wrong, try again soon
          </h3>
        )}
        <img className="error-image" src={notFoundErrorIcon} alt="" />
      </div>
    </main>
  );
}
