import React from 'react';
import './advantages.scss';
import { Link } from 'react-router-dom';

function Advantages() : JSX.Element {
    return (
        <section className="advantages">
            <div className="advantages__container">
                <h2 className="advantages__title">Наши преимущеста</h2>
                <ul className="advantages__list">
                    <li className="advantages__item">
                        <img className='advantages__image' src="/assets/advantages-1.svg" alt="" />
                        <h3 className='advantages__subtitle'>Ручная работа</h3>
                        <p className='advantages__description'>Связано вручную с любовью и умилением</p>
                    </li>
                    <li className="advantages__item">
                        <img className='advantages__image' src="/assets/advantages-2.svg" alt="" />
                        <h3 className='advantages__subtitle'>Качество</h3>
                        <p className='advantages__description'>Экологически чистые материалы</p>
                    </li>
                    <li className="advantages__item">
                        <img className='advantages__image' src="/assets/advantages-3.svg" alt="" />
                        <h3 className='advantages__subtitle'>Упаковка</h3>
                        <p className='advantages__description'>Поставляется в подарочной упаковке</p>
                    </li>
                    <li className="advantages__item">
                        <img className='advantages__image' src="/assets/advantages-4.svg" alt="" />
                        <h3 className='advantages__subtitle'>Производство в России</h3>
                        <p className='advantages__description'>Поддержка отечественного производителя</p>
                    </li>
                </ul>
                <Link className='advantages__link button' to="/catalog">Перейти</Link>
            </div>
        </section>
    );
}

export default Advantages;