import Link from "next/link";
import React from "react";
import { Fragment } from "react";
import { Container } from "reactstrap";

const Header = () => {
  return (
    <Fragment>
      <header className="header fixed-top">
        <div className="docs-branding">
          <Container fluid className="position-relative py-2">
            <div className="docs-logo-wrapper">
              <button
                id="docs-sidebar-toggler"
                className="docs-sidebar-toggler docs-sidebar-visible mr-2 d-xl-none"
                type="button"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div className="site-logo">
                <Link className="navbar-brand" href="/">
                  <img
                    className="logo-icon me-2"
                    src="https://genexwifi.com/assets/images/logo/logo-genexwifi-flatform.png"
                    alt="logo"
                  />
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
