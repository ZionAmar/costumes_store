import { useCart } from "./cartContext";

export default function Product({ product }) {
  const { addToCart } = useCart(); 

  return (
    <div className="card">
      <p>{product.code}</p>
      <img
        src={require(`../images/${product.image}`)}
        alt={product.description}
        className="product_image"
      />
      <p>{product.description}</p>
      <p>{product.price} ₪</p>
      <button onClick={()=>{addToCart(product)}}>הוסף לסל 🛒</button>
    </div>
  );
}
