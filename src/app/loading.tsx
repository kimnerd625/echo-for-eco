import Image from "next/image";
import logoMain from "../../public/images/logoMain.png";

export default function Loading() {
  return (
    <main className="flex flex-col justify-center items-center text-center min-h-screen">
      <Image src={logoMain} alt="로고" width={100} height={100} />
      <h2 className="text-[#72F14E] font-black text-2xl">
        조금만 기다려주세요!
      </h2>
    </main>
  );
}
