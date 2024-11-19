import React from "react";
import styles from "./BlogPage.module.css";
import { useHistory } from "react-router-dom"; 
import logo from "../../../src/Components/Dashboard/images/logo2.svg"

const BlogPage = () => {
    const history = useHistory();
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
        <img
            src={logo}
            alt="logo"
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/")}
            />
          
        </div>
        <nav className={styles.nav}>
          <button className={styles.navButton}>Book A Car</button>
          <button className={styles.navButton}>FAQs </button>
          
        </nav>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.featuredBlog}>
          <div className={styles.blogInfo}>
            <p className={styles.category}>Car Rental</p>
            <h1 className={styles.title}>
              Back to History: Unreveling the Mysteries of Alappuzha from Kerala
            </h1>
            <div className={styles.actions}>
              <button className={styles.readButton}>Read Article →</button>
              <p className={styles.readTime}>3 Min Read</p>
            </div>
          </div>
          <div className={styles.blogImage}>
            <img
              src="https://i.pinimg.com/736x/8b/a3/2b/8ba32b497d9a4a5744556ec8c7209840.jpg" // Replace with the actual image URL
              alt="Vellore"
              className={styles.image}
            />
          </div>
        </section>

       
      </main>
    </div>
  );
};

export default BlogPage;
