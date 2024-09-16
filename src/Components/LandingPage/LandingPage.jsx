
import React from "react";
import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import SocialProofSection from "../SocialProofSection/SocialProofSection";
import FeaturesSection from "../FeaturesSection/FeaturesSection";
import TestimonialSection from "../TestimonialSection/TestimonialSection";
import AdvancedFeaturesSection from "../AdvanceFeaturesSection/AdvancedFeaturesSection";
import FAQSection from "../FAQSection/FAQSection";
import BlogSection from "../BlogSection/BlogSection";
import CTASection from "../CTASection/CTASection";
import Footer from "../Footer/Footer";
import styles from "./LandingPage.module.css";

function LandingPage() {
  return (
    <div className={styles.landingPage}>
      <Header />
      <main>
        <HeroSection />
        <SocialProofSection />
        <FeaturesSection />
        <TestimonialSection />
        <AdvancedFeaturesSection />
        <FAQSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
