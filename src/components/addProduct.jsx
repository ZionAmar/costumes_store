import { Form } from "react-router-dom";

export default function AddProduct() {
  return (
    <Form method="post" action="/" className="add-product-form">
      <label>
        נתיב תמונה
        <input name="image" required />
      </label>
      <label>
        תיאור
        <input name="description" required />
      </label>
      <label>
        מחיר
        <input name="price" type="number" required />
      </label>
      <button type="submit">📌 הוסף מוצר</button>
    </Form>
  );
}
