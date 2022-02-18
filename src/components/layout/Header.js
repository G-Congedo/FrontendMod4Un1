import React from 'react';

const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <div className="logo">
                    <img src="images/logo.png" with="100" alt="Hotel Las Olas" />
                    <h1>Hotel Las Olas</h1>
                </div>
            </div>
        </header>
    );
}

export default Header;