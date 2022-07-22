/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import Tile from './Tile';

const MainRollTemplate = (props) => {
  const { data } = props;
  const { edges: lists } = data.allMarkdownRemark;

  return (
    <div className="columns is-multiline" >
      {lists &&
        lists.map(({ node: post }) => (
          post.frontmatter.tags?.includes('hot')
            ?
            <Tile post={post} />
            : null
        ))}
    </div >
  );
};

MainRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};


export default function MainRoll() {
  return (
    <StaticQuery
      query={graphql`
        query MainRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
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
                  tags
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
      render={(data, count) => <MainRollTemplate data={data} count={count} />}
    />
  );
}
