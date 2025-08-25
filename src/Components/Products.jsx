import React from 'react'

function Products({title}) {
  return (
    <div>
      <h3>{title}</h3>
      <div className='grid grid-cols-4 p-4 gap-x-4'>
      <div className='bg-[white] p-4 flex flex-col col-span-1 items-center rounded-md border border-zinc-200'>
        <img src="./images/phone1.png" alt="" width='170px'/>
        <div className='flex flex-col gap-1'>
        <span>iphone 13</span>
        <span>$ 666</span>
        <a className='bg-[red] px-2 py-1 text-[white] rounded-md text-[14px]'>Add To Cart</a>
        <a className='border border-zinc-800 px-2 py-1 rounded-md text-[14px]'>more information</a>
        <p>number: 15</p>
        </div>
        </div>    
        </div>
    </div>
  )
}

export default Products