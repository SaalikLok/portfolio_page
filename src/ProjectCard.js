import React, {Component} from 'react';
import './style/flexboxgrid.min.css';
import './style/style.min.css';
import Label from './Label.js';

class ProjectCard extends Component{

    render(){
        return(
            <div className="col-xs-12 col-md-4">
                <a href={this.props.url}>
                    <div className="card">
                        <div className="cardImg">
                            <img src={this.props.imgurl} alt="Project Image"/>
                        </div>
                        <div className="cardText">
                            <h4>{this.props.title}</h4>
                            <p>{this.props.descrip}</p>
                        </div>
                        <div className="cardLabels">
                            <Label labelType="labelStart" labelText="Blue"/>
                        </div>
                    </div>
                </a>            
            </div>
        );
    }
}

export default ProjectCard;