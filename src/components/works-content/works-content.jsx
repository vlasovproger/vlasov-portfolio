import React from "react";
import WorksList from "../works-list"
import "./works-content.scss";

const WorksContent = () => {
  return (
    <div className="works-content">
      <div className="wrapper">
        <h1 className="page-title">Works</h1>
        <div className="page-subtitle">
          <hr />
          <h4>See my projects</h4>
          <hr />
        </div>
        <WorksList />
      </div>
    </div>
  );
};

export default WorksContent;
