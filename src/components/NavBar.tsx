import React from 'react';
import './../scss/modules/_NavBar.scss';

const NavBar = () => {
    return (
        <nav className="sc-nav">
            <div className="sc-nav__container">
                <NavItem
                    to="./"
                    icon="home"
                    label="Home"
                    isActive
                />
                <NavItem
                    to="https://growstocks.gitbook.io/stack"
                    icon="description"
                    label="Documentation"
                />
                <NavItem
                    to="https://github.com/GrowStocks/stack"
                    icon="code"
                    label="GitHub"
                />
            </div>
        </nav>
    );
};

const NavItem = (props: any) => {
    return (
        <div className={`sc-nav__item ${props.isActive === true ? 'active' : ''}`} data-tooltip={props.label}>
            <a href={props.to}>
                <p className="sc-nav__item__icon material-icons">{props.icon}</p>
                <p className="sc-nav__item__text">{props.label}</p>
            </a>
        </div>
    );
};

export default NavBar;
