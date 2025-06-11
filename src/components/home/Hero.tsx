"use client"
import CursorImage from '@/assets/images/cursor.png'
import MessageImage from '@/assets/images/message.png'
import Image from 'next/image';
import {motion} from 'framer-motion'
import { WavyText } from '../ui/wavytext';

export const Hero = () => {
  return (
    <div className="flex justify-center bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[60px] sm:py-28 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] llg:h-[800px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container relative">
        <div className="flex justify-center mt-8 ">
          <div className="inline-flex relative">
            <WavyText
              className="font-display text-center text-4xl font-bold tracking-tightner text-white sm:text-6xl md:leading-[5rem]"
              text="Powering Business Through Smart Digital Solutions"
            />
            <motion.div className='absolute left-[10%] top-[108px] hidden md:inline' drag dragSnapToOrigin>
              <Image src={CursorImage} alt="cursor" height={200} width={200} className='max-w-none' draggable="false" />
            </motion.div>
            <motion.div className='absolute right-[10%] top-[84px] hidden md:inline' drag dragSnapToOrigin>
              <Image src={MessageImage} alt="cursor" height={200} width={200} className='max-w-none' draggable="false" />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className='text-xl text-center mt-8 max-w-md'>We help companies grow, streamline, and succeed with innovative technology and tailored strategies.</p>
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          <button className='bg-white text-black py-3 px-5 rounded-lg font-medium'>Get a Free Quote</button>
          <button className='bg-white text-black py-3 px-5 rounded-lg font-medium'>Contact Us</button>
        </div>
      </div>
    </div>
  )
};
