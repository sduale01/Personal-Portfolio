import React, { Component } from 'react';
import './App.css';
import ProjectLists from '../project-page/projects-list.js'

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <p>Empty Page</p>
        <ProjectLists />
      </div>
    );
  }
}

export default App;
