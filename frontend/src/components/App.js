import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ReactDom from "react-dom";
import Bar from './Bar';
import Line from './Line';
import NavBar from './common/NavBar';
import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <NavBar />
                <Container fluid>
                    <Row>
                        <Col sm={6}>
                            <Line />
                        </Col>
                        <Col sm={6}>
                            <Bar />
                        </Col>
                    </Row>
                </Container>
            </Provider>
        )
    }
}

ReactDom.render(<App />, document.getElementById("app"));