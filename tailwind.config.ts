import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      extend: {
        backgroundImage: theme => ({
          'bg-image': "url('/bgGreen.jpg')" // 이 경로는 이미지가 public 폴더에 저장되었다고 가정합니다.
        })
      }
  },
  plugins: [],
};
export default config;
