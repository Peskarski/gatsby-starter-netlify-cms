/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const useStyles = createUseStyles(() => ({
  item: {
    border: '2px solid black',
  }
}));

const ListRollTemplate = (props) => {
  const { data } = props;
  const { edges: lists } = data.allMarkdownRemark;
  const cx = useStyles();

  return (
    <div className="columns is-multiline" >
      {lists &&
        lists.map(({ node: post }) => (
          <div className="is-parent column is-6" key={post.id}>
            <article
              className={`blog-list-item tile is-child box notification ${cx.item} ${post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
            >
              <header>
                {post.frontmatter.featuredimage ? (
                  <div className="featured-thumbnail">
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
                    className="title has-text-primary is-size-4"
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <span className="subtitle is-size-5 is-block">
                    {post.frontmatter.date}
                  </span>
                </p>
              </header>
              <p>
                {post.excerpt}
                <br />
                <br />
                <Link className="button" to={post.fields.slug}>
                  Побробнее
                </Link>
              </p>
            </article>
          </div>
        ))}
    </div >
  );
};

ListRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};


export default function ListRoll() {
  return (
    <StaticQuery
      query={graphql`
        query ListRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "list-post" } } }
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
      render={(data, count) => <ListRollTemplate data={data} count={count} />}
    />
  );
}
