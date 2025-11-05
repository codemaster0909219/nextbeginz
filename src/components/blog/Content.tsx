"use client";

import Link from "next/link";
import { posts } from "@/config/posts";
import { BlogGridBackGround } from "../ui/BlogGridBG";

export const Content = () => {
  return (
    <div className="relative w-full overflow-hidden px-4 sm:px-20 py-20 bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)]">
        <div className="max-w-7xl mx-auto">
            <BlogGridBackGround />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
                {posts.map((p) => (
                <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 shadow-xl hover:scale-[1.02] transition"
                >
                    <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                    <p className="text-white/60 text-sm mb-3">{p.excerpt}</p>
                    <span className="text-purple-300 hover:text-white text-sm font-medium">
                    Read more →
                    </span>
                </Link>
                ))}
            </div>
        </div>
    </div>
  );
};
