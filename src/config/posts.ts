import { BlogPostMeta } from "@/lib/types";

export const posts: BlogPostMeta[] = [
  {
    slug: "how-we-ship-ml-products-faster",
    title: "How We Ship ML Products Faster (Without Burning Weekends)",
    excerpt:
      "A pragmatic blueprint for discovery → scoping → delivery that keeps quality high and surprises low.",
    date: "2025-10-01",
    author: "Team GrowUp",
    readingMinutes: 7,
  },
  {
    slug: "rag-that-actually-works",
    title: "RAG That Actually Works: Hybrid Retrieval, Guardrails, and Caching",
    excerpt:
      "Lessons from production systems: mixing BM25 + dense, quality filters, and the guardrails that matter.",
    date: "2025-09-16",
    author: "Engineering",
    readingMinutes: 9,
  },
  {
    slug: "designing-landing-pages-that-convert",
    title: "Designing Landing Pages That Convert (w/ Real Numbers)",
    excerpt:
      "Above-the-fold clarity, proof, and motion that earns attention — with A/B baselines we like.",
    date: "2025-08-20",
    author: "Product",
    readingMinutes: 6,
  },
];
