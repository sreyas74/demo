import React, { useEffect } from "react";
import styles from "./Sample.module.css";

const Sample = () => {
  useEffect(() => {
    console.log("Sample component rendered");
  }, []);

  return (
    <div
      className={styles.container}
      style={{ transition: "opacity 60s", opacity: 1 }}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>Coming Soon</h1>
        <p className={styles.subtitle}>We're working hard to get things ready for you!</p>
      </div>
    </div>
  );
};

export default Sample;
