import React from 'react';
import Advantages from '../../../types/advantages';

function AdvantagesCard ({ image, title, description }: Advantages) : JSX.Element {
    return (
        <>
            <img className='advantages__image' src={image} alt="" />
            <h3 className='advantages__subtitle'>{title}</h3>
            <p className='advantages__description'>{description}</p>
        </>
           
       
    );
}

export default AdvantagesCard;