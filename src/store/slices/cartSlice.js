import { createSlice } from "@reduxjs/toolkit";
import { saveToStorage } from "../../helpers";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        setCartItems: (state, action) => {
            state.items = action.payload;
            
        },
        addToCart: (state, action) => {
            const product = action.payload;
            const foundedItem = state.items.find(item => item.id === product.id);
            if (foundedItem) {
                foundedItem.quantity += 1;   
            }else {
            state.items.push({ ...product, quantity: 1 });
            }
            saveToStorage(state.items);

        },
         updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const existingItem = state.items.find(i => i.id === id);
            if (existingItem) {
                existingItem.quantity = quantity;
            }
        },

        increaseQuantity: (state, action) => {
          const index = state.items.findIndex(item => item.id === action.payload);

          state.items[index].quantity += 1;
        saveToStorage(state.items);
        },
        decreaseQuantity: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload);

          state.items[index].quantity -= 1;
            if (state.items[index].quantity === 0) {
                state.items.splice(index, 1);
            }
            saveToStorage(state.items);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);

            saveToStorage(state.items);
        },
        
    }
});

export const { setCartItems, addToCart, updateQuantity, increaseQuantity, decreaseQuantity, removeItem } = cartSlice.actions;

export default cartSlice.reducer;