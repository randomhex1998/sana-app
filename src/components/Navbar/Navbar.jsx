import React from "react";
import { Routes , Route } from "react-router-dom";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <section className="bottom-navbar">
        <Menu/>
    </section>
  );
};

export default Navbar;
