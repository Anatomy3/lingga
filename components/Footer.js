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
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/youtube.png" alt="YouTube" className={styles.youtubeIcon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
