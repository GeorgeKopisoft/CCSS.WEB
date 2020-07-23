import React, { Fragment } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

const Login = ({history}) => {

    const onHandleClick = () => {
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Formulario en construcción',
            customClass: { confirmButton: "bg-ok" }
        })
            .then((result) => {
                if (result.value) {
                    history.push("/");
                    history.go();
                }
            });
    }

    return (
        <Fragment>
            <Container fluid
                className="bg-start py-5">
                <Row className="text-center">
                    <Col>
                        <h1 className="display-4 text-ice">LOGIN</h1>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12} md={8} lg={5} xl={4}
                        className="py-5"
                    >
                        <Form>
                            <Form.Group controlId="formBasicEmail"
                                className="mb-4"
                            >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email"
                                    size="lg"
                                    placeholder="Enter email"
                                    className="bg-transparent border border-ice text-ice"
                                />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword"
                                className="mb-4"
                            >
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"
                                    size="lg"
                                    placeholder="Password"
                                    className="bg-transparent border border-ice text-ice"
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" size="lg" />
                            </Form.Group>
                            <Button variant="outline-action"
                                type="Button"
                                size="lg"
                                block
                                className="mt-5"
                                onClick={onHandleClick}
                            >
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Login;
