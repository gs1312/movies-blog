import React from "react";
import Login from "./Components/Login";
import "./App.css";
// import SignUp from "./Components/SignUp";
import CreateBlog from "./Components/CreateBlog";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Admin from "./Components/Admin";
import DeleteBlog from "./Components/DeleteBlog";
import Menu from "./Components/Menu";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/admin" exact component={Admin} /> */}
          <Route path="/login" component={Login} />
          {/* <Route path="/admin/signup" component={SignUp} /> */}
          <Route path="/user" exact component={Menu} />
          <Route path="/user/create" component={CreateBlog} />
          <Route path="/user/delete" component={DeleteBlog} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
