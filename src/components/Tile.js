/* eslint-disable react/prop-types */
import React from 'react';
import { createUseStyles } from 'react-jss';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const useStyles = createUseStyles(() => ({
  item: {
    width: (fromSimilar) => fromSimilar ? '300px' : '360px',
    height: (fromSimilar) => fromSimilar ? '360px' : '370px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#F7F7F7',
    paddingBottom: '4px',
    borderRadius: '4px',

    '@media (min-width: 769px)': {
      margin: '16px',
    },

    '@media (max-width: 768px)': {
      marginTop: '16px',
      width: '100% !important',
    },

    '& img': {
      width: '100%',
      height: '150px',
    },

    '&:hover': {
      boxShadow: '1px 2px #D5D7D9',
      cursor: 'pointer',
    }
  },
  textBlock: {
    height: '162px',
    marginTop: '8px',
    textAlign: 'left',
    padding: '16px',

    '& h3': {
      margin: '0 8px 16px 8px',
    },

    '& p': {
      margin: '0 8px',
      color: '#666666',
    },
  }
}));

const Tile = ({ post, fromSimilar }) => {
  const cx = useStyles(fromSimilar);

  return (
    <a href={post.fields.slug} target="_blank" rel="noreferrer">
      <div className={cx.item}>
        <PreviewCompatibleImage
          imageInfo={{
            image: post.frontmatter.featuredimage,
            alt: `featured image thumbnail for post ${post.frontmatter.title}`,
          }}
        />
        <div className={cx.textBlock}>
          <h3>
            {post.frontmatter.title}
          </h3>
          <p>
            {post.excerpt}
          </p>
        </div>
      </div>
    </a>
  );
};

export default Tile;