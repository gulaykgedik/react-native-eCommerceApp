import { createSlice } from "@reduxjs/toolkit";
import { saveFavoritesToStorage } from "../../helpers";

const initialState = {
    favorites: [],
};

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
      
        addToFavorites: (state, action) => {
            if (state.favorites.some(item => item.id === action.payload.id)) {
                state.favorites = state.favorites.filter(item => item.id !== action.payload.id);
                saveFavoritesToStorage(state.favorites);
                return;
            }
           state.favorites.push(action.payload);

        },
        removeFromFavorites: (state, action) => {
            state.favorites = state.favorites.filter(item => item.id !== action.payload);
            saveFavoritesToStorage(state.favorites);
        },
        setFavoriteItems: (state, action) => {
            state.favorites = action.payload;
        },
  
    }
});

export const { setFavoriteItems, addToFavorites, removeFromFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;