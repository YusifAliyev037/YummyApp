import React, { useState } from "react";
import styles from "./styles/clientHeader.module.css";
import { ROUTER } from "../../server/constant/router";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";

const ClientHeader = () => {
  const { push } = useRouter();

  const [showDropdown, setShowDropdown] = useState(false);

  const openDropdown = () => {
    setShowDropdown(true);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <div className={styles.clientHeader}>
      <h1 className={styles.logo}>Yummy</h1>
      <h2>.</h2>

      <nav>
        <ul className={styles.navList}>
          <li onClick={() => push(ROUTER.HOME)}>
            <a>Home</a>
          </li>
          <li onClick={() => push(ROUTER.RESTAURANT)}>
            <a>Restaurants</a>
          </li>
          <li onClick={() => push(ROUTER.ABOUTUS)}>
            <a>About Us</a>
          </li>
          <li onClick={() => push(ROUTER.HOWITWORKS)}>
            <a>How it works</a>
          </li>
          <li onClick={() => push(ROUTER.FAQS)}>
            <a>FAQs</a>
          </li>
        </ul>
      </nav>
      <div className={styles.searchUtility}>
        <form
          className={styles.searchForm}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            name="searchQuery"
            placeholder="Search..."
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchButton}>
            <FaSearch />
          </button>
        </form>
        <div className={styles.utility}>
          <div className={styles.languageSelect}>
            <div
              className={`${styles.languageIcon} ${
                showDropdown ? styles.active : ""
              }`}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <img src="/usuk.png" alt="Eng" className={styles.languageImage} />
              {showDropdown && (
                <div className={styles.dropdown}>
                  <img
                    src="/azerbaijan.png"
                    alt="Az"
                    className={styles.languageImage}
                  />
                  <img
                    src="/russian.png"
                    alt="Rus"
                    className={styles.languageImage}
                  />
                </div>
              )}
            </div>
          </div>
          <button className={styles.signupButton}>Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default ClientHeader;
