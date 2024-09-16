import React from "react";
import styles from "./SocialProofSection.module.css";
import social1 from "../../assets/social1.png"
import social2 from "../../assets/social2.png"
import social3 from "../../assets/social3.png"
import social4 from "../../assets/social4.png"
import social5 from "../../assets/social5.png"
import social6 from "../../assets/social6.png"

function SocialProofSection() {
  const companies = [
    {
      src: social1,
      alt: "Company 1 logo",
    },
    {
      src: social2,
      alt: "Company 2 logo",
    },
    {
      src: social3,
      alt: "Company 3 logo",
    },
    {
      src:social4,
      alt: "Company 4 logo",
    },
    {
      src:social5,
      alt: "Company 5 logo",
    },
    {
      src:social6,
      alt: "Company 6 logo",
    },
  ];

  return (
    <section className={styles.socialProofSection}>
      <div className={styles.container}>
        <p className={styles.text}>Join 4,000+ companies already growing</p>
        <div className={styles.logos}>
          {companies.map((company, index) => (
            <img
              key={index}
              src={company.src}
              alt={company.alt}
              className={styles.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialProofSection;
