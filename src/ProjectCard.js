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
                        <div className="cardImg" style={{background: `url(${this.props.imgback}) no-repeat center`}}/>
                        <div className="cardText">
                            <h3>{this.props.title}</h3>
                            <p>{this.props.descrip}</p>
                        </div>
                        <div className="cardLabels">
                        <Label labelType={this.props.labelType} />
                        <Label labelType={this.props.status} />
                        </div>
                    </div>
                </a>            
            </div>
        );
    }
}

export default ProjectCard;