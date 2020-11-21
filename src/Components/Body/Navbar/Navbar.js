import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
// importing nav elements
import Logo from "../../../static/images/logo.png";
import Home from "./Home/Home";
import AddBtn from "./AddBtn/AddBtn";
import Recipe from "./Recipe/Recipe";
import BeautyCare from "./BeautyCare/BeautyCare";
import HealthCare from "./HealthCare/HealthCare";
import "./Navbar.css"; //styling sheet
const Navbar = () => {
  const [inputHead, setInputHead] = React.useState("");
  const [inputContent, setInputContent] = React.useState("");
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
          <Route
            exact
            path="/"
            render={() => (
              <Home
                component={Home}
                inputHead={inputHead}
                inputContent={inputContent}
              />
            )}
          />
          <Route exact path="/Recipe" component={Recipe} />
          <Route exact path="/HealthCare" component={HealthCare} />
          <Route exact path="/BeautyCare" component={BeautyCare} />
          <Route
            exact
            path="/AddBtn"
            render={() => (
              <AddBtn
                component={AddBtn}
                setInputHead={setInputHead}
                inputHead={inputHead}
                setInputContent={setInputContent}
                inputContent={inputContent}
              />
            )}
          />
        </div>
      </Switch>
    </BrowserRouter>
  );
};
export default Navbar;
