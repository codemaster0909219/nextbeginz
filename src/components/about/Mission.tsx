// "use client";
// import Image from "next/image";
// import MissionImage from "@/assets/images/mission.jpg"
// export function Mission() {
//   return (
//     <div className="w-full bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] text-white py-[72px] sm:py-24 relative overflow-hidden">
      
//       <div className="max-w-7xl mx-auto px-5 sm:px-20 flex flex-col justify-center space-y-12">
//         <h1 className="text-4xl text-center">Your Success, Our Mission - <strong>Comprehensive Job Support</strong></h1>
//         <p className="text-2xl text-gray-400">At [Your Company Name], we’re committed to helping individuals overcome the challenges of today’s job market. Gone are the days when only advanced qualifications or specialized experience guaranteed employment. Our expert team has redefined the job search process, supporting countless clients with tailored strategies, practical tools, and unwavering dedication.</p>
//         <div className="flex flex-col space-y-8 xl:space-x-16 justify-center items-center xl:flex-row">
//           <Image
//             src={MissionImage}
//             alt="Portfolio"
//             className="mx-auto rounded-2xl object-cover h-full w-full xl:w-1/2"
//           />
//           <div className="flex flex-col space-y-8 w-full xl:w-1/2">
//             <div className="flex flex-col space-y-4">
//               <h1 className="text-3xl">Expert-Driven Job Support Services</h1>
//               <p className="text-xl text-gray-400">Our multidisciplinary team — including seasoned software developers, interview coaches, legal advisors, recruitment specialists, and financial consultants — provides end-to-end support throughout your job search journey. From resume refinement and interview preparation to offer negotiation and post-placement support, we handle it all based on your individual goals and preferences.</p>
//             </div>
//             <div className="flex flex-col space-y-4">
//               <h1 className="text-3xl">Unlock Additional Income Opportunities</h1>
//               <p className="text-xl text-gray-400">Beyond job placement, we also assist clients in discovering reliable side income streams. Whether you&apos;re seeking freelance work, digital business opportunities, or part-time consulting, our team offers personalized support when requested — empowering you to build financial resilience alongside your primary career path.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import Image from "next/image";
import MissionImage from "@/assets/images/mission.jpg";

export function Mission() {
  return (
    <div className="w-full bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] text-white py-[72px] sm:py-24 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-5 sm:px-20 flex flex-col justify-center space-y-12">
        
        <h1 className="text-4xl text-center">
          Building Intelligence With Purpose — <strong>The Mission Behind Nextbegin</strong>
        </h1>

        <p className="text-2xl text-gray-400">
          At Nextbegin, our mission is simple: turn state-of-the-art artificial intelligence into real-world impact. 
          We help companies unlock efficiency, automation, and insight through advanced AI engineering — from LLM-powered 
          agent ecosystems to real-time translation engines, multimodal reasoning systems, and custom machine learning pipelines.
        </p>

        <div className="flex flex-col space-y-8 xl:space-x-16 justify-center items-center xl:flex-row">
          
          <Image
            src={MissionImage}
            alt="AI Mission"
            className="mx-auto rounded-2xl object-cover h-full w-full xl:w-1/2"
          />

          <div className="flex flex-col space-y-8 w-full xl:w-1/2">

            <div className="flex flex-col space-y-4">
              <h1 className="text-3xl">Intelligence That Scales With You</h1>
              <p className="text-xl text-gray-400">
                Our team specializes in designing production-grade AI systems — optimized for performance, accuracy,
                and real-world reliability. Whether it's on-device inference, LLM integration, predictive analytics,
                or fully autonomous AI agents, we architect solutions that scale seamlessly with your business needs.
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <h1 className="text-3xl">AI That Creates New Opportunities</h1>
              <p className="text-xl text-gray-400">
                We help organizations uncover new revenue streams, reduce operational costs, and accelerate product
                innovation through intelligent automation. From workflow optimization to custom AI-driven tools and 
                specialized industry models, we empower teams to move faster, operate smarter, and think bigger.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
