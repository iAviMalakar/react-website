import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Products from './components/Products';
import SignUp from './components/SignUp';



function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact  component= {Home} />
        <Route path='/services' component= {Services} />
        <Route path='/products' component= {Products} />
        <Route path='/sign-up' component= {SignUp} /> 
      </Switch>
    </Router>
      
    </>
  );
}

export default App;
