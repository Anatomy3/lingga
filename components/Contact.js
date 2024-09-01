import React, { useState } from 'react';
import Head from 'next/head';
import Profile from '../components/Profile'; // Pastikan hanya diimpor di sini
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const [isMapInteractive, setIsMapInteractive] = useState(false);

  return (
    <div id="contact" className={styles.contactContainer}> {/* Tambahkan ID di sini */}
      <Head>
        <title>Contact - VIGIO</title>
      </Head>

      {/* Profile ditempatkan di sini agar muncul di depan elemen lain */}
      <Profile />

      <div className={styles.mapContainer}>
        <div
          className={`${styles.mapOverlay} ${isMapInteractive ? styles.mapActive : ''}`}
          onClick={() => setIsMapInteractive(true)}
          onMouseLeave={() => setIsMapInteractive(false)}
        >
          {isMapInteractive && (
            <p className={styles.mapHint}>Klik di luar peta untuk menonaktifkan peta</p>
          )}
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7975.34295309293!2d101.3902035272625!3d0.5639724093138485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5a5d91e1e21c9%3A0x97f3936f90ae3f23!2sJl.%20Kurnia%20II%2C%20Umban%20Sari%2C%20Kec.%20Rumbai%2C%20Kota%20Pekanbaru%2C%20Riau%2028224!5e0!3m2!1sid!2sid!4v1691765983196!5m2!1sid!2sid"
          className={styles.mapFrame}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
