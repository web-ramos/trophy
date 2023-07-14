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
              alt=""
            />
          </div>
        </div>

        <nav className={styles.footercol} aria-label="Footer">
          <p className={styles.footerColHeader}>
            Site Menu&nbsp;
            <Image
              className={styles.footerImage}
              src="/triangle.svg"
              width={"20"}
              height={"20"}
              alt=""
            />
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
          <div>
            <div>
              <p className={styles.footerColHeader}>
                Contact
                <Image
                  className={styles.footerImage}
                  src="/triangle.svg"
                  width={"20"}
                  height={"20"}
                  alt=""
                />
              </p>
              <Link href="mailto:jared.melkun@gmail.com">
                <button className={styles.footerButton}>Email Us</button>
              </Link>
            </div>
          </div>
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
