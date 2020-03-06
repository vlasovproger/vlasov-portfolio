import React from "react";
import Layout from "../components/layout";
import AboutContent from "../components/about-content";
import { NextPage } from "next";

const About: NextPage = () => {
  return (
    <Layout>
      <AboutContent />
    </Layout>
  );
};

export default About;
