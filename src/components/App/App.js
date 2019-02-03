import React, { Component } from 'react';
import './App.css';
import ProjectLists from '../project-page/projects-list.js';
import Admin from '../admin-page/admin.js';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <p>Empty Page</p>
        <Admin />
        {/* <ProjectLists /> */}
      </div>
    );
  }
}

export default App;
