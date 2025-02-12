import { useCart } from "./cartContext";
import { useState } from "react";

export default function Payment() {
  const { cart } = useCart(); // ✅ מקבלים את העגלה מה-Context
  const [paid, setPaid] = useState(false); // ✅ ניהול סטטוס התשלום

  // ✅ חישוב מחיר כולל של כל המוצרים בעגלה
  const totalPrice = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);

  return (
    <div className="payment">
      <h2>קופה</h2>

      {cart.length === 0 ? (
        <p>🛒 אין מוצרים בעגלה</p>
      ) : (
        <>
          <table border="1">
            <thead>
              <tr>
                <th>שם המוצר</th>
                <th>מחיר ליחידה</th>
                <th>כמות</th>
                <th>סה"כ</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product, index) => (
                <tr key={index}>
                  <td>{product.description}</td>
                  <td>₪{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>₪{(product.price * product.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>💰 סה"כ לתשלום: ₪{totalPrice.toFixed(2)}</h3>

          {!paid ? (
            <button onClick={() => setPaid(true)}>💳 שלם עכשיו</button>
          ) : (
            <p>✅ שולם בהצלחה!</p>
          )}
        </>
      )}
    </div>
  );
}
