"use client";

import Image from "next/image";
import { StarDustBackground } from "../ui/StarDustbg";
import { testimonials } from "@/config/testimonials";

export const Content = () => {
  return (
    <div className="relative w-full overflow-hidden px-4 sm:px-20 py-20 bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)]">
        <div className="max-w-7xl mx-auto">
            <StarDustBackground />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:mt-16">
                {testimonials.map((t, i) => (
                <div
                    key={i}
                    className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg shadow-xl hover:scale-[1.02] transition"
                    >
                    {/* quote */}
                    <p className="text-lg leading-relaxed text-white/90 italic mb-8">
                        “{t.quote}”
                    </p>

                    {/* profile */}
                    <div className="flex items-center gap-4 mb-6">
                        <Image
                        src={t.avatar}
                        alt={t.name}
                        width={56}
                        height={56}
                        className="rounded-full border border-white/20"
                        />
                        <div>
                        <h3 className="text-lg font-semibold text-white">{t.name}</h3>
                        <p className="text-white/60 text-sm">{t.role}</p>
                        <span className="text-sm mt-1 inline-block bg-white/10 text-white/70 px-3 py-1 rounded-full">
                            {t.company}
                        </span>
                        </div>
                    </div>

                    {/* booking button */}
                    <a
                        href={`${t.calendly}?utm_source=site&utm_medium=testimonial&client=${encodeURIComponent(t.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full mt-4 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl text-sm font-medium transition border border-white/20 text-center"
                        >
                        Book a Call with {t.name} →
                    </a>
                    </div>
                ))}
            </div>

            {/* Bottom CTA
            <div className="relative z-[5] flex justify-center mt-20">
                <a
                    href="/contact"
                    className="bg-white text-black px-6 py-3 rounded-xl font-semibold shadow-[0_0_20px_#B48CDE60] hover:shadow-[0_0_35px_#B48CDE90] transition-all duration-300"
                >
                    Book a Free Call →
                </a>
            </div> */}
        </div>
    </div>
  );
};
