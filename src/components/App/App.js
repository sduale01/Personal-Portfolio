import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route} from 'react-router-dom';
import ProjectLists from '../project-page/projects-list.js';
import Admin from '../admin-page/admin.js';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={ProjectLists}/>
            <Route exact path="/admin" component={Admin}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
