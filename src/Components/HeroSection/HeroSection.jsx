
import React from "react";
import styles from "./HeroSection.module.css";
import right from "../../assets/rightarr.svg"
import play from "../../assets/play.png"
import hero from "../../assets/heroimg.png"

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeText}>New feature</span>
            <span className={styles.badgeMessage}>
              Check out the team dashboard
            </span>
            <img
              src={right}
              alt=""
              className={styles.badgeIcon}
            />
          </div>
          <h1 className={styles.heading}>
            Beautiful analytics to grow smarter
          </h1>
          <p className={styles.subheading}>
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
          <div className={styles.actions}>
            <button className={styles.demoButton}>
              <img
                src={play}
                alt=""
                className={styles.buttonIcon}
              />
              Demo
            </button>
            <button className={styles.signupButton}>Sign up</button>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img
          src={hero}
          alt="Analytics dashboard preview"
          className={styles.heroImage}
        />
      </div>
    </section>
  );
}

export default HeroSection;
