import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Form from "../components/Form/Form";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Corporate Awards and Trophies Made Better | Modern Trophy</title>
        <meta
          name="description"
          content="Modern Trophy is your awards and recogntion partner. We design and craft custom trophies that reflect your brand and honor your employees."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.banner}>
          <div className={styles.banner__container}>
            <div className={styles.banner__imageWrapper}>
              <Image
                className={styles.jtest}
                src="/hero-image.png"
                fill
                alt=""
              />
            </div>
            <div className={styles.banner__textWrapper}>
              <h1 className={styles.banner__title}>
                Trophies worthy of your brand &nbsp;
              </h1>
              <h2 className={styles.banner__subtitle}>
                M/T handles the fine details to deliver on your vision
              </h2>
              <p className={styles.banner__description}>
                Whether you run a massive corporate recognition program or are
                awarding a single valued employee, you are in good hands with
                Modern Trophy as your custom awards partner.
              </p>
              <Link href="/#form" className={styles.banner__action} passHref>
                <button>Get Started</button>
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.ourWork}>
          <div className={styles.ourWork__container}>
            <ul className={styles.ourWork__list}>
              <li className={styles.ourWork__item}>Iconic Designs&nbsp;</li>
              <li className={styles.ourWork__item}>Precision Crafted&nbsp;</li>
              <li className={styles.ourWork__item}>Expert Service&nbsp;</li>
            </ul>
            <Link href="/portfolio" className={styles.ourWork__link} passHref>
              <Image
                src="/see-our-work.png"
                width={"250"}
                height={"251"}
                alt=""
              />
            </Link>
          </div>
        </section>

        <section className={styles.heisMan}>
          <div className={styles.heisMan__container}>
            <div className={styles.heisMan__imageWrapper}>
              <Image src="/yourDesign.png" fill alt="He is man image" />
            </div>
            <div className={styles.heisMan__textWrapper}>
              <h2 className={styles.heisMan__title}>Your design made real </h2>
              <p className={styles.heisMan__text}>
                Your friendly account manager will lead you through a process
                designed to uncover the best design, materials and
                personalization for your program.
              </p>
              <p className={styles.heisMan__text}>
                Our in-house design studio uses this feedback — including
                preferred visual styles and budget — to create a trophy that
                embodies your brand and impresses your team.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.expertise}>
          <div className={styles.expertise__container}>
            <div className={styles.expertise__imageWrapper}>
              <Image
                src="/expertise.png"
                width={"360"}
                height={"327"}
                alt="Expertise"
              />
            </div>

            <div className={styles.expertise__textWrapper}>
              <h2 className={styles.expertise__title}>
                The result of expertise
              </h2>
              <p className={styles.expertise__text}>
                Whether you have a clear vision of the trophy you want or you
                need help from our skilled designers, Modern Trophy is here to
                impress you with an exceptional result. That&apos;s because we
                have the benefit of experience and a team that can&apos;t be
                beat.
              </p>
              <Link
                href={`mailto: ${process.env.NEXT_PUBLIC_EMAIL}`}
                passHref
                className={styles.expertise__link}
              >
                <button>Email Us</button>
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.honor}>
          <div className={styles.honor__container}>
            <div className={styles.honor__imageWrapper}>
              <Image src="/a-fitting-honor.png" fill alt="Fitting honor" />
            </div>
            <div className={styles.honor__textWrapper}>
              <h2 className={styles.honor__title}>A Fitting Honor </h2>
              <p className={styles.honor__text}>
                Modern Trophy delivers exceptional custom awards that honor your
                brand, honor your recipient and most importantly, honor your
                time.
              </p>
              <p className={styles.honor__text}>
                Our mission is to surprise and delight recipients through
                precision craftspersonship and world-class design.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.knowHow} id="brand">
          <div className={styles.knowHow__container}>
            <div className={styles.knowHow__imageWrapper}>
              <Image src="/know-how.png" width={"340"} height={"488"} alt="" />
            </div>
            <div className={styles.knowHow__textWrapper}>
              <h2 className={styles.knowHow__title}>
                The
                <br /> Know-How{" "}
              </h2>
              <p className={styles.knowHow__text}>
                We&apos;ve worked with hundreds of custom awards clients and we
                specialize in delivering trophies that surprise, delight and
                honor recipients and brands they represent.
              </p>
              <p className={styles.knowHow__text}>
                See how we get your awards done right.
              </p>
              <Link href="/#form" passHref className={styles.knowHow__link}>
                <Image
                  src="/start-a-trophy.png"
                  width={"324"}
                  height={"129"}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.precision}>
          <div className={styles.precision__container}>
            <div className={styles.precision__imageWrapper}>
              <Image src="/precision.png" fill alt="Precision image" />
            </div>
            <div className={styles.precision__textWrapper}>
              <h2 className={styles.precision__title}>Precision crafted</h2>
              <p className={styles.precision__text}>
                Modern Trophy delivers custom awards with precision and care.
                Our designers use your vision and requirements to produce
                photorealistic renderings. This allows you to visualize the
                finished product before it is crafted.
              </p>
              <p className={styles.precision__text}>
                Importantly, we balance design excellence and visual impact with
                an eye towards production feasibility and structural integrity.
              </p>
            </div>
          </div>
        </section>

        <div className={styles.beauty}>
          <div className={styles.beauty__container}>
            <div className={styles.beauty__imageWrapper}>
              <Image
                src="/beauty.png"
                width={"340"}
                height={"427"}
                alt="Beauty in the details image"
              />
            </div>
            <div className={styles.beauty__textWrapper}>
              <h2 className={styles.beauty__title}>Beauty in the details</h2>
              <p className={styles.beauty__text}>
                The awards design process starts when you call one of our
                friendly account managers. These valued team members are trained
                experts in custom trophy design.
              </p>
              <p className={styles.beauty__text}>
                We figure out the perfect awards for your program based on all
                the subtle details that make your brand meaningful and unique.
                We have expertise in all trophy materials including metal,
                crystal, glass, resin, 3D printing and a wide range of finishes.
              </p>
              <h3 className={styles.beauty__subtitle}>
                At Modern Trophy we honor your brand, your honoree and your time
              </h3>
              <Link
                href={`mailto: ${process.env.NEXT_PUBLIC_EMAIL}`}
                passHref
                className={styles.beauty__link}
              >
                <button>Email Us</button>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.formWrapper} id="form">
          <section className={styles.bottomBanner}>
            <div className={styles.bottomBanner__container}>
              <div className={styles.bottomBanner__imageWrapper}>
                <Image
                  className={styles.formImage}
                  src="/form-background.png"
                  fill
                  alt="Deliver for your team image"
                />
              </div>
              <div className={styles.bottomBanner__textWrapper}>
                <h2 className={styles.bottomBanner__title}>
                  Deliver <br /> for
                  <br />
                  your team.
                </h2>
                <h3 className={styles.bottomBanner__subtitle}>
                  Our process of custom trophy design is optimized to make you
                  look good.
                </h3>
              </div>
            </div>
          </section>

          <Form />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
