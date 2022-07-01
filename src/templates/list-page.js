import React from "react";
import PropTypes from "prop-types";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import ListRoll from "../components/ListRoll";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const ListsPageTemplate = ({ image }) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
      <FullWidthImage img={heroImage} />
      <section className="section section--gradient">
        <div className="container">
          <div className="content">
            <ListRoll />
          </div>
        </div>
      </section>
    </div>
  );
};

ListsPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const ListsPage = () => {
  return (
    <Layout>
      <ListsPageTemplate />
    </Layout>
  );
};

export default ListsPage;