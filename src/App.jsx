import React from 'react'
import Navbar from './Components/Navbar'
import Products from './Components/Products'


function App() {
  return (
    <div className="bg-zinc-100 h-screen">
    <Navbar />
    <main className='text-center mt-4'>
      <span className='text-2xl'>All Products</span>
      <Products title="Phones"/>
    </main>
  </div>
  
  )
}

export default App