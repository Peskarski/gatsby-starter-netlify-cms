/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { graphql, StaticQuery } from 'gatsby';
import Tile from './Tile';

const useStyles = createUseStyles(() => ({
  item: {
    border: '1px solid grey',
    '&:hover': {
      boxShadow: '1px 2px #64615F',
      cursor: 'pointer',
    },

    '& .post-meta::first-letter': {
      textTransform: 'capitalize',
    },
    '& .post-meta': {
      textAlign: 'left',
    }
  },
  container: {
    width: '90%',
    textAlign: 'center',
    padding: '16px',
    '& h3': {
      color: '#485fc7',
    },

    '@media (min-width: 769px)': {
      marginTop: '100px',
      marginLeft: '32px',
    },

    '@media (max-width: 768px)': {
      width: '100%',
    },
  },
  post: {
    width: '100%',
    marginBottom: '8px',
    '& header': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'left',
    },

    '& article': {
      padding: '4px 8px',
    },
  },
  image: {
    width: '100%',
    maxWidth: '100px',
    marginRight: '8px',
  }
}));

const SimilarRollTemplate = (props) => {
  const { data, tags, title } = props;
  const { edges: lists } = data.allMarkdownRemark;
  const cx = useStyles();

  let nodeTags = [];

  lists.forEach((list) => {
    if (list.node.frontmatter.tags) {
      nodeTags.push(...list.node.frontmatter.tags);
    }
  });

  let resultPosts = [];

  if (lists) {
    lists.forEach(({ node: post }) => {
      if (tags.some((tag) => tag !== 'hot' && post.frontmatter.tags?.includes(tag)) && title !== post.frontmatter.title) {
        resultPosts.push(post);
      }
    });
  }

  if (!resultPosts.length) {
    return null;
  }

  return (
    <div className={cx.container}>
      <h3>Читать далее:</h3>
      {resultPosts.slice(0, 3).map((post) => (
        <Tile post={post} key={post.title} fromSimilar />
      ))}
    </div >
  );
};

SimilarRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};


export default function SimilarRoll({ tags, title }) {
  return (
    <StaticQuery
      query={graphql`
        query SimilarRollQuery {
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
      render={(data, count) => <SimilarRollTemplate data={data} count={count} tags={tags} title={title} />}
    />
  );
}
