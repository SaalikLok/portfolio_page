import React, { Component } from 'react';
import '../node_modules/flexboxgrid/dist/flexboxgrid.min.css';
import './style/style.min.css';
import ProjectCard from './ProjectCard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
        </div>        
      </div>
    );
  }
}

export default App;
