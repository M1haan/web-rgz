import React from 'react';
import './header.scss'
import { Link } from 'react-router-dom';

function Header(): JSX.Element {
    return (
        <header className='header'>
            <div className="header__container">
                <h1 className='header__title'> Магазин игрушек ручной работы </h1>
                <Link className='header__link button' to="/catalog">Перейти</Link>
            </div>
        </header>
    );    
}

export default Header; 