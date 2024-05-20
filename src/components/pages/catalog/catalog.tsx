import React from 'react';
import Products from '../../blocks/products/products';
import products from '../../../mocks/products';

function Catalog() : JSX.Element {
    return (
        <>
        <Products products={products}/>
        </>
    );
}

export default Catalog;