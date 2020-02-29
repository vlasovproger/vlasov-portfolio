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
            A responsible Frontend developer specializing in React. Has
            experience working with ES6+ syntax, Next Js, Redux, MobX, SCSS,
            Webpack, Gulp, etc. The reason for finding a job is to develop
            myself as a specialist. Any suggestions are interesting. I treat the
            work very responsibly. Always bring what I started to the end. At
            the moment I am developing projects to fill the portfolio, including
            3 progressive web applications.
          </p>
          <h5>Stack of technologies:</h5>
          <ul className="stack">
            <li>
              <a
                href="https://www.typescriptlang.org/"
                aria-label="TypeScript"
                target="_blank"
                rel="noopener"
              >
                TypeScript
              </a>
            </li>
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
