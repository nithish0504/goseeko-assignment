import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function create_course(item) {
  return <div className="rect194">{item}</div>;
}
function Quotes() {
  const promise = axios
    .get("http://localhost:3000/courses", {
      crossdomain: true,
    })
    .then((response) => response.data);
  return promise;
}

export default Quotes;
