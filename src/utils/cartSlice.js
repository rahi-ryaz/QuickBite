import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name: "cart",
    initialState:{
        items :[],
    },
    reducers :{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem: (state)=>{
            state.items.pop();
        },
        clearCart: (state)=>{
            state.items.length=0;
        },

    } ,
})
//cartSlice will ve kind of big object which will contain action and Reducers

//this syntax is given by Redux
export const{addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;