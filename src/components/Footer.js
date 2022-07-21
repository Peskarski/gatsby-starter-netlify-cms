import * as React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer" style={{ backgroundColor: '#fccd04', padding: 0, height: '80px' }}>
        <div className="content has-text-centered">
          <div className="container">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <section className="menu">
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com" target="_blank" rel="noreferrer">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com" target="_blank" rel="noreferrer">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com" target="_blank" rel="noreferrer">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com" target="_blank" rel="noreferrer">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
