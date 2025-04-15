Explanation of the Ract project:

1) First create the react project vite
2) Secondly create the component Navbar.js  and create the folder pages inside the component of Product.jsx and Cart.jsx
3) Create the nav bar we add logo and set the cart router. when user click the cart. The cart page will open the new page with router of (/cart)
4) Next we have to fetch the products by fake store Api using useEffect.Add the product images,product title, product price from Api.
5) Create the "Add to cart" button and we should update it by useState then the products will show on UI.
When the user click the "Add to cart" button the each product cart add on the cart router (http://localhost:5174/cart).
6) The cart count also increase and show on the cart.
7) When user click the cart it go to another router  page the user can see added products .
8) And added the quantity button (increase and decrease) in tha cart page.
10) when the user want to increase the quantity the product price also change depending on the quantity 
11) Then user once click the "AddToCart" button the button will change "Remove from Cart". we don't want the cart wecan also remove the cart in "Remove from Cart" and also yo can remove in cart page.
12) Eventually added the total price , 10% discount  added then give the Final price dynamically changes depending on the quantity 