import React from "react";
import styles from "@/styles/Footer.module.scss";
import Search from "components/Search";
import { BiLogoInstagram, BiLogoTwitter, BiLogoWhatsapp, BiLogoTelegram, BiLogoFacebookCircle } from "react-icons/bi";

const Footer = () => {
  const footerData = [
    {
      about: {
        title: "About",
        links: [
          {
            name: "History",
            url: "#",
          },
          {
            name: "Our Team",
            url: "#",
          },
          {
            name: "Brand Guidelines",
            url: "#",
          },
          {
            name: "Terms & Condition",
            url: "#",
          },
        ],
      },
      services: {
        title: "Services",
        links: [
          {
            name: "How to Order",
            url: "#",
          },
          {
            name: "Our Product",
            url: "#",
          },
          {
            name: "Order Status",
            url: "#",
          },
          {
            name: "Promo",
            url: "#",
          },
        ],
      },
    },
  ];
  return (
    <footer className={styles.footer_wrapper}>
      <div className={styles.footer_items}>
        {footerData.map((item, index) => {
          return (
            <ul key={index}>
              <p className={styles.title}>{item.about.title}</p>
              {item.about.links.map((link, index) => {
                return <li key={index}>{link.name}</li>;
              })}
            </ul>
          );
        })}
      </div>

      <div className={styles.footer_items}>
        {footerData.map((item, index) => {
          return (
            <ul key={index}>
              <p className={styles.title}>{item.services.title}</p>
              {item.services.links.map((link, index) => {
                return <li key={index}>{link.name}</li>;
              })}
            </ul>
          );
        })}
      </div>
      <div className={styles.last_col}>
        <div className={styles.title}>Title Here</div>
        <p>
          This can include various roles like cleaning staff, and other individuals who help keep the facility running
          smoothly.
        </p>
        <div className={styles.search}>
          <input type="search" placeholder="Search..." />
          <div className={styles.icon}>
            <BiLogoTelegram size={27} />
          </div>
        </div>
        <div className={styles.social_icons}>
          <BiLogoFacebookCircle size={30} />
          <BiLogoInstagram size={30} />
          <BiLogoTwitter size={30} />
          <BiLogoWhatsapp size={30} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
