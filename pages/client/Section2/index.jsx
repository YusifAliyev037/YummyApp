import React from "react";
import styles from "./styles/homeSection2.module.css";

function HomeSection2() {
  return (
    <div className={styles.features}>
      <div className={styles.featuretext}>
        <div className={styles.featureh}>
          <h1>Features</h1>
        </div>
        <div className={styles.featurep}>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
        </div>
      </div>
      <div className={styles["cards-container"]}>
        <div className={styles.card}>
          <img src="/discountboucher.png" alt="Feature 1" />
          <h2>Discount Boucher</h2>
          <p>Lorem ipsum is placeholder commonly used in the graphic</p>
        </div>
        <div className={styles.card}>
          <img src="/healthyfood.png" alt="Feature 2" />
          <h2>Fresh healthy Food</h2>
          <p>Lorem ipsum is placeholder commonly used in the graphic.</p>
        </div>
        <div className={styles.card}>
          <img src="/homedelivery.png" alt="Feature 3" />
          <h2>Fast Home Delivery</h2>
          <p>Lorem ipsum is placeholder commonly used in the graphic</p>
        </div>
      </div>
    </div>
  );
}

export default HomeSection2;
