import React from 'react'

function Cart({ carts }) {
  return (
    <>
    <div className=''>
      <div className=' text-blue py-16 font-extrabold'>Cart welcome</div>
      {carts.map((items,index)=>{
        return <div key={index}>
         <h1>{items.title}</h1>
         </div>
      })
      }
    </div>
    </>
  )
}

export default Cart