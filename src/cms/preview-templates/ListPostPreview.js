import React from 'react';
import PropTypes from 'prop-types';
import { ListsPostTemplate } from '../../templates/list-post';

const ListPostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags']);
  return (
    <ListsPostTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
      image={entry.getIn(['data', 'featuredimage'])}
    />
  );
};

ListPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ListPostPreview;
