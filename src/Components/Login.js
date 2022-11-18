import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../Assets/logo.jpg'
import '../Stylesheets/Login.css'

export class Login extends Component {

    render() {

        const mystyle = {
            marginTop: 160,
            justifyContent: 'center'
        };

        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg">
                    <div className="container-fluid">
                        <img src={Logo} alt="logo" className="logo" />
                    </div>
                </nav>
                <div style={mystyle} className="justify-content-center text-center m-5-auto">
                    <h1>Login to Gym Management System</h1>
                    <form action="/navigation">
                        <p>
                            <label>Username</label><br />
                            <input type="text" name="first_name" required />
                        </p>
                        <p>
                            <label>Password</label>
                            <NavLink to="/forget-password"><label className="right-label">Forget password?</label></NavLink>
                            <br />
                            <input type="password" name="password" required />
                        </p>
                        <p>
                            <button id="sub_btn" type="submit">Login</button>
                        </p>
                    </form>
                    <footer>
                        <p>First time? <Link to="/register">Create an account</Link>.</p>
                    </footer>
                </div>
            </div>
        )
    }
}