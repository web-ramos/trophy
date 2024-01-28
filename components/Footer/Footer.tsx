import Image from "next/image";
import styles from "./Footer.module.scss";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.footercontainer}>
        <div className={styles.leftColumn}>
          <div className={styles.footerImage}>
            <Image
              src="/ModernTrophy-Logo-Footer.svg"
              width={"168"}
              height={"93"}
              alt="Logo"
            />
          </div>
        </div>

        <nav className={styles.footercol} aria-label="Footer">
          <p className={styles.footerColHeader}>
            Site Menu&nbsp;
          </p>
          <ul className={styles.footerUl}>
            <Link href="/portfolio#custom">
              <li className={styles.footerlinks}>Design Custom Trophies</li>
            </Link>
            <Link href="/portfolio">
              <li className={styles.footerlinks}>Corporate Awards</li>
            </Link>
            <Link href="/#brand">
              <li className={styles.footerlinks}>Design & Craft</li>
            </Link>
          </ul>
        </nav>
        <div className={styles.footercolright}>
          <p className={styles.footerColHeader}>
            Contact
          </p>
          <Link
            href={`mailto: ${process.env.NEXT_PUBLIC_EMAIL}`}
            className={styles.footerButtonLink}
          >
            <button className={styles.footerButton}>Email Us</button>
          </Link>
          <p className={styles.footerText}>
            Our team of awards professionals is available weekdays 9am - 6pm ET
          </p>
        </div>
      </div>
      <div className={styles.copyright}>{`Modern Trophy © ${year}`}</div>
    </footer>
  );
};

export default Footer;
