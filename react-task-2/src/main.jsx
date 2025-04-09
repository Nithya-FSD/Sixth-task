import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// import React from 'react';
// import axios from 'axios';
// import Product from './pages/Product';
// import Cart from './pages/Cart';
// import Navbar from './components/Navbar';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useState, useEffect } from 'react';

// function App() {
//   const [carts, setCarts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios
//       .get('https://fakestoreapi.com/products')
//       .then((response) => {
//         setProducts(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   useEffect(() => {
//     console.log('Cart component re-rendered');
//   }, [carts]);

//   if (loading) {
//     return <h1 className="pt-16 text-xl semibold">Loading....</h1>;
//   }

//   //addtocart button
//   const addToCart = (message) => {
//     setCarts((prevCarts) => {
//       const itemExits = prevCarts.find((item) => item.id === message.id);

//       if (itemExits) {
//         alert('This product is already in your cart!');
//         return prevCarts;
//       } else {
//         const updated = [...prevCarts, message];
//         console.log("Added to cart:", message);
//         console.log("Updated cart:", updated);
//         return updated;
//       }
//     });
//   };

//   //remove button

//   const removeCart = (id) => {
//     setCarts((prevCarts) => {
//       const updatedCarts = prevCarts.filter((item) => item.id !== id);
//       console.log("Removed item with ID:", id);
//       return updatedCarts;
//     });
//   };


//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<><Navbar /><Product products={products} addToCart={addToCart} /></>} />
//           <Route path="/cart" element={<><Navbar /><Cart carts={carts} removeCart={removeCart} /></>} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
