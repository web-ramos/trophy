import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Portfolio.module.scss";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Form from "../components/Form";
import Link from "next/link";

const Portfolio: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Bespoke Awards and Trophies Gallery | Modern Trophy</title>
        <meta
          name="description"
          content="A selection of our custom corporate awards for leading brands. These images are a selection from our vast experience. We bring your custom award vision to life."
        />
      </Head>
      <Header />
      <div className={styles.main}>
        <div className={styles.expertise}>
          <Image
            src="/portfolio/expertise-hero.png"
            width={"965"}
            height={"506"}
            alt=""
          />
          <div className={styles.expertiseText}>
            <h1>
              Trophy Expertise <br /> to Deliver Results{" "}
              <Image
                className={styles.footerImage}
                src="/triangle.png"
                width={"16"}
                height={"16"}
                alt=""
              />
            </h1>
            <div className={styles.expertiseDescription}>
              <h2>World-class brands entrust their custom awards to M/T</h2>
              <p>
                We work with top brands to deliver exceptional custom
                recognition products. Explore examples of our high end trophy
                creations below and reach a member of our expert staff when
                you&apos;re ready to get started.{" "}
              </p>
              <Link href="/portfolio/#form" passHref>
                <button>Get Started</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.customCrystal}>
          <Image
            src="/portfolio/custom-crystal.png"
            width={"327"}
            height={"327"}
            alt=""
          />
          <div className={styles.customCrystalText}>
            <h2>Custom Crystal Awards</h2>
            <p>
              We use premium optical crystal to build beautiful custom awards
              that will impress your recipients.
            </p>
            <p>
              From hand assembly to polishing to a gleaming finish and carefully
              packaging for transport, we consider all elements of custom
              crystal and glass awards production.
            </p>
          </div>
        </div>
        <div className={styles.power} id="custom">
          <Image
            src="/portfolio/power.png"
            width={"983"}
            height={"543"}
            alt=""
          />
          <div className={styles.powerText}>
            <h2>
              Power in the details{" "}
              <Image
                className={styles.footerImage}
                src="/triangle.png"
                width={"16"}
                height={"16"}
                alt=""
              />
            </h2>
            <p>
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
        <div className={styles.brandedMetal}>
          <Image
            src="/portfolio/branded-metal-awards.png"
            width={"362"}
            height={"404"}
            alt=""
          />
          <div className={styles.brandedMetalText}>
            <h2>Branded metal awards</h2>
            <p>
              Our leading production methods include top-of-the-line metal
              casting that products equisite trophies in striking detail.
            </p>
            <p>
              Many of the world&apos;s most recognizable custom awards are
              product using this method. This may be the ideal method if you are
              looking or a classic statuette or complex metal sculpture trophy.
              Cast metal awards can be finished in our signature 24k gold or a
              range of electroplated metal finishes.
            </p>
            <Link href="/portfolio#form" passHref><button>Get Started</button></Link>
          </div>
        </div>
        <div className={styles.machinedLogo}>
          <Image
            src="/portfolio/machined-logo-trophies.png"
            width={"878"}
            height={"495"}
            alt=""
          />
          <div className={styles.machinedLogoText}>
            <h2>Machined logo trophies</h2>
            <p>
              Machining is one method we have in our toolbox to create premium
              custom metal awards. It is a particularly effective choice for
              shorter lead times, smaller production runs or flat designs. With
              the addition of high-end, color-matched paints and bases in
              assorted materials, machined metal allows for a huge range of
              customization.{" "}
            </p>
            <p>
              You account manager will guide you to the most effective
              production method for your project. Reach out to get our insight
              and expertise on your unique vision.
            </p>
          </div>
        </div>
        <div className={styles.awards}>
          <Image
            src="/portfolio/youtube-award.png"
            width={"217"}
            height={"301"}
            alt=""
          />
          <Image
            src="/portfolio/nike-award.png"
            width={"240"}
            height={"281"}
            alt=""
          />
          <Image
            src="/portfolio/20-years.png"
            width={"154"}
            height={"269"}
            alt=""
            className={styles.years}
          />
          <Image
            src="/portfolio/i-award.png"
            width={"163"}
            height={"211"}
            alt=""
            className={styles.iAward}
          />
        </div>
        <div className={styles.premiumAwards}>
          <Image
            src="/portfolio/premium-acrylic-awards.png"
            width={"983"}
            height={"524"}
            alt=""
          />
          <div className={styles.premiumAwardsText} itemID={styles.form}>
            <h2>Premium Acrylic Awards</h2>
            <p>
              Acrylic is an exceptional material with a wide array of custom
              award applications. Arylic is available in many colors — both
              clear and opaque — and provides a beautiful canvas for your
              honoree&apos;s personalization. Custom acrylic awards allow for a
              wide range of customization and flexibility{" "}
            </p>
          </div>
        </div>
        <div className={styles.formWrapper} id="form">
          <Image
            className={styles.formImage}
            src="/portfolio/portfolio-form.png"
            width={"919"}
            height={"392"}
            alt=""
          />

          <h2>
            Deliver <br /> for
            <br />
            your team.
          </h2>
          <h3>
            Our process of custom trophy design is optimized to make you look
            good.
          </h3>
          <Form />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
