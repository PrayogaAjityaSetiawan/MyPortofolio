import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    darkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
}

export const darkModeSlice = createSlice({
    name : "darkMode",
    initialState,
    reducers : {
        toogleDarkMode : (state) => {
            state.darkMode = !state.darkMode
            localStorage.setItem("darkMode", JSON.stringify(state.darkMode))
        }
    }
})

export const { toogleDarkMode } = darkModeSlice.actions
export default darkModeSlice.reducer