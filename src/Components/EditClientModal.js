import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class EditClientModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'Client', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ClientID: event.target.ClientID.value,
                ClientName: event.target.ClientName.value,
                ClientAddress: event.target.ClientAddress.value,
                ClientEmail: event.target.ClientEmail.value
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
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Edit Client Details
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col md={12}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="ClientID">
                                        <Form.Label>Client ID</Form.Label>
                                        <Form.Control type="text" name="ClientID" required
                                            disabled
                                            defaultValue={this.props.ClientID}
                                            placeholder="Client ID" />
                                    </Form.Group>

                                    <Form.Group controlId="ClientName">
                                        <Form.Label>Client Name</Form.Label>
                                        <Form.Control type="text" name="ClientName" required
                                            defaultValue={this.props.ClientName}
                                            placeholder="Client Name" />
                                    </Form.Group>

                                    <Form.Group controlId="ClientAddress">
                                        <Form.Label>Client Address</Form.Label>
                                        <Form.Control type="text" name="ClientAddress" required
                                            defaultValue={this.props.ClientAddress}
                                            placeholder="Client Address" />
                                    </Form.Group>

                                    <Form.Group controlId="ClientEmail">
                                        <Form.Label>Client Email</Form.Label>
                                        <Form.Control type="text" name="ClientEmail" required
                                            defaultValue={this.props.ClientEmail}
                                            placeholder="Client Email" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary mt-3" type="submit">
                                            Update Client
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