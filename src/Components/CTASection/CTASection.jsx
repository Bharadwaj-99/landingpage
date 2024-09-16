
import React from "react";
import styles from "./CTASection.module.css";

function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Start your free trial</h2>
        <p className={styles.subheading}>
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className={styles.actions}>
          <button className={styles.learnMoreButton}>Learn more</button>
          <button className={styles.getStartedButton}>Get started</button>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
