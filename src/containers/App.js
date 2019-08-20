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
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
              <a className="navbar-brand" href={process.env.PUBLIC_URL + '/'}>
                <img src={logo} className="App-logo" alt="logo" />React-TMDb
              </a>
              <NavbarToggler right onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <ul className='nav navbar-nav'>
                  <li>
                    <Link to={process.env.PUBLIC_URL + '/'} className="nav-link">
                      <span className='glyphicon glyphicon-home'></span> Home
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + '/movie'} className="nav-link" >
                     Movie
                    </Link>
                  </li>
                  <li>
                    <NavLink href="https://github.com/Grey14/react-tmdb" className='nav-link'>
                      Github
                    </NavLink>
                  </li>
                </ul>
              </Collapse>
            </nav>
          </div>
          <div className="App-intro">
            <Container>
              <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
              <Route path={process.env.PUBLIC_URL + '/movie/:pageIdx?'} component={MoiveContainer} />
            </Container>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
