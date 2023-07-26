import React from "react";
import styles from "@/styles/Posts.module.scss";
import ImageCard from "components/ImageCard";

const Posts = () => {
  const postData = [
    {
      title: "As a vaterian and lover of animals",
      desc: "Our veterinary posts is dedicated to providing compassionate and comprehensive care for your cherished animal companions. ",
      date: "January 10, 2021",
    },
    {
      title: "Our Services",
      desc: "Our veterinary posts is dedicated to providing compassionate and comprehensive care for your cherished animal companions. ",
      date: "July 10, 2021",
    },
    {
      title: "Our Services",
      desc: "Our veterinary posts is dedicated to providing compassionate and comprehensive care for your cherished animal companions. ",
      date: "August 10, 2021",
    },
    {
      title: "Our Services",
      desc: "Our veterinary posts is dedicated to providing compassionate and comprehensive care for your cherished animal companions. ",
      date: "September 10, 2021",
    },
  ];
  return (
    <div className={styles.posts_wrapper}>
      <h1 className={styles.posts_title}>Recent Posts</h1>
      <div className={styles.posts_desc}>
        Our veterinary posts is dedicated to providing compassionate and comprehensive care for your cherished animal
        companions.{" "}
      </div>
      <div className={styles.posts_container}>
        {postData.map((item, index) => {
          return (
            <section key={index}>
              <ImageCard src={"puppy.jpeg"} />
              <div>
                <p className={styles.posts_name}>{item.title}</p>
                <p className={styles.posts_date}>{item.date}</p>
                <p>{item.desc}</p>
                <a href="#">Read More+</a>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
