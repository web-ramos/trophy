import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Layout from "../components/Layout/Layout";

const Test: NextPage = () => {
  return (
    <>
      <Head>
        <title>Test</title>
        <meta name="description" content="Test description" />
      </Head>
      <Layout>TEST</Layout>
    </>
  );
};

export default Test;
