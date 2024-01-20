import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/cart.slice';
import {api} from "./api/api";

export default configureStore({
    reducer: {
        cart: cartReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})