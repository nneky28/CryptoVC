import { Box, Image } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";

const Carousal = ({image}) => {
  const [currentImages, setCurrentImages] = useState([]);

  const images = [
    { src: `${image}`, alt: "Image 1" },
    { src: 'nuro.svg', alt: "Image 2" },
    { src: 'space.svg', alt: "Image 3" },
    { src: 'hive.png', alt: "Image 4" },
    { src: 'path.svg', alt: "Image 5" },
    { src: 'cloud.png', alt: "Image 6" },
    { src: 'ai.png', alt: "Image 7" },
    { src: 'signal.png', alt: "Image 8" },
  ];

  useEffect(() => {
    const remainingImages = images.slice(1);
    const randomImages = remainingImages.sort(() => 0.5 - Math.random()).slice(0, 2);
    setCurrentImages([images[0], ...randomImages]);
  }, [image]);

  return (
    <Carousel>
      {currentImages.map((img, index) => (
        <Box key={index} border={"1px solid white"} borderRadius={'12px'} w={'100%'}>
          <Image src={img.src} 
            alt={img.alt} 
            objectFit={'cover'}
            w={'100%'} 
            h={'100%'} />
        </Box>
      ))}
    </Carousel>
  );
};

export default Carousal;