import { products } from "../data/products";
import Product from "./product";

export default function ShowProducts() {
  return (
    <section className="cards">
      {products.map((p) => (
        <Product key={p.code} product={p} />
      ))}
    </section>
  );
}
