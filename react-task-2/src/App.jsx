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
      
      useEffect(() => {
        console.log("Cart component re-rendered");
      }, [carts]);
    
      if (loading) {
        return <h1 className='pt-16 text-xl semibold'>Loading....</h1>;
      }
      //addtocart button 
      const addToCart = (message) => {
        setCarts((prevCarts) => {
          const itemExits = prevCarts.find(item => item.id === message.id);
          
          if (itemExits) {
            alert("This product is already in your cart!");
            return prevCarts;
          } else {
            const updated = [...prevCarts, message];
            console.log("Added to cart:", message);
            console.log("Updated cart:", updated);
            return updated;
          }
        });
      };

      //remove button
      
      const removeCart = (id) => {
        setCarts((prevCarts) => prevCarts.filter((item) => item.id !== id));
        console.log("Removed item id:", id);
      };
 
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
        <Cart carts={carts} removeCart={removeCart}/>
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