
"use client"
import Image from 'next/image';
import { useState } from 'react';

const SlideControl = () => {
   const images = [
      "https://i.ibb.co/n89HQTj/young-cheerful-housewife-daily-routine-blue-wall.jpg",
      "https://i.ibb.co/GcZqw63/young-woman-orange-apron-with-washed-plate-showing-sponge-dishwashing-detergent-isolated-protective.jpg",
      "https://i.ibb.co/QkV0wXL/dishwasher-wearing-yellow-gloves-blue.jpg",
      "https://i.ibb.co/Nt6Dj3x/hands-yellow-protective-gloves-washing-plate-Copy.jpg",
   ];

   const [currentIndex, setCurrentIndex] = useState(0);

   const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
         prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
   };

   const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
         prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
   };
   return (
      <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
         <button
            className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
            onClick={prevSlide}
         >
            <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-6 w-6 text-gray-700"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
               />
            </svg>
         </button>
         <button
            className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
            onClick={nextSlide}
         >
            <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-6 w-6 text-gray-700"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
               />
            </svg>
         </button>
         <div className="relative w-full">
            <Image
               src={images[currentIndex]}
               alt="Hero image"
               width={2350}
               height={2359}
               className="rounded-3xl object-cover"
            />
         </div>
      </div>
   );
};

export default SlideControl;