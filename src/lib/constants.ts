import type { CaseStudy, Resource, Service } from "@/types";

export const SITE = {
  name: "Daniel Kliewer",
  title: "Daniel Kliewer — AI Infrastructure & Systems Engineering",
  description:
    "Local-first AI infrastructure, production systems, and technical writing for teams that need control, privacy, and leverage.",
  url: "https://danielkliewer.com",
  image: "/opengraph-image",
  location: "Austin, TX",
  email: "danielkliewer@gmail.com",
  links: {
    github: "https://github.com/kliewerdaniel",
    twitter: "https://twitter.com/kliewerdaniel",
    linkedin: "https://linkedin.com/in/kliewerdaniel",
    youtube: "https://youtube.com/@kliewerdaniel",
  },
} as const;

export const NAVIGATION = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Writing" },
  { href: "/lab", label: "Lab" },
  { href: "/about", label: "About" },
] as const;

export const METRICS = [
  { value: "120+", label: "technical essays and field notes" },
  { value: "20+", label: "systems shipped" },
  { value: "3+", label: "years of production AI work" },
  { value: "94%", label: "average client satisfaction" },
] as const;

export const HOME_PILLARS = [
  {
    title: "Owned infrastructure",
    description: "Private systems, local inference, and deployment patterns you control end to end.",
  },
  {
    title: "Applied architecture",
    description: "From ingestion and retrieval to orchestration and observability, every layer is engineered.",
  },
  {
    title: "Conversion with restraint",
    description: "The site guides attention cleanly, with strong CTA placement and no noisy marketing clutter.",
  },
] as const;

export const SERVICES: Service[] = [
  {
    slug: "ai-knowledge-systems",
    title: "AI Knowledge Systems",
    description:
      "Custom RAG systems, knowledge graphs, and document intelligence pipelines deployed on your infrastructure.",
    price: "$5k–$25k",
    timeline: "2–8 weeks",
    icon: "Brain",
    features: [
      "Custom RAG pipelines with local LLMs",
      "Document ingestion and chunking strategy",
      "Semantic search and hybrid retrieval",
      "Knowledge graph construction",
      "API and integration layer",
      "Monitoring and maintenance setup",
    ],
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    description:
      "Multi-step AI agent systems that automate complex business processes end to end.",
    price: "$2k–$15k",
    timeline: "1–6 weeks",
    icon: "Workflow",
    features: [
      "Multi-step orchestration",
      "Business process mapping",
      "Custom tool integrations",
      "Error handling and retries",
      "Operator-facing dashboard",
      "Post-deployment support",
    ],
  },
  {
    slug: "local-ai-deployment",
    title: "Local AI Deployment",
    description:
      "On-premise LLM infrastructure on your hardware. Private, secure, and fully controlled.",
    price: "$2k–$10k",
    timeline: "1–4 weeks",
    icon: "Server",
    features: [
      "Ollama, vLLM, or TGI deployment",
      "GPU acceleration and optimization",
      "OpenAI-compatible API endpoint",
      "Monitoring with Prometheus and Grafana",
      "Benchmarking and performance tuning",
      "Runbook and documentation",
    ],
  },
  {
    slug: "ai-websites",
    title: "AI-Powered Websites",
    description:
      "Web applications with AI integrated at the architecture level, not bolted on as an afterthought.",
    price: "$3k–$10k",
    timeline: "2–4 weeks",
    icon: "Globe",
    features: [
      "Next.js and AI integration architecture",
      "Streaming UX patterns",
      "Server-rendered AI features",
      "Responsive, performant UI",
      "SEO-first structure",
      "Deployment pipeline and CI/CD",
    ],
  },
  {
    slug: "content-pipelines",
    title: "Content and Research Pipelines",
    description:
      "Automated systems for research, synthesis, generation, and distribution using AI agents.",
    price: "$1k–$8k",
    timeline: "1–4 weeks",
    icon: "PenLine",
    features: [
      "Automated research and analysis",
      "Content generation workflows",
      "Multi-platform distribution",
      "Quality scoring and review",
      "SEO optimization pipeline",
      "Analytics and reporting",
    ],
  },
];

