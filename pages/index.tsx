import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Form from "../components/Form";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
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
        <div className={styles.mainContainer}>
          <div className={styles.topContainer}>
            <Image
              className={styles.jtest}
              src="/hero-image.png"
              width='963'
              height='453'
              alt=""
            />
            <h1 className={styles.topHeading}>
              Trophies worthy of your brand{" "}
              <Image
                className={styles.footerImage}
                src="/triangle.png"
                width={"16"}
                height={"16"}
                alt=""
              />
            </h1>
            <p className={styles.topSecondaryHeading}>
              M/T handles the fine details to deliver on your vision
            </p>
            <p className={styles.topDescription}>
              Whether you run a massive corporate recognition program or are
              awarding a single valued employee, you are in good hands with
              Modern Trophy as your custom awards partner.
            </p>
            <Link href="/#form" passHref>
              <button className={styles.getStartedButton}> Get Started </button>
            </Link>
          </div>
          <div className={styles.ourWork}>
            <div className={styles.ourWorkText}>
              <p>
                Iconic Designs{" "}
                <Image
                  className={styles.blackTriangle}
                  src="/blackTriangle.png"
                  width={"16"}
                  height={"16"}
                  alt=""
                ></Image>
              </p>
              <p>
                Precision Crafted{" "}
                <Image
                  className={styles.blackTriangle}
                  src="/blackTriangle.png"
                  width={"16"}
                  height={"16"}
                  alt=""
                ></Image>
              </p>
              <p>
                Expert Service{" "}
                <Image
                  className={styles.blackTriangle}
                  src="/blackTriangle.png"
                  width={"16"}
                  height={"16"}
                  alt=""
                />
              </p>
            </div>
            <Link href="/portfolio" passHref>
              <button className={styles.buttonImage}>
                <Image
                  src="/see-our-work.png"
                  width={"250"}
                  height={"251"}
                  alt=""
                />
              </button>
            </Link>
          </div>
          <div className={styles.heisman}>
            <Image
              className={styles.test}
              src="/yourDesign.png"
              width={"879"}
              height={"435"}
              alt=""
            />
            <div className={styles.heismanText}>
              <h2 className="heismanText">
                Your design made real{" "}
                <Image
                  className={styles.footerImage}
                  src="/triangle.png"
                  width={"16"}
                  height={"16"}
                  alt=""
                />
              </h2>
              <p className="heismanText">
                Your friendly account manager will lead you through a process
                designed to uncover the best design, materials and
                personalization for your program.
              </p>
              <p className="heismanText">
                Our in-house design studio uses this feedback — including
                preferred visual styles and budget — to create a trophy that
                embodies your brand and impresses your team.
              </p>
            </div>
          </div>
          <div className={styles.expertise}>
            <Image src="/expertise.png" width={"360"} height={"327"} alt="" />
            <div className={styles.expertiseText}>
              <h2>The result of expertise</h2>
              <p>
                Whether you have a clear vision of the trophy you want or you
                need help from our skilled designers, Modern Trophy is here to
                impress you with an exceptional result. That&apos;s because we
                have the benefit of experience and a team that can&apos;t be
                beat.
              </p>
              <Link href="mailto: jared.melkun@gmail.com" passHref>
              <button>Email Us</button></Link>
            </div>
          </div>
          <div className={styles.honor}>
            <Image
              src="/a-fitting-honor.png"
              width={"981"}
              height={"616"}
              alt=""
            />
            <div className={styles.honorText}>
              <h2>
                A Fitting Honor{" "}
                <Image
                  className={styles.blackTriangle}
                  src="/triangle.png"
                  width={"16"}
                  height={"16"}
                  alt=""
                />
              </h2>
              <p>
                Modern Trophy delivers exceptional custom awards that honor your
                brand, honor your recipient and most importantly, honor your
                time.{" "}
              </p>
              <p>
                Our mission is to surprise and delight recipients through
                precision craftspersonship and world-class design.
              </p>
            </div>
          </div>
          <div className={styles.knowHow} id="brand">
            <Image src="/know-how.png" width={"340"} height={"488"} alt="" />
            <div className={styles.knowHowText}>
              <h2>
                The
                <br /> Know-How{" "}
                <Image
                  className={styles.blackTriangle}
                  src="/blackTriangle.png"
                  width={"16"}
                  height={"16"}
                  alt=""
                />
              </h2>
              <p>
                We&apos;ve worked with hundreds of custom awards clients and we
                specialize in delivering trophies that surprise, delight and
                honor recipients and brands they represent.
              </p>
              <p>See how we get your awards done right.</p>
              <Link href="/#form" passHref>
              <button className={styles.knowHowButton}>
                <Image
                  src="/start-a-trophy.png"
                  width={"324"}
                  height={"129"}
                  alt=""
                />
              </button></Link>
            </div>
          </div>
          <div className={styles.precision}>
            <Image src="/precision.png" width={"873"} height={"391"} alt="" />
            <div className={styles.precisionText}>
              <h2>Precision crafted</h2>
              <p>
                Modern Trophy delivers custom awards with precision and care.
                Our designers use your vision and requirements to produce
                photorealistic renderings. This allows you to visualize the
                finished product before it is crafted.
              </p>
              <p>
                Importantly, we balance design excellence and visual impact with
                an eye towards production feasibility and structural integrity.
              </p>
            </div>
          </div>
          <div className={styles.beauty}>
            <Image src="/beauty.png" width={"340"} height={"427"} alt="" />
            <div className={styles.beautyText}>
              <h2>Beauty in the details</h2>
              <p>
                The awards design process starts when you call one of our
                friendly account managers. These valued team members are trained
                experts in custom trophy design.
              </p>
              <p>
                We figure out the perfect awards for your program based on all
                the subtle details that make your brand meaningful and unique.
                We have expertise in all trophy materials including metal,
                crystal, glass, resin, 3D printing and a wide range of finishes.
              </p>
              <h3>
                At Modern Trophy we honor your brand, your honoree and your time
              </h3>
              <Link href="mailto: jared.melkun@gmail.com" passHref><button>Email Us</button></Link>
            </div>
          </div>
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
              Our process of custom trophy design is optimized to make you look
              good.
            </h3>
            <Form />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
