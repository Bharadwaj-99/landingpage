import React from "react";
import styles from "./TestimonialSection.module.css";
import test1 from "../../assets/test1.png"
import test2 from "../../assets/test2.png"
function TestimonialSection() {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <img
            src={test1}
            alt="Company logo"
            className={styles.companyLogo}
          />
          <blockquote className={styles.quote}>
            We've been using Untitled to kick start every new project and can't
            imagine working without it.
          </blockquote>
          <div className={styles.author}>
            <img
              src={test2}
              alt="Candice Wu"
              className={styles.authorAvatar}
            />
            <div className={styles.authorInfo}>
              <p className={styles.authorName}>Candice Wu</p>
              <p className={styles.authorRole}>Product Manager, Sisyphus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
