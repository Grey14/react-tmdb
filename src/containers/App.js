import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from '../style/logo.svg';
import '../style/App.css';
import { Container } from 'reactstrap';
import MoiveContainer from './MoiveContainer'
import Home from "../components/Home"

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Router>
        <div>
          <div>
            <Navbar className="navbar navbar-toggleable-md navbar-inverse bg-inverse bg-faded fixed-top">
              <NavbarToggler right onClick={this.toggle} />
              <NavbarBrand href={process.env.PUBLIC_URL + '/'}>
                <img src={logo} className="App-logo" alt="logo" />React-TMDb
              </NavbarBrand>
              <Collapse isOpen={this.state.isOpen} navbar>
                <ul className='nav navbar-nav'>
                  <li>
                    <Link exact to={process.env.PUBLIC_URL + '/'} className="nav-link">
                      <span className='glyphicon glyphicon-home'></span> Home
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + '/moive'} className="nav-link" >
                      Moive
                    </Link>
                  </li>
                  <li>
                    <NavLink href="https://github.com/Grey14/react-tmdb" activeClassName='active'>
                      Github
                    </NavLink>
                  </li>
                </ul>
              </Collapse>
            </Navbar>
          </div>
          <div className="App-intro">
            <Container>
              <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
              <Route path={process.env.PUBLIC_URL + '/moive/:pageIdx?'} component={MoiveContainer} />
            </Container>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
