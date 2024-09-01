import React from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.leftSection}>
        <span className={styles.latestTrades}>INFORMASI</span>
      </div>
      <div className={`${styles.tradeDetails} ${styles.marquee}`}>
        <div className={styles.marqueeContent}>
          Website Portofolio ini dibuat untuk menunjukan dokumentasi hasil projek atau pengalaman yang telah saya raih.
        </div>
      </div>
      <div className={styles.rightSection}>
        <button className={styles.arrowButton}>‹</button>
        <button className={styles.arrowButton}>›</button>
      </div>
    </div>
  );
};

export default Navbar;
