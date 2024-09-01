import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/Projects1.module.css'; // Menggunakan satu file CSS untuk semua elemen
import { FaDesktop, FaMobileAlt } from 'react-icons/fa';

const Projects1 = () => {
  const [videoSrc, setVideoSrc] = useState('/website/ags.mp4'); // Default ke video desktop
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (videoRef.current) {
            videoRef.current.play();
          }
        } else {
          if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const handleVideoChange = (src) => {
    if (videoRef.current) {
      videoRef.current.pause(); // Pause the current video
      setVideoSrc(src); // Change the video source
      videoRef.current.load(); // Load the new video
      videoRef.current.play(); // Play the new video
    }
  };

  return (
    <div ref={containerRef} className={styles.projects1Container}>
      <div className={styles.buttonContainer}>
        <button
          className={styles.iconButton}
          onClick={() => handleVideoChange('/website/ags.mp4')}
        >
          <FaDesktop className={styles.icon} />
        </button>
        <button
          className={styles.iconButton}
          onClick={() => handleVideoChange('/website/mobile.mp4')}
        >
          <FaMobileAlt className={styles.icon} />
        </button>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.cardContainer}>
          <div className={`${styles.glassCard} ${styles.card1}`}>
            <h3>Next.js Framework</h3>
            <p>Framework Next.js dengan rendering sisi server (SSR) dan static site generation (SSG) yang membuat website semakin ngebut.</p>
          </div>
          <div className={`${styles.glassCard} ${styles.card2}`}>
            <h3>Website Responsif</h3>
            <p>Desain responsif dan Modern, kompatibel di semua perangkat dan platform utama yang membuat pengalaman pengguna yang konsiten.</p>
          </div>
        </div>
        <div className={styles.videoWrapper}>
          <video 
            ref={videoRef} 
            className={`${styles.video} ${videoSrc.includes('mobile.mp4') ? styles.smallVideo : ''}`} 
            loop 
            muted 
            controls
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className={styles.glassBox}>
        <img src="/icons/vscode.png" alt="VSCode" className={styles.icon} />
        <img src="/icons/chatgpt.png" alt="ChatGPT" className={styles.icon} />
        <img src="/icons/nextjs.png" alt="Next.js" className={styles.icon} />
        <img src="/icons/pinterest.png" alt="Pinterest" className={styles.icon} />
        <img src="/icons/html.png" alt="HTML" className={styles.icon} />
        <img src="/icons/css.png" alt="CSS" className={styles.icon} />
        <img src="/icons/javascript.png" alt="JavaScript" className={styles.icon} />
      </div>
    </div>
  );
};

export default Projects1;
