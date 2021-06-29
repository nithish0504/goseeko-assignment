import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quotes from "./quotes";
import { Steps } from "rsuite";
import * as l from "./test.js";
import Search from "./components/search.js";
import Nav from "./components/nav.js";
import Person from "./components/person.js";

function App() {
  const [result, setData] = useState([]);
  const [course, setcourse] = useState("");
  const [university_array, setUniversity] = useState([]);
  let count = 0;
  useEffect(() => {
    let courses = Quotes();
    courses.then(function (result) {
      console.log(result);
      setData(result);
    });
  }, ["test1"]);

  async function onclickevents(event) {
    let c = event.currentTarget.textContent;
    let t = await l.handleclickevents(event).then(function (res) {
      return res;
    });
    setUniversity(t);
    setcourse(c);
  }

  const [step, setStep] = React.useState(0);
  const onChange = (nextStep) => {
    setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
  };

  const onNext = () => onChange(step + 1);
  const onPrevious = () => onChange(step - 1);

  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossorigin="anonymous"
      ></link>
      <script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
        crossorigin="anonymous"
      ></script>
      <Nav />
      <header className="App-header">
        <div className="pdiv">
          <Person />
          <hr className="line1"></hr>
          <h1 className="name">Vaibhaw</h1>
          <p className="npara">Dummy text</p>
          <p className="npara1">
            lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <div className="rect1"></div>
          <div className="rect268"></div>
        </div>
        <div className="rightdiv">
          <h1 className="rhead1">Try SmartStudy</h1>
          <hr className="line"></hr>
          <div className="rdiv alc">
            <div className="reclipse1 alc">
              <svg
                width="8"
                height="6"
                viewBox="0 0 8 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="v4 "
              >
                <path
                  d="M1.02869 2.54276L2.62869 4.5999L7.20012 1.3999"
                  stroke="#0C0CBF"
                />
              </svg>
            </div>
            <p className="ps">step 1</p>
          </div>

          <p className="cour">Course</p>
          <div className="rdiv r1">
            {result.map((e) => (
              <div className="rect194" onClick={onclickevents}>
                {e}
              </div>
            ))}
          </div>

          <div className="dn" id="toggle_div">
            <div className="rdiv r3">
              <p className="st">stream</p>
              <p className="vsp">see all</p>
            </div>
            <div id="streams_div"></div>
          </div>
          <div className="rdiv alc">
            <div className="reclipse1"></div>
            <p className="ps">step 2</p>
          </div>
          <p className="cour">Your University</p>
          <Search />
          <div className="rdiv alc">
            <div className="reclipse1"></div>
            <p className="ps">step 3</p>
          </div>
          <p className="cour">Your Semester</p>
          <div className="rdiv alc">
            <div className="reclipse1"></div>
            <p className="ps">step 4</p>
          </div>
          <p className="cour" id="result" onClick={l.heaven}>
            Try for free
          </p>
        </div>
        <script src="./test.js"></script>
      </header>
    </div>
  );
}

export default App;
