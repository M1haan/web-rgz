import React, { useState } from 'react';
import ProductCard from '../../ui/products-card/products-card';
import './products.scss';
import Product from '../../../types/product';

interface ProductsProps {
    products: Product[]; 
}

const Products = ({ products }: ProductsProps): JSX.Element => {
    const [sortCriteria, setSortCriteria] = useState<string>('');

    
    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortCriteria(event.target.value);
    };

    
    const sortedProducts = () => {
        let sorted = [...products];
        if (sortCriteria === 'price-up') {
            sorted.sort((a, b) => a.price - b.price);
        } else if (sortCriteria === 'price-down') {
            sorted.sort((a, b) => b.price - a.price);
        }
        return sorted;
    };

    return (
        <section className='products'>
            <h2 className="products__title">Список товаров: {products.length} </h2>
            <div className="products__sort">
                <label htmlFor="sort">Сортировать по цене: </label>
                <select className="products__select" id="sort" value={sortCriteria} onChange={handleSortChange}>
                    <option value="">Выбрать</option>
                    <option value="price-up">по возрастанию</option>
                    <option value="price-down">по убыванию</option>
                </select>
            </div>
            <ul className="products__list">
                {sortedProducts().map((product) => (
                    <li className="products__item" key={product.id}>
                        <ProductCard {...product} />
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Products;