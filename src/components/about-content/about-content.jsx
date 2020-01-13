import React from "react";
import "./about-content.scss";

const AboutContent = () => {
  return (
    <div className="about-content">
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
            Nulla a tellus eu lacus sagittis luctus. Donec ultricies tempus
            tellus sed tempor. Etiam tristique ipsum nunc, consequat facilisis
            orci pharetra egestas. Nulla ut viverra nunc. Etiam nec libero quam.
            Suspendisse in sapien ullamcorper est aliquet tincidunt id vitae
            ligula. In hac habitasse platea dictumst. Pellentesque sed porttitor
            eros. Pellentesque pulvinar felis cursus lorem maximus, at maximus
            dolor cursus. Nullam ullamcorper tristique est, at rutrum sem
            dignissim eu. Ut id nunc eu diam accumsan aliquam non et nunc.
            Phasellus et iaculis lorem. Aenean eleifend libero sit amet molestie
            viverra. In hac habitasse platea dictumst. Sed euismod erat ac nibh
            tincidunt, eget dictum dui egestas. Aenean at tristique nulla.
            Nullam ante lorem, placerat luctus vulputate eu, convallis vitae
            leo. Curabitur ut eros lectus. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Integer
            laoreet quam id cursus facilisis. In dictum gravida elementum. In
            hac habitasse platea dictumst. Nullam sit amet facilisis diam.
            Curabitur a semper nisi, elementum sodales elit. Sed accumsan
            efficitur lacus eget finibus. Vivamus purus augue, iaculis a euismod
            malesuada, dignissim eu ligula.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
