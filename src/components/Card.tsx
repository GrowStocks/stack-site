import React from 'react';
import './../scss/modules/_Card.scss';

const Card = (props: any) => {
    return (
        <div className="sc-card">
            <div className="sc-card__info">
                <h1 className="sc-card__info__title">{ props.title }</h1>
                <p className="sc-card__info__subtitle">{ props.children }</p>
            </div>
        </div>
    );
};

export default Card;
