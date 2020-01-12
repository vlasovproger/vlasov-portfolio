import React from "react";
import "./contact-content.scss";

const ContactContent = () => {
  return (
    <div className="contact-content">
      <div className="wrapper">
        <h1 className="page-title">Contact.</h1>
        <div className="page-subtitle">
          <hr />
          <h4>Contact me for your projects</h4>
          <hr />
        </div>
        <div className="info">
          <img src="/images/contact-image.jpg" alt="contact image" />
          <h1>Vlasov</h1>
          <ul className="contacts">
            <li>
              <a href="https://t.me/vlasov3087">t.me/vlasov3087</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
