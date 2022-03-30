import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/Layout";
import Status from "../components/Status";
import View from "../components/View";

const AboutPage = () => {
  return (
    <Layout>
      <Status />
      <View title="About">
        <p>
          This is a statically generated page that is always publicly visible
          and leverages Gatsby tools like 'gatsby-plugin-image'.
        </p>
        <StaticImage src="https://images.unsplash.com/photo-1647955043361-ea00032b8d87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
      </View>
    </Layout>
  );
};

export default AboutPage;
