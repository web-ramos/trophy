import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";
import { useState } from "react";

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
        <Link href="/#brand" className={styles.navLink} scroll={false}>
          The Brand
        </Link>

        <Link href="/portfolio" className={styles.navLink} scroll={false}>
          Portfolio
        </Link>
        <Link href="/portfolio#custom" className={styles.navLink} scroll={false}>
          Custom
        </Link>
        <Link href="/#form" className={styles.navLink}>
          <button>Email Us</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
