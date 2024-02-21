"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

import ThreeCanvas from "../canvas/ThreeCanvas";
import Loading from "@/app/loading";

const GlobeSection = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // 각 h2 태그에 대한 참조 생성
  const h2Refs = useRef<HTMLHeadingElement[]>([] as HTMLHeadingElement[]);
  h2Refs.current = [];

  const addToRefs = (el: HTMLHeadingElement | null) => {
    if (el && !h2Refs.current.includes(el)) {
      h2Refs.current.push(el);
    }
  };

  useEffect(() => {
    if (isLoaded) {
      // isLoaded가 true일 때 애니메이션 실행
      gsap.fromTo(
        h2Refs.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.3, // 각 요소마다 0.2초의 지연 시간을 둠
          ease: "power3.out",
        }
      );
    }
  }, [isLoaded]);

  return (
    <div className="relative min-h-screen bg-[#000000] overflow-x-hidden z-20">
      {!isLoaded && <Loading />}
      <main className="relative flex items-center justify-center min-h-screen">
        {isLoaded && (
          <>
            <div className="absolute left-4 sm:left-6 lg:left-48 top-1/2 transform -translate-y-1/2 text-5xl sm:text-6xl lg:text-8xl text-white z-10">
              <h2 ref={addToRefs}>ECHO</h2>
              <h2 ref={addToRefs}>FOR</h2>
              <h2 ref={addToRefs}>ECO</h2>
            </div>
            <div className="absolute right-4 sm:right-6 lg:right-48 top-1/2 transform -translate-y-1/2 text-2xl sm:text-3xl lg:text-4xl text-white z-10 space-y-1 sm:space-y-2 lg:space-y-8 text-right">
              <h2 ref={addToRefs}>Uniting Voices</h2>
              <h2 ref={addToRefs}>Sharing Acts</h2>
              <h2 ref={addToRefs}>for a Greener</h2>
              <h2 ref={addToRefs}>Tomorrow</h2>
            </div>
          </>
        )}
        <ThreeCanvas setIsLoaded={setIsLoaded} />
      </main>
    </div>
  );
};

export default GlobeSection;
