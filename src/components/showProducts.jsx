import Product from "./product";

export default function ShowProducts({products}) {
  return (
    <section className="cards">
      {products.map((p) => (
        <Product key={p.code} product={p} />
      ))}
    </section>
  );
}
