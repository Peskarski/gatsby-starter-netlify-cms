/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import Tile from './Tile';

const ReviewRollTemplate = (props) => {
  const { data } = props;
  const { edges: lists } = data.allMarkdownRemark;

  return (
    <div className="columns is-multiline" >
      {lists &&
        lists.map(({ node: post }) => (
          <Tile post={post} key={post.title} />
        ))}
    </div >
  );
};

ReviewRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};


export default function ReviewRoll() {
  return (
    <StaticQuery
      query={graphql`
        query ReviewRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "review-post" } } }
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
      render={(data, count) => <ReviewRollTemplate data={data} count={count} />}
    />
  );
}
