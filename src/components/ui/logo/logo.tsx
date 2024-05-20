import React from 'react';
import { Link } from 'react-router-dom';

function Logo(): JSX.Element {
    return (
        <Link to='/'>
            <img src="/assets/logo.avif" width='70' height='70' alt="локотип компании." />
        </Link>
    );
}

export default Logo;