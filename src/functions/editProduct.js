export async function editProductAction({ request, products, setProducts }) {
  const formData = await request.formData();
  const updatedProduct = {
    code: Number(formData.get("code")),
    image: formData.get("image"),
    description: formData.get("description"),
    price: Number(formData.get("price")),
  };

  setProducts((prevProducts) =>
    prevProducts.map((p) => (p.code === updatedProduct.code ? updatedProduct : p))
  );
}
