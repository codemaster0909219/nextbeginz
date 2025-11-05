export interface Job {
  id: string;
  title: string;
  description: string;
  locations: string[];
  tags?: string[];
  // applyUrl: string;
  fullDescription: string;
}

export const jobs: Job[] = [
  {
    id: "local-partnership-coordinator-americas",
    title: "Local Partnership Coordinator — Americas",
    locations: ["Canada", "United States", "Brazil"],
    tags: ["Remote-friendly", "Partnerships"],
    description:
      "Own city-level partnerships with accelerators, coworking hubs, and universities across the Americas.",
    fullDescription: `
        About the Role

        We are expanding our global partner ecosystem and seeking an operator who understands how innovation flows through startup communities, universities, tech hubs, and emerging markets. You will act as the bridge between local business ecosystems and world-class distributed technical talent — helping unlock new opportunities, accelerate programs, and bring AI-powered innovation to more regions.

        ---

        Key Responsibilities

        • Identify and engage accelerators, venture programs, tech hubs, and universities
        • Build long-term, trust-based local partnerships
        • Support contract negotiations and project onboarding
        • Ensure smooth collaboration across international teams
        • Capture regional insights, opportunities, and talent signals

        ---

        Ideal Candidate

        • 2+ years in business development, venture, recruiting, ecosystem or startup roles
        • Strong network in local tech/entrepreneurship ecosystems
        • Cross-cultural communication and relationship leadership
        • Highly self-driven with excellent communication and follow-through
        • Availability: 5–10 hours/week, flexible and async friendly

        ---

        Perks & Benefits

        • Work with global founders, VCs, and technical operators
        • Access to world-class professional network and events
        • Executive mentorship and development stipend
        • Opportunity to shape expansion in your region

        ---

        How to Apply

        Send resume + short intro to:
        📧 kylesuttonn87@gmail.com
        📅 or book a call: https://calendly.com/x-tuan-nguyen/new-meeting

        Subject line:
        "Americas Coordinator Application — [Your Country]"

        ---

        What to Include

        • Short intro + why you're a fit
        • Description of your local startup/tech network
        • 2–3 examples of partnership or ecosystem work
        • Weekly availability
    `
  },

  {
    id: "Technical-Communicator",
    title: "Technical Communicator(English)",
    locations: ["Remote (English-Speaking)"],
    tags: ["Remote", "Part-time / Contract / Non-Dev"],
    description:
      "This is not a generic “content writer” role — it's a technical storyteller + product thinker role, shaping how the world understands cutting-edge systems and AI-powered solutions.",
    fullDescription: `
    About the Role

    We are looking for a Technical Communicator who can turn complex engineering and AI workflows into clear, compelling, and digestible content. You’ll collaborate closely with founders, product builders, and engineers to distill technical work into world-class documentation, case studies, product narratives, and learning materials.
    This is not a generic “content writer” role — it's a technical storyteller + product thinker role, shaping how the world understands cutting-edge systems and AI-powered solutions.
    You will act as a bridge between engineering and users, bringing clarity, confidence, and elegance to everything we ship.

    Responsibilities

        Technical Communication
        • Transform technical output into crisp user-facing docs, diagrams, and explanations
        • Produce case studies, post-launch breakdowns, success stories, playbooks, and FAQ docs
        • Maintain internal + external knowledge bases and release notes

        Product Storytelling & Education
        • Create client-friendly briefs and process summaries
        • Support content for workshops, demos, and technical onboarding
        • Help translate high-level requirements into explainable execution narratives

        Documentation Systems
        • Establish documentation standards, structure, tone, and templates
        • Keep docs organized, searchable, and aligned with product evolution

    Ideal Candidate

        You're a fit if you:
        • Write clear, modern English with precision and warmth
        • Can quickly understand and explain technical concepts
        • Have experience writing for engineering, AI, SaaS, cloud, or tech platforms
        • Are obsessed with clarity, structure, and accuracy
        • Thrive collaborating with product teams, customers, and engineers
        • Can turn chaos into a clean, elegant narrative

        Nice to have
        • Experience with developer tools or AI technologies
        • Familiarity with Markdown, Notion, Confluence, or GitHub docs
        • Visual storytelling or diagramming (Mermaid, Excalidraw, Figma, etc.)

    What Success Looks Like
        Within your first 90 days, you will have:
        • Shipped clean, high-impact documentation and case studies
        • Aligned internal and external communication standards
        • Supported engineering and product teams with clarity and speed
        • Developed a consistent voice for technical communication

    Perks & Benefits
        • Competitive compensation
        • Remote-friendly flexible schedule
        • Work alongside world-class engineers & founders
        • Direct impact on product maturity and user clarity
        • Executive mentorship + professional development budget

    How to Apply

        📧 Email your portfolio + short intro to: kylesuttonn87@gmail.com or submit through our site.
        📝 Subject line: Technical Communicator Application — [Your Name]

    What to Include

        • Short intro + why this role fits you
        • Links to writing samples or portfolio
        • 2–3 examples of technical concepts you explained simply
        • Your availability & earliest start date 
    `
  },

  {
    id: "technical-screening-lead",
    title: "Technical Screening Lead",
    locations: ["Remote (Anywhere)"],
    tags: ["Remote", "Part-time / Contract"],
    description:
      "Design and run pragmatic engineering screens; help us hire fast without fluff.",
    fullDescription: `
    ### Responsibilities:
    - Evaluate engineering candidates (coding, system design, problem-solving)
    - Build and refine technical assessments  
    - Maintain interview rubrics and feedback loops  
    - Coordinate with hiring teams  

    ### Ideal Candidate:
    - Senior full-stack / ML / systems engineering background  
    - Strong interviewer / hiring committee experience  
    - Ability to communicate complex technical topics clearly  

    ### Perks:
    - Flexible hours  
    - Competitive project-based compensation  
    - Influence hiring culture & engineering bar  

    ### How to Apply:
    Send GitHub/LinkedIn + short intro  
    Email: **kylesuttonn87@gmail.com**  
    `
  },

  {
    id: "eu-market-expansion-specialist-pl",
    title: "EU Market Expansion Specialist (Poland)",
    locations: ["Warsaw", "Kraków", "Remote Poland"],
    tags: ["Hybrid", "Growth"],
    description:
      "Pilot market entry playbooks and operator communities in key Polish cities.",
    fullDescription: `
        ### Responsibilities:
        - Build and manage startup/operator communities  
        - Coordinate events and partnerships in Poland  
        - Support talent and founder matchmaking  
        - Report insights from local ecosystem  

        ### Candidate:
        - Experience in community, growth, or ecosystem roles  
        - Strong Polish tech/startup network  
        - Polish + English fluency  

        ### Apply:
        Email + brief intro + LinkedIn  
        \`Subject: Poland Expansion Specialist\`
    `
  },

  {
    id: "cross-cultural-project-liaison",
    title: "Cross-Cultural Project Liaison",
    locations: ["Germany", "Poland", "Netherlands"],
    tags: ["Client", "Operations"],
    description:
      "Bridge teams and clients across time zones; ensure projects ship clean and on time.",
    fullDescription: `
        ### Responsibilities:
        - Coordinate between client teams and engineers  
        - Run weekly check-ins, gather feedback  
        - Track deliverables and timelines  

        ### Candidate:
        - Strong communication + PM skills  
        - Experience working across multiple cultures  
        - Detail-oriented and proactive  

        ### Apply:
        Send intro + CV to: kylesuttonn87@gmail.com
    `
  },

  {
    id: "startup-matchmaker-eu-hubs",
    title: "Startup Matchmaker (Emerging EU Hubs)",
    locations: ["Warsaw", "Prague", "Budapest"],
    tags: ["BD", "Community"],
    description:
      "Match founders with talent and early customers; build the playbook for new hubs.",
    fullDescription: `
### Responsibilities:
- Identify startups & technical talent  
- Match teams to opportunities  
- Host intro calls and track follow-ups  

### Candidate:
- Startup ecosystem familiarity  
- Network-driven role  
    `
  },

  {
    id: "ai-solutions-architect",
    title: "AI Solutions Architect",
    locations: ["Remote (Global)"],
    tags: ["AI", "Full-time"],
    description:
      "Design AI-powered workflows and partner with clients to deploy automation end-to-end.",
    fullDescription: `
### Responsibilities:
- Architect RAG/LLM pipelines and automations  
- Work directly with founders/CTOs  
- Oversee implementation & delivery  

### Candidate:
- Strong LLM/RAG experience  
- Production engineering mindset  
- Consulting / client-facing experience  
    `
  },

  {
    id: "global-talent-network-builder",
    title: "Global Talent Network Builder",
    locations: ["LATAM", "Eastern Europe", "Southeast Asia"],
    tags: ["Community", "Remote-friendly"],
    description:
      "Scout elite global operators and build hiring pipelines.",
    fullDescription: `
### Responsibilities:
- Source high-quality operators + engineers  
- Activate talent communities  
- Build referral network flywheel  

### Candidate:
- Recruiting or BD background  
- Strong local ecosystem network  
    `
  },

  {
    id: "founder-success-partner",
    title: "Founder Success Partner",
    locations: ["United States", "Canada", "Remote"],
    tags: ["Client Success", "Advisory"],
    description:
      "Support founders with execution, strategy, and tactical decisions.",
    fullDescription: `
### Responsibilities:
- Direct strategy support with early-stage founders  
- Workflow planning + execution tracking  
- Introductions, resources & coaching  

### Candidate:
- Experience in startups/VC or founder support roles  
    `
  },

  {
    id: "developer-relations-producer",
    title: "Developer Relations Producer",
    locations: ["Remote (English Speaking)"],
    tags: ["DevRel", "Content"],
    description:
      "Produce demos and workshops showcasing deep tech workflows.",
    fullDescription: `
### Responsibilities:
- Create dev demos + technical content  
- Run live sessions, webinars, workshops  
- Work with engineers on feature launches  

### Candidate:
- Loves community & technical storytelling  
- Comfortable presenting  
    `
  },

  {
    id: "startup-labs-program-manager",
    title: "Startup Labs Program Manager",
    locations: ["London", "Berlin", "Remote Europe"],
    tags: ["Program Management", "Venture"],
    description:
      "Run startup sprints & support cohorts with intros, playbooks, and office hours.",
    fullDescription: `
### Responsibilities:
- Manage founder cohort experience  
- Provide strategic + tactical support  
- Coordinate mentors & sessions  
    `
  },

  {
    id: "emerging-markets-community-lead-apac",
    title: "Emerging Markets Community Lead — APAC",
    locations: ["Singapore", "Jakarta", "Bangkok", "Remote APAC"],
    tags: ["Community", "Growth"],
    description:
      "Activate startup communities in fast-growth hubs.",
    fullDescription: `
### Responsibilities:
- Build and host tech community events  
- Deal sourcing + ecosystem mapping  
- Local founder/talent introductions  

### Candidate:
- Strong network in Asia startup scene  
    `
  },

  {
    id: "global-operations-specialist",
    title: "Global Operations Specialist",
    locations: ["Remote (Anywhere)"],
    tags: ["Operations", "Systems"],
    description:
      "Build internal systems & workflows; keep operations running smoothly.",
    fullDescription: `
### Responsibilities:
- Create SOPs + internal systems  
- Manage cross-team coordination  
- Improve workflows + execution  

### Candidate:
- Ops/systems thinking  
- Excellent documentation skills  
    `
  },

  {
    id: "strategic-intel-research-analyst",
    title: "Strategic Intelligence Research Analyst",
    locations: ["Remote (Americas / Europe)"],
    tags: ["Research", "Strategy"],
    description:
      "Analyze markets & ecosystems to shape expansion bets.",
    fullDescription: `
### Responsibilities:
- Market mapping  
- Talent cluster analysis  
- Macro insights & competitive research  

### Candidate:
- Analyst / consulting / VC research background  
    `
  }
];