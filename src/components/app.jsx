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
import { editProductAction } from "../functions/editProduct"; // ✅ ייבוא פעולה
import { editProductLoader } from "../functions/editProductLoader"; // ✅ ייבוא ה-Loader

export default function App() {
  const [products, setProducts] = useState(myProducts);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        { index: true, element: <Home products={products} /> },
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
              action: (args) => addProductAction({ ...args, setProducts }),
            },
            { 
              path: "editProduct/:productId?",
              element: <EditProduct />,
              loader: async (args) => editProductLoader({ ...args, products }),
              action: async (args) => editProductAction({ ...args, products, setProducts })
            },
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
