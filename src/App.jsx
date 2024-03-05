import React from 'react';

import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/home/Home';
import Order from './pages/Order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import Nopage from './pages/nopage/Nopage';
import MyState from './context/data/myState';
import Login from './pages/registration/Login';

import ProductInfo from './pages/productinfo/ProductInfo';
import AddProduct from './pages/admin/page/Addproduct';
import UpdateProduct from './pages/admin/page/Updateproduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './pages/registration/Signup';









function App() {
  return (
  
<MyState>
<BrowserRouter>
    <Routes>
    <Route path ="/" element ={<Home/>} />
    <Route path="/order" element={
            <ProtectedRoutes>
              <Order />
            </ProtectedRoutes>
          } />
    <Route path ="/cart" element ={<Cart/>} />
    <Route path="/dashboard" element={
            <ProtectedRoutesForAdmin><Dashboard /></ProtectedRoutesForAdmin>
          } />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/addproduct" element={
            <ProtectedRoutesForAdmin><AddProduct /></ProtectedRoutesForAdmin>} />
          <Route path="/updateproduct" element={
            <ProtectedRoutesForAdmin><UpdateProduct /></ProtectedRoutesForAdmin>} />
    <Route path="/productinfo/:id" element={<ProductInfo/>} />
    <Route path ="/*" element ={<Nopage/>} />
    
   
   

    

    </Routes>
     <ToastContainer/> 
   </BrowserRouter>
</MyState>
  
 
   
  )
}
// user
export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('currentUser')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}
// admin
export const ProtectedRoutesForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === 'gvsrivathsa@email.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

export default App
