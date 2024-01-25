import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Portfolio.module.scss";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Form from "../components/Form";
import Link from "next/link";

const Portfolio: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bespoke Awards and Trophies Gallery | Modern Trophy</title>
        <meta
          name="description"
          content="A selection of our custom corporate awards for leading brands. These images are a selection from our vast experience. We bring your custom award vision to life."
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
                  src="/portfolio/expertise-hero.png"
                  fill
                  alt="Expertise image"
                />
              </div>
              <div className={styles.banner__textWrapper}>
                <h1 className={styles.banner__title}>
                  Trophy Expertise <br /> to Deliver Results{" "}
                </h1>
                <h2 className={styles.banner__subtitle}>
                  World-class brands entrust their custom awards to M/T
                </h2>
                <p className={styles.banner__description}>
                  We work with top brands to deliver exceptional custom
                  recognition products. Explore examples of our high end trophy
                  creations below and reach a member of our expert staff when
                  you&apos;re ready to get started.{" "}
                </p>
                <Link href="/#form" className={styles.banner__action} passHref>
                  <button>Get Started</button>
                </Link>
              </div>
            </div>
        </section>

        <section className={styles.expertise}>
          <div className={styles.expertise__container}>
            <div className={styles.expertise__imageWrapper}>
              <Image
                src="/portfolio/custom-crystal.png"
                width={"327"}
                height={"327"}
                alt="Custom Crystal image"
              />
            </div>

            <div className={styles.expertise__textWrapper}>
              <h2 className={styles.expertise__title}>
                Custom Crystal Awards
              </h2>
              <p className={styles.expertise__text}>
                We use premium optical crystal to build beautiful custom awards
                that will impress your recipients.
              </p>
              <p className={styles.expertise__text}>
                From hand assembly to polishing to a gleaming finish and carefully
                packaging for transport, we consider all elements of custom
                crystal and glass awards production.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.honor}>
          <div className={styles.honor__container}>
            <div className={styles.honor__imageWrapper}>
              <Image
                src="/portfolio/power.png"
                fill
                alt=""
              />
            </div>
            <div className={styles.honor__textWrapper}>
              <h2 className={styles.honor__title}>Power in the details{" "}</h2>
              <p className={styles.honor__text}>
                Our process is optimised to produce exeptionally detailed custom
                trophies. From delcately balancing aesthetics, cost, and strength
                in the design process to industry-leading manufacturing methods
                that yield detail in higher relieft, we consider all aspects of
                the process to get your team the best possible custom award. Even
                the team that personalize and package your award is made up of
                professionals who are dedicated to a smooth process and safe
                delivery.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.expertise}>
          <div className={styles.expertise__container}>
            <div className={styles.expertise__imageWrapper}>
              <Image
                src="/portfolio/branded-metal-awards.png"
                width={"362"}
                height={"404"}
                alt=""
              />
            </div>

            <div className={styles.expertise__textWrapper}>
              <h2 className={styles.expertise__title}>
                Branded metal awards
              </h2>
              <p className={styles.expertise__text}>
                Our leading production methods include top-of-the-line metal
                casting that products equisite trophies in striking detail.
              </p>
              <p className={styles.expertise__text}>
                Many of the world&apos;s most recognizable custom awards are
                product using this method. This may be the ideal method if you are
                looking or a classic statuette or complex metal sculpture trophy.
                Cast metal awards can be finished in our signature 24k gold or a
                range of electroplated metal finishes.
              </p>
              <Link
                href="/portfolio#form"
                passHref
                className={styles.expertise__link}
              >
                <button>Get Started</button>
              </Link>
            </div>
          </div>
        </section>


        <section className={styles.machinedLogo}>
          <div className={styles.machinedLogo__container}>
            <div className={styles.machinedLogo__imageWrapper}>
              <Image
                src="/portfolio/machined-logo-trophies.png"
                fill
                alt="Machined logo trophies"
              />
            </div>
            <div className={styles.machinedLogo__textWrapper}>
              <h2 className={styles.machinedLogo__title}>Machined logo trophies</h2>
              <p className={styles.machinedLogo__text}>
                Machining is one method we have in our toolbox to create premium
                custom metal awards. It is a particularly effective choice for
                shorter lead times, smaller production runs or flat designs. With
                the addition of high-end, color-matched paints and bases in
                assorted materials, machined metal allows for a huge range of
                customization.
              </p>
              <p className={styles.machinedLogo__text}>
                You account manager will guide you to the most effective
                production method for your project. Reach out to get our insight
                and expertise on your unique vision.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.awards}>
          <div className={styles.awards__container}>
            <div>
              <Image
                src="/portfolio/youtube-award.png"
                width={"217"}
                height={"301"}
                alt="YouTube award image"
              />
            </div>
            <div>
              <Image
                src="/portfolio/nike-award.png"
                width={"240"}
                height={"281"}
                alt="Nike award image"
              />

            </div>
            <div>
              <Image
                src="/portfolio/20-years.png"
                width={"154"}
                height={"269"}
                alt="20 year award image"
              />
            </div>
            <div>
              <Image
                src="/portfolio/i-award.png"
                width={"163"}
                height={"211"}
                alt="i award image"
              />
            </div>
        </div>
      </section>

      <section className={styles.premiumAwards}>
          <div className={styles.premiumAwards__container}>
            <div className={styles.premiumAwards__imageWrapper}>
              <Image
                src="/portfolio/premium-acrylic-awards.png"
                fill
                alt="Premium acrylic awards image"
              />
            </div>
            <div className={styles.premiumAwards__textWrapper}>
              <h2 className={styles.premiumAwards__title}>Premium Acrylic Awards{" "}</h2>
              <p className={styles.premiumAwards__text}>
                Acrylic is an exceptional material with a wide array of custom
                award applications. Arylic is available in many colors — both
                clear and opaque — and provides a beautiful canvas for your
                honoree&apos;s personalization. Custom acrylic awards allow for a
                wide range of customization and flexibility
              </p>
            </div>
          </div>
        </section>

        <div className={styles.formWrapper} id="form">
          <section className={styles.bottomBanner}>
            <div className={styles.bottomBanner__container}>
              <div className={styles.bottomBanner__imageWrapper}>
                <Image
                    className={styles.formImage}
                    src="/portfolio/portfolio-form.png"
                    fill
                    alt="Portfolio form image"
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

export default Portfolio;
