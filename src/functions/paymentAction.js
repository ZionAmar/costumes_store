import { redirect } from "react-router-dom";

export async function paymentAction({ request }) {
  const formData = await request.formData();

  const orderDetails = {
    name: formData.get("name"),
    idNumber: formData.get("idNumber"),
    address: formData.get("address"),
    total: formData.get("total"),
    productCodes: formData.get("productCodes"),
  };

  return orderDetails; 
}
