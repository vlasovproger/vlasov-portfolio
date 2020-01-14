import React from "react";
import VerticalLines from "../vertical-lines";
import "./about-content.scss";

const AboutContent = () => {
  return (
    <div className="about-content">
      <VerticalLines />
      <div className="wrapper">
        <h1 className="page-title">About.</h1>
        <div className="page-subtitle">
          <hr />
          <h4>See some info about me</h4>
          <hr />
        </div>
        <div className="info">
          <picture>
            <source type="image/webp" srcSet="/images/webp/about-image.webp" />
            <img alt="It's me" src="/images/default/about-image.jpg" />
          </picture>
          <h1>Vlasov A.</h1>
          <ul className="professions">
            <li>Frontend Developer</li>
          </ul>
          <p className="information">
            Hi, my name is Andrei Vlasov and I am Frontend developer from
            Belarus. I am 17 but I have been programming for 3 years already. I
            love development in JavaScript and everything connected with it.
            React is my main development tool. I make progressive web
            applications using Next.js and Mobx/Redux.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
