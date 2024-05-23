import React from 'react';
import './products-card.scss';
import Product from '../../../types/product';
import { useCart } from '../../../store/cart-context';

function ProductCard({ id, name, description, image, price }: Product): JSX.Element {
    const { addToCart } = useCart(); // Используем хук для доступа к состоянию корзины

    const handleAddToCart = () => {
        addToCart({ id, name, price }); 
    };

    return (
        <article className="products-card">
            <img className="products-card__image" src={image} width='320' height='462' alt="фото товара." />
            <div className="products-card__content">
                <h3 className="products-card__title">{name}</h3>
                <p className="products-card__description">{description}</p>
                <b className="products-card__price">{price} ₽</b>
                <button className='products-card__button' onClick={handleAddToCart}>
                    <svg width="30" height="45" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.1884 6.85716H16.6377L13.1884 0.380944C12.9855 -8.61287e-06 12.5797 -0.0952351 12.1739 0.0952412C11.7681 0.285717 11.6667 0.66667 11.8696 1.04762L15.0145 6.85716H5.7826L8.92753 1.04762C9.13043 0.66667 8.92754 0.285717 8.6232 0.0952412C8.2174 -0.0952351 7.8116 0.0952295 7.6087 0.380944L4.1594 6.85716H0.811583C0.405785 6.85716 0 7.14286 0 7.61905C0 8 0.304336 8.38094 0.811583 8.38094H1.01449L1.92753 11.2381C1.72463 11.3333 1.62317 11.5238 1.62317 11.8095C1.62317 12.1905 1.92753 12.4762 2.33332 12.4762L4.05797 18H16.942L18.6667 12.4762C19.0725 12.4762 19.3768 12.1905 19.3768 11.8095C19.3768 11.619 19.2754 11.3333 19.0725 11.2381L19.9855 8.38094H20.1884C20.5942 8.38094 21 8.09524 21 7.61905C21 7.14286 20.5942 6.85716 20.1884 6.85716ZM15.6232 16.4762H5.07247L3.85506 12.381H16.942L15.6232 16.4762ZM17.2464 10.9524H3.34782L2.53623 8.28573H18.058L17.2464 10.9524Z" fill="currentColor"/>
                    </svg>
                </button>
            </div>
        </article>
    );
}

export default ProductCard;

