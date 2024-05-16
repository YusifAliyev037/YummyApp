import React from "react";
import styles from "./styles/homeSection1.module.css";

function HomeSection1() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>Our Food site makes it easy to find local food</h1>
        <p>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
        <div className={styles.buttons}>
          <button className={styles.registerbut}>Register</button>
          <button className={styles.orderbut}>Order Now</button>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.bigburger}>
          {" "}
          {/* <img
            className={styles.burgersec}
            src="/burgersec.png"
            alt="Big Image"
          /> */}
          <img
            className={styles.burgersec}
            src="/hsection1.png"
            alt="Big Image"
          />
        </div>

        {/* <div className={styles.smallBoxes}>
          <div className={styles.smallBox1}>
            <img src="/fries.png" alt="Small Image 1" />
            <p>Text 1</p>
          </div>

          <div className={styles.smallBox2}>
            <img src="/pizza.svg" alt="Small Image 2" />
            <p>Text 2</p>
          </div>

          <div className={styles.smallBox3}>
            <img src="/cheseeburger.png" alt="Small Image 3" />
            <p>Text 3</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default HomeSection1;
