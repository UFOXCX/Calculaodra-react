import React from 'react';
import '../stylesheet/Button.css';

function Button(props){

    const itsOp = (value) => {
        return isNaN(value) && (value !== '.') && (value !== '=');

    }
    return (
        <div
            className={`button-container ${itsOp(props.children) ? 'operator' : ''}`.trimEnd()} onClick={() => props.handleClick(props.children)}>
            {props.children}
        </div>
    )
};

export default Button;

