import React from 'react'

function Navbar() {
  return (
    <div className='bg-zinc-800 p-4'>
        <div className="container mx-auto">
        <nav className='flex w-full justify-between'>
          <div className='flex gap-5'>
        <a href="#" className='text-[red]'>MahshidShop</a>
          <ul className="flex">
            <li><a href="#" className='text-[white]'>Home</a></li>
            </ul>
            </div>
            <div>
              <a href="#" className="flex gap-2 text-[white] items-center">
                <i className="fa-light fa-bag-shopping"></i>
                <span className='bg-[white] px-2 text-zinc-800 rounded-full'>0</span>
              </a>
            </div>
        </nav>
      </div>
      </div>
  )
}

export default Navbar