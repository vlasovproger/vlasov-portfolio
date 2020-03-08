import React from "react";
import VerticalLines from "../vertical-lines";
import "./home-content.scss";

const HomeContent: React.FC = () => {
  return (
    <div className="content">
      <VerticalLines />
      <h1>Andrei Vlasov.</h1>
      <div className="sub">
        <hr />
        <h2>Web Developer Portfolio.</h2>
      </div>
    </div>
  );
};

export default HomeContent;
