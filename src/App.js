import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';

class App extends Component {
  render() {
    return (
    <Router>
      <div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <ul className="navbar-nav mr-auto">
                <li><Link to={'/'} className="navbar-brand"> Alison Carnes </Link></li>
                <li><Link to={'/projects'} className="nav-link">Projects</Link></li>
                <li><Link to={'/resume'} className="nav-link">Resume</Link>
                </li>
              </ul>
              </nav>
              <hr />
              <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/projects' component={Projects} />
                  <Route path='/resume' component={Resume} />
              </Switch>
          </div>
    </Router>
    );
  }
}

export default App;
