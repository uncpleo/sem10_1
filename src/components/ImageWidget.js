// src/components/ImageWidget.js
import React from 'react';
import useRandomImage from './useRandomImage';
import './ImageWidget.css';

function ImageWidget() {
  const image = useRandomImage(3000); // Cambia la imagen cada 30000 ms (30 segundos)

  return (
    <div className="image-widget">
      <img src={image} alt="Random" />
    </div>
  );
}

export default ImageWidget;
