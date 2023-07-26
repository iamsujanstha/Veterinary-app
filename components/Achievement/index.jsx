import React from "react";
import styles from "@/styles/Achievement.module.scss";
import { FaHandHoldingMedical } from "react-icons/fa";
import { GiMedicalDrip } from "react-icons/gi";
import { PiSyringe } from "react-icons/pi";

const Achievement = () => {
  const achievementData = [
    { icon: <FaHandHoldingMedical size={150} />, number: "+5780", title: "Happy Clients" },
    { icon: <GiMedicalDrip size={150} />, number: "+2000", title: "Departments" },
    { icon: <PiSyringe size={150} />, number: "+7900", title: "Vaccinations" },
  ];
  return (
    <div className={styles.achievement_wrapper}>
      <div className={styles.achievement_container}>
        {achievementData.map((item, index) => {
          return (
            <section key={index} className={styles.section}>
              <div>{item.icon}</div>
              <div className={styles.number}>{item.number}</div>
              <div className={styles.title}>{item.title}</div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Achievement;
