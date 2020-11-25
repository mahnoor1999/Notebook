import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
// importing nav elements
import Logo from "../../../static/images/logo.png";
import Home from "./Home/Home";
import AddBtn from "./AddBtn/AddBtn";
import Recipe from "./Recipe/Recipe";
import BeautyCare from "./BeautyCare/BeautyCare";
import HealthCare from "./HealthCare/HealthCare";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.css';
import "./Navbar.css"; //styling sheet


const Navbar = () => {
  const [inputHead, setInputHead] = React.useState("");
  const [inputContent, setInputContent] = React.useState("");
  return (
    <BrowserRouter>
      <nav className="nav">
      <div>
            <div className="container nav_bg">
                <div className="row">
                    <div className=" mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <Link className="navbar-brand" to="/"> <img src={Logo} /></Link>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link activeClassName="menu_active" exact className="nav-link" aria-current="page" to="/Recipe">Recipes</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link activeClassName="menu_active" className="nav-link" to="/HealthCare">HealthCare</Link>
                                        </li> 
                                        <li className="nav-item">
                                            <Link activeClassName="menu_active" className="nav-link" to="/BeautyCare">BeautyCare</Link>
                                        </li> 
                                        <li className="nav-item">
                                            <Link activeClassName="menu_active" className="nav-link" to="/AddBtn">AddBtn</Link>
                                        </li> 
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        {/* <ul>
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
        </ul> */}
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
