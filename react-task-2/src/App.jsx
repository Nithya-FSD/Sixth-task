import React from 'react'
import axios from 'axios'
import Product from './pages/Product'
import  Cart from './pages/Cart'
import Navbar from './components/Navbar';
import { createBrowserRouter,RouterProvider  } from "react-router";
import {  useState, useEffect } from 'react'


function App() {
  const[carts,setCarts]=useState([])
  const [loading, setLoading] = useState(true);
  const[products,setProducts]=useState([]);
      
  const addToCart=(message)=>{
   
    const itemExits=carts.some(item=> item.id===message.id)
    console.log("itemExits",itemExits)
    console.log(carts)
    if(itemExits){
      console.log("item")
      alert("This product is already in your cart!");
    }else{
      setCarts([...carts, message]);
      console.log(message)
      console.log("Current cart:", [...carts, message]);
    }
 
    }
  
      useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(response=>{
          setProducts(response.data)
          setLoading(false);
        })
          .catch((error)=>{
            console.log(error)
          })
         
      },[])
    
      if (loading) {
        return <h1 className='pt-16 text-xl semibold'>Loading....</h1>;
      }
      
 
const router = createBrowserRouter([
  {
    path:"/",
    element:(
      <>
        <Navbar />
        <Product products={products} addToCart={addToCart}/>
      </>
    ),
  },
  {
    path:"/cart",
    element:(
      <>
        <Navbar />
        <Cart carts={carts}/>
      </>
    ),
  },
], {
  future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
  }
})

return (

  <div>
    
     <RouterProvider
      router={router}
      future={{
          v7_startTransition: true,
      }}
    />
  </div>
)
}

export default App