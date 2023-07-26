import React from "react";
import styles from "@/styles/Team.module.scss";
import ImageCard from "components/ImageCard";
import { BiLogoInstagram, BiLogoTwitter, BiLogoWhatsapp, BiLogoFacebookCircle } from "react-icons/bi";

const Team = () => {
  const teamData = [
    { name: "Dr. John Doe", position: "Veterinarian", img: "doctor1.jpg", alt: "Dr. John Doe" },
    { name: "Dr. Jane Doe", position: "Veterinarian", img: "doctor2.jpg", alt: "Dr. John Doe" },
    { name: "Dr. John Doe", position: "Veterinarian", img: "doctor1.jpg", alt: "Dr. John Doe" },
    { name: "Dr. Jane Doe", position: "Veterinarian", img: "doctor2.jpg", alt: "Dr. John Doe" },
  ];
  return (
    <div className={styles.team_wrapper}>
      <h1 className={styles.team_title}>The Vetcare Team</h1>
      <div className={styles.team_desc}>
        Trained professionals who assist the veterinarian with various tasks, including handling and restraining
        animals, administering medications, conducting laboratory tests, and providing post-operative care.
      </div>
      <div className={styles.team_container}>
        {teamData.map((item, index) => {
          return (
            <section key={index}>
              <ImageCard src={item.img} alt={item.alt} />
              <div>
                <div className={styles.team_name}>{item.name}</div>
                <div className={styles.team_position}>{item.position}</div>
                <div className={styles.social_icons}>
                  <BiLogoFacebookCircle size={25} color="#ffd000" />
                  <BiLogoInstagram size={25} color="#ffd000" />
                  <BiLogoTwitter size={25} color="#ffd000" />
                  <BiLogoWhatsapp size={25} color="#ffd000" />
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
