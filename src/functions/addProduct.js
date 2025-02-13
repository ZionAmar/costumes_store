
export async function addProductAction({ request, setProducts }) {
  const formData = await request.formData();
  const newProduct = {
    code: formData.get("code"),
    image: formData.get("image"),
    description: formData.get("description"),
    price: Number(formData.get("price")),
  };

  setProducts((prevProducts) => [...prevProducts, newProduct]);
}
