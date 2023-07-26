import React from "react";
import styles from "@/styles/Pricing.module.scss";
import ImageCard from "components/ImageCard";
import Head from "next/head";

const Pricing = () => {
  const pricingData = [
    { price: 50, discount: 35, img: "Breed1.jpg", alt: "Breed1" },
    {
      price: 80,
      discount: 50,
      img: "Breed2.jpg",
      alt: "Breed2",
    },
    { price: 38, discount: 30, img: "Breed3.jpg", alt: "Breed3" },
    { price: 70, discount: 40, img: "Breed4.jpg", alt: "Breed4" },
  ];

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Our veterinary pricing is dedicated to providing compassionate and comprehensive care for your cherished animal companions."
        />
      </Head>
      <div className={styles.pricing_wrapper}>
        <h1 className={styles.pricing_title}>Breed Pricing</h1>
        <div className={styles.pricing_desc}>
          Our veterinary pricing is dedicated to providing compassionate and comprehensive care for your cherished
          animal companions.{" "}
        </div>
        <div className={styles.pricing_container}>
          {pricingData.map((item, index) => {
            return (
              <section key={index}>
                <ImageCard src={item.img} alt={item.alt} />
                <div className={styles.pricing_name}>
                  ${item.price}
                  <span>${item.discount}</span>
                </div>
                <button className={styles.buy_btn}>Buy Now</button>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Pricing;
