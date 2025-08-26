import React from 'react'

function Toast() {
  return (
    <div className='fixed bottom-0 right-4 bg-[#1d4ed8] p-2 text-[white] rounded-md flex items-center gap-4 mb-4'>
      <button><i class="fa-light fa-xmark text-[15px]"></i></button>
      <span className='text-[14px]'>محصول با موفقیت به سبد اضافه شد</span>
    </div>
  )
}

export default Toast