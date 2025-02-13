import { useCart } from "./cartContext";
import { Form, useActionData } from "react-router-dom";

export default function Payment() {
  const { cart } = useCart();
  const orderData = useActionData(); // נתוני ההזמנה מה-`action`

  const totalPrice = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
  const productCodes = cart.map(product => product.code).join(","); // רשימת קודי המוצרים

  return (
    <div className="payment">
      <h2>🛒 קופה</h2>

      {cart.length === 0 ? (
        <p>אין מוצרים בעגלה</p>
      ) : orderData ? (
        <>
          <p>✅ התשלום התקבל בהצלחה!</p>
          <h3>📜 פרטי ההזמנה:</h3>
          <p><strong>שם הלקוח:</strong> {orderData.name}</p>
          <p><strong>ת.ז:</strong> {orderData.idNumber}</p>
          <p><strong>כתובת:</strong> {orderData.address}</p>
          <p><strong>סה"כ לתשלום:</strong> ₪{orderData.total}</p>
          <p><strong>קודי המוצרים:</strong> {orderData.productCodes}</p>
        </>
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

          {/* 🔥 שימוש ב-Form עם method="post" */}
          <Form method="post">
            <label>
              👤 שם מלא:
              <input type="text" name="name" required />
            </label>

            <label>
              🆔 ת.ז:
              <input type="text" name="idNumber" required pattern="\d{9}" title="יש להזין ת.ז עם 9 ספרות" />
            </label>

            <label>
              📍 כתובת למשלוח:
              <input type="text" name="address" required />
            </label>

            {/* שדות נסתרים עם הסכום והקודים */}
            <input type="hidden" name="total" value={totalPrice.toFixed(2)} />
            <input type="hidden" name="productCodes" value={productCodes} />

            <button type="submit">💳 שלם עכשיו</button>
          </Form>
        </>
      )}
    </div>
  );
}
