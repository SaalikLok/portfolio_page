import React, { Component } from 'react';
import './style/flexboxgrid.min.css';
import './style/style.min.css';
import ProjectCard from './ProjectCard.js';
import projectData from './projectData.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <ProjectCard title={projectData[0].title} key={projectData[0].key} descrip={projectData[0].description}/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
        </div>        
      </div>
    );
  }
}

export default App;
