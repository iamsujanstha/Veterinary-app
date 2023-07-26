import Image from "next/image";
import React from "react";
import styles from "@/styles/Logo.module.scss";
import LogoImg from "@/public/logo.png";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image src={LogoImg} width={40} height={45} alt="Veterinary" />
      <div className={styles.logo_text}>
        <div>Veterinary</div>
        <p>Care you pet</p>
      </div>
    </div>
  );
};

export default Logo;
