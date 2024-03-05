import React, { useContext } from 'react'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import myContext from '../../context/data/mycontext';


function Layout({children}) {
  const context = useContext(myContext)
const { mode } = context
  return (
    <div style={{ backgroundColor: mode === 'dark' ? 'rgb(62 64 66)' : '', color: mode === 'dark' ? 'white' : '', }}>
      <Navbar/>
      <div className="content">
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout;
