import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Bar from './Bar';
import Line from './Line';

export default class App extends React.Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}