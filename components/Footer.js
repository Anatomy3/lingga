import React from 'react';
import styles from '../styles/Footer.module.css';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.footer}>
        <div className={styles.logo}>
          <span>VIGIO</span>
        </div>
        <p>&copy; Copyright 2023, All Rights Reserved</p>
        <div className={styles.socialIcons}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
