import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Assets/logo.jpg'
import '../Stylesheets/Navigation.css'

export class Navigation extends Component {

    render() {
        return (
            // <Navbar>
            //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
            //     <Navbar.Collapse id="basic-navbar-nav">
            //         <Nav className="mr-auto">
            //             <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
            //             <li className="nav-item"><Link className="nav-link" to="/Equipment">Equipment</Link></li>
            //             <Link to="/" className="d-inline p-2 text-white text-decoration-none" activeClassName="active">Home</Link>
            //             <NavLink to="/Equipment" className="d-inline p-2 text-white text-decoration-none" activeClassName="active">Equipment</NavLink>
            //             <Link to="/Client" className="d-inline p-2 text-white text-decoration-none" activeClassName="active">Client</Link>
            //         </Nav>
            //     </Navbar.Collapse>
                
            // </Navbar>
            <div>
            <nav className="navbar fixed-top navbar-expand-lg">
              <div className="container-fluid">
              <img src={Logo} alt="logo" className="logo" />
                <div className="collapse navbar-collapse d-flex" id="navbarSupportedContent">
                  <ul className="ml-auto align-items-end navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/Equipment">Equipments</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/Client">Clients</Link></li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        )
    }
}
