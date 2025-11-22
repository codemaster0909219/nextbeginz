"use client"
import { WavyText } from '../ui/wavytext';
import { Background } from '../ui/novatrixbg';
export const Hero = () => {
  return (
    <div className="flex justify-center bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[60px] sm:py-32 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] llg:h-[800px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container relative">
        <div className="flex justify-center mt-8 ">
          <div className="inline-flex relative">
            <WavyText
              className="font-display text-center text-4xl font-bold tracking-tightner text-white sm:text-6xl md:leading-[5rem]"
              text="What We Do"
            />
          </div>
        </div>
        <div className="flex justify-center">
          {/* <p className='text-xl text-center mt-8 max-w-2xl'>We help businesses thrive in the digital age by delivering modern, scalable, and user-focused solutions. From design and development to strategy and support, our services are built to drive growth and deliver results.</p> */}
          <p className="text-xl text-center mt-8 max-w-2xl">
            We engineer intelligent systems powered by advanced machine learning, real-time inference, and next-generation automation. From custom LLM 
            integrations to AI agents, real-time translation engines, and enterprise-grade 
            automation workflows — we build the AI that builds your future.
          </p>
        </div>
      </div>
    </div>
  )
};
