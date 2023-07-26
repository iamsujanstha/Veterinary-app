import React from "react";
import styles from "@/styles/About.module.scss";
import Button from "@/components/Button";
import Image from "next/image";
import HeroImage from "@/public/images/HeroImage.png";
import Head from "next/head";

const About = ({ style }) => {
  return (
    <>
      <Head>
        <meta name="description" content="About us" />
      </Head>
      <main className={styles.about_wrapper} style={{ flexDirection: style }}>
        <section className={styles.content_wrapper}>
          <h1 id="About">First I wanted to be a veterinarian</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book.
          </p>
          <div className={styles.button_container}>
            <Button lable={"Our Service"} color="#ffd000" />
          </div>
        </section>
        <section className={styles.image_wrapper}>
          <Image src={HeroImage} alt="Hero image" width={400} height={600} />
        </section>
      </main>
    </>
  );
};

export default About;
