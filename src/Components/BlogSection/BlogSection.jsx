
import React from "react";
import styles from "./BlogSection.module.css";
import blog1 from "../../assets/blog1.png"
import blog2 from "../../assets/blog2.png"
import blog3 from "../../assets/blog3.png"
import avatar1 from "../../assets/Avatar1.png"
import avatar2 from "../../assets/Avatar2.png"
import avatar3 from "../../assets/Avatar3.png"

function BlogPostCard({ image, category, title, description, author, date }) {
  return (
    <article className={styles.blogPostCard}>
      <img src={image} alt={title} className={styles.postImage} />
      <div className={styles.postContent}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.postTitle}>{title}</h3>
        <p className={styles.postDescription}>{description}</p>
        <div className={styles.authorInfo}>
          <img
            src={author.avatar}
            alt={author.name}
            className={styles.authorAvatar}
          />
          <div className={styles.authorDetails}>
            <span className={styles.authorName}>{author.name}</span>
            <time className={styles.postDate}>{date}</time>
          </div>
        </div>
      </div>
    </article>
  );
}

function BlogSection() {
  const blogPosts = [
    {
      image:
        blog1,
      category: "Design",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: {
        name: "Olivia Rhye",
        avatar:
          avatar1,
      },
      date: "20 Jan 2024",
    },
    {
      image:
        blog2,
      category: "Product",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
      author: {
        name: "Phoenix Baker",
        avatar:
        avatar2,
      },
      date: "19 Jan 2024",
    },
    {
      image:
        blog3,
      category: "Software Engineering",
      title: "Building your API stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: {
        name: "Lana Steiner",
        avatar:
        avatar3 ,
      },
      date: "18 Jan 2024",
    },
  ];

  return (
    <section className={styles.blogSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.sectionTitle}>Latest blog posts</h2>
            <p className={styles.sectionDescription}>
              Tools and strategies modern teams need to help their companies
              grow.
            </p>
          </div>
          <button className={styles.viewAllButton}>View all posts</button>
        </div>
        <div className={styles.blogGrid}>
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
