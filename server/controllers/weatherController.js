const axios = require('axios');
const { text } = require('express');

let URLbase =
  "http://api.weatherapi.com/v1/forecast.json?key=<key>&q=<location>&aqi=no&days=<days>";
const apiKey = process.env.WEATHER_API_KEY;


//@desc    Fetch weather data
//@route   GET /api/weather
//@access  Private
const fetchWeather = async (req, res)=>{

    let locationStr = req.query.location;

    console.log(`LOCATION: {${locationStr}}`)

    if(locationStr){
        const URL = URLbase.replace("<key>", apiKey)
    .replace("<location>", locationStr)
    .replace("<days>", 14);

    //console.log(`URL: {${URL}}`)

    try{
        const result = await axios.get(URL);
        //console.log("AXIOS RESPONSE: "+JSON.stringify(result))
        if(result.data){
            res.status(200).json(result.data);
        }else{
            res.status(500)
        }
        }catch(err){
            console.log(err)
        }
    }else{
        res.status(400).json({text: 'Provide a valid location string'})
    }
    
    
    

    
}

module.exports = {fetchWeather}