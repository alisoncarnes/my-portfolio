import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
    <Router>
      <div>

        <nav className="navbar">
              <ul class="nav navbar-nav navbar-left">
                <li><Link to={'/'} className="navbar-brand"> About Me </Link></li>
              </ul>
              <ul class="nav navbar-nav navbar-center">
                <li><Link to={'/projects'} className="nav-link">Projects</Link></li>
              </ul>
              <ul class="nav navbar-nav navbar-right">
                <li><Link to={'/resume'} className="nav-link">Resume</Link>
                </li>
              </ul>
              </nav>

              <Header/>
              <hr />
              <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/projects' component={Projects} />
                  <Route path='/resume' component={Resume} />
              </Switch>
              <Footer/>
          </div>
    </Router>
    );
  }
}

export default App;
