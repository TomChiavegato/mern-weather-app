const express = require('express');
const router = express.Router();

let URLbase =
  "http://api.weatherapi.com/v1/forecast.json?key=<key>&q=<location>&aqi=no&days=<days>";
const apiKey = "8635ff64de8d4ae1b2c54606231912 ";  //TODO change to get fom process.env

router.get("/api", (req, res)=>{
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})

router.get("/api/get-weather", async (req, res)=>{
    let data=null;
    let locationStr = req.query.location;
    //console.log(`locationStr: {${locationStr}}`)

    const URL = URLbase.replace("<key>", apiKey)
    .replace("<location>", locationStr)
    .replace("<days>", 14);

    //console.log(`URL: {${URL}}`)

    const fetchData = async () => {
        const result = await fetch(URL);
        const jsonResult = await result.json();
        //console.log(jsonResult);
        res.json(jsonResult);
      };
    fetchData();
});

module.exports = router;