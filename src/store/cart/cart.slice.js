import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        productCount: {},
    },
    reducers: {
        addToCart: ({ cartItems, productCount }, action) => {
            const item = action.payload;
            cartItems.push(item);
            productCount[item.id] = item.quantity;
        },
        removeFromCart: ({ cartItems, productCount }, action) => {
            const itemId = action.payload;
            cartItems = cartItems.filter((item) => item.id !== itemId);
            delete productCount[itemId];
        },
        updateCartItemQuantity: ({ cartItems, productCount }, action) => {
            const { id, quantity } = action.payload;
            productCount[id] = quantity;
            const item = cartItems.find((item) => item.id === id);
            if (item) {
                item.quantity = quantity;
            }
        },
    },
});

export const { reducer, actions } = cartSlice;
