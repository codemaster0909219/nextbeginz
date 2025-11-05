import { jobs } from "@/config/jobs";
import Link from "next/link";
import { AuroraCareerBackGround } from "@/components/ui/AuroraCareerBG";

export default function JobDetail({ params }) {
  const job = jobs.find((j) => j.id === params.id);

  if (!job) return <div className="text-white p-10">Job not found.</div>;

  return (
    
    <div className="min-h-screen bg-[#0d0d15] text-white py-20 px-6">
      
      <div className="max-w-3xl mx-auto space-y-6">
    
        <Link href="/career" className="text-purple-300 hover:text-white">
          ← Back to Careers
        </Link>

        <h1 className="text-3xl font-bold">{job.title}</h1>

        <div className="flex gap-2 flex-wrap">
          {job.locations.map((loc) => (
            <span key={loc} className="px-3 py-1 text-xs rounded-full bg-white/10">
              🌍 {loc}
            </span>
          ))}
        </div>

        <p className="whitespace-pre-line prose prose-invert max-w-none text-white/90">{job.fullDescription}</p>

        <a
          href={job.applyUrl || `mailto:kylesuttonn87@gmail.com?subject=Job Application: ${job.title}`}
          className="inline-block mt-4 bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded-lg font-medium transition"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}
