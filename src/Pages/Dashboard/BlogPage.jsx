import React from "react";
import styles from "./BlogPage.module.css";

const BlogPage = () => {
  return (
    <div className={styles.blogContainer}>
      <header className={styles.blogHeader}>
        <h1>My Blog</h1>
        <p>Welcome to my blog, where I share thoughts and articles.</p>
      </header>

      <section className={styles.blogPosts}>
        <div className={styles.post}>
          <div className={styles.imageBox}>
            <img
              src="https://via.placeholder.com/150"
              alt="Post 1"
              className={styles.postImage}
            />
          </div>
          <h2 className={styles.postTitle}>Post Title 1</h2>
          <p className={styles.postDate}>November 18, 2024</p>
          <p className={styles.postSummary}>
            This is a summary of the first blog post. Click to read more...
          </p>
        </div>

        <div className={styles.post}>
          <div className={styles.imageBox}>
            <img
              src="https://via.placeholder.com/150"
              alt="Post 2"
              className={styles.postImage}
            />
          </div>
          <h2 className={styles.postTitle}>Post Title 2</h2>
          <p className={styles.postDate}>November 15, 2024</p>
          <p className={styles.postSummary}>
            This is a summary of the second blog post. Click to read more...
          </p>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
