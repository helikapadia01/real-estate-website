import { useState, useEffect } from "react";
import styles from "@/styles/comps/navbar.module.scss";
import Image from "next/image";
import logo from "../../../public/assets/png/logo.png";
import { useScrollControl } from "../../../context/ScrollControlContext"; 

const CustomNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { disableScroll, enableScroll } = useScrollControl();
  
    const handleMenuToggle = () => {
      setMenuOpen(!menuOpen);
    };
  
    useEffect(() => {
      if (menuOpen) {
        disableScroll();
      } else {
        enableScroll();
      }
    }, [menuOpen, disableScroll, enableScroll]);
  
    return (
      <div className={styles.navbar}>
        <div className={styles.content}>
          <Image src={logo} alt="Logo" width={200} height={100} />
          <div className={styles["menu-toggle"]} onClick={handleMenuToggle}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul>
            <li>Category</li>
            <li>About us</li>
            <li>Service</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className={`${styles.sidebar} ${menuOpen ? styles.active : ""}`}>
          <ul>
            <li onClick={handleMenuToggle}>Category</li>
            <li onClick={handleMenuToggle}>About us</li>
            <li onClick={handleMenuToggle}>Service</li>
            <li onClick={handleMenuToggle}>Blog</li>
            <li onClick={handleMenuToggle}>Contact us</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default CustomNavbar;