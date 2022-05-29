// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require("body-parser");

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

const port = 8000;

// Setup Server
const server = app.listen(port, listening)

// Callback to debug
function listening() {
    console.log('servier is running');
    console.log(`Server is running on localhost: ${port}`);
}


// GET request from getWeatherData()
app.get("/getWeatherData", (req, res) => {
    res.send(data);
    console.log(data);
})

// POST request from postData()
app.post("/addData", (req, res) => {
    projectData['temp'] = req.body.temp;
    projectData['feeling'] = req.body.feeling;
    projectData['date'] = req.body.date;
    console.log(req.body);
    res.send(projectData);
})

// GET request from updateWeatherUI()
app.get("/UpdateUI", (req, res) => {
    res.send(projectData);
})


// in the terminal, run 'node -v' to check th vesion of node in your system.
// 'npm install express'

// 'npm install cors'
// 'npm install body-parser'

// then navigate to `fend-refresh-2019\projects\weather-journal-app` 
// and run the server: `node .\server.js`