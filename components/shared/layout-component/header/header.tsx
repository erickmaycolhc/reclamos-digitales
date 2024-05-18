import React, { Fragment } from "react";
import { Container, Navbar } from "react-bootstrap";
import Link from "next/link";

//Images
import logo from "../../../../public/images/brand/logo.png";
import logolight from "../../../../public/images/brand/logo-light.png";
import dynamic from "next/dynamic";
import HeadDropDown from "../../data/header/head";

// FullScreen-end
function Header() {
  const headerToggleButton = () => {
    let innerWidth = window.innerWidth;
    if (innerWidth >= 992) {
      document.body.classList.toggle("main-sidebar-hide");
      document.body.classList.remove("main-sidebar-show");
    } else if (document.body.classList.contains("horizontalmenu")) {
      document.body.classList.toggle("main-navbar-show");
      document.body.classList.remove("main-sidebar-show");
      document.body.classList.remove("main-sidebar-hide");
    } else {
      document.body.classList.toggle("main-sidebar-show");
      document.body.classList.remove("main-sidebar-hide");
    }
  };
  return (
    <Fragment>
      <Navbar
        expand="lg"
        className="main-header side-header sticky"
        style={{ marginBottom: "-64px" }}
      >
        <Container fluid className="main-container container-fluid">
          <div className="main-header-left">
            <Link
              href="#"
              onClick={() => headerToggleButton()}
              className="main-header-menu-icon"
              id="mainSidebarToggle"
            >
              <span></span>
            </Link>
            <div className="hor-logo">
              <Link href="/components/dashboard/dashboard">
                <span className="main-logo">
                  <img
                    src={logo.src}
                    className="header-brand-img desktop-logo"
                    alt="logo"
                  />
                  <img
                    src={logolight.src}
                    className="header-brand-img desktop-logo-dark"
                    alt="logo"
                  />
                </span>
              </Link>
            </div>
          </div>
          <div className="main-header-center">
            <div className="responsive-logo">
              <Link href="/components/dashboard/dashboard">
                <img src={logo.src} className="mobile-logo" alt="logo" />
              </Link>
              <Link href="/components/dashboard/dashboard">
                <img
                  src={logolight.src}
                  className="mobile-logo-dark"
                  alt="logo"
                />
              </Link>
            </div>
          </div>

          <div className="main-header-right">
            <div className="navbar navbar-expand-lg nav nav-item navbar-nav-right responsive-navbar navbar-dark">
              <Navbar.Collapse
                className="collapse navbar-collapse"
                id="navbarSupportedContent-4"
              >
                <HeadDropDown />
              </Navbar.Collapse>
            </div>
          </div>
        </Container>
      </Navbar>
    </Fragment>
  );
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
