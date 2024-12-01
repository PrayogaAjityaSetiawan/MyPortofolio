import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./darkMode/darkModeSlice";

export const store = configureStore({
    reducer: {
        darkMode: darkModeReducer,
    },
});

export default store;

