import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from 'react-jss';
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import SimilarRoll from "../components/SimilarRoll";

const useStyles = createUseStyles(() => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',

    '@media (min-width: 768px)': {
      '& .column': {
        width: '65%',
      }
    },

    '@media (max-width: 767px)': {
      flexDirection: 'column',

      '& h1': {
        fontSize: '30px !important',
      }
    }    
  }
}));

// eslint-disable-next-line
export const ListPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  image,
}) => {
  const PostContent = contentComponent || Content;

  const cx = useStyles();

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className={cx.container}>
            <div className="column is-10 is-offset-1">
              <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                {title}
              </h1>
              <p>{description}</p>
              <img src={image} />
              <PostContent content={content} />
            </div>
            <SimilarRoll tags={tags} title={title} />
          </div>
        </div>
      </div>
    </section>
  );
};

ListPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  tags: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
};

const ListPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ListPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

ListPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default ListPost;

export const pageQuery = graphql`
  query ListPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
