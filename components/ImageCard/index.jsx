import Image from "next/image";
import React from "react";
import styles from "@/styles/ImageCard.module.scss";
import Service1 from "@/public/images/care1.jpg";

const ImageCard = ({ src, alt }) => {
  return (
    <div className={styles.card_image}>
      <Image src={src ? `/images/${src}` : Service1} alt={alt} width={300} height={300} />
    </div>
  );
};

export default ImageCard;
