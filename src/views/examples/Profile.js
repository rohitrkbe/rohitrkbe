import React from "react";

// reactstrap components
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Badge,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import Particles from "react-particles-js";

class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section
            className="section-profile-cover section-shaped my-0"
            style={{ backgroundColor: "#172b4d" }}
          >
            <div>
              <Particles
                height={"50vh"}
                params={{
                  particles: {
                    number: {
                      value: 260,
                      density: {
                        enable: false,
                      },
                    },
                    size: {
                      value: 5,
                      random: true,
                      anim: {
                        speed: 4,
                        size_min: 0.5,
                      },
                    },
                    line_linked: {
                      enable: false,
                    },
                    move: {
                      random: true,
                      speed: 1,
                      direction: "top",
                      out_mode: "out",
                    },
                  },
                  interactivity: {
                    events: {
                      onhover: {
                        enable: true,
                        mode: "bubble",
                      },
                      onclick: {
                        enable: true,
                        mode: "repulse",
                      },
                    },
                    modes: {
                      bubble: {
                        distance: 250,
                        duration: 2,
                        size: 0,
                        opacity: 0,
                      },
                      repulse: {
                        distance: 400,
                        duration: 4,
                      },
                    },
                  },
                }}
              />
            </div>
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            {/* SVG separator */}
            {/* <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div> */}
          </section>
          <section
            className="section"
            style={{
              backgroundColor: "#172b4d",
            }}
          >
            <Container>
              <Card className="card-profile bg-gradient-default shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle img-fluid"
                            src={require("assets/img/theme/team-4-800x800.jpg")}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        <Button
                          className="float-right"
                          color="secondary"
                          href="#pablo"
                          onClick={(e) => {
                            window.location = "mailto:rohitrkbe@gmail.com";
                            e.preventDefault();
                          }}
                          size="sm"
                        >
                          <span className="btn-inner--icon">
                            <i
                              className="fa fa-envelope mr-2"
                              style={{ color: "red", fontSize: "initial" }}
                            />
                          </span>
                          email
                        </Button>
                        <Button
                          className="mr-4"
                          color="secondary"
                          onClick={(e) => {}}
                          size="sm"
                          target="_blank"
                        >
                          <a
                            href="../../assets/files/Rohit_5+YOP_Resume.pdf"
                            download
                          >
                            <span className="btn-inner--icon">
                              <i
                                className="fa fa-cloud-download mr-2"
                                style={{ color: "black", fontSize: "initial" }}
                              />
                            </span>
                            <span
                              className="nav-link-inner--text ml-1"
                              style={{ color: "black" }}
                            >
                              Resume
                            </span>
                          </a>
                        </Button>
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="text-center mt-5">
                        <h3 style={{ color: "white" }}>Rohit Kumar </h3>
                        <div
                          className="h6 font-weight-300"
                          style={{ color: "white" }}
                        >
                          <i className="ni location_pin mr-2" />
                          Banglore, India
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center">
                    <div className="h6 mt-4 mb-3">
                      <h4 style={{ color: "white" }}>
                        <i className="ni business_briefcase-24 mr-2" />
                        UX / Frontend Architect
                      </h4>
                      <p></p>
                    </div>
                  </div>
                  {/* <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>write here about me</p>
                      </Col>
                    </Row>
                  </div> */}
                  {/* <div className=" mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <h3 className="text-center">Under Construction</h3>
                      </Col>
                    </Row>
                  </div> */}
                </div>
              </Card>
            </Container>

            <Container className=" mt-5">
              <Card className="bg-gradient-default shadow-lg border-0 p-5">
                <Row className="row-grid align-items-center">
                  <Col className="order-md-2" md="6">
                    <img
                      alt="..."
                      className="img-fluid floating"
                      src={require("assets/img/theme/promo-1.png")}
                    />
                  </Col>
                  <Col className="order-md-1" md="6">
                    <div className="pr-md-5">
                      <p style={{ color: "white" }}>
                        I am an Architect with forte in FE having ~5+ YOE and
                        currently working at eloelo. I also love to work on
                        Product wire-frame/Designs. I like to work to user
                        centric application and have worked in various domains
                        such as e-commerce, live streaming & gaming platform,
                        online education portal and services, real-state
                        products etc. I would love to explore more and work on
                        different domains/business ideas.
                      </p>
                      <ul className="list-unstyled mt-5">
                        <li className="py-2">
                          <div className="d-flex align-items-center">
                            <div>
                              <Badge
                                className="badge-circle mr-3"
                                color="primary"
                              >
                                <i className="ni ni-settings-gear-65" />
                              </Badge>
                            </div>
                            <div>
                              <h6 className="mb-0" style={{ color: "white" }}>
                                UX/Frontend Design & Architect
                              </h6>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="d-flex align-items-center">
                            <div>
                              <Badge
                                className="badge-circle mr-3"
                                color="warning"
                              >
                                <i className="ni ni-settings-gear-65" />
                              </Badge>
                            </div>
                            <div>
                              <h6 className="mb-0" style={{ color: "white" }}>
                                Awesome User Journey/Transition.
                              </h6>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="d-flex align-items-center">
                            <div>
                              <Badge className="badge-circle mr-3" color="info">
                                <i className="ni ni-settings-gear-65" />
                              </Badge>
                            </div>
                            <div>
                              <h6 className="mb-0" style={{ color: "white" }}>
                                Product Management
                              </h6>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Container>

            <Container className=" mt-5">
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row
                    className="row-grid"
                    style={{ justifyContent: "space-around" }}
                  >
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div
                            className="icon-shape icon-shape-primary rounded-circle mb-4"
                            style={{ width: "40%", padding: "4px" }}
                          >
                            <img
                              alt="..."
                              className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                              src={require("assets/img/brand/eloelo.png")}
                            />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            eloelo
                          </h6>
                          <p>
                            eloelo is a live streaming and gaming application
                            where users can watch & play together various games
                            available on the platform. It's 1st Ever Video Vote
                            Gaming App- Vote for New Videos submitted by
                            Creators Daily.
                          </p>
                          <p></p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              React / React Native
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              java-spring boot / Python / NOde - Express
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              POSTGRESQL / MONGODB
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              ELASTIC Search
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              AWS / FIREBASE / GOOGLE CLOUD
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#none"
                            onClick={(e) => {
                              window.open(
                                "https://play.google.com/store/apps/details?id=com.eloelo&hl=en_IN&gl=US",
                                "_blank"
                              );
                            }}
                          >
                            View Details
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div
                            className="icon-shape icon-shape-success rounded-circle mb-4"
                            style={{ width: "40%", padding: "4px" }}
                          >
                            <img
                              alt="..."
                              className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                              src={require("assets/img/brand/delashare.png")}
                              style={{ objectFit: "contain" }}
                            />
                          </div>
                          <h6 className="text-success text-uppercase">
                            DEALSHARE
                          </h6>
                          <p>
                            DealShare is an online groceries store where user
                            can order groceries; essentials; household, fruits &
                            vegetables, and more at awesome prices and discount.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              React / React Native / ANGULAR
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              java-spring boot / Python / NOde - Express
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              MYSQL / MONGODB / NEO4J
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              ELASTIC Search / REDIS
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              SENTRY / BUGSNAG
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              AWS / FIREBASE / GCP / MOENGAGE
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="#none"
                            onClick={(e) => {
                              window.open(
                                "https://play.google.com/store/apps/details?id=com.dealshare&hl=en_IN&gl=US",
                                "_blank"
                              );
                            }}
                          >
                            View Details
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>

            <Container className=" mt-5">
              <Card className="bg-gradient-default shadow-lg border-0">
                <div className="p-5">
                  <Row className="align-items-center">
                    <Col lg="12">
                      <p className="lead text-white mt-3">
                        More about my interest on FE + Design part for a product
                      </p>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile;
