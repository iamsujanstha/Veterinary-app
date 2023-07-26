import React from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Service.module.scss";
import ImageCard from "components/ImageCard";
import Head from "next/head";

const Service = () => {
  const router = useRouter();
  const title = router.asPath.split("#")[1];
  const serviceData = [
    {
      name: "Nutrition Counseling",
      desc: "Proper nutrition plays a crucial role in your pet's health. We offer tailored nutrition plans to meet your pet's specific needs.",
      img: "care1.jpg",
      alt: "care1",
    },
    {
      name: "Emergency Care",
      desc: "In times of emergencies, our clinic is fully prepared to provide immediate medical attention to your pet.",
      img: "care2.jpg",
      alt: "care2",
    },
    {
      name: "Behavioral Counseling",
      desc: "Our experts can help address behavioral issues in pets, promoting a harmonious relationship between you and your furry friend.",
      img: "care3.jpg",
      alt: "care3",
    },
    {
      name: "Dental Care",
      desc: "Dental health is vital for your pet's overall well-being. We provide dental exams, cleanings, and dental health education.",
      img: "care4.jpg",
      alt: "care4",
    },
  ];

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Our veterinary service is dedicated to providing compassionate and comprehensive care for your cherished animal companions."
        />
      </Head>
      <div id="Services"></div>
      <div className={styles.service_wrapper}>
        <div className={styles.service}>
          <h1 className={styles.service_title}>Our Services</h1>
          <div className={styles.service_desc}>
            Our veterinary service is dedicated to providing compassionate and comprehensive care for your cherished
            animal companions.{" "}
          </div>
          <div className={styles.service_container}>
            {serviceData.map((item, index) => (
              <section key={index}>
                { console.log(item.img)}
                <ImageCard src={item.img} alt={item.alt} />
                <div>
                  <div className={styles.service_name}>{item.name}</div>
                  <p>{item.desc}</p>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
