import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";
import { useState } from "react";
import BlackButton from "../UI/BlackButton/BlackButton";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className={styles.container}>
      <div className={styles.hamburgerContainer} onClick={toggleMenu}>
        <Image className={styles.hamburger} src="/hamburger.svg" fill alt="" />
      </div>

      <div className={styles.logoContainer}>
        <Link href="/">
          <div className={styles.logoImageContainer}>
            <Image
              className={styles.logoImage}
              src="/ModernTrophy-Logo.svg"
              fill
              alt=""
            />
          </div>
        </Link>
      </div>

      <nav
        className={`${styles.navigation} ${openMenu ? styles.active : ""}`}
        aria-label="main"
      >
        <Link href="/#brand" className={styles.navLink}>
          The Brand
        </Link>

        <Link href="/portfolio" className={styles.navLink}>
          Portfolio
        </Link>
        <Link href="/portfolio#custom" className={styles.navLink}>
          Custom
        </Link>
        <Link href="/test" className={styles.navLink}>
          Test
        </Link>
        <Link href="/#form" className={styles.navLink}>
          <BlackButton>Email Us</BlackButton>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
