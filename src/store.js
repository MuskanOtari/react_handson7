import { configureStore } from "@reduxjs/toolkit";
import StudentReducer from "../src/Feature/StudentSlice"


export default configureStore({
    reducer:{
        student:StudentReducer
    }
})