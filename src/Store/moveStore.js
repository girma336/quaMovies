import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "./moveSlice";


export const store = configureStore({
    reducer: {
        movies: moviesReducer,
    }
})