"use client"
import { WarpAnimationContainer } from "@/components/ui/wrapanimationcontainer";
import Image from "next/image";
import { AnimatedCard } from "../ui/animatedCard";
import PortfolioImage from "@/assets/images/portfolio.jpg";

export const AboutUs = () => {
  return (
    <div className="grid bg-black">
      <WarpAnimationContainer>
        <AnimatedCard
          title="Who We Are"
          description="At [Your Company Name], we don’t just develop software or launch websites—we create digital experiences that drive growth, solve real-world problems, and elevate your brand. Since our founding in 2025, we’ve helped businesses across industries transform how they operate and connect with their customers. From intuitive web platforms and mobile apps to strategic consulting and design, we deliver solutions that are tailored, scalable, and results-driven. Our clients range from early-stage startups to established enterprises, but our process stays the same: understand the business, design with purpose, and build with precision. We’re passionate about clean architecture, modern interfaces, and smart automation that makes life easier for end users and business owners alike. With a team of experienced designers, developers, and strategists, we approach every project with the same mindset—clarity, collaboration, and a relentless focus on quality."
        >
          <Image
            src={PortfolioImage}
            alt="Portfolio"
            className="mx-auto rounded-md object-cover max-h-[400px]"
          />
        </AnimatedCard>
      </WarpAnimationContainer>
    </div>
  )
};
