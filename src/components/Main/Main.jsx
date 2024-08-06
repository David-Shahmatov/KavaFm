import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./Main.scss";

import Splide from "../Splide/Splide";
import CardList from "../CardList/CardList";

import FoodPage from "../FoodPage/FoodPage";
import mainPageData from "../../server/mainPageData.json";
import pizzas from "../../server/pizzas.json";
import garnish from "../../server/garnish.json";
import salads from "../../server/salads.json";
import sandwiches from "../../server/sandwiches.json";
import iceCreams from "../../server/iceCreams.json";
import drinks from "../../server/drinks.json";
import CartPage from "../CartPage/CartPage";
import Loader from "../Loader/Loader";

const Main = () => {
    const [shouldShowSlider, setShouldShowSlider] = useState(true);
    const [showLoader, setShowLoader] = useState(true);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== "/") {
            setShouldShowSlider(false);
        } else {
            setShouldShowSlider(true);
        }
    }, [location]);

    useEffect(() => {
        setTimeout(() => {
            setShowLoader(false);
        }, 1500);
    }, [false]);

    return (
        <div className="main">
          {(shouldShowSlider && !showLoader) && <Splide />}
            {showLoader ? (
              <Loader />
              ) : (
                <Routes>
                    <Route
                        path="/"
                        element={<CardList items={mainPageData} />}
                    />
                    <Route
                        path="/pizza"
                        element={<CardList items={pizzas} typePage="Піца" />}
                    />
                    <Route
                        path="/pizza/:id"
                        element={<FoodPage items={pizzas} />}
                    />
                    <Route
                        path="/garnish"
                        element={<CardList items={garnish} typePage="Гарнір" />}
                    />
                    <Route
                        path="/garnish/:id"
                        element={<FoodPage items={garnish} />}
                    />
                    <Route
                        path="/salads"
                        element={<CardList items={salads} typePage="Салати" />}
                    />
                    <Route
                        path="/salads/:id"
                        element={<FoodPage items={salads} />}
                    />
                    <Route
                        path="/sandwiches"
                        element={
                            <CardList items={sandwiches} typePage="Сендвічі" />
                        }
                    />
                    <Route
                        path="/sandwiches/:id"
                        element={<FoodPage items={sandwiches} />}
                    />
                    <Route
                        path="/ice-creams"
                        element={
                            <CardList items={iceCreams} typePage="Морозиво" />
                        }
                    />
                    <Route
                        path="/ice-creams/:id"
                        element={<FoodPage items={iceCreams} />}
                    />
                    <Route
                        path="/drinks"
                        element={<CardList items={drinks} typePage="Напої" />}
                    />
                    <Route
                        path="/drinks/:id"
                        element={<FoodPage items={drinks} />}
                    />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            )}
        </div>
    );
};

export default Main;
