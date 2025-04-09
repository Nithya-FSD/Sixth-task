import React from 'react'
import { useEffect } from 'react';

function Cart({ carts, removeCart }) {
  const total=carts.reduce((acc,curr)=>{return acc+curr.price},0)

  useEffect(() => {
    console.log("Cart updated!", carts);
  }, [carts]);

  return (
    <>
    <div className=''>
      <div className='p-4 bg-gray-100 min-h-screen '>
      <div className=' text-blue  px-2 font-extrabold'>Cart welcome</div>
      <div className='bg-white mt-10 container w-[90%] mb-0 md:max-w-[60%]   p-4  mx-auto'>
        <p>Shopping Cart</p>
      {carts.map((items)=>(
       <div key={items.id}>
       
          <img className="w-[10%] h-[10%] mt-4" src={items.image}/>
         <p>{items.title}</p>
         <h1>${items.price.toFixed(2)}</h1>
         <h1>Quantity:</h1>
         <div className='space-x-2'>
         <button className='bg-yellow-400 px-4 py-1 rounded hover:bg-yellow-500 transition-all duration-300 transform active:scale-95'>Qty.Increase</button>
         <button className='bg-yellow-400 px-4 py-1 rounded hover:bg-yellow-500 transition-all duration-300 transform active:scale-95'>Qty.Decrease</button>
         <button onClick={()=>removeCart(items.id)}className='bg-red-500 px-4 py-1 mb-4 rounded hover:bg-red-600 transition-all duration-300 transform active:scale-95'>remove</button>
        < hr className='border-t-1 border-gray-400'/>
         </div>
       
         </div>
          
       
    
      ))
      }
        <h1>total:{total}</h1>
    </div>
    </div>
    </div>
  
    </>
  )
}

export default Cart