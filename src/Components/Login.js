import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../App.css'

export class Login extends Component {

    render() {
        return (
            <div className="text-center m-5-auto">
                <h2>Sign in to us</h2>
                <form action="/navigation">
                    <p>
                        <label>Username or Email</label><br />
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
                    <p><Link to="/login">Back to Homepage</Link>.</p>
                </footer>
            </div>
        )
    }
}