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
            <p>Mampu dalam membuat animasi sederhana.</p>
          </div>
        </div>

        {/* Gambar 2 dengan efek teks transparan */}
        <div className={`${styles.imageContainer} ${styles.image2}`}>
          <div className={styles.textOverlayGallery}>
            <h1>DESAINER GRAFIS</h1>
            <p>Memiliki pengalaman dalam menciptakan desain grafis yang menarik dan efektif, Menggunakan berbagai software seperti adobe photoshop, sketchup, dan sebagainya</p>
          </div>
        </div>

        {/* Gambar 3 dengan gaya teks seperti yang diinginkan */}
        <div className={`${styles.imageContainer} ${styles.image3}`}>
          <div className={styles.textOverlayRevolution}>
            <h1>Frontend Web Development</h1>
            <p>Saya ahli dalam membangun antarmuka pengguna yang responsif, modern, dan intuitif menggunakan Framework Next.js.</p>
          </div>
        </div>

        {/* Gambar 4 dengan penambahan gambar dari public */}
        <div className={`${styles.imageContainer} ${styles.image4}`}>
          <img src="/website/image.png" alt="Frontend Web Development" className={styles.image} />
          <p className={styles.textOverlay}></p>
        </div>

        {/* Gambar 5 diganti dengan video */}
        <div className={`${styles.imageContainer} ${styles.image5}`}>
          <video className={styles.video} autoPlay muted loop>
            <source src="/animasi/1.mp4" type="video/mp4" />
          </video>
          <p className={styles.textOverlay}>Artworks</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
