import { configureStore } from "@reduxjs/toolkit";
import commentlist from "../modules/commentListSlice"
import post from "../modules/post";

const store = configureStore({
    reducer:{
        commentlist,
        post,
    }
})

export default store;