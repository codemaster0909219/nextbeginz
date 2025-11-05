"use client";

import { jobs } from "@/config/jobs";
import { SoftWaveBackground } from "../ui/SoftWavebg";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";

export const Content = () => {
  return (
    
    <div className="relative w-full overflow-hidden px-4 sm:px-20 py-28 bg-[#0d0d15] text-white" >
      <SoftWaveBackground />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 relative z-10">
        {jobs.map((job, index) => (
          <JobCard key={job.id} job={job} index={index} />
        ))}
      </div>
    </div>
  );
};

// --------- 3D Job Card ----------

function JobCard({ job, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 60 }}
            animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { delay: index * 0.08, type: "spring", stiffness: 80 },
            }}
        >
            <motion.div
            onMouseMove={handleMove}
            onMouseLeave={() => {
                x.set(0);
                y.set(0);
            }}
            style={{ rotateX, rotateY }}
            className="
                group relative rounded-3xl p-8
                bg-white/5 border border-white/10
                shadow-[0_0_40px_#9444ff3a]
                backdrop-blur-2xl 
                overflow-hidden
                transition-all
                hover:shadow-[0_0_90px_#B48CDEaa]
                hover:border-purple-500/40
            "
            >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(180,140,255,0.35),_transparent_60%)] opacity-50 group-hover:opacity-90 transition-all" />
            <div className="absolute inset-0 rounded-3xl border border-white/20 group-hover:border-purple-400/60 transition-all pointer-events-none" />

            <h3 className="text-xl font-semibold text-white mb-2 relative z-10">
                {job.title}
            </h3>
            <p className="text-white/70 text-sm mb-4 relative z-10">
                {job.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                {job.locations.map((loc) => (
                <span
                    key={loc}
                    className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/80 border border-white/15"
                >
                    🌍 {loc}
                </span>
                ))}
            </div>
            <div className="flex gap-14 items-center mt-6 relative z-10">
                <Link href={`/career/${job.id}`}>
                    <div className="flex gap-2 relative z-10">
                        <span className="px-4 py-2 rounded-lg text-purple-300 hover:text-white border border-purple-400/40
    hover:bg-purple-500/10 transition">
                        View Details →
                        </span>
                    </div>
                </Link>
                {/* Apply Button */}
                <a
                  href={job.applyUrl || `mailto:kylesuttonn87@gmail.com?subject=Job Application: ${job.title}`}
                  className="
                    bg-purple-500/80 hover:bg-purple-500 active:bg-purple-600 
                    text-white px-4 py-2 rounded-lg font-medium
                    transition shadow-[0_0_12px_rgba(180,140,255,0.4)]
                    hover:shadow-[0_0_18px_rgba(180,140,255,0.7)]
                    backdrop-blur-sm
                    group-hover:translate-y-[-1px]
                  "
                >
                  Apply Now
                </a>
              </div>
            </motion.div>
        </motion.div>

  );
}
