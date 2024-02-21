import bgGreen from "../../public/images/bgGreen.jpg";
import bgSnow from "../../public/images/bgSnow.jpg";
import bgSnowDetailed from "../../public/images/bgSnowDetailed.jpg";

import NavBar from "@/components/NavBar";
import GlobeSection from "@/components/home/GlobeSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <GlobeSection />

      {/* 두 번째 섹션 */}
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bgSnow.src})` }} // 두 번째 배경 이미지를 적용합니다.
      >
        <main className="flex items-center justify-center min-h-screen">
          <h1 className="text-6xl text-white font-bold">다른 섹션</h1>
        </main>
      </div>

      {/* 세 번째 섹션 */}
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bgSnowDetailed.src})` }} // 두 번째 배경 이미지를 적용합니다.
      >
        <main className="flex items-center justify-center min-h-screen">
          <h1 className="text-6xl text-white font-bold">다른 섹션</h1>
        </main>
      </div>

      <Footer />
    </div>
  );
}
