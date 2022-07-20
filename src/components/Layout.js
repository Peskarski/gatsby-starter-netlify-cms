import * as React from "react";
import { Helmet } from "react-helmet";
import { createUseStyles } from 'react-jss';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

const useStyles = createUseStyles(() => ({
  layout: {
    borderBottom: '1px solid white',
    height: '100%',
    width: '100%',
    position: 'relative',

    '& .navbar-item': {
      fontSize: '18px',
      color: 'black',
    },

    '& .social': {
      '@media (min-width: 768px)': {
        marginTop: '30px'
      }
    }
  },
  children: {
    marginBottom: '100px',
    minHeight: '78vh',
  }
}));

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  const cx = useStyles();
  return (
    <div className={cx.layout}>
      <Helmet>
        <html lang="ru" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar />
      <div className={cx.children}>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
