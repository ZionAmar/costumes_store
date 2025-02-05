import { Link } from "react-router-dom";
import { useCart } from "./cartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="cart">
      {cart.length === 0 ? (
        <p>העגלה שלך ריקה</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>שם המוצר</th>
              <th>מחיר ליחידה</th>
              <th>כמות</th>
              <th>סה"כ</th>
              <th>מחיקה</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product, index) => (
              <tr key={index}>
                <td>{product.description}</td>
                <td>₪{product.price}</td>
                <td>{product.quantity || 1}</td>
                <td>₪{(product.price * (product.quantity || 1)).toFixed(2)}</td>
                <td>
                  <button onClick={() => removeFromCart(product.code)}>
                    🗑️ מחק
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Link to="/payment">לתשלום 💳</Link>
    </div>
  );
}
