import React from 'react';
import PropTypes from 'prop-types';
import { ReviewPostTemplate } from '../../templates/review-post';

const ReviewPostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags']);
  return (
    <ReviewPostTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
      image={entry.getIn(['data', 'featuredimage'])}
    />
  );
};

ReviewPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ReviewPostPreview;
