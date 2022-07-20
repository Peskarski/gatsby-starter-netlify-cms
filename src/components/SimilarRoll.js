/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

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
    marginLeft: '32px',
    '& h3': {
      color: '#485fc7',
    },

    '@media (min-width: 768px)': {
      marginTop: '100px',
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
  },
}));

const SimilarRollTemplate = (props) => {
  const { data, tags, title } = props;
  const { edges: lists } = data.allMarkdownRemark;
  const cx = useStyles();

  let nodeTags = [];

  lists.forEach((list) => {
    if(list.node.frontmatter.tags) {
      nodeTags.push(...list.node.frontmatter.tags);
    }
  });

  if (tags && !tags.some((tag) => tag !== 'hot' && nodeTags.includes(tag))) {
    return null;
  }

  return (
    <div className={cx.container}>
      <h3>Также читайте</h3>
      {lists &&
        lists.map(({ node: post }) => (
          tags.some((tag) => tag !== 'hot' && post.frontmatter.tags?.includes(tag)) && title !== post.frontmatter.title
            ? <div className={cx.post} key={post.id}>
              <article
                className={`blog-list-item tile is-child box notification ${cx.item} ${post.frontmatter.featuredpost ? 'is-featured' : ''
                  }`}
              >
                <header>
                  {post.frontmatter.featuredimage ? (
                    <div className={cx.image}>
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                          width:
                            post.frontmatter.featuredimage.childImageSharp
                              .gatsbyImageData.width,
                          height:
                            post.frontmatter.featuredimage.childImageSharp
                              .gatsbyImageData.height,
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="post-meta">
                    <Link
                      className="title has-text-primary is-size-5"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title.toLowerCase()}
                    </Link>
                  </p>
                </header>
                {/* <p>
                  {post.excerpt}
                  <br />
                  <br />
                </p> */}
              </article>
            </div>
            : null
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
                        width: 120
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
