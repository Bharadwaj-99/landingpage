
import React from "react";
import styles from "./Footer.module.css";
import footer from "../../assets/untitled.png"

function FooterColumn({ title, links }) {
  return (
    <div className={styles.footerColumn}>
      <h3 className={styles.columnTitle}>{title}</h3>
      <ul className={styles.linkList}>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className={styles.footerLink}>
              {link.text}
              {link.badge && (
                <span className={styles.linkBadge}>{link.badge}</span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  const footerColumns = [
    {
      title: "Product",
      links: [
        { text: "Overview", href: "#" },
        { text: "Features", href: "#" },
        { text: "Solutions", href: "#", badge: "New" },
        { text: "Tutorials", href: "#" },
        { text: "Pricing", href: "#" },
        { text: "Releases", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About us", href: "#" },
        { text: "Careers", href: "#" },
        { text: "Press", href: "#" },
        { text: "News", href: "#" },
        { text: "Media kit", href: "#" },
        { text: "Contact", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Blog", href: "#" },
        { text: "Newsletter", href: "#" },
        { text: "Events", href: "#" },
        { text: "Help centre", href: "#" },
        { text: "Tutorials", href: "#" },
        { text: "Support", href: "#" },
      ],
    },
    {
      title: "Use cases",
      links: [
        { text: "Startups", href: "#" },
        { text: "Enterprise", href: "#" },
        { text: "Government", href: "#" },
        { text: "SaaS", href: "#" },
        { text: "Marketplaces", href: "#" },
        { text: "Ecommerce", href: "#" },
      ],
    },
    {
      title: "Social",
      links: [
        { text: "Twitter", href: "#" },
        { text: "LinkedIn", href: "#" },
        { text: "Facebook", href: "#" },
        { text: "GitHub", href: "#" },
        { text: "AngelList", href: "#" },
        { text: "Dribbble", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Terms", href: "#" },
        { text: "Privacy", href: "#" },
        { text: "Cookies", href: "#" },
        { text: "Licenses", href: "#" },
        { text: "Settings", href: "#" },
        { text: "Contact", href: "#" },
      ],
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          {footerColumns.map((column, index) => (
            <FooterColumn key={index} {...column} />
          ))}
        </div>
        <div className={styles.footerBottom}>
          <img
            src={footer}
            alt="Company Logo"
            className={styles.footerLogo}
          />
          <p className={styles.copyright}>
            © 2077 Untitled UI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
