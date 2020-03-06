import React from "react";
import Layout from "../components/layout";
import ContactContent from "../components/contact-content";
import { NextPage } from "next";

const About: NextPage = () => {
  return (
    <Layout>
      <ContactContent />
    </Layout>
  );
};

export default About;
