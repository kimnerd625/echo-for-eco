import NavBar from "@/components/NavBar";
import bgGreen from "../../public/images/bgGreen.jpg";
import bgSnow from "../../public/images/bgSnow.jpg";
import bgSnowDetailed from "../../public/images/bgSnowDetailed.jpg";
import ThreeCanvas from "@/components/canvas/ThreeCanvas";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="relative min-h-screen bg-[#000000] overflow-x-hidden">
        <main className="relative flex items-center justify-center min-h-screen">
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
          <ThreeCanvas />
        </main>
      </div>

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

      {/* 푸터는 페이지의 맨 아래에 위치합니다. */}
      <footer className="p-4 bg-opacity-20 text-center text-white">
        © 2024 Your Website
      </footer>
    </div>
  );
}
