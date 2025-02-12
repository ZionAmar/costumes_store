import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Header from "./header";
import Home from "./home";
import Cart from "./cart";
import Admin from "./admin";
import AddProduct from "./addProduct";
import EditProduct from "./editProduct";
import Payment from "./payment";
import { CartProvider } from "./cartContext";
import { myProducts } from "../data/products";
import { addProductAction } from "../functions/addProduct";

export default function App() {
  const [products, setProducts] = useState(myProducts);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        { index: true, element: <Home products={products}/> },
        { path: "cart", element: <Cart /> },
        { path: "payment", element: <Payment /> },
        {
          path: "admin",
          element: <Admin />,
          children: [
            { index: true, element: <h1>עמוד מנהל</h1> },
            { 
              path: "addProduct", 
              element: <AddProduct />,
              action: (args) => addProductAction({ ...args, setProducts }), // ✅ שולחים את `setProducts`
            },
            { path: "editProduct", element: <EditProduct /> },
          ],
        },
      ],
    },
  ]);

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}
