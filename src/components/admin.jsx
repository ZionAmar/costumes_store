import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

export default function Admin() {
  const [productCode, setProductCode] = useState(""); // סטייט לשמירת קוד המוצר

  return (
    <div className="admin_container">
      <aside className="adminMenu">
        <Link to="addProduct">הוספת מוצר ➕</Link>

        {/* חיפוש מוצר לפי קוד */}
        <div>
          <input 
            type="number" 
            placeholder="🔍 קוד מוצר לעריכה"
            value={productCode}
            onChange={(e) => setProductCode(e.target.value)}
          />
          <Link to={`/admin/editProduct/${productCode || ""}`}>עריכת מוצר 🛠️</Link>
        </div>
      </aside>

      <Outlet />
    </div>
  );
}