export const ENGAGEMENT_MODELS = [
  {
    name: "AI Systems Audit",
    price: "$500",
    duration: "1 week",
    description: "Deep-dive assessment of your current stack and AI opportunities.",
    deliverables: [
      "Current-state analysis",
      "Opportunity map",
      "Architecture recommendation",
      "Implementation roadmap",
      "ROI estimate",
    ],
    for: "teams exploring AI integration",
  },
  {
    name: "Technical Sprint",
    price: "$5k–$10k",
    duration: "2 weeks",
    description: "Focused build sprint delivering a working prototype or production feature.",
    deliverables: [
      "Working prototype",
      "Technical specification",
      "Integration guide",
      "Deployment scripts",
      "Handoff documentation",
    ],
    for: "teams with a clear scope",
  },
  {
    name: "Full System Build",
    price: "$10k–$25k",
    duration: "4–8 weeks",
    description: "End-to-end system design, build, and deployment.",
    deliverables: [
      "Production-ready system",
      "Architecture documentation",
      "Deployment pipeline",
      "Load testing results",
      "Operations runbook",
      "30-day support",
    ],
    for: "organizations needing a complete solution",
  },
  {
    name: "Fractional AI Engineer",
    price: "$5k/mo",
    duration: "ongoing",
    description: "Ongoing AI engineering support on a retainer basis.",
    deliverables: [
      "Weekly sprint planning",
      "Continuous delivery",
      "Architecture reviews",
      "Team mentoring",
      "Priority support",
    ],
    for: "teams needing ongoing AI expertise",
  },
] as const;

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "enterprise-knowledge-system",
    title: "Enterprise Knowledge System",
    client: "Anonymous SaaS Company",
    timeline: "4 weeks",
    role: "AI Systems Architect",
    technologies: ["Ollama", "RAG", "LangChain", "Next.js", "Chroma"],
    metrics: [
      { value: "60%", label: "faster document retrieval" },
      { value: "50k", label: "documents indexed" },
      { value: "200ms", label: "average query latency" },
    ],
    results: [
      "Reduced manual research time by 60%",
      "Scaled to 50k documents without performance degradation",
      "Deployed on-premise with zero data exposure",
      "OpenAI-compatible API for integration flexibility",
    ],
    featured: true,
    published: true,
    date: "2025-12-01",
    content:
      "A B2B SaaS company needed to make 50,000+ internal documents searchable by their team without exposing data to third-party APIs.",
  },
  {
    slug: "automation-pipeline-saas",
    title: "Automation Pipeline for SaaS",
    client: "B2B SaaS Platform",
    timeline: "2 weeks",
    role: "Workflow Architect",
    technologies: ["LangChain", "Ollama", "PostgreSQL", "n8n"],
    metrics: [
      { value: "73%", label: "manual work reduced" },
      { value: "4min", label: "average resolution time" },
      { value: "99.2%", label: "task completion rate" },
    ],
    results: [
      "Reduced repetitive onboarding work by 73%",
      "Shortened support triage from hours to minutes",
      "Created deterministic retry and escalation paths",
      "Established monitoring for every agent step",
    ],
    featured: false,
    published: true,
    date: "2025-10-18",
    content:
      "A B2B platform needed a reliable automation system to move work out of manual inboxes and into deterministic agent workflows.",
  },
];

export const RESOURCES: Resource[] = [
  {
    slug: "ai-infrastructure-audit-checklist",
    title: "AI Infrastructure Audit Checklist",
    type: "PDF Guide",
    price: "free",
    description:
      "A 10-point checklist to assess AI readiness and identify automation opportunities.",
    tags: ["audit", "checklist", "assessment"],
    content: "Checklist for evaluating AI infrastructure maturity.",
  },
  {
    slug: "local-llm-deployment-quickstart",
    title: "Local LLM Deployment Quickstart",
    type: "PDF Guide",
    price: "free",
    description: "Step-by-step guide to deploying your first local language model with Ollama.",
    tags: ["ollama", "deployment", "beginner"],
    content: "Quickstart for getting a local model online.",
  },
  {
    slug: "rag-system-architecture-template",
    title: "RAG System Architecture Template",
    type: "Template",
    price: "paid",
    description:
      "Production-ready RAG architecture template with chunking strategies and embedding pipelines.",
    tags: ["rag", "architecture", "advanced"],
    content: "Template for building a production RAG system.",
  },
  {
    slug: "ai-workflow-ideas-for-business",
    title: "AI Workflow Ideas for Business",
    type: "PDF Guide",
    price: "free",
    description: "30 automation ideas you can implement in your business today.",
    tags: ["automation", "business", "ideas"],
    content: "Business automation inspiration pack.",
  },
];

