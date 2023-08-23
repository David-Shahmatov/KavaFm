import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Splide from '../../components/Splide/Splide';
import CardList from '../CardList/CardList';
import Footer from '../Footer/Footer';
import PizzaPage from '../../pages/PizzaPage/PizzaPage';
import GarnishPage from '../../pages/GarnishPage/GarnishPage';
import mainPageData from '../../server/mainPageData.json';
import pizzas from '../../server/pizzas.json';
import garnish from '../../server/garnish.json';

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
        <Route path="/" element={<CardList items={mainPageData} typePage='Головна'/>} />
        <Route path="/pizza" element={<CardList items={pizzas} typePage='Піца' />} />
        <Route path="/pizza/:id" element={<PizzaPage items={pizzas} />} />
        <Route path="/garnish" element={<CardList items={garnish} typePage='Гарнір'/>} />
        <Route path="/garnish/:id" element={<GarnishPage items={garnish} typePage='Гарнір'/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Main;
