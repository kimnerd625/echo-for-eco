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
            <div className="absolute left-48 top-1/2 transform -translate-y-1/2 text-8xl text-white z-10">
              <h2>ECHO</h2>
              <h2>FOR</h2>
              <h2>ECO</h2>
            </div>
            <div className="absolute right-48 top-1/2 transform -translate-y-1/2 text-4xl text-white z-10 space-y-8 text-right">
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
