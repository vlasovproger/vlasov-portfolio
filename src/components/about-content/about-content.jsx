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
          <h5>Stack of technologies:</h5>
          <ul className="stack">
            <li>
              <a
                href="https://reactjs.org/"
                aria-label="React"
                target="_blank"
                rel="noopener"
              >
                React
              </a>
            </li>
            <li>
              <a
                href="https://mobx.js.org/"
                aria-label="MobX"
                target="_blank"
                rel="noopener"
              >
                MobX
              </a>
            </li>
            <li>
              <a
                href="https://redux.js.org/"
                aria-label="Redux"
                target="_blank"
                rel="noopener"
              >
                Redux
              </a>
            </li>
            <li>
              <a
                href="https://nextjs.org/"
                aria-label="Next"
                target="_blank"
                rel="noopener"
              >
                Next
              </a>
            </li>
            <li>
              <a
                href="https://sass-lang.com/"
                aria-label="SCSS"
                target="_blank"
                rel="noopener"
              >
                SCSS
              </a>
            </li>
            <li>
              <a
                href="https://gulpjs.com/"
                aria-label="Gulp"
                target="_blank"
                rel="noopener"
              >
                Gulp
              </a>
            </li>
            <li>
              <a
                href="https://webpack.js.org/"
                aria-label="Webpack"
                target="_blank"
                rel="noopener"
              >
                Webpack
              </a>
            </li>
            <li>
              <a
                href="https://www.react-spring.io/"
                aria-label="React-spring"
                target="_blank"
                rel="noopener"
              >
                React-spring
              </a>
            </li>
            <li>
              <a
                href="https://www.andreaverlicchi.eu/lazyload/"
                aria-label="  Vanilla Lazyload"
                target="_blank"
                rel="noopener"
              >
                Vanilla Lazyload
              </a>
            </li>
            <li>
              <a
                href="https://github.com/dmitry-lavrik/smart-grid"
                aria-label="Smart-grid"
                target="_blank"
                rel="noopener"
              >
                Smart-grid
              </a>
            </li>
            <li>Vanilla JavaScript</li>
            <li>CSS3</li>
            <li>HTML5</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
