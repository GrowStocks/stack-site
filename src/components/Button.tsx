import React from 'react';
import './../scss/modules/_Button.scss';

const Button = (props: any) => {
    return (
        <button className={`sc-button ${props.type === 'outlined' ? 'sc-button--outlined' : ''} ${props.type === 'filled' ? 'sc-button--filled' : ''}`}>
            <span className="sc-button__label">{ props.label }</span>
        </button>
    );
};

export default Button;
