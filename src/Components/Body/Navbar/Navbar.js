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

  // initialize the state for the form elements present in Addbtn.js
  const [inputHead, setInputHead] = React.useState("");
  const [inputContent, setInputContent] = React.useState("");
  const[radioValue , updateRadioValue] = React.useState("")
// routing between the pages
  return (
    <BrowserRouter>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/" className="nav-link">
              <img src={Logo} />
            </Link>
          </li>
          <li>
            <Link to="/Recipe" className="nav-link">Recipes</Link>
          </li>
          <li>
            <Link to="/HealthCare" className="nav-link">Health</Link>
          </li>
          <li>
            <Link to="/BeautyCare" className="nav-link">Beauty</Link>
          </li>
          <li>
            <Link to="/AddBtn" className="nav-link add-content"> Add Content</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route exact path="/Recipe" component={Recipe} />
          <Route exact path="/HealthCare" component={HealthCare} />
          <Route exact path="/BeautyCare" component={BeautyCare} />
          <Route
            exact
            path="/AddBtn"
            render={() => (
              <AddBtn
              // passing the state variables for accessing them in addbtn.js files 
                component={AddBtn}
                setInputHead={setInputHead}
                inputHead={inputHead}
                setInputContent={setInputContent}
                inputContent={inputContent}
                radioValue = {radioValue}
                updateRadioValue = {updateRadioValue}
               
              />
            )}
          />
        </div>
        </>
      </Switch>
    </BrowserRouter>
  );
};
export default Navbar;
