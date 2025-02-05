import {Link, Outlet} from 'react-router-dom'
export default function Header() {
  return (
    <>
      <nav className='navBar'>
        <Link className='link' to="/admin" >כניסת מנהל 👤</Link>
        <Link className='link' to="/" >לחנות 🏠</Link>
        <Link className='link' to="/cart" >עגלת הקניות 🛒</Link>
      </nav>
      <Outlet/>
    </>
  );
}
