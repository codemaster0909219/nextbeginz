"use client";

import { useState, useRef } from "react";
import { jobs } from "@/config/jobs";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { SuccessModal } from "@/components/ui/SuccessModal";
// import { Linkedin } from "lucide-react";

export default function JobDetail({ params }: any) {
  const job = jobs.find((j) => j.id === params.id);

  const formRef = useRef<HTMLFormElement>(null);

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  if (!job) return <div className="text-white p-10">Job not found.</div>;
  async function submitApplication(e: any) {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);

    //1. Upload resume to Google Drive
    // let resumeUrl = "";
    // if (formRef.current.resume.files[0]) {
    //   const formData = new FormData();
    //   formData.append("resume", formRef.current.resume.files[0]);

    //   const uploadRes = await fetch("/api/upload-resume", {
    //     method: "POST",
    //     body: formData,
    //   });

    //   const result = await uploadRes.json();
    //   resumeUrl = result.url;
    // }

    try {
      await emailjs.send(
        "service_zxwkc8i",
        "template_290qcva",
        {
          to_name:"Alex",
          from_email: formRef.current.email.value,
          from_name: formRef.current.from_name,
          message:`Job Title: ${formRef.current.job_title.value}\n
          Job Url: https://www.nextbeginz.com/career/${formRef.current.job_id.value}\n
          LinkedIn Profile: ${formRef.current.linkedin.value}\n
          GitHub: ${formRef.current.github.value}\n
          Location: ${formRef.current.location.value}\n
          ${formRef.current.extraInfo}\n`
        },
        "p1IKxKE7bREMYcFfC",
      );
      setSuccess(true);
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }

    setSending(false);
  }

  return (
    <div className="min-h-screen bg-[#0c0c14] text-white py-20 px-6">
      <SuccessModal open={success} onClose={() => setSuccess(false)} />

      <div className="max-w-3xl mx-auto space-y-10 animate-fadeIn">
        <Link
          href="/career"
          className="text-purple-300 hover:text-purple-400 transition"
        >
          ← Back to Careers
        </Link>

        <h1 className="text-4xl font-bold tracking-tight">{job.title}</h1>

        <div className="flex gap-2 flex-wrap">
          {job.locations.map((loc: string) => (
            <span
              key={loc}
              className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/10 backdrop-blur-sm"
            >
              🌍 {loc}
            </span>
          ))}
        </div>

        <p className="whitespace-pre-line prose prose-invert max-w-none text-white/80 leading-relaxed">
          {job.fullDescription}
        </p>

        {/* ✅ Application Form */}
        <form
          ref={formRef}
          onSubmit={submitApplication}
          className="mt-10 p-8 space-y-5 bg-white/5 rounded-2xl backdrop-blur-md border border-white/10 shadow-xl"
        >
          <h2 className="text-2xl font-semibold">Apply for this role</h2>

          {/* Hidden job title to send in email */}
          <input type="hidden" name="job_title" value={job.title} />
          <input type="hidden" name="job_id" value={job.id} />

          {/* Inputs */}
          <InputField label="Full Name" name="fron_name" placeholder="John Doe" />
          <InputField
            label="Email Address"
            name="email"
            placeholder="john@example.com"
          />

          {/* Location dropdown */}
          <div className="space-y-2">
            <label className="text-sm text-white/70">Location</label>
            <select
              name="location"
              className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/20 focus:ring-2 focus:ring-purple-400 outline-none transition"
            >
              <option value="">Select Location</option>
              {job.locations.map((loc: string) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          <InputField
            label="LinkedIn Profile"
            name="linkedin"
            placeholder="https://linkedin.com/in/..."
          />

          <InputField
            label="GitHub / Portfolio"
            name="github"
            placeholder="https://github.com/username"
          />

          <TextAreaField
            label="Additional Information"
            name="extraInfo"
            placeholder="Tell us anything you'd like us to know..."
          />

          {/* Resume */}
          <div className="space-y-2">
            <label className="text-sm text-white/70">Resume (PDF)</label>
            <input
              type="file"
              name="resume"
              accept=".pdf"
              className="block w-full text-sm text-white/70"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={sending}
            className={`w-full py-3 rounded-xl font-semibold transition relative overflow-hidden
              ${sending ? "bg-gray-600" : "bg-purple-600 hover:bg-purple-700"}
            `}
          >
            {sending ? "Sending..." : "Apply Now"}
          </button>
        </form>
      </div>
    </div>
  );
}

/* ✅ Smaller cleaner components */

function InputField({ label, name, placeholder }: any) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-white/70">{label}</label>
      <input
        name={name}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/20 focus:ring-2 focus:ring-purple-400 outline-none transition"
      />
    </div>
  );
}

function TextAreaField({ label, name, placeholder }: any) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-white/70">{label}</label>
      <textarea
        name={name}
        rows={5}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/20 focus:ring-2 focus:ring-purple-400 outline-none transition"
      />
    </div>
  );
}
