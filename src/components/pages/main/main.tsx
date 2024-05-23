import React from 'react';
import Header from '../../layout/header/header';
import AdvantagesList from '../../blocks/advantages-list/advantages-list';
import advantages from '../../../mocks/advantages';

function Main() : JSX.Element {
    return (
        <>
            <Header />
            <AdvantagesList advantages={advantages} />
        </>
    );
}

export default Main;