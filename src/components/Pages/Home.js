import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import image1 from "../../Images/IMG1.jpg";
import image2 from "../../Images/IMG2.jpg";

export const Home = () => {
  return (
    <>
      <div className="container mx-auto px-4 mt-10">
        <Carousel showThumbs={false} showStatus={false} showIndicators={false} showArrows={true}>
          <div>
            <img src={image1} alt="Slide 1" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <p className="text-xl font-normal text-white text-center">Delivering opportunities to students.</p>
            </div>
          </div>
          <div>
            <img src={image2} alt="Slide 2" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <p className="text-xl font-normal text-white text-center">Bridging the gap between industry and academia.</p>
            </div>
          </div>
          <div>
            <img src={image1} alt="Slide 3" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <p className="text-xl font-normal text-white text-center">Introducing the alumni directory.</p>
            </div>
          </div>
        </Carousel>

        <div className="covertext mt-24">
          <div className="mx-auto max-w-xl px-4">
            <h1 className="text-6xl font-semibold text-black text-center mb-4">FAST NUCES</h1>
            <h1 className="text-6xl font-semibold text-black text-center mb-4">Career Development Portal</h1>
            <h3 className="text-xl font-normal text-black text-center">Find your dream job with us.</h3>
          </div>
          <div className="text-center mt-8">
            <a href="/jobs" className="inline-block bg-blue-500 text-white py-2 px-6 rounded-full text-lg font-bold hover:bg-blue-600 transition duration-300">
              FIND JOBS
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
