"use client"
import { HackerBackground } from '../ui/hackerbg';
import { BentoCard } from '../ui/bentogrid';
import { LogoCluster } from '../ui/logocluster';
import { Map } from '../ui/map';
import { Keyboard } from '../ui/keyboard';
export const Services = () => {
  return (
    <div className="relative w-full overflow-hidden bg-background container px-4 sm:px-20 py-10">
      <HackerBackground />
      <div className="grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Insight"
          title="Custom Development"
          description="We craft secure, high-performance web and mobile applications that align with your exact business needs. Whether you're launching an MVP or rebuilding an enterprise system, we deliver code that's clean, scalable, and production-ready."
          graphic={
            <div className="h-80 bg-[url(https://res.cloudinary.com/eldoraui/image/upload/v1734021365/profile_ldoiwc.png)] bg-[size:1000px_560px] bg-[left_-109px_top_-112px] bg-no-repeat" />
          }
          fade={["bottom"]}
          className="max-lg:rounded-t-4xl lg:rounded-tl-4xl lg:col-span-3"
        />
        <BentoCard
          eyebrow="Analysis"
          title="UI/UX Design"
          description="Using Figma and other modern tools, we design intuitive interfaces that focus on user behavior, accessibility, and conversion. Every design decision is backed by usability principles and real-world experience."
          graphic={
            <div className="absolute inset-0 bg-[url(https://res.cloudinary.com/eldoraui/image/upload/v1734021357/competitors_ouucah.png)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px] bg-no-repeat" />
          }
          fade={["bottom"]}
          className="lg:rounded-tr-4xl lg:col-span-3"
        />
        <BentoCard
          eyebrow="Speed"
          title="Digital Strategy & Consulting"
          description="We help you make strategic technology choices, optimize processes, and avoid costly missteps. Whether it's refining your product roadmap or auditing your digital infrastructure, we're here to advise and support."
          graphic={
            <div className="flex size-full pl-10 pt-10">
              <Keyboard highlighted={["LeftCommand", "C", "S"]} />
            </div>
          }
          className="lg:rounded-bl-4xl lg:col-span-2"
        />
        <BentoCard
          eyebrow="Source"
          title="Job Support Services"
          description="We offer hands-on job support and technical assistance to help professionals confidently manage real-time challenges in their roles, complete project tasks, and prepare for interviews. Our services include live debugging, mentorship, interview coaching, and on-demand guidance tailored to your specific needs."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Limitless"
          title="Additional Income Opportunities"
          description="Beyond job placement, we help you explore reliable side income streams—freelancing, digital services, or part-time consulting—so you can build financial stability alongside your main career."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:rounded-br-4xl lg:col-span-2"
        />
      </div>
    </div>
  )
};
