import React, { useState } from "react";
import styles from "@/styles/Navbar.module.scss";
import Search from "../Search";
import Logo from "../Logo";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = React.useState(false);
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div className={styles.navbar_wrapper}>
      <div className={styles.container}>
        <Logo />
        <nav>
          <ul>
            {navItems.map((item, index) => (
              <a href={`#${item.name}`} className={styles.nav_item} key={index}>
                {item.name}
              </a>
            ))}
          </ul>
        </nav>
        {show && (
          <div>
            {" "}
            <GiHamburgerMenu />
          </div>
        )}
        <Search />
      </div>
    </div>
  );
};

export default Navbar;
