import React from "react";
import VerticalLines from "../vertical-lines";
import "./home-content.scss";

const HomeContent = () => {
  return (
    <div className="content">
      <VerticalLines />
      <h1>Andrei Vlasov.</h1>
      <div>
        <hr />
        <h2>Web Developer Portfolio.</h2>
      </div>
    </div>
  );
};

export default HomeContent;
