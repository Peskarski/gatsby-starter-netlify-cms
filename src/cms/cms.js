import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import ListsPostPreview from './preview-templates/ListPostPreview';
import NewsPostPreview from './preview-templates/NewsPostPreview';
import ReviewPostPreview from './preview-templates/ReviewPostPreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('lists', ListsPostPreview);
CMS.registerPreviewTemplate('news', NewsPostPreview);
CMS.registerPreviewTemplate('review', ReviewPostPreview);
