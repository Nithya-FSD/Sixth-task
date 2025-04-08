import React from 'react'

// import { useState } from 'react'
// import { useEffect } from 'react'


function Product({ products, addToCart}) {
 
  
  return (
    <>
    <div className='bg-gray-100 w-full  h-full'>
    <div className=' p-4  pt-20 gap-8 container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
      { products.map(product=>(
       <div key={product.id}> 
       <div className='bg-white p-4 h-full rounded shadow-md flex flex-col justify-between mx-auto w-[80%] md:w-full' >
        <img className='w-1/2 h-1/2 mx-auto ' src={product.image} alt={product.title}/>
        <p className=' text-sm font-bold '>{product.title}</p>
        <h1 className='text-xl text-gray-600 font-bold '>${product.price.toFixed(2)}</h1>
        <button onClick={()=>addToCart(product)}className='w-full bg-blue-400 hover:bg-blue-600 text-white py-2 rounded shdow-md'>Add to Cart</button>
       </div>
       </div>
      ))
      }
    </div>
    </div>
    </>
  )
}

export default Product