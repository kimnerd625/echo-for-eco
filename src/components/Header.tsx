"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PeaceSans } from "@/app/localFont";

import logoMain from "../../public/images/logoMain.png";

const Header = () => {
  const logoHeight = 50;
  const logoWidth = 50;
  const [hasScrolled, setHasScrolled] = useState(false);
  useEffect(() => {
    const firstSectionHeight = 600; // 첫 번째 섹션의 높이를 px 단위로 설정
    const handleScroll = () => {
      const offset = window.scrollY;
      // 스크롤 위치가 첫 번째 섹션의 높이보다 클 경우에만 hasScrolled 상태를 true로 설정
      setHasScrolled(offset > firstSectionHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-10 transition-opacity duration-300 ${
        hasScrolled ? "bg-white bg-opacity-50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Image
              src={logoMain}
              alt="로고"
              width={logoWidth}
              height={logoHeight}
            />
            <h2 className={`${PeaceSans.className} text-3xl text-[#00AE28]`}>
              E.F.E
            </h2>
          </div>
          <nav>{/* 네비게이션 링크 */}</nav>
        </div>
      </div>
    </header>
  );
};

export default Header;