import { Form } from "react-router-dom";

export default function AddProduct() {
  return (
    <Form method="post" className="add_product_form">
      <label>
        קוד פריט
        <input name="code" required />
      </label>
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
