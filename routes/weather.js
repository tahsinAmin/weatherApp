const router = require("express").Router();
const axios = require("axios");
require("dotenv").config();

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/", (req, res) => {
  const city = req.body.city;
  // const url_api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
  const url_api = `http://api.weatherapi.com/v1/current.json?key=e6a73467a3e94aa184c122435212812&q=${city}&aqi=no`;
  axios
    .get(url_api, (res) => {
      res.json();
    })
    .then((data) => console.log(data));
});

module.exports = router;
