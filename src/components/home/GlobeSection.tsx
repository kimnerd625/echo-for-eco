"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";

import { PorterInlineBlock } from "@/app/localFont";
import ThreeCanvas from "../canvas/ThreeCanvas";
import Loading from "@/app/loading";

import firstTitleImage from "../../../public/images/firstTitleImage.png";
import secondTitleImage from "../../../public/images/secondTitleImage.png";
import thirdTitleImage from "../../../public/images/thirdTitleImage.png";

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
    <div
      className="relative min-h-screen overflow-x-hidden z-20 bg-black"
      // style={{
      //   backgroundImage: "url('/images/bgBlack.jpg')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      {!isLoaded && <Loading />}
      <main className="relative flex items-center justify-center min-h-screen">
        {isLoaded && (
          <>
            <div className="absolute left-4 sm:left-6 lg:left-48 top-1/2 transform -translate-y-1/2 text-5xl sm:text-6xl lg:text-8xl text-white z-10">
              <Image
                src={firstTitleImage}
                alt="타이틀 이미지"
                width={360}
                height={150}
                ref={addToRefs}
              />
              <Image
                src={secondTitleImage}
                alt="타이틀 이미지"
                width={360}
                height={150}
                ref={addToRefs}
              />
              <Image
                src={thirdTitleImage}
                alt="타이틀 이미지"
                width={360}
                height={150}
                ref={addToRefs}
              />
              {/* <h2 ref={addToRefs}>ECHO</h2>
              <h2 ref={addToRefs}>FOR</h2>
              <h2 ref={addToRefs}>ECO</h2> */}
            </div>
            <div className="absolute right-4 sm:right-6 lg:right-48 top-1/2 transform -translate-y-1/2 text-2xl sm:text-3xl lg:text-4xl text-white z-10 space-y-1 sm:space-y-2 lg:space-y-8 text-right">
              <h2 ref={addToRefs}>Uniting Voices</h2>
              <h2 ref={addToRefs}>Sharing Acts</h2>
              <h2 ref={addToRefs}>
                for a <span className="text-[#72F14E]">Greener</span>
              </h2>
              <h2 ref={addToRefs}>Tomorrow</h2>
            </div>
            <div
              className="absolute hidden md:block md:bottom-12 md:left-2 lg:bottom-16 lg:left-2 text-white z-10"
              style={{
                writingMode: "vertical-lr",
                transform: "rotate(0deg)",
              }}
            >
              <p className={`${PorterInlineBlock.className} lg:text-2xl`}>
                ECHO FOR ECO
              </p>
            </div>
            <div className="absolute hidden md:block md:bottom-2 md:left-8 lg:bottom-4 lg:left-12 text-white z-10">
              <p className={`${PorterInlineBlock.className} lg:text-2xl`}>
                ECHO FOR ECO
              </p>
            </div>
          </>
        )}
        <ThreeCanvas setIsLoaded={setIsLoaded} />
      </main>
    </div>
  );
};

export default GlobeSection;
