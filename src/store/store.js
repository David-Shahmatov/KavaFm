import { configureStore } from "@reduxjs/toolkit";
import { reducer as cartReducer } from "./cart/cart.slice";

const store = configureStore({
    reducer: {
        cartReducer,
    },
});

export default store;
