/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { HTMLContent } from '../components/Content';

const useStyles = createUseStyles(() => ({
  item: {
    width: '300px',
    minHeight: '555px',
    height: 'min-content',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#F7F7F7',
    paddingBottom: '20px',
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
      height: '250px',
    },

    '&:hover': {
      boxShadow: '1px 2px #D5D7D9',
    }
  },
  textBlock: {
    minHeight: '162px',
    height: 'auto',
    marginTop: '8px',
    textAlign: 'left',
    padding: '16px',

    '& h3': {
      margin: '0 8px 16px 8px',
    },

    '& h4': {
      margin: '0 8px 16px 8px',
    },

    '& p': {
      display: '-webkit-box',
      overflow: 'hidden',
      '-webkit-line-clamp': 4,
      '-webkit-box-orient': 'vertical',
      margin: '0 8px',
      color: '#666666',
    },
  },
  box: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'white',
    boxShadow: 24,
    p: 4,
    maxHeight: '90%',
    '& .gatsby-image-wrapper': {
      height: '300px',

      '& img': {
        height: '100%',
        width: '100%',
        objectFit: 'contain !important',
      },
    },
    '& h3': {
      fontWeight: 600,
    },
    '& a': {
      fontWeight: 600,
    },

    '@media (max-width: 768px)': {
      overflowY: 'scroll',
    },
  },
  button: {
    border: '2px solid black !important',
    borderRadius: '16px !important',
    width: '50% !important',
    color: 'black !important',
    fontWeight: '600 !important',
    margin: 'auto auto 0 auto !important',
  },
}));

const ProductTile = ({ post, fromSimilar }) => {
  const cx = useStyles(fromSimilar);

  console.log(post);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
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
        <h4>
          {post.frontmatter.price}
        </h4>
        <p>
          {post.frontmatter.description}
        </p>
      </div>
      <Button onClick={handleOpen} className={cx.button}>Где купить</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box className={cx.box} >
          <div>
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
              <h4>
                {post.frontmatter.price}
              </h4>
                <HTMLContent content={post.html} />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ProductTile;