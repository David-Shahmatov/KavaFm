import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        productCount: {},
    },
    reducers: {
        addToCart: ({ cartItems, productCount }, { payload: item }) => {
            cartItems.push(item);
            productCount[item.id] = item.quantity;
        },
        removeFromCart: ({ cartItems, productCount }, { payload: itemId }) => {
            cartItems = cartItems.filter(
                (item) => item.id !== itemId
            );
            delete productCount[itemId];
        },
        updateCartItemQuantity: ({ cartItems, productCount }, { payload: { id, quantity } }) => {
            productCount[id] = quantity;
            const itemIndex = cartItems.findIndex(
                (item) => item.id === id
            );
            if (itemIndex !== -1) {
                cartItems[itemIndex].quantity = quantity;
            }
        },
    },
});

export const { reducer, actions } = cartSlice;
