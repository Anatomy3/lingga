import React, { useState } from 'react';
import styles from '../styles/Projects.module.css';

const Projects = () => {
  const [category, setCategory] = useState('3DModel');
  const [selectedContent, setSelectedContent] = useState('/scaff/1.png'); // Gambar default
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const model2DIcons = [
    "https://cdn-icons-png.flaticon.com/512/906/906324.png"
  ];

  const model3DIcons = [
    "https://cdn-icons-png.flaticon.com/512/906/906319.png",
    "https://cdn-icons-png.flaticon.com/512/906/906322.png",
    "https://cdn-icons-png.flaticon.com/512/906/906321.png",
    "https://cdn-icons-png.flaticon.com/512/906/906320.png"
  ];

  const images = Array.from({ length: 10 }, (_, i) => `/scaff/${i + 1}.png`);

  const handleCardClick = (content, index) => {
    setSelectedContent(content);
    setActiveCardIndex(index);
  };

  const handleNext = () => {
    const nextIndex = (activeCardIndex + 1) % images.length;
    setSelectedContent(images[nextIndex]);
    setActiveCardIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (activeCardIndex - 1 + images.length) % images.length;
    setSelectedContent(images[prevIndex]);
    setActiveCardIndex(prevIndex);
  };

  const getIcons = () => {
    switch (category) {
      case '2DModel':
        return model2DIcons;
      case '3DModel':
        return model3DIcons;
      default:
        return [];
    }
  };

  return (
    <div id="projects" className={styles.projectsContainer}>
      <div className={styles.buttonsContainer}>
        <button
          className={`${styles.categoryButton} ${category === '2DModel' ? styles.active : ''}`}
          onClick={() => {
            setCategory('2DModel');
            setSelectedContent(images[0]); // Tampilkan gambar pertama
            setActiveCardIndex(0); // Set kartu pertama sebagai aktif
          }}
        >
          2D Model
        </button>
        <button
          className={`${styles.categoryButton} ${category === '3DModel' ? styles.active : ''}`}
          onClick={() => {
            setCategory('3DModel');
            setSelectedContent(images[0]); // Tampilkan gambar pertama
            setActiveCardIndex(0); // Set kartu pertama sebagai aktif
          }}
        >
          3D Model
        </button>
      </div>

      <div className={styles.toolsBox}>
        <div className={styles.iconColumn}>
          {getIcons().map((icon, index) => (
            <img key={index} src={icon} alt={`Icon ${index + 1}`} />
          ))}
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <button className={styles.arrowButton} onClick={handlePrev}>
          &#8249;
        </button>
        <div className={styles.mainCard}>
          <img src={selectedContent} alt="Selected" className={styles.mainImage} />
        </div>
        <button className={styles.arrowButton} onClick={handleNext}>
          &#8250;
        </button>
      </div>

      <div className={styles.smallCardsGrid}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.smallCard} ${index === activeCardIndex ? styles.active : ''}`}
            onClick={() => handleCardClick(image, index)}
          >
            <img src={image} alt={`Card ${index + 1}`} className={styles.cardImage} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
