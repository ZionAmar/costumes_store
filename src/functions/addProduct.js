export async function addProductAction({ request, state }) {
    const { products, setProducts } = state; 
    const formData = await request.formData();
    
    const newProduct = {
      code: Date.now(),
      image: formData.get("image"),
      description: formData.get("description"),
      price: Number(formData.get("price")),
    };
  
    setProducts([...products, newProduct]); 
    console.log("✅ מוצר נוסף:", newProduct);
    return null;
  }
  