export const LAB_EXPERIMENTS = [
  {
    title: "Knowledge Graph Explorer",
    description:
      "Interactive visualization of the content ecosystem. Explore connections between articles, topics, and ideas.",
    status: "beta" as const,
    href: "/lab/knowledge-graph",
  },
  {
    title: "AI Chat Sandbox",
    description:
      "RAG-powered chat interface that answers questions about the site using local LLMs.",
    status: "experimental" as const,
    href: "/lab/chat",
  },
  {
    title: "Architecture Explorer",
    description:
      "Interactive system architecture diagrams for tracing how the stack is assembled.",
    status: "experimental" as const,
    href: "/lab/architecture",
  },
];

export const LAB_STATUS_LABELS = {
  live: "Live",
  beta: "Beta",
  experimental: "Experimental",
  archived: "Archived",
} as const;

export const ABOUT_TIMELINE = [
  {
    year: "2024",
    title: "Published 120+ technical articles on AI systems",
    subtitle: "Built authority in local LLMs, RAG, and automation",
  },
  {
    year: "2024",
    title: "Developed Insight Journal — an AI journaling platform",
    subtitle: "Local-first AI integration with Ollama",
  },
  {
    year: "2025",
    title: "Built production RAG systems for enterprise",
    subtitle: "Document intelligence, knowledge graphs, compliance",
  },
  {
    year: "2025",
    title: "Launched AI workflow automation practice",
    subtitle: "Multi-agent systems for business process automation",
  },
  {
    year: "2026",
    title: "Founded AI infrastructure consultancy",
    subtitle: "Local-first, private AI systems for organizations",
  },
] as const;

export const ABOUT_BELIEFS = [
  {
    title: "Owned, not rented",
    desc: "AI infrastructure should be yours, not accessed through an API you do not control.",
  },
  {
    title: "Local, not cloud-bound",
    desc: "Private AI runs on your hardware. No data leaves your network unless you choose it.",
  },
  {
    title: "Systems, not chatbots",
    desc: "Real value comes from integrated systems, not standalone chat interfaces.",
  },
  {
    title: "Building, not talking",
    desc: "Deliverables over decks. Working software over slideware.",
  },
] as const;

export const FAQS = [
  {
    q: "How do you scope projects?",
    a: "Every project starts with a discovery call. I learn about your stack, goals, and constraints, then deliver a fixed-price proposal with clear deliverables and timeline.",
  },
  {
    q: "What technologies do you use?",
    a: "Whatever solves the problem best, with a strong preference for open-source and local-first. Common stack: Ollama, LangChain, LlamaIndex, Next.js, PostgreSQL.",
  },
  {
    q: "Do you work remotely?",
    a: "Yes. I work with teams across the US and internationally. On-site work can be arranged for key milestones.",
  },
  {
    q: "What happens after we build?",
    a: "You get a deployed system, documentation, a runbook, and optional ongoing support. The project does not stop at launch.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes. Standard NDAs are signed before discovery work begins. Your IP and data remain yours.",
  },
  {
    q: "How is this different from big AI consulting firms?",
    a: "The work is local-first and private by default. You get source code, infrastructure, and the ability to operate the system yourself.",
  },
] as const;

export const CONTACT_POINTS = {
  responseTime: "Within 48 hours",
  budgetRange: "$500–$25,000",
  location: "Austin, TX (Remote)",
  email: SITE.email,
  steps: ["I review your message", "We schedule a discovery call", "I prepare a proposal", "We build"],
} as const;

export const BLOG_CATEGORIES = [
  "Technical Guides",
  "AI Philosophy",
  "Tutorials",
  "Project Write-ups",
  "News & Opinion",
] as const;
