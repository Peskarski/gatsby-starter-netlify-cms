import React from 'react';
import PropTypes from 'prop-types';
import { ProductPostTemplate } from '../../templates/product-post';

const ProductPostPreview = ({ entry, widgetFor }) => {

  return (
    <ProductPostTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      title={entry.getIn(['data', 'title'])}
      image={entry.getIn(['data', 'featuredimage'])}
    />
  );
};

ProductPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ProductPostPreview;
