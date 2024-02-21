"use client";

import React, { useState } from "react";
import ThreeCanvas from "../canvas/ThreeCanvas";
import Loading from "@/app/loading";

const GlobeSection = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <div className="relative min-h-screen bg-[#000000] overflow-x-hidden z-20">
      {!isLoaded && <Loading />}
      <main className="relative flex items-center justify-center min-h-screen">
        {isLoaded && (
          <>

            <div className="absolute left-4 sm:left-6 lg:left-48 top-1/2 transform -translate-y-1/2 text-5xl sm:text-6xl lg:text-8xl text-white z-10">
=======
            <div className="absolute left-48 top-1/2 transform -translate-y-1/2 text-8xl text-white z-10">
              <h2>ECHO</h2>
            <div className="absolute right-4 sm:right-6 lg:right-48 top-1/2 transform -translate-y-1/2 text-2xl sm:text-3xl lg:text-4xl text-white z-10 space-y-1 sm:space-y-2 lg:space-y-8 text-right">
=======
            <div className="absolute left-4 sm:left-6 lg:left-48 top-1/2 transform -translate-y-1/2 text-5xl sm:text-6xl lg:text-8xl text-white z-10">
              <h2>ECHO</h2>
              <h2>FOR</h2>
              <h2>ECO</h2>
            </div>
            <div className="absolute right-4 sm:right-6 lg:right-48 top-1/2 transform -translate-y-1/2 text-2xl sm:text-3xl lg:text-4xl text-white z-10 space-y-1 sm:space-y-2 lg:space-y-8 text-right">
>>>>>>> 86e8614 (💄 style: GlobeSection.tsx 반응형 웹 디자인 적용)
              <h2>Uniting Voices</h2>
              <h2>Sharing Acts </h2>
              <h2>for a Greener</h2>
              <h2>Tomorrow</h2>
            </div>
          </>
        )}
        <ThreeCanvas setIsLoaded={setIsLoaded} />
      </main>
    </div>
  );
};

export default GlobeSection;
