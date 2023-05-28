import { configureStore } from "@reduxjs/toolkit";
import cardslicer from "./cardslice";
import modalslicer from "./cardslice";


const store =configureStore({
    reducer:{
        cardslice: cardslicer,
        modal: modalslicer,
    }
})



export default store