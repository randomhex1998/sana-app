import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const Menu = () => {
  const location = useLocation();
  let [profileColor, setProfileColor] = useState(0);
  let [newsColor, setNewsColor] = useState(0);
  let [shopColor, setShopColor] = useState(0);
  // let [profileColor, setProfileColor] = useState(0);

  useEffect(() => {
    if (location.pathname == "/profile") {
      setProfileColor(1);
    } else {
      setProfileColor(0);
    }
    if (location.pathname == "/news") {
      setNewsColor(1);
    } else {
      setNewsColor(0);
    }
    if (location.pathname == "/shop") {
      setShopColor(1);
    } else {
      setShopColor(0);
    }
  }, [location]);

  return (
    <ul className="menu-area">
      <li className="nav-items">
        <a href="#" className="nav-links">
          <i className="fa-solid fa-house"></i>
          Home
        </a>
      </li>
      <li className="nav-items">
        <Link
          to="/news"
          className={newsColor ? "color-menu-active nav-links" : "nav-links"}>
          <i className="fa-solid fa-newspaper"></i>
          News
        </Link>
      </li>
      <li className="nav-items">
        <Link
          to="/shop"
          className={shopColor ? "color-menu-active nav-links" : "nav-links"}>
          <i className="fa-solid fa-cart-shopping"></i>
          Shop
        </Link>
      </li>
      <li className="nav-items">
        <Link
          to="/profile"
          className={
            profileColor ? "color-menu-active nav-links" : "nav-links"
          }>
          <i className="fa-solid fa-user"></i>
          Profile
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
