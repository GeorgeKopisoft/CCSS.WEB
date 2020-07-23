import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const CustomContainer = ({ title, children, isFluid, rowClass, hasCols = false }) => {
    return (
        <Fragment>
            <Container fluid={isFluid}
                className="my-3"
            >
                {hasCols &&
                    <WithRows
                        title={title}
                        rowClass={rowClass}>
                        {children}
                    </WithRows>
                }
                {!hasCols &&
                    <WithARow
                        title={title}
                    >
                        {children}
                    </WithARow>
                }
            </Container>
        </Fragment>
    )
}

const WithRows = ({ children, rowClass, title }) => {
    return (
        <Row className={rowClass}>
            <Col xs={12} className="text-center my-3">
                <h1 className="display-4 text-ice my-3 mb-5">{title}</h1>
                {children}
            </Col>
        </Row>
    )
}

const WithARow = ({ children, title }) => {
    return (
        <Row className="justify-content-center my-4 p-1">
            <Col xs={12} md={6} lg={5} xl={4} className="border border-ice rounded py-4">
                <h1 className="display-4 text-ice text-center my-3">{title}</h1>
                {children}
            </Col>
        </Row>
    )
}

export default CustomContainer;
