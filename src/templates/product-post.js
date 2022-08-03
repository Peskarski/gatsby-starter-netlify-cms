import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from 'react-jss';
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Content, { HTMLContent } from "../components/Content";

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
export const ProductPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
  image
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
          </div>
        </div>
      </div>
    </section>
  );
};

ProductPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  image: PropTypes.string,
};

const ProductPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <ProductPostTemplate
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
      title={post.frontmatter.title}
    />
  );
};

ProductPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default ProductPost;

export const pageQuery = graphql`
  query ProductPostByID($id: String!) {
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
