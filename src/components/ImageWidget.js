// src/components/ImageWidget.js
import React from 'react';
import useRandomImage from './useRandomImage';
import './ImageWidget.css';

function ImageWidget() {
  const image = useRandomImage(3000);

  return (
    <div className="image-widget">
      <img src={image} alt="Random" />
    </div>
  );
}

export default ImageWidget;
