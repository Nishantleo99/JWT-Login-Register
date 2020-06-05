/*
Author: Nishant Kumar
Description: This is the main file that runs after executing the command, only the routing is present in this file.
Note: The classes of the various components such as login and register form are using bootstrap, link: "https://getbootstrap.com/docs/4.0/getting-started/introduction/".
      The bootstrap is applied in the index.html under public folder.
*/

import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Route exact path="/" component={Landing} />
        <div className="container">
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
        </div>
      </div>
    </Router>
  );
}

export default App;
