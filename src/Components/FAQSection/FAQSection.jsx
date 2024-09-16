
import React, { useState } from "react";
import styles from "./FAQSection.module.css";
import plus from "../../assets/plus-circle.jpg"
import minus from "../../assets/minus-circle.png"
import ava from "../../assets/image.png"
function FAQItem({ question, answer, isOpen, toggleOpen }) {
  return (
    <div className={`${styles.faqItem} ${isOpen ? styles.open : ""}`}>
      <button className={styles.questionButton} onClick={toggleOpen}>
        <span className={styles.question}>{question}</span>
        <img
          src={
            isOpen
              ? minus
              : plus
          }
          alt={isOpen ? "Collapse" : "Expand"}
          className={styles.toggleIcon}
        />
      </button>
      {isOpen && <p className={styles.answer}>{answer}</p>}
    </div>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can change your plan at any time.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel your subscription at any time without penalty.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer: "Yes, you can add custom information to your invoices.",
    },
    {
      question: "How does billing work?",
      answer: "We bill monthly based on your selected plan.",
    },
    {
      question: "How do I change my account email?",
      answer: "You can change your account email in your profile settings.",
    },
  ];

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Frequently asked questions</h2>
        <p className={styles.subheading}>
          Everything you need to know about the product and billing.
        </p>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              toggleOpen={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>
        <div className={styles.supportCard}>
          <img
            src={ava}
            alt="Support"
            className={styles.supportIcon}
          />
          <h3 className={styles.supportHeading}>Still have questions?</h3>
          <p className={styles.supportText}>
            Can't find the answer you're looking for? Please chat to our
            friendly team.
          </p>
          <button className={styles.getInTouchButton}>Get in touch</button>
        </div>
      </div>
    </section>
  );
}
export default FAQSection;
