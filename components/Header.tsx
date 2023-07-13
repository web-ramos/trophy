import Image from "next/image";
import styles from "../styles/header.module.scss";
import Link from "next/link"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image
              className={styles.footerImage}
              src="/ModernTrophy-Logo.svg"
              width={"421"}
              height={"52"}
              alt=""
            />
          </Link>
        </div>
        <nav className={styles.headerNavigation} aria-label="main">
          <Link href="/#brand" className={styles.headerLink}>
            The Brand
          </Link>

          <Link href="/portfolio" className={styles.headerLink}>
            Portfolio
          </Link>

          <Link href="/portfolio#custom" className={styles.headerLink}>
            Custom
          </Link>
          <Link href="/#form" className={styles.headerLink}>
            <button className={styles.headerButton}>Email Us</button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
