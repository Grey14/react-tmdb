import React from 'react';
import  NavMenu  from '../components/NavMenu';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MoiveContainer from './MoiveContainer';
import Home from "../components/Home";
const Layout = () => (
  <Router>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-3'>
          <NavMenu />
        </div>
        <div className='col-sm-9'>
          <Route exact path="/" component={Home} />
          <Route path="/moive/:pageIdx?" component={MoiveContainer} />
        </div>
      </div>
    </div>
  </Router>
);

export default Layout;