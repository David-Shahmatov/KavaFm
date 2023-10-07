import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './Main.scss';

import Splide from '../Splide/Splide';
import CardList from '../CardList/CardList';
import Footer from '../Footer/Footer';

import PizzaPage from '../../pages/PizzaPage/PizzaPage';
import GarnishPage from '../../pages/GarnishPage/GarnishPage';
import SaladPage from '../../pages/SaladPage/SaladPage';
import SandwichPage from '../../pages/SandwichPage/SandwichPage';
import IceCreamPage from '../../pages/IceCreamPage/IceCream';
import DrinkPage from '../../pages/DrinkPage/DrinkPage';

import mainPageData from '../../server/mainPageData.json';
import pizzas from '../../server/pizzas.json';
import garnish from '../../server/garnish.json';
import salads from '../../server/salads.json';
import sandwiches from '../../server/sandwiches.json';
import iceCreams from '../../server/iceCreams.json';
import drinks from '../../server/drinks.json';
import CartPage from '../CartPage/CartPage';

const Main = () => {
  const [shouldShowSlider, setShouldShowSlider] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      setShouldShowSlider(false);
    } else {
      setShouldShowSlider(true);
    }
  }, [location]);

  return (
    <div className="main">
      {shouldShowSlider && <Splide />}
      <Routes>
        <Route path="/" element={<CardList items={mainPageData}/>} />
        <Route path="/pizza" element={<CardList items={pizzas} typePage='Піца' />} />
        <Route path="/pizza/:id" element={<PizzaPage items={pizzas} />} />
        <Route path="/garnish" element={<CardList items={garnish} typePage='Гарнір'/>} />
        <Route path="/garnish/:id" element={<GarnishPage items={garnish}/>} />
        <Route path='/salads' element={<CardList items={salads} typePage='Салати' />} />
        <Route path='/salads/:id' element={<SaladPage items={salads}/>} />
        <Route path='/sandwiches' element={<CardList items={sandwiches} typePage='Сендвічі' />} />
        <Route path='/sandwiches/:id' element={<SandwichPage items={sandwiches} />} />
        <Route path='/ice-creams' element={<CardList items={iceCreams} typePage='Морозиво' />} />
        <Route path='/ice-creams/:id' element={<IceCreamPage items={iceCreams} />} />
        <Route path='/drinks' element={<CardList items={drinks} typePage='Напої' />} />
        <Route path='/drinks/:id' element={<DrinkPage items={drinks} />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default Main;
