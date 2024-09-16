
import React from "react";
import styles from "./AdvancedFeaturesSection.module.css";
import adv from "../../assets/adv.png"
import right from "../../assets/rightarr.svg"
import icon1 from "../../assets/icon1.png"
import icon2 from "../../assets/icon2.png"
import icon3 from "../../assets/icon3.png"


function FeatureCard({ icon, title, description }) {
  return (
    <div className={styles.featureCard}>
      <img src={icon} alt="" className={styles.featureIcon} />
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
      <button className={styles.learnMoreButton}>
        Learn more
        <img
          src={right}          alt=""
          className={styles.arrowIcon}
        />
      </button>
    </div>
  );
}

function AdvancedFeaturesSection() {
  const features = [
    {
      icon: icon1,
      title: "Share team inboxes",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
    {
      icon: icon2,
      title: "Deliver instant answers",
      description:
        "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    },
    {
      icon: icon3,
      title: "Manage your team with reports",
      description:
        "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    },
  ];

  return (
    <section className={styles.advancedFeaturesSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>Features</div>
          <h2 className={styles.heading}>
            Cutting-edge features for advanced analytics
          </h2>
          <p className={styles.subheading}>
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
        <div className={styles.featureShowcase}>
          <img
            src={adv}
            alt="Advanced analytics dashboard"
            className={styles.showcaseImage}
          />
        </div>
        <div className={styles.featureGrid}>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdvancedFeaturesSection;
