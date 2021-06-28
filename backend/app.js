const express = require("express");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

//Initializing uri
const uri =
  "mongodb+srv://nithish0504:hello@covid-assignment.lb8rm.mongodb.net/goseeko?retryWrites=true&w=majority";
//Connecting mongodb atlas db
mongoose.connect(
  uri,
  { useNewUrlParser: true },
  { useUnifiedTopology: true },
  { serverSelectionTimeoutMS: 5000 },
  { socketTimeoutMS: 45000 }
);
var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
//Initalizing server port
app.listen(3000, () => console.log("Server Running at http://localhost:3000/"));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

function convertCourseObjectToCourse(obj, arr) {
  arr.push(obj.course);
}

//Get Users API Start
app.get("/courses", async (request, response) => {
  let courses_array = await db
    .collection("course")
    .find({}, { course: 1 })
    .toArray();

  let result_array = [];
  courses_array.map((eachcourse) =>
    convertCourseObjectToCourse(eachcourse, result_array)
  );

  response.send(result_array);
});

//Get Users API End
