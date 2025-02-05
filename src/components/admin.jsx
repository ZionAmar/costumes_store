import { Link, Outlet } from "react-router-dom";

export default function Admin() {
  return (
    <div className="admin_container">
      <aside className="adminMenu">
        <Link to="addProduct">הוספת מוצר ➕</Link>
        <Link to="editProduct">עריכת מוצר 🛠️</Link>
      </aside>
      <Outlet />
    </div>
  );
}
