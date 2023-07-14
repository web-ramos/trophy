import Image from "next/image";
import styles from "./Layout.module.scss";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Form from "../Form";
import { ReactNode } from "react";
import Head from "next/head";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.mainContainer}>
            {children}
            <div className={styles.formWrapper} id="form">
              <Image
                className={styles.formImage}
                src="/form-background.png"
                width={"919"}
                height={"437"}
                alt=""
              />
              <h2>
                Deliver <br /> for
                <br />
                your team.
              </h2>
              <h3>
                Our process of custom trophy design is optimized to make you
                look good.
              </h3>
              <Form />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
