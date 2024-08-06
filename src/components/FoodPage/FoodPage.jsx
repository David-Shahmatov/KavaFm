import { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import {
    pizzaImages,
    garnishImages,
    saladsImages,
    sandwichImages,
    iceCreamImages,
    drinkImages,
} from "../../images";
import cart from "../../images/cart.png";
import plus from "../../images/plus.png";
import minus from "../../images/minus.png";
import styles from "./FoodPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store/cart/cart.slice";

const FoodPage = ({ items }) => {
    const { id } = useParams();
    const location = useLocation();
    const { cartItems, productCount } = useSelector(
        (state) => state.cartReducer
    );
    const dispatch = useDispatch();
    const [countOfProduct, setCountOfProduct] = useState(productCount[id] || 1);

    const food = items.find((item) => item.id === id);

    const foodPrice = food.price;
    let itemImages;
    switch (true) {
        case location.pathname.includes("pizza"):
            itemImages = pizzaImages;
            break;
        case location.pathname.includes("garnish"):
            itemImages = garnishImages;
            break;
        case location.pathname.includes("salads"):
            itemImages = saladsImages;
            break;
        case location.pathname.includes("sandwich"):
            itemImages = sandwichImages;
            break;
        case location.pathname.includes("ice-creams"):
            itemImages = iceCreamImages;
            break;
        case location.pathname.includes("drinks"):
            itemImages = drinkImages;
            break;
        default:
            itemImages = {};
            break;
    }
    const foodImage = itemImages[food.image];
    const totalFoodPrice = foodPrice * countOfProduct;
    const itemInCart = cartItems.find((item) => item.id === id);

    const handleAddToCart = () => {
        if (!itemInCart) {
            const foodItem = {
                id: food.id,
                title: food.title,
                price: food.price,
                weight: food.weight,
                quantity: countOfProduct,
                image: food.image,
                type: food.type,
            };
            dispatch(actions.addToCart(foodItem));
        } else {
            dispatch(actions.updateCartItemQuantity(id, countOfProduct));
        }
    };

    const addMethod = () => {
        if (productCount[id] < 10) {
            setCountOfProduct((prevCount) => {
                const newCount = prevCount + 1;
                dispatch(actions.updateCartItemQuantity({ id, quantity: newCount }));
                return newCount;
            });
        }
    };

    const subtractMethod = () => {
        if (countOfProduct > 1) {
            setCountOfProduct((prevCount) => {
                const newCount = prevCount - 1;
                dispatch(actions.updateCartItemQuantity({ id, quantity: newCount }));
                return newCount;
            });
        } else {
            dispatch(actions.removeFromCart(id));
        }
    };

    useEffect(() => {
        setCountOfProduct(productCount[id] || 1);
    }, [productCount, id]);

    return (
        <>
            <div className={styles.ways}>
                <p>
                    <Link to="/" className={styles.ways__link}>
                        Головна{" "}
                    </Link>
                    &gt;
                    <Link to="/pizza" className={styles.ways__link}>
                        {" "}
                        Піца{" "}
                    </Link>
                    &gt; {food.title}
                </p>
            </div>
            <div className={styles.foodPage}>
                <img
                    className={styles.foodPage__image}
                    src={foodImage}
                    alt=""
                />
                <div className={styles.infoBlock}>
                    <p className={styles.infoBlock__title}>{food.title}</p>
                    <p className={styles.infoBlock__weight}>{food.weight}</p>
                    <p className={styles.infoBlock__ingredients}>
                        <p style={{ fontSize: "25px", color: "#000" }}>
                            Склад:
                        </p>{" "}
                        {food.ingredients}
                    </p>
                    <div className={styles.priceBlock}>
                        <p className={styles.priceBlock__text}>Ціна:</p>
                        <p className={styles.priceBlock__price}>
                            {totalFoodPrice} грн
                        </p>
                    </div>
                    {!itemInCart ? (
                        <div className={styles.cart} onClick={handleAddToCart}>
                            <img
                                src={cart}
                                alt=""
                                className={styles.cart__image}
                            />
                            <p className={styles.cart__title}>В кошик</p>
                        </div>
                    ) : (
                        <div className={styles.counter}>
                            <img
                                className={styles.counter__icon}
                                src={minus}
                                alt="subtract"
                                onClick={subtractMethod}
                            />
                            <p className={styles.counter__value}>
                                {productCount[id]}
                            </p>
                            <img
                                className={styles.counter__icon}
                                src={plus}
                                alt="add"
                                onClick={addMethod}
                            />
                        </div>
                    )}
                    {location.pathname.includes("pizza") && (
                        <div className={styles.checklist}>
                            <p className={styles.checklist__title}>
                                Додатки до піци: (50гр.)
                            </p>
                            <ul className={styles.checklist__list}>
                                <li className={styles.checklist__item}>
                                    Моцарела, пармезан (30гр.), гриби, перець,
                                    томати.
                                    <span className={styles.checklist__price}>
                                        20 грн
                                    </span>
                                </li>
                                <li className={styles.checklist__item}>
                                    Шинка, салямі, бекон, куряче філе, ковбаски
                                    мисливські, салямі чоррізо, дор блю.
                                    <span className={styles.checklist__price}>
                                        25 грн
                                    </span>
                                </li>
                                <li className={styles.checklist__item}>
                                    Лосось (50гр.)
                                    <span className={styles.checklist__price}>
                                        50 грн
                                    </span>
                                </li>
                            </ul>
                        </div>
                    )}
                    {location.pathname.includes("garnish") && (
                        <div className={styles.checklist}>
                            <p className={styles.checklist__title}>
                                Додатки до гарніру: (50гр.)
                            </p>
                            <ul className={styles.checklist__list}>
                                <li className={styles.checklist__item}>
                                    Соус сирний
                                    <span className={styles.checklist__price}>
                                        5 грн
                                    </span>
                                </li>
                                <li className={styles.checklist__item}>
                                    Соус каррі
                                    <span className={styles.checklist__price}>
                                        5 грн
                                    </span>
                                </li>
                                <li className={styles.checklist__item}>
                                    Кетчуп
                                    <span className={styles.checklist__price}>
                                        5 грн
                                    </span>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default FoodPage;
