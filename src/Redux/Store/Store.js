import { configureStore } from "@reduxjs/toolkit";
import {formRed} from "../Slice/FormSlice";


export const store = configureStore({
    reducer:{
        formRed
    }
}) 