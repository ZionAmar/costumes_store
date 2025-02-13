export async function paymentAction({ request }) {
    const formData = await request.formData();
    const orderData = {
      name: formData.get("name"),
      address: formData.get("address"),
      total: formData.get("total"),
    };
  
    console.log("✅ הזמנה נשמרה:", orderData);
  
    return orderData; // הנתונים יוחזרו ל`useActionData` ב-Payment.jsx
  }
  