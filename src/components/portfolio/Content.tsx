"use client";
import { HackerBackground } from "../ui/hackerbg";
import { useEffect, useState } from "react";
import { TextComponent } from "../ui/featurefour";
import { cn } from "../lib/utils";

const data = [
  {
    title: "AcuDocx – Healthcare Document Portal",
    content: "A secure, HIPAA-compliant platform for managing patient documents...",
    did: "Full-stack development, dashboard design, role-based access, real-time tracking.",
    srcImage:
      "https://res.cloudinary.com/eldoraui/image/upload/v1734107781/Screenshot_2024-12-13_at_10.06.08_PM_molet1.png",
  },
  {
    title: "HireLoop – Job Board + ATS",
    content: "Responsive job board with multi-role dashboards for candidates...",
    did: "UX design, integrations, workflows, analytics.",
    srcImage:
      "https://res.cloudinary.com/eldoraui/image/upload/v1734107781/Screenshot_2024-12-13_at_10.06.08_PM_molet1.png",
  },
  {
    title: "NexusGPT – AI Coaching Assistant",
    content: "AI tool that builds personalized coaching plans...",
    did: "OpenAI, prompt engineering, onboarding, UI.",
    srcImage:
      "https://res.cloudinary.com/eldoraui/image/upload/v1734107781/Screenshot_2024-12-13_at_10.06.08_PM_molet1.png",
  },
  {
    title: "Copy & Paste Library",
    content: "Modern components that drop into your project instantly.",
    srcImage:
      "https://res.cloudinary.com/eldoraui/image/upload/v1734107781/Screenshot_2024-12-13_at_10.06.08_PM_molet1.png",
  },
];

export const Portfolios = () => {
  const [featureOpen, setFeatureOpen] = useState(0);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTimer((t) => t + 10), 10);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer > 10000) {
      setFeatureOpen((p) => (p + 1) % data.length);
      setTimer(0);
    }
  }, [timer]);

  return (
    <div className="relative w-full overflow-hidden px-4 sm:px-20 py-24 bg-[#020617]"> 
    
      {/* subtle deep blue gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030b1f] via-[#020617] to-black opacity-90 pointer-events-none" />
      <HackerBackground />
      <div className="relative max-w-7xl mx-auto">

        {/* Blue glass panel */}
        <div className="
          relative rounded-3xl border border-white/10 
          bg-[#0b1224cc] backdrop-blur-xl  /* <— 0.8 opacity */
          shadow-[0_0_60px_rgba(0,40,150,0.25)]
          p-10
        ">
          {/* Blue edge rimlight */}
          <div className="absolute inset-0 rounded-3xl border border-blue-400/30 pointer-events-none"></div>

          <h2 className="text-3xl font-semibold text-center text-blue-100 pb-10 tracking-tight">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

            <div className="space-y-5">
              {data.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => {
                    setFeatureOpen(index);
                    setTimer(0);
                  }}
                  className="w-full text-left group"
                >
                  <div className={`
                    rounded-2xl px-4 py-4 transition-all duration-200 
                    ${featureOpen === index 
                      ? "bg-white/10 border border-blue-400/50 shadow-[0_0_20px_rgba(0,110,255,0.3)]" 
                      : "bg-white/5 border border-white/10 hover:bg-white/10"}
                  `}>
                    <p className="text-blue-200 font-medium mb-1">{item.title}</p>
                    <p className="text-blue-200/70 text-sm">{item.content}</p>

                    {featureOpen === index && (
                      <div className="mt-2 h-1 w-24 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="relative h-96 w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 md:h-[500px] backdrop-blur-lg shadow-xl">
              {data.map((item, index) => (
                <img
                  key={item.title}
                  src={item.srcImage}
                  alt={item.title}
                  className={`
                    absolute h-full w-full object-cover transition-all duration-500 
                    ${featureOpen === index 
                      ? "opacity-100 scale-100" 
                      : "opacity-0 scale-95"}
                  `}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>

  );
};
