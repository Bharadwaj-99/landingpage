import React from "react";
import styles from "./Header.module.css";
import header from "../../assets/untitled.png"
import down from "../../assets/down.png"
import avatar from "../../assets/Avatar1.png"
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img
              src={header}
              alt="Company Logo"
              className={styles.logoImage}
            />
          </div>
          <nav className={styles.navigation}>
            <a href="#home" className={styles.navLink}>
              Home
            </a>
            <div className={styles.dropdownTrigger}>
              <button className={styles.navButton}>
                Products
                <img
                  src={down}
                  alt=""
                  className={styles.dropdownIcon}
                />
              </button>
            </div>
            <div className={styles.dropdownTrigger}>
              <button className={styles.navButton}>
                Resources
                <img
                  src={down}
                  alt=""
                  className={styles.dropdownIcon}
                />
              </button>
            </div>
            <a href="#pricing" className={styles.navLink}>
              Pricing
            </a>
          </nav>
        </div>
        <div className={styles.userMenu}>
          <button className={styles.avatarButton} aria-label="User menu">
            <img
              src={avatar}
              alt="User avatar"
              className={styles.avatarImage}
            />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
