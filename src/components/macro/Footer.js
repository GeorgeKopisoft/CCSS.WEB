import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <Fragment>
            <Container fluid className="position-fixed bottom-0 text-center">
                <Row>
                    <Col className="mb-2">
                        <div className="shadow-lg">
                            <hr className="shadow bg-dark" />
                        </div>
                        <small className="text-ice">
                            Develope by Jorge Pacheco Martínez © {new Date().getFullYear()}
                        </small>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Footer;
