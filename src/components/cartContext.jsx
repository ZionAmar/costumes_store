import { createContext, useContext, useState } from "react";

// יצירת קונטקסט
const CartContext = createContext();

// ספק (Provider) שמחזיק את המידע של העגלה
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]); // עגלת הקניות

  // ✅ הוספת מוצר לעגלה (אם קיים – מגדיל כמות)
  function addToCart(product) {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((p) => p.code === product.code);
      if (existingProduct) {
        return prevCart.map((p) =>
          p.code === product.code ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  }

  // ✅ מחיקת פריט אחת ממוצר בעגלה
  function removeFromCart(productCode) {
    setCart((prevCart) =>
      prevCart
        .map((p) =>
          p.code === productCode ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter((p) => p.quantity > 0) // מוחק רק אם הכמות מגיעה ל-0
    );
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
