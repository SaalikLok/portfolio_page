import React, {Component} from 'react';
import '../node_modules/flexboxgrid/dist/flexboxgrid.min.css';
import './style/style.min.css';

class ProjectCard extends Component{

    render(){
        return(
            <div className="col-xs-12 col-md-4">
                <div className="card">Project</div>            
            </div>
        );
    }
}

export default ProjectCard;