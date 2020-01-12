import React from "react";
import "./error-content.scss";

const ErrorContent = () => {
  return (
    <div className="error-content">
      <h1>404</h1>
      <h2>Page Not Found.</h2>
      <div>
        <hr />
        <h4>There is no such page</h4>
        <hr />
      </div>
    </div>
  );
};

export default ErrorContent;
