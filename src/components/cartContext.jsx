import { createContext, useContext, useState } from "react";

// יצירת קונטקסט
const CartContext = createContext();

// ספק (Provider) שמחזיק את המידע של העגלה
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]); // עגלת הקניות

  // הוספת מוצר לעגלה
  function addToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }

  // מחיקת מוצר מהעגלה
  function removeFromCart(productCode) {
    setCart((prevCart) => prevCart.filter((p) => p.code !== productCode));
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

// פונקציה לקבלת הנתונים מהקונטקסט
export function useCart() {
  return useContext(CartContext);
}
