import React from 'react';
import './style/flexboxgrid.min.css';
import './style/style.min.css';
import Label from './Label.js';

const ProjectCard = (props) =>{
    return(
        <div className="col-xs-12 col-md-4">
            <a href={props.url}>
                <div className="card">
                    <div className="cardText">
                        <h2>{props.title}</h2>
                        <p>{props.descrip}</p>
                    </div>
                    <div className="cardLabels">
                    <Label labelType={props.labelType} />
                    </div>
                </div>
            </a>            
        </div>
    );
}

export default ProjectCard;