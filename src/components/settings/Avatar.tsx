import React from 'react'

function Avatar() {
  return (
    <div className='w-full center'>

    <div className='  w-24 h-24 rounded-full border-2 p-0.5 overflow-hidden '> 
      <img className='object-cover w-full h-full rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU" alt="avatar" />
    </div>
    </div>
  )
}

export default Avatar