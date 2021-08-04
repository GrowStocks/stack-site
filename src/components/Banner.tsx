import React from 'react';
import Button from "./Button";
import './../scss/modules/_Banner.scss';

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__text">
                <h2 className="banner__title">Style with ease</h2>
                <h5 className="banner__subtitle">The magical SCSS framework that just makes sense</h5>
            </div>
            <div className="banner__action">
                <a href="https://growstocks.gitbook.io/stack" target="_blank">
                    <Button
                        type="outlined"
                        label="Get started"
                    />
                </a>
            </div>
        </div>
    );
};

export default Banner;
