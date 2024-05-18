import Link from "next/link";
import React, { Fragment, useEffect } from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
//images
import icon from "../../public/images/brand/icon.png";
import iconlight from "../../public/images/brand/icon-light.png";
import logo from "../../public/images/brand/logo.png";
import logolight from "../../public/images/brand/logo-light.png";

export default function EmpresaReclamo() {
  useEffect(() => {
    document.body.classList.add("app");
    document.body.classList.add("sidebar-mini");
    document.body.classList.add("ltr");
    document.body.classList.add("landing-page");
    document.body.classList.add("horizontalmenu");
  }, []);

  return (
    <Fragment>
      <div className="horizontalMenucontainer">
        <div className="page">
          <div className="page-main">
            <div className="landing-top-header overflow-hidden">
              <div
                className="demo-screen-headline main-demo main-demo-1 spacing-top overflow-hidden reveal"
                id="home"
              >
                <Container className="px-sm-0">
                  <Row>
                    <Col
                      xl={12}
                      lg={12}
                      className="animation-zidex pos-relative "
                      style={{ paddingBottom: "135px" }}
                    >
                      <Link
                        href={`/components/dashboard/dashboard`}
                        legacyBehavior
                      >
                        <a className="main-logo justify-content-center">
                          <img
                            src={logolight.src}
                            className="header-brand-img desktop-logo-dark"
                            alt="logo"
                          />
                        </a>
                      </Link>
                      <span className="landing-title"></span>
                      <h2 className="fw-semibold text-center">
                        Libro de reclamaciones
                      </h2>
                    </Col>
                    <br />
                    <br />
                    <br />
                  </Row>
                </Container>
              </div>
            </div>
            <div className="main-content mt-0">
              <div className="side-app">
                <div className="sptb section bg-white" id="Features">
                  <Container>
                    <Row>
                      <h4 className="text-center fw-semibold landing-card-header">
                        Our Mission
                      </h4>
                      <span className="landing-title"></span>
                      <div className="text-center">
                        <h2 className="text-center fw-semibold">
                          Our mission is to make work meaningful.
                        </h2>
                      </div>
                      <div className="reveal">
                        <div className="working-container">
                          <Row className="align-items-center">
                            <Col xl={4} lg={6} md={6} sm={12}>
                              <div className="working-svg-container svg-container-1">
                                nmkjn
                              </div>
                            </Col>
                            <Col xl={8} lg={6} md={6} sm={12}>
                              <div className="working-content content-1">
                                <h4 className="mb-3">Design Quality </h4>
                                <p className="title-desc text-muted">
                                  No ipsum rebum est invidunt eos dolore. Sed
                                  sea ipsum vero invidunt rebum et erat, tempor
                                  consetetur sadipscing no ipsum,.
                                </p>
                                <p className="title-desc text-muted mb-0">
                                  Ut dolor sed aliquyam at lorem ipsum labore
                                  diam eos. Tempor labore dolor justo nonumy
                                  stet, sanctus amet sed accusam elitr amet
                                  eirmod. No ea gubergren dolores elitr labore
                                  ipsum..
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </div>

                        <div className="working-container">
                          <Row className="align-items-center">
                            <Col
                              xl={8}
                              lg={6}
                              md={6}
                              sm={12}
                              className=" myorder-2"
                            >
                              <div className="working-content content-2">
                                <h4 className="mb-3">Documentation</h4>
                                <p className="title-desc text-muted">
                                  Dolore voluptua sed kasd labore erat sed ipsum
                                  rebum sit, sanctus invidunt est sed sanctus.
                                  Dolor clita invidunt elitr dolore.
                                </p>
                                <p className="title-desc text-muted mb-0">
                                  Lorem dolores labore stet rebum invidunt
                                  voluptua at dolores lorem, amet dolor dolore
                                  dolor ut sadipscing, dolore sanctus accusam
                                  diam sanctus kasd gubergren, ipsum dolor lorem
                                  amet stet, aliquyam takimata.
                                </p>
                              </div>
                            </Col>
                            <Col
                              xl={4}
                              lg={6}
                              md={6}
                              sm={12}
                              className=" myorder-1"
                            >
                              <div className="working-svg-container svg-container-2">
                                kmkkkk
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
