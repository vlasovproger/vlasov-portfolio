import React from "react";
import VerticalLines from "../vertical-lines";
import "./contact-content.scss";

const ContactContent: React.FC = () => {
  return (
    <div className="contact-content">
      <VerticalLines />
      <div className="wrapper">
        <h1 className="page-title">Contact.</h1>
        <div className="page-subtitle">
          <hr />
          <h4>Contact me for your projects</h4>
          <hr />
        </div>
        <div className="info">
          <picture>
            <source
              type="image/webp"
              srcSet="/images/webp/contact-image.webp"
            />
            <img alt="contact image" src="/images/default/contact-image.jpg" />
          </picture>
          <h1>Vlasov</h1>
          <ul className="contacts">
            <li>vlasovproger@gmail.com</li>
            <li>
              <a
                href="https://www.linkedin.com/in/vlasovproger/"
                aria-label="linkedin"
                target="_blank"
                rel="noopener"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://t.me/vlasov3087"
                aria-label="telegram"
                target="_blank"
                rel="noopener"
              >
                Telegram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
