import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import { Heading1, Heading2 } from "./components/Heading";
import SVG1 from "./components/Section-1-SVG";
import SVG2 from "./components/Section-2-SVG-int";
import SVG3 from "./components/Section-2-SVG.fast";
import SVG4 from "./components/Section-2-SVG-responsive";
// import SVG5 from "./components/Section-3-SVG";
// import SVG6 from "./components/Section-4-SVG";
// import SVG7 from "./components/Section-4-SVG2";
import Card from "./components/Card";
import Project from "./components/Project";
import Form from "./components/Form";
function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="section section-1">
        <h1 className="heading-name">
          <span className="heading-name_first">Mikey</span>
          <br /> Robinson
        </h1>
        <h3 className="heading-sub">
          I make websites, usually with
          <span className="heading-sub-lang"> Javascript.</span>
        </h3>
      </section>
      <SVG1 />
      <section className="section section-2">
        <Heading1 text="What I Do" row="1" col="2 / 5" />
        <Card
          num="2"
          SVGNum={<SVG2 className="Card-SVG" />}
          heading="Intuitive"
          paraText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <Card
          num="3"
          SVGNum={<SVG3 className="Card-SVG" />}
          heading="Fast"
          paraText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <Card
          num="4"
          SVGNum={<SVG4 className="Card-SVG" />}
          heading="Responsive"
          paraText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </section>

      <section className="section section-3">
        <Heading1 text="Projects" position="translate(-50%, 100%)" />
        <div className="Project-container">
          <Project image="./img/hyvest.png" alt="Hyvest Inc" hasSVG={false} />
          <Project
            image="./img/safari.png"
            alt="Acacia Garden Safari Tours"
            hasSVG={false}
          />
          <Project
            image="./img/coming-soon.png"
            alt="Coming Soon!"
            className="Project-image_svg"
            hasSVG={true}
          />
          <Project
            image="./img/coming-soon.png"
            alt="Coming Soon!"
            className="Project-image_svg"
            hasSVG={true}
          />
        </div>
      </section>
      <section className="section section-4">
        <Heading1
          text="Contact"
          color="white"
          position="translate(-50%, -140%)"
        />
        <Form />
      </section>
    </div>
  );
}

export default App;


  /* <TwitterIcon />
          <GithubIcon />
          <LinkedinIcon /> */

