import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/HeroSection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productcard/ProductCard'
import Testimonials from '../../components/testimonials/Testimonials'
import Track from '../../components/track/Track'
// import { useDispatch, useSelector } from 'react-redux'
// import { addToCart, deleteFromCart } from '../../redux/cartSlice'








function Home() {
  // const dispatch = useDispatch();
  // const cartItem = useSelector((state)=> state.cart)

  // // console.log(cartItem)

  // const addCart = () => {
  //   dispatch(addToCart("shirt"));
  // }

  // const deleteCart = () => {
  //   dispatch(deleteFromCart("shirt"));
  // }
  
  return (
    
<Layout>
<div className="flex gap-5 justify-center">
        {/* <button className=' bg-gray-300 p-5' onClick={()=> addCart()}>add</button>
        <button className=' bg-gray-300 p-5' onClick={()=> deleteCart()}>del</button> */}
  </div>
  <HeroSection/>
  <Filter/>
  <ProductCard/>
  <Track/>
  <Testimonials/>
</Layout>
    
 )
}

export default Home
