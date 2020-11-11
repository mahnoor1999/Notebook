import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
// importing nav elements
import Logo from "../../../static/images/logo.png";
import Home from "./Home/Home";
import AddBtn from "./AddBtn/AddBtn";
import Recipe from "./Recipe/Recipe";
import BeautyCare from "./BeautyCare/BeautyCare";
import HealthCare from "./HealthCare/HealthCare";
import './Navbar.css' //styling sheet
const Navbar = () => {
  return (
    <BrowserRouter>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">
              <img src={Logo} />
            </Link>
          </li>
          <li>
            <Link to="/Recipe">Recipes</Link>
          </li>
          <li>
            <Link to="/HealthCare">Health Care</Link>
          </li>
          <li>
            <Link to="/BeautyCare">Beauty Care</Link>
          </li>
          <li>
            <Link to="/AddBtn"> Add </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route exact path="/Recipe" component={Recipe} />
          <Route exact path="/HealthCare" component={HealthCare} />
          <Route exact path="/BeautyCare" component={BeautyCare} />
          <Route exact path="/AddBtn" component={AddBtn} />
        </div>
      </Switch>
    </BrowserRouter>
  );
};
export default Navbar;
