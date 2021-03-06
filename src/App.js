import React, { Component } from 'react';
import './style/flexboxgrid.min.css';
import './style/style.min.css';
import ProjectCard from './ProjectCard.js';
import projectData from './projectData.js';
import floatBalls from './floatBalls.js';

class App extends Component { 
  render() {
    return (
      <div className="App">
      {floatBalls()}
      <h1>Saalik's Side-Projects</h1>
      <p>A simple collection of web, mobile and business projects.</p>
        <div className="row">
        {projectData.map((element, index) => {
            return(
              <ProjectCard 
              key={projectData[index].key}
              title={projectData[index].title} 
              descrip={projectData[index].description}
              imgback={projectData[index].backgroundUrl} 
              url={projectData[index].url}
              labelType={projectData[index].label}
              status={projectData[index].status}
              />
            )
          })}   
        </div>
        <footer>
          <a href="https://saaliklok.com"><p>&copy; Saalik Lokhandwala 2018</p></a>
        </footer>        
      </div>
    );
  }
}

export default App;
