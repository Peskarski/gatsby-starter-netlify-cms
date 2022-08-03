import React from "react";
import { Link } from "gatsby";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: "is-active",
          })
          : this.setState({
            navBarActiveClass: "",
          });
      }
    );
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
        style={{ backgroundColor: '#fccd04' }}
      >
        <div className="container">
          <div className="navbar-brand">
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              {/* <Link className="navbar-item" to="/products">
                Products
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link> */}
              <Link className="navbar-item" to="/">
                Самое интересное
              </Link>
              <Link className="navbar-item" to="/film-lists">
                Подборки фильмов
              </Link>
              <Link className="navbar-item" to="/film-news">
                Новости
              </Link>
              <Link className="navbar-item" to="/film-reviews">
                Обзоры
              </Link>
              <Link className="navbar-item" to="/products">
                Набор блогера
              </Link>
              <Link className="navbar-item" to="/about">
                Об авторе
              </Link>
              {/* <Link className="navbar-item" to="/new">
                Новая
              </Link> */}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
