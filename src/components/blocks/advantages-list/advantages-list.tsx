import React from 'react';
import './advantages-list.scss';
import { Link } from 'react-router-dom';
import Advantages from '../../../types/advantages';
import AdvantagesCard from '../../ui/advantages-card/advantages-card';

interface AdvantagesProps {
    advantages: Advantages[]; 
}

function AdvantagesList({ advantages }: AdvantagesProps) : JSX.Element {
    return (
        <section className="advantages">
            <div className="advantages__container">
                <h2 className="advantages__title">Наши преимущеста</h2>
                <ul className="advantages__list">
                    {advantages.map((advantage) => (
                    <li className="advantages__item" key={advantage.id}>
                        <AdvantagesCard {...advantage} />
                    </li>
                ))}
                </ul>
                <Link className='advantages__link button' to="/catalog">Перейти</Link>
            </div>
        </section>
    );
}

export default AdvantagesList;