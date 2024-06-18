// src/components/useRandomImage.js
import { useState, useEffect } from 'react';

const images = [
  'https://via.placeholder.com/150/0000FF',
  'https://via.placeholder.com/150/FF0000',
  'https://via.placeholder.com/150/00FF00',
  'https://via.placeholder.com/150/FFFF00',
  'https://via.placeholder.com/150/FF00FF',
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
