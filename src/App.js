import React, { Component } from 'react';
import './style/flexboxgrid.min.css';
import './style/style.min.css';
import ProjectCard from './ProjectCard.js';
import projectData from './projectData.js';

class App extends Component { 
  render() {
    return (
      <div className="App">
      <h1>Saalik's Side-Projects</h1>
        <div className="row">
        {projectData.map((element, index) => {
            return(
              <ProjectCard 
              title={projectData[index].title} 
              descrip={projectData[index].description}
              imgback={projectData[index].backgroundUrl} 
              url={projectData[index].url}
              labelType={projectData[index].label}/>
            )
          })}   
        </div>        
      </div>
    );
  }
}

export default App;
