import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div id="home" className={styles.header}>
      <div className={styles.imageWrapper}>
        {/* Video di bagian pertama */}
        <div className={`${styles.imageContainer} ${styles.image1}`}>
          <video className={styles.video} autoPlay muted loop>
            <source src="/animasi/titan.mp4" type="video/mp4" />
          </video>
          <div className={styles.textOverlay}>
            <h1>GENERATE A 2D ANIMATION VIDEO</h1>
            <p>Transforming Ideas Into 2D Animations Has Never Been Easier</p>
          </div>
        </div>

        {/* Gambar 2 dengan efek teks transparan */}
        <div className={`${styles.imageContainer} ${styles.image2}`}>
          <div className={styles.textOverlayGallery}>
            <h1>3D MODEL GALLERY</h1>
            <p>Our curated collection showcases the power and potential of AI across various industries and creative endeavors.</p>
          </div>
        </div>

        {/* Gambar 3 dengan gaya teks seperti yang diinginkan */}
        <div className={`${styles.imageContainer} ${styles.image3}`}>
          <div className={styles.textOverlayRevolution}>
            <h1>Join the AI 3D Revolution</h1>
            <p>Ready to embark on a journey into the future of 3D? Whether you&apos;re a content creator, designer, developer, or simply an enthusiast.</p>
          </div>
        </div>

        {/* Gambar 4 dengan penambahan gambar dari public */}
        <div className={`${styles.imageContainer} ${styles.image4}`}>
          <img src="/website/image.png" alt="Join the AI 3D Revolution" className={styles.image} />
          <p className={styles.textOverlay}>Join the AI 3D Revolution</p>
        </div>

        <div className={`${styles.imageContainer} ${styles.image5}`}>
          <img src="/5.jpg" alt="Artworks" className={styles.image} />
          <p className={styles.textOverlay}>Artworks</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
