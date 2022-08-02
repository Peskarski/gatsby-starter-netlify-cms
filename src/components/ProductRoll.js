/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import Tile from './Tile';

const ProductRollTemplate = (props) => {
  const { data } = props;
  const { edges: products } = data.allMarkdownRemark;

  return (
    <div className="columns is-multiline" >
      {products &&
        products.map(({ node: post }) => (
          <Tile post={post} key={post.title} />
        ))}
    </div >
  );
};

ProductRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};


export default function ProductRoll() {
  return (
    <StaticQuery
      query={graphql`
        query ProductRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "product-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        quality: 100
                        layout: CONSTRAINED
                      )

                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <ProductRollTemplate data={data} count={count} />}
    />
  );
}
