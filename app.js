// nodemon checks all the changes. so, I'm guessing, it is making it dynamic.?

const express = require("express");
const app = express();

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

//  import Route
const weatherRoute = require("./routes/weather");

//  Middleware route
app.use(express.static("public"));
app.use("/", weatherRoute);

// use a view engine
app.set("view engine", "ejs");

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server starting at port ${PORT}`));

// https://www.youtube.com/watch?v=6LaGLqUHKms
// 11:23
