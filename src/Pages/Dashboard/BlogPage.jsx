import React from "react";
import styles from "./BlogPage.module.css";
import { useHistory } from "react-router-dom";
import logo from "../../../src/Components/Dashboard/images/logo2.svg";
import Footer from "../../Components/Dashboard/Footer";

const BlogPage = () => {
  const History = useHistory();

  const blogs = [
    {
      id: 1,
      category: "Car Rental",
      title: "Explore the Coastal Charm of Kerala: Alappuzha's Top Spots",
      image: "https://i.pinimg.com/736x/8b/a3/2b/8ba32b497d9a4a5744556ec8c7209840.jpg",
      readTime: "3 Min Read",
      link: "/blog/alappuzha-history",
      description: "Discover the beauty of Alappuzha with our travel guide."
    },
    {
      id: 2,
      title: 'Top Destinations to Explore This Winter',
      description: 'Here are the top destinations you should visit with our self-drive cars.',
      image: 'https://i.pinimg.com/736x/ad/8a/19/ad8a19d1e0f0607196f8863463c567a1.jpg',
      link: '/blog/winter-destinations',
    },
    {
      id: 3,
      title: 'Why Self-Drive is the Future of Car Rentals',
      description: 'Learn how self-drive car rentals are revolutionizing the travel industry.',
      image: 'https://i.pinimg.com/736x/76/ed/99/76ed99cee9382671d9ef540ebf3318b3.jpg',
      link: '/blog/self-drive-future',
    },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img
            src={logo}
            alt="logo"
            style={{ cursor: "pointer" }}
            onClick={() => History("/")}
          />
        </div>
        <nav className={styles.nav}>
          <button className={styles.navButton}>Book A Car</button>
          <button className={styles.navButton}>FAQs</button>
        </nav>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.featuredBlog}>
          <div className={styles.blogInfo}>
            <p className={styles.category}>Car Rental</p>
            <h1 className={styles.title}>
              Back to History: Unveiling the Mysteries of Alappuzha, Kerala
            </h1>
            <div className={styles.actions}>
              <button
                className={styles.readButton}
                onClick={() => History("/blog/alappuzha-history")}
              >
                Read Article →
              </button>
              <p className={styles.readTime}>3 Min Read</p>
            </div>
          </div>
          <div className={styles.blogImage}>
            <img
              src="https://i.pinimg.com/736x/8b/a3/2b/8ba32b497d9a4a5744556ec8c7209840.jpg"
              alt="Alappuzha"
              className={styles.image}
            />
          </div>
        </section>
        <br />
        <br />


        <section className={styles.blogGrid}>
          <h1 className={styles.blogHeader}>RydeEasy Blog</h1>
          <p className={styles.blogSubheader}>
            Your guide to smart travel and self-drive experiences.
          </p>
          <div className={styles.blogContainer}>
            {blogs.map((blog) => (
              <div key={blog.id} className={styles.blogCard}>
                <img src={blog.image} alt={blog.title} className={styles.blogImage} />
                <div className={styles.blogDetails}>
                  <h2 className={styles.blogTitle}>{blog.title}</h2>
                  <a href={blog.link} className={styles.blogLink}>
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer  />
    </div>
  );
};
export default BlogPage;