import { Form, useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";

export default function EditProduct() {
  const { productId } = useParams(); 
  const loadedProducts = useLoaderData(); 
  const initialProduct = loadedProducts.find((p) => p.code === Number(productId)) || { code: "", image: "", description: "", price: "" };

  const [product, setProduct] = useState(initialProduct);

  function handleCodeChange(e) {
    const newCode = e.target.value;
    const foundProduct = loadedProducts.find((p) => p.code === Number(newCode)) || { code: newCode, image: "", description: "", price: "" };
    setProduct(foundProduct);
  }

  function handleInputChange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  return (
      <Form method="post" className="edit_product_form">
        <label>
          🔍 קוד מוצר:
          <input 
            type="number" 
            name="code"
            value={product.code} 
            onChange={handleCodeChange} 
            placeholder="הזן קוד מוצר" 
            required 
          />
        </label>

        <label>
          🖼 נתיב תמונה:
          <input type="text" name="image" value={product.image} onChange={handleInputChange} required />
        </label>
        <label>
          📝 תיאור:
          <input type="text" name="description" value={product.description} onChange={handleInputChange} required />
        </label>
        <label>
          💰 מחיר:
          <input type="number" name="price" value={product.price} onChange={handleInputChange} required />
        </label>
        <button type="submit">🔄 עדכן מוצר</button>
      </Form>
  );
}
