import React from 'react';
import './style/style.min.css';

const Status = (props) => {
        return(
            <div className={props.statusType}/>
        );
}

export default Status;