import { createSlice } from '@reduxjs/toolkit'

// import { useSelector } from 'react-redux';


    const initialState = JSON.parse(localStorage.getItem('cart'))??[];


   
   


// console.log("Initial state:", initialState);

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
          state.push(action.payload)
        },
        deleteFromCart(state, action) {
           
            return state.filter(item => item.id != action.payload.id);
        }
    }
})

export const { addToCart, deleteFromCart } = cartSlice.actions

export default cartSlice.reducer;