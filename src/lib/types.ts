export type Testimonial = {
  name: string;
  role: string;
  company: string;
  avatar?: string; // /public path
  quote: string;
  logo?: string;   // /public path
  calendly?: string;
};

export type Job = {
  id: string;   
  title: string;
  locations: string[]; // e.g., ["Remote (Anywhere)"] or ["Warsaw, Poland", "Remote"]
  tags?: string[];     // e.g., ["Remote", "Full-time"]
  description: string; // short one-liner for the list
  applyUrl?: string;   // external application link (optional)
};

export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;    // ISO
  author: string;
  readingMinutes: number;
};
