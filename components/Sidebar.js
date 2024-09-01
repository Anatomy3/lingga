import React from 'react';
import styles from '../styles/Sidebar.module.css';

const Sidebar = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.iconContainer}>
        <div className={styles.iconWrapper} onClick={() => scrollToSection('home')}>
          <i className={`${styles.icon} fas fa-home`}></i>
          <span className={styles.text}>Beranda</span>
        </div>
        <div className={styles.iconWrapper} onClick={() => scrollToSection('projects')}>
          <i className={`${styles.icon} fas fa-briefcase`}></i>
          <span className={styles.text}>Projects</span>
        </div>
        <div className={styles.iconWrapper} onClick={() => scrollToSection('contact')}>
          <i className={`${styles.icon} fas fa-envelope`}></i>
          <span className={styles.text}>Contact</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
