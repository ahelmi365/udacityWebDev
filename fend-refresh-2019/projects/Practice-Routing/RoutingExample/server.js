/* Empty JS object to act as endpoint for all routes */
projectData = {
  name: "ali",
  age: "35"
};

// TODO-Express to run server and routes
const express = require("express");

// TODO-Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

// TODO-Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

/* Initializing the main project folder */
app.use(express.static("Practice-Routing"));

const port = 5000;

const server = app.listen(port, listening);

function listening() {
  console.log("server running");
  console.log(`running on localhost: ${port}`);
}

// respond returns the JavaScript object named 'projectData' when a GET request is made to the homepage
// app.get("/", function (req, res) {
//   console.log(req);
//   res.send(projectData.name);
// });

// POST method route
// app.post("/", function (req, res) {
//   res.send("Post received");
// });

// const data = {
//   movie_name: "",
//   movie_score: ""
// };

app.post("/", addMovie);

function addMovie(req, res) {
  const data = [];
  // console.log(req.body)

  data.push(req.body);
  // res.send(data)
  console.log(data);

}