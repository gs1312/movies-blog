//Page Disabled Bcouse we are not accepting new Users

import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.password]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const name = this.state.name;
    const email = this.state.email;
    const password = this.state.password;

    const data = {
      name,
      email,
      password,
    };
    axios
      .post("http://localhost:5000/register", data)
      .then((res) => {
        window.alert(res.data.message);
        this.props.history.push("/admin");
      })
      .catch((err) => {
        window.alert("Sign Up Failed!!!");
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div className="container">
          <h2 id="title">Sign Up</h2>
          <div className="items">
            <form onSubmit={this.handleChange}>
              <input
                type="text"
                id="form-text"
                name="name"
                value={this.state.name}
                placeholder="Full Name"
                onChange={this.handleChange.bind(this)}
              />
              <input
                type="email"
                id="form-text"
                name="email"
                value={this.state.email}
                placeholder="Email"
                onChange={this.handleChange.bind(this)}
              />
              <input
                type="password"
                id="form-password"
                placeholder="Password"
                onChange={this.handleChange.bind(this)}
              />
              <button id="button" onClick={this.handleSubmit}>
                Sign Up
              </button>
            </form>
            <h2 id="text"> Already a User?</h2>
            <Link to="/admin/login">
              <button id="button"> Log In</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
