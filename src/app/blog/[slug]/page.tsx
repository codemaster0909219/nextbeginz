import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "@/config/posts";
import { Header } from "@/components/Header";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — Blog`,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-950 to-black text-white">
        <Header />
        <article className="relative mx-auto w-full max-w-3xl px-6 pt-32 pb-32">

        {/* subtle gradient orb */}
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full 
            bg-[radial-gradient(circle,rgba(88,101,242,0.25),transparent_70%)] blur-3xl opacity-70 pointer-events-none"></div>

        {/* article header */}
        <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight drop-shadow-sm">
            {post.title}
            </h1>

            <p className="mt-3 text-sm text-blue-200 flex items-center gap-2">
            <span>{new Date(post.date).toLocaleDateString()}</span> •
            <span>{post.author}</span> •
            <span className="text-blue-300">{post.readingMinutes} min read</span>
            </p>

            {/* subtle divider */}
            <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </header>


        {/* Main blog content */}
        <div className="
            prose prose-invert max-w-none prose-headings:font-semibold prose-headings:text-white 
            prose-p:text-neutral-300 prose-li:text-neutral-300 prose-strong:text-white
            prose-a:text-blue-300 hover:prose-a:text-blue-400 prose-h2:mt-12 prose-h2:mb-4
            prose-code:text-blue-300 prose-code:font-medium prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-white/10 
            prose-pre:rounded-xl prose-pre:shadow-lg prose-hr:border-white/10
        ">
            <p>
            This is a placeholder body for <strong>{post.title}</strong>.
            Replace this section with MDX content or a CMS fetch. Keep paragraphs
            short. Lead with the core insight. Add a small diagram or code block if it helps.
            </p>

            <h2>What matters</h2>
            <ul>
            <li>Start with the user’s problem, not the tech.</li>
            <li>Measure outcomes and share the numbers.</li>
            <li>Write it so a busy person gets value in 60 seconds.</li>
            </ul>

            <p>
            If you want, I can switch this to a full MDX pipeline (contentlayer)
            or a headless CMS (Sanity/Contentful) with preview mode.
            </p>

            {/* callout example */}
            <div className="my-8 p-4 rounded-xl bg-white/5 border border-white/10 text-blue-100 shadow-inner">
            💡 <strong>Pro tip:</strong> Lead every post with an insight, not a story.
            </div>

            {/* sample code block */}
            <pre>
            <code className="language-ts">
                {`const result = await client.query({
        strategy: "hybrid-rag",
        guardrails: true,
        cache: true
        });`}
            </code>
            </pre>

            {/* section divider */}
            <hr className="my-10 border-white/10" />

            <p>Thanks for reading — now go build something big.</p>
        </div>
        </article>

      <CallToAction />
      <Footer />
    </main>
  );
}
