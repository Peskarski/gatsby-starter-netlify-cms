import * as React from "react";
import { Helmet } from "react-helmet";
import { createUseStyles } from 'react-jss';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";
import '@fontsource/fira-sans';
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

const useStyles = createUseStyles(() => ({
  layout: {
    borderBottom: '1px solid white',
    minHeight: '100vh',
    width: '100%',
    position: 'relative',

    '& .navbar-item': {
      fontSize: '18px',
      color: 'black',
    },

    '& .social': {
      marginTop: '30px',
      whiteSpace: 'nowrap',
      '@media (min-width: 768px)': {
        marginTop: '30px',
      },

      '@media (max-width: 460px)': {
        marginLeft: '-36px',
      },

      '@media (max-width: 420px)': {
        marginTop: '-4px',
      },

      '& a': {
        padding: '1.1em 0.4em 0 0.4em',
      }
    },

    '& footer': {
      display: 'flex',
      justifyContent: 'center',

      '@media (max-width: 420px)': {
        height: '120px !important',

        '& .columns': {
          flexDirection: 'column !important',
        },
      },
    },

    '& .video-container': {
      '@media (max-width: 767px)': {
        width: '100% !important',

        '& iframe': {
          width: '100% !important',
        }
      },
    }
  },
  children: {
    marginBottom: '100px',
    minHeight: '78vh',

    '@media (max-width: 767px)': {
      '& .gatsby-image-wrapper img': {
        height: 'unset !important'
      }
    },
  }
}));

const TemplateWrapper = ({ children, title, description }) => {
  const { title: metaTitle, description: metaDescription } = useSiteMetadata();
  const cx = useStyles();
  return (
    <div className={cx.layout}>
      <Helmet>
        <html lang="ru" />
        <title>{title || metaTitle}</title>
        <meta name="description" content={description || metaDescription} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/favicon-gold.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-gold.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-gold.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/favicon-gold.png`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/website-headder.jpg`}
        />
        <meta name="google-site-verification" content="V-DObU2soVMEagadi1H87taePDU6lgUrt40q0kMHY5w" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-C7WP56W1GV"></script>
        <script src="./script.js"></script>
      </Helmet>
      <Navbar />
      <div className={cx.children}>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
