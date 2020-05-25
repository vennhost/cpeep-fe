import React, { component } from "react";
import Header from "../components/Headers/HomeHeader";
import { Container, Row, Col, Card, CardBody, Jumbotron } from "reactstrap";
import LoginForm from "../components/Login/Login";
import "../../src/index.cc"


class Home extends React.Component {
    state = {}
    render() {
        return (
            <>
                <Header />
                <Container className="frontBody">
                    <Row>
                        <Col sm="4">
                            <Jumbotron>
                            <div className="home-text shadow p-3 mb-5 bg-white rounded">
                                <h3>Welcome</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                            </Jumbotron>
                        </Col>
                        <Col sm="4">
                            <Jumbotron className="home-login">
                            <h3>
                                <u className="form-head">Login Form</u>
                            </h3>
                            <hr />
                            <Card>
                                <CardBody>
                                    <LoginForm />
                                </CardBody>
                            </Card>
                        </Jumbotron>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Home;