import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {" "}
      {/* Added 'relative' class */}
      <Image
        src="/assets/hero-banner.png"
        alt="Hero Background"
        layout="fill"
        objectFit="cover" // Ensure the image covers the entire section
        className="z-0"
        quality={100} // Optional: Adjust quality to prevent blurriness
      />
      <div className="absolute bottom-10 left-10 z-10 text-white mx-12 xl:mx-24">
        <h1 className="text-4xl md:text-6xl font-bold">
          UNIVERSITY COLLECTION
        </h1>
        <p className="text-xl mt-4">POP UP EVENT AT SM MEGAMALL FASHION HALL</p>
        <p className="text-lg mt-2">THIS COMING AUGUST 25 - 26</p>
      </div>
    </div>
  );
};

export default HeroSection;
