/* eslint-disable @next/next/no-img-element */

"use client";
import React, { useState } from "react";

const Hero = () => {
  const images = [
    "https://i.ibb.co/q5MqxMj/side-view-woman-washing-plate-sink.jpg",
    "https://i.ibb.co/3vLwMXq/pretty-young-woman-throwing-rubbish.jpg",
    "https://i.ibb.co/DL2462V/mother-assisting-daughter-washing-plate-kitchen.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return <div>hwllow form hero</div>;
};

export default Hero;
