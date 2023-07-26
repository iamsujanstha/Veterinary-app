import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Achievement from "@/components/Achievement";
import Posts from "@/components/Posts";
import Footer from "components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Veterinary</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <Hero />
        <About />
        <Service />
        <About style="row-reverse" />
        <Pricing />
        <Team />
        <Achievement />
        <Posts />
        <Footer />
      </main>
    </div>
  );
}
