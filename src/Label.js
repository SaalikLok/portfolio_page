import React from 'react';
import './style/style.min.css';

const Label = (props) => {
    return(
        <div className={props.labelType}>{props.labelText}</div>
    );
}

export default Label;