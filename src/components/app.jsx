import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./header";
import Home from "./home";
import Cart from "./cart";
import Admin from "./admin";
import AddProduct from "./addProduct";
import EditProduct from "./editProduct";
import Payment from "./payment";
import { CartProvider } from "./cartContext";

async function addProductAction({ request }) {
  const formData = await request.formData();
  const newProduct = {
    code: formData.get("code"),
    image: formData.get("image"),
    description: formData.get("description"),
    price: formData.get("price"),
  };
  console.log("✅ מוצר נוסף:", newProduct);
  return null;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      { index: true, element: <Home /> },
      { path: "cart", element: <Cart /> },
      { path: "payment", element: <Payment /> },
      {
        path: "admin",
        element: <Admin />,
        children: [
          { index: true, element: <AddProduct />, action: addProductAction },
          { path: "addProduct", element: <AddProduct />, action: addProductAction },
          { path: "editProduct", element: <EditProduct /> },
        ],
      },
    ],
  },
]);

export default function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}
