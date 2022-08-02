import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import BlogPostPreview from './preview-templates/BlogPostPreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import ListsPostPreview from './preview-templates/ListPostPreview';
import NewsPostPreview from './preview-templates/NewsPostPreview';
import ReviewPostPreview from './preview-templates/ReviewPostPreview';
import ProductPostPreview from './preview-templates/ProductPostPreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('lists', ListsPostPreview);
CMS.registerPreviewTemplate('news', NewsPostPreview);
CMS.registerPreviewTemplate('review', ReviewPostPreview);
CMS.registerPreviewTemplate('product', ProductPostPreview);
