import { Link } from "react-router-dom";
export const Menu = () => {
  return (
    <ul className="menu-area">
      <li className="nav-items">
        <a href="#" className="nav-links">
          <i className="fa-solid fa-house"></i>
          Home
        </a>
      </li>
      <li className="nav-items">
        <a href="#" className="nav-links">
          <i className="fa-solid fa-newspaper"></i>
          News
        </a>
      </li>
      <li className="nav-items">
        <a href="#" className="nav-links">
          <i className="fa-solid fa-cart-shopping"></i>
          Shop
        </a>
      </li>
      <li className="nav-items">
        <Link to="/profile" className="nav-links">
          <i className="fa-solid fa-user"></i>
          Profile
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
