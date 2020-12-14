import React, { Component } from 'react'

import {Navbar,Nav} from 'react-bootstrap';
import { Container, Row, Jumbotron, Col} from 'react-bootstrap';
import Welcome from './Welcome'

export class Footer extends Component {
    render() {
        let fullyear = new Date().getFullYear();
        return (
            <Navbar fixed="bottom" bg="dark" variant="dark">
                <Container>
                    <Col lg={12} className="text-center" text-muted>
                        <div>{fullyear}-{fullyear+1}, All Rights Reserved by Bhargav Netha</div>
                    </Col>
                </Container>
            </Navbar>
        )
    }
}

export default Footer
