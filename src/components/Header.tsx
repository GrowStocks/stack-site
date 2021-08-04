import React from 'react';
import NavBar from "./NavBar";
import './../scss/modules/_Header.scss';

const Header = () => {
    return (
        <header className="sc-header sc-header--scrollable">
            <div className="sc-header__wrap">
                <div className="sc-header__text">
                    <a href="./">
                        <h3>Stack</h3>
                    </a>
                </div>
                <div className="sc-header__others">
                    <NavBar />
                </div>
            </div>
        </header>
    );
};


export default Header;

