import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddClientModal } from './AddClientModal';
import { EditClientModal } from './EditClientModal';

export class Client extends Component {

    //Creating Constructor for Class
    //Creating State for Class
    constructor(props) {
        super(props);
        this.state = {
            Clients: [],
            addModalShow: false,
            editModalShow: false,
        }
    }

    //Creating LifeCycle for Class
    refreshList() {
        fetch(process.env.REACT_APP_API + 'Client/')
            .then(response => response.json())
            .then(data => {
                this.setState({ Clients: data });
            });
    }
    //Creating Method for Class
    componentDidMount() {
        this.refreshList()
    }
    componentDidUpdate() {
        this.refreshList()
    }

    deleteClient(cID) {
        if (window.confirm("Are you sure you want to delete this Client?")) {
            fetch(process.env.REACT_APP_API + 'Client/' + cID, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            }).then(() => {
                this.refreshList()
            })
        }

    }
    render() {
        //Here we create the variable for Client
        const { Clients, ClientID, ClientName, ClientAddress, ClientEmail } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div>
                <Table className="mt-4" striped bordered hover size="lg">
                    <thead className="Clienttbl">
                        <th>Client ID</th>
                        <th>Client Name</th>
                        <th>Client Address</th>
                        <th>Client Email</th>
                        <th>Options</th>
                    </thead>
                    <tbody>
                        {Clients.map(ts =>
                            <tr key={ts.ClientID}>
                                <td>{ts.ClientID}</td>
                                <td>{ts.ClientName}</td>
                                <td>{ts.ClientAddress}</td>
                                <td>{ts.ClientEmail}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button variant="success"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                ClientID: ts.ClientID,
                                                ClientName: ts.ClientName,
                                                ClientAddress: ts.ClientAddress,
                                                ClientEmail: ts.ClientEmail
                                            })}
                                            style={{ margin: '0 10px 0 10px' }}>
                                            <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit Client
                                        </Button>
                                        <Button className="mr-2" variant="danger"
                                            onClick={() => this.deleteClient(ts.ClientID)}>
                                            <i class="fa fa-trash-o" aria-hidden="true"></i> Delete Client
                                        </Button>
                                        <EditClientModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            tsID={ClientID}
                                            tsName={ClientName}
                                            tsAddress={ClientAddress}
                                            tsEmail={ClientEmail}
                                        />
                                    </ButtonToolbar>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>

                <ButtonToolbar>
                    <Button variant="primary"
                        onClick={() => this.setState({ addModalShow: true })}>
                        <i class="fa fa-plus-circle" aria-hidden="true"></i> Add New Client
                    </Button>
                    <AddClientModal show={this.state.addModalShow}
                        onHide={addModalClose} />

                </ButtonToolbar>
            </div>
        )
    }
}
