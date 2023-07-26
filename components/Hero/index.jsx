import React from "react";
import styles from "@/styles/Hero.module.scss";
import Button from "@/components/Button";
import Image from "next/image";
import HeroImage from "@/public/images/HeroImage.png";

const Hero = () => {
  return (
    <>
      <main className={styles.hero_wrapper} id="Home">
        <div className={ styles.hero_container}>
          <section className={styles.content_wrapper}>
            <h1>First I wanted to be a veterinarian</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <div className={styles.button_container}>
              <Button lable={"Contact Us"} color="#00bebd" />
              <Button lable={"Our Service"} outline />
            </div>
          </section>
          <section className={styles.image_wrapper}>
            <Image src={HeroImage} alt="Hero image" width={400} height={600} />
          </section>
        </div>
      </main>
    </>
  );
};

export default Hero;
