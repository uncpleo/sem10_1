// src/components/useRandomImage.js
import { useState, useEffect } from 'react';

const images = [
  './assets/sa_1.png',
  './assets/sa_2.png',
  './assets/sa_3.png',
  './assets/sa_4.png',
  './assets/sa_5.png',
  './assets/sa_6.png',
];

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

export default function useRandomImage(interval) {
  const [image, setImage] = useState(getRandomImage());

  useEffect(() => {
    const id = setInterval(() => {
      setImage(getRandomImage());
    }, interval);

    return () => clearInterval(id);
  }, [interval]);

  return image;
}
