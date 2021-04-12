import React from "react";
import VerticalLines from "../vertical-lines";
import "./work-details-content.scss";
import { IWorkDetails } from "../../interfaces";

interface Props {
  currentWork: IWorkDetails;
}

const WorkDetailsContent: React.FC<Props> = ({ currentWork }) => {
  if (currentWork && currentWork.id) {
    const {
      title,
      subtitle,
      descrption,
      client,
      website,
      category,
      imageWebp,
      imageDefault,
      github,
      stack
    } = currentWork;

    return (
      <div className="work-details-content">
        <VerticalLines />
        <div className="wrapper">
          <h1 className="page-title">{title}</h1>
          <div className="page-subtitle">
            <hr />
            <h4>{subtitle}</h4>
            <hr />
          </div>
          <div className="info">
            <ul className="about-project">
              <li>
                <h4>Client</h4>
                <p>{client}</p>
              </li>
              <li>
                <h4>Website</h4>
                <a
                  href={website}
                  aria-label="project link"
                  target="_blank"
                  rel="noopener"
                >
                  View
                </a>
              </li>
              <li>
                <h4>Category</h4>
                <p>{category}</p>
              </li>
              <li>
                <h4>Github</h4>
                <a
                  href={github}
                  aria-label="github"
                  target="_blank"
                  rel="noopener"
                >
                  View
                </a>
              </li>
            </ul>

            <picture>
              <source type="image/webp" srcSet={imageWebp} />
              <img alt="screenshot" src={imageDefault} />
            </picture>
            <p className="descrption">{descrption}</p>
            <h5>Using technologies:</h5>
            <ul className="stack">
              {stack.map(tech => {
                return <li key={tech}>{tech}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>loading...</div>;
  }
};

export default WorkDetailsContent;
