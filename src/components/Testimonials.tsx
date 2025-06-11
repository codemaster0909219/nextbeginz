"use client";
import { FancyTestimonialsSlider } from "@/components/ui/testimonialslider";

export function Testimonials() {
  const testimonials = [
    {
      img: "https://randomuser.me/api/portraits/men/91.jpg",
      quote: "We came to them with just a rough idea—what we got back was a fully functional platform that exceeded expectations. Communication was clear throughout, and delivery was on time. We’re already planning phase two with them.",
      name: "Jessie J",
      role: "Altosystems",
    },
    {
      img: "https://randomuser.me/api/portraits/women/12.jpg",
      quote:
        "They understood our business model and translated it into a sleek, intuitive interface. Our team loved how collaborative the design process was. We went live without delays, and feedback from our users has been overwhelmingly positive.",
      name: "Nick V",
      role: "ThriveEdge",
    },
    {
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      quote: "From kickoff to launch, the experience was seamless. They solved complex problems we hadn’t even thought about and helped us improve our operations, not just our site. Truly a professional and forward-thinking team.",
      name: "Amelia W",
      role: "CoreBridge Tech",
    },
  ];
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24">
      <div className="mt-[64px] px-12 flex justify-center">
        <FancyTestimonialsSlider testimonials={testimonials} />
      </div>
    </div>
  );
}
