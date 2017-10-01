import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../style/logo.svg';
import '../style/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'reactstrap';
import MoiveContainer from './MoiveContainer'

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
      <div>
        <div>
          <Navbar className="navbar navbar-toggleable-md navbar-inverse bg-inverse bg-faded fixed-top">
            <NavbarToggler right onClick={this.toggle} />
            <NavbarBrand href="/">
              <img src={logo} className="App-logo" alt="logo" />React-TMDb
            </NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="https://github.com/Grey14/react-tmdb">Github</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        <div className="App-intro">
          <Container>
            <MoiveContainer></MoiveContainer>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
