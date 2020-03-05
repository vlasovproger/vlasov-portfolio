import React, { useEffect } from "react";
import "./spinner.scss";

const Spinner = () => {
  useEffect(() => {
    const preloader = document.getElementById("preload");
    function fadeOutnojquery(el) {
      el.style.opacity = "1";
      const interhellopreloader = setInterval(function() {
        el.style.opacity = (Number(el.style.opacity) - 0.05).toString();
        if (Number(el.style.opacity) <= 0.05) {
          clearInterval(interhellopreloader);
          preloader.style.display = "none";
        }
      }, 16);
    }
    window.onload = function() {
      setTimeout(function() {
        fadeOutnojquery(preloader);
      }, 1000);
    };
  }, []);

  return (
    <div id="preloader">
      <div id="preload"></div>
    </div>
  );
};

export default Spinner;
