import React from "react";
import PropTypes from "prop-types";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import NewsRoll from '../components/NewsRoll';
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const NewsPageTemplate = ({ image }) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
      <FullWidthImage img={heroImage} />
      <section className="section section--gradient">
        <div className="container">
          <div className="content">
            <NewsRoll />
          </div>
        </div>
      </section>
    </div>
  );
};

NewsPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const NewsPage = () => {
  return (
    <Layout>
      <NewsPageTemplate />
    </Layout>
  );
};

export default NewsPage;