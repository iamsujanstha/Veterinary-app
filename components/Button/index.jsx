import React from "react";
import styles from "@/styles/Button.module.scss";
import clsx from "clsx";

/* @@params ==> lable=string, outline=string, size=string */
const Button = ({ lable, outline, size, color }) => {
  return (
    <div className={styles.button_wrapper}>
      <button
        className={clsx(styles.button, outline && styles.btn_outline)}
        style={{ background: color }}>
        {lable}
      </button>
    </div>
  );
};

export default Button;
