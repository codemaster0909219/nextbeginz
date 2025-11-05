"use client";

import { WavyText } from "../ui/wavytext";

export const Hero = () => {
  return (
    <div className="flex justify-center bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[60px] sm:py-32 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] lg:w-[2400px] rounded-[100%] 
        bg-black left-1/2 -translate-x-1/2 
        border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)]
        top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"
      />

      <div className="container relative">
        <div className="flex justify-center mt-8">
          <WavyText
            className="font-display text-center text-4xl font-bold text-white sm:text-6xl md:leading-[5rem]"
            text="Stories & Insights"
          />
        </div>

        <div className="flex justify-center">
          <p className="text-xl text-center mt-8 max-w-2xl text-white/80">
            Thoughts on building digital products, engineering culture, and modern tech.
          </p>
        </div>
      </div>
    </div>
  );
};
