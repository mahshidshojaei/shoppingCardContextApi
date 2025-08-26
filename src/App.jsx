import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Products from './Components/Products'
import products from './data/products'
import Toast from './Components/Toast/Toast'



function App() {
  const [Allproduct,setProducts]=useState(products)
  return (
    <div className="bg-zinc-100">
    <Navbar />
    <main className='text-center mt-4'>
      <span className='text-2xl'>All Products</span>
      {Allproduct.map(product=>(
        <Products {...product} />
      ))}
    </main>
    <Toast />
  </div>
  
  )
}

export default App