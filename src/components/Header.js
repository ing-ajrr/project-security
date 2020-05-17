import React from 'react';
import './styles.css';

const Header = () => {
    return (
        <header className="header container-fluid bg-light">
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="/">Project Security</a>
                <div className="dropdown d-none">
                    <a className="dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Anthony Rangel
                    </a>
                    
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" href="/">Cerrar Session</a>
                    </div>
                </div>
            </nav>
        </header>
    );
};
export default Header;