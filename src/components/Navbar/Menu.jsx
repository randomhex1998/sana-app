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
        <a href="#" className="nav-links">
          <i className="fa-solid fa-user"></i>
          Profile
        </a>
      </li>
    </ul>
  );
};

export default Menu;
