const router = require("express").Router();
require("dotenv").config();
const axios = require("axios");

router.get("/", (req, res) => {
  res.render("index", {
    city: null,
    des: null,
    icon: null,
    temp: null,
  });
});

router.post("/", async (req, res) => {
  const city = req.body.city;
  const url_api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;

  try {
    axios
      .get(url_api, (res) => {
        res.json();
      })
      .then((data) => console.log(data.name));
  } catch (err) {
    res.render("index", {
      city: "something wrong",
      des: null,
      icon: null,
      temp: null,
    });
  }
});

module.exports = router;
