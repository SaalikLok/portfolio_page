import React from 'react';
import './style/style.min.css';

const Label = (props) => {
        return(
            <div className={props.labelType}>{props.labelType}</div>
        );
}

export default Label;