import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class AddClientModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'Client/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ClientName: event.target.ClientName.value,
                ClientEmail: event.target.ClientEmail.value,
                ClientAddress: event.target.ClientAddress.value
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
            },
                (error) => {
                    alert('Failed');
                })
    }
    render() {
        return (
            <div className="container">

                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header clooseButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Add Client
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="ClientName">
                                        <Form.Label>Client Name</Form.Label>
                                        <Form.Control type="text" name="ClientName" required
                                            placeholder="Client Name" />
                                    </Form.Group>

                                    <Form.Group controlId="ClientAddress">
                                        <Form.Label>Client Address</Form.Label>
                                        <Form.Control type="text" name="ClientAddress" required
                                            placeholder="Client Address" />
                                    </Form.Group>

                                    <Form.Group controlId="ClientEmail">
                                        <Form.Label>Client Email</Form.Label>
                                        <Form.Control type="text" name="ClientEmail" required
                                            placeholder="Client Email" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary mt-3" type="submit" >
                                            Add New Client
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>

                </Modal>

            </div>
        )
    }

}