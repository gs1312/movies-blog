//Page Disabled Because Sign Up Page is Disabled

import React, { Component } from "react";
import { Link } from "react-router-dom";
class Admin extends Component {
  render() {
    return (
      <div>
        <div className="admin-panel">
          <Link to="/admin/login">
            <button id="button">Login</button>
          </Link>
          <Link to="/admin/signup">
            <button id="button">Sign-Up</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Admin;
