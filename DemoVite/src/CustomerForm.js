import React from 'react';
import { Container, Row, Col, Button, Form, ListGroup, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit } from '@fortawesome/free-solid-svg-icons';

const CustomerForm = () => {
    return (
        <Container>
            <Row className="mb-3">
                <Col>
                    <Button variant="primary" className="me-2">
                        + Add Customer
                    </Button>
                    <Button variant="secondary" className="me-2">
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>
                    <Button variant="secondary" className="me-2">
                        <FontAwesomeIcon icon={faEdit} />
                    </Button>
                </Col>
            </Row>
            <ListGroup className="mb-3">
                <ListGroup.Item>
                    <Row>
                        <Col xs={1}>1</Col>
                        <Col xs={8}>Schezwan Egg Noodles</Col>
                        <Col xs={3} className="text-end">$25.00</Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col xs={1}>2</Col>
                        <Col xs={8}>
                            Spicy Shrimp Soup
                            <div className="text-muted">Medium - Half Grilled</div>
                        </Col>
                        <Col xs={3} className="text-end">
                            <div>$40.00</div>
                            <div className="text-muted"><del>$50.00</del></div>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col xs={1}>1</Col>
                        <Col xs={8}>
                            Thai Style Fried Noodles
                            <div className="text-muted">Medium</div>
                        </Col>
                        <Col xs={3} className="text-end">
                            <div>$40.00</div>
                            <div className="text-muted"><del>$50.00</del></div>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>
                            <Form.Group controlId="formQuantity">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control type="number" placeholder="1" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formDiscount">
                                <Form.Label>Discount(%)</Form.Label>
                                <Form.Control type="number" placeholder="20" />
                            </Form.Group>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col xs={1}>3</Col>
                        <Col xs={8}>Fried Basil</Col>
                        <Col xs={3} className="text-end">$75.00</Col>
                    </Row>
                </ListGroup.Item>
            </ListGroup>
            <Row className="mb-3">
                <Col>
                    <Button variant="secondary" className="me-2">Add</Button>
                    <Button variant="secondary" className="me-2">Discount</Button>
                    <Button variant="secondary" className="me-2">Coupon Code</Button>
                    <Button variant="secondary" className="me-2">Note</Button>
                </Col>
            </Row>
            <ListGroup>
                <ListGroup.Item>
                    <Row>
                        <Col>Subtotal</Col>
                        <Col className="text-end">$200.00</Col>
                    </Row>
                    <Row>
                        <Col>Tax</Col>
                        <Col className="text-end">$45.00</Col>
                    </Row>
                    <Row>
                        <Col>Payable Amount</Col>
                        <Col className="text-end">$195.00</Col>
                    </Row>
                </ListGroup.Item>
            </ListGroup>
            <Row className="mt-3">
                <Col>
                    <Button variant="warning" className="me-2">Hold Order</Button>
                    <Button variant="success">Proceed</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default CustomerForm;
