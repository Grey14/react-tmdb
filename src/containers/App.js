import React, { Component } from 'react';
import logo from '../style/logo.svg';
import '../style/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'reactstrap';
import MoiveContainer from './MoiveContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h5>Welcome to React</h5>
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
