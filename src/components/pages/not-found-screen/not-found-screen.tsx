import React from 'react';
import './not-found-screen.scss'
import { Link } from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
    return (
        <section className='not-found-screen'>
            <img src="/assets/404-error.avif" alt="" />
        <h2 className='not-found-screen__title'>Что-то пошло не так</h2>
        <p className='not-found-screen__description'>Страница не найдена. <Link className='not-found-screen__link' to='/'>Вернуться на главную</Link></p>
        
        </section>
    );
}

export default NotFoundScreen;