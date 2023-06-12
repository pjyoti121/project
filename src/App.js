
import React, { Component } from 'react';
import Darkmode from 'darkmode-js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import MyOrder from './Components/screens/MyOrder';

import Navbar from './Components/Navbar';
import Home from './Components/screens/Home';
import Login from './Components/screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Signup from './Components/screens/Signup';
import { CartProvider } from './Components/ContextReducer';

class App extends Component {
  componentDidMount() {
    const options = {
      backgroundColor: '#000',
      color: '#fff'
    };
    new Darkmode(options);

    document.body.style.color = '#fff';
  }

  render() {
    return (
      <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/createuser" element={<Signup />} />
            <Route exact path="/myOrder" element={<MyOrder />} />
          </Routes>
        </div>
      </Router>
      </CartProvider>
    );
  }
}

export default App;
