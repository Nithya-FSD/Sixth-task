import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
  <>
    <div className='fixed z-[50] w-full px-4 py-4  md:px-6 bg-blue-400 flex justify-between '>
    <div className='text-2xl bold '>Shopping🛒 </div>
    <div>
    <div className='text-2xl md:mr-6 bold hover:text-red-600'><Link to="/cart">Cart</Link></div>
    </div>
      </div>
    </>
  )
}

export default Navbar