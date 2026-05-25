import type { Project, Resource, Service } from "@/types";

export const SITE = {
  name: "Daniel Kliewer",
  title: "Daniel Kliewer — Generative AI Generalist",
  description:
    "AI operations, RLHF, local AI systems, and full-stack builds shaped by 10+ years of annotation, evaluation, and delivery work.",
  url: "https://danielkliewer.com",
  image: "/opengraph-image",
  location: "Austin, TX",
  email: "danielkliewer@gmail.com",
  links: {
    github: "https://github.com/kliewerdaniel",
    twitter: "https://x.com/kliewer_daniel",
    linkedin: "https://www.linkedin.com/in/daniel-kliewer-42691944/",
    youtube: "https://www.youtube.com/@kadaligogh",
  },
} as const;

export const NAVIGATION = [
  { href: "/services", label: "What I Offer" },
  { href: "/case-studies", label: "Projects" },
  { href: "/blog", label: "Writing" },
  { href: "/lab", label: "Lab" },
  { href: "/about", label: "About Me" },
] as const;

export const METRICS = [
  { value: "10+", label: "years in AI/data operations" },
  { value: "5", label: "signature project lines" },
  { value: "RLHF", label: "evaluation and feedback expertise" },
  { value: "Local", label: "first architecture bias" },
] as const;

export const HOME_PILLARS = [
  {
    title: "AI operations",
    description: "Evaluation workflows, annotation systems, QA review, and process design for reliability.",
  },
  {
    title: "Local AI systems",
    description: "Ollama, llama.cpp, GraphRAG, and agent pipelines built for privacy and control.",
  },
  {
    title: "Full-stack delivery",
    description: "Next.js, Python, Django, and pragmatic implementation from prototype to deployment.",
  },
] as const;

export const SERVICES: Service[] = [
  {
    slug: "ai-operations",
    title: "AI Operations & Evaluation",
    description:
      "RLHF, QA, annotation, adjudication, and evaluation workflows that make AI systems measurable.",
    price: "Project-based",
    timeline: "2–6 weeks",
    icon: "Brain",
    features: [
      "Human feedback and ranking systems",
      "Evaluation rubrics and QA pipelines",
      "Adjudication and error analysis",
      "Prompt and output review workflows",
      "Operational documentation",
      "Reproducible measurement loops",
    ],
  },
  {
    slug: "local-ai-systems",
    title: "Local AI Systems",
    description:
      "Private LLM stacks, RAG systems, and knowledge graphs deployed on your hardware.",
    price: "Project-based",
    timeline: "2–8 weeks",
    icon: "Workflow",
    features: [
      "Ollama and llama.cpp deployment",
      "GraphRAG and retrieval workflows",
      "Vector databases and knowledge graphs",
      "Tool orchestration and MCP integration",
      "Local-first privacy boundaries",
      "Runbooks and handoff docs",
    ],
  },
  {
    slug: "full-stack-ai-products",
    title: "Full-Stack AI Products",
    description:
      "Next.js, Python, Django, and full-stack delivery for products that need real AI integration.",
    price: "Project-based",
    timeline: "2–6 weeks",
    icon: "Server",
    features: [
      "Product architecture and implementation",
      "Prompt-driven or structured generation flows",
      "Responsive, accessible interfaces",
      "API and persistence layers",
      "Deployment and environment setup",
      "SEO and content systems",
    ],
  },
  {
    slug: "technical-documentation",
    title: "Technical Documentation",
    description:
      "Specifications, workflow docs, and process writeups that make complicated systems usable.",
    price: "Add-on or standalone",
    timeline: "1–3 weeks",
    icon: "Globe",
    features: [
      "Specs and implementation plans",
      "Evaluation and QA documentation",
      "Workflow maps and SOPs",
      "Client-facing handoff docs",
      "Research synthesis",
      "Editorial polish",
    ],
  },
  {
    slug: "content-and-research-pipelines",
    title: "Content and Research Pipelines",
    description:
      "Research, summarization, and publishing workflows that keep content structured and useful.",
    price: "Project-based",
    timeline: "1–4 weeks",
    icon: "PenLine",
    features: [
      "Research synthesis workflows",
      "Structured content generation",
      "SEO and publication pipelines",
      "Multi-step review systems",
      "Knowledge capture and reuse",
      "Operational guardrails",
    ],
  },
];

export const ENGAGEMENT_MODELS = [
  {
    name: "Discovery Review",
    price: "Fixed fee",
    duration: "1 week",
    description: "Assessment of your current workflows, AI opportunities, and operational gaps.",
    deliverables: [
      "Current-state analysis",
      "Opportunity map",
      "Recommendation memo",
      "Implementation outline",
      "Risk review",
    ],
    for: "teams deciding where AI actually helps",
  },
  {
    name: "Build Sprint",
    price: "Fixed fee",
    duration: "2 weeks",
    description: "A focused build that turns a defined problem into a working prototype or feature.",
    deliverables: [
      "Working prototype",
      "Technical specification",
      "Integration guide",
      "Deployment scripts",
      "Handoff documentation",
    ],
    for: "teams with a clear problem to solve",
  },
  {
    name: "Full Delivery",
    price: "Project based",
    duration: "4–8 weeks",
    description: "End-to-end system design, build, and deployment with documentation and handoff.",
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
    name: "Fractional Support",
    price: "Retainer",
    duration: "ongoing",
    description: "Ongoing support for teams that need a reliable technical partner.",
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

export const PROJECTS: Project[] = [
  {
    slug: "synthetic-intelligence",
    title: "Synthetic Intelligence",
    repo: "SynthInt",
    repoUrl: "https://github.com/kliewerdaniel/SynthInt",
    category: "AI Development",
    summary:
      "Air-gapped, local-first dynamic persona intelligence that turns heterogeneous corpuses into grounded, attributable synthesis.",
    description:
      "A privacy-first system for keeping data on device while using deterministic generation to make large collections conversational and explorable.",
    tags: ["Local LLM", "Privacy", "Persona Systems", "Knowledge Synthesis"],
    stack: ["Python", "Ollama", "RAG", "SQLite", "ChromaDB"],
    highlights: [
      "Designed for air-gapped use and private data boundaries.",
      "Transforms mixed corpuses into grounded, attributable outputs.",
      "Focuses on deterministic generation instead of cloud dependence.",
    ],
    featured: true,
    published: true,
    date: "2026-01-25",
  },
  {
    slug: "sovereign-intelligence-layer",
    title: "Sovereign Intelligence Layer",
    repo: "sse",
    repoUrl: "https://github.com/kliewerdaniel/sse",
    category: "Infrastructure",
    summary: "A local-first, privacy-focused layer that removes dependence on cloud AI services.",
    description:
      "A sovereignty-oriented runtime for teams that want private inference, tighter control, and a simpler trust boundary.",
    tags: ["Sovereignty", "Local AI", "Privacy", "Runtime"],
    stack: ["Ollama", "Local LLMs", "RAG", "System Design"],
    highlights: [
      "Eliminates unnecessary cloud AI dependency.",
      "Centers privacy and control in the execution model.",
      "Works as a foundation for local-first applications.",
    ],
    featured: true,
    published: true,
    date: "2026-01-10",
  },
  {
    slug: "workflow-guide",
    title: "Structured AI-Assisted Development Workflow",
    repo: "workflow",
    repoUrl: "https://github.com/kliewerdaniel/workflow",
    category: "AI Orchestration",
    summary: "A practical workflow guide for using AI agents to ship software with less chaos.",
    description:
      "A documentation-first development workflow that treats requirements, implementation, and review as one system.",
    tags: ["Workflow", "Agents", "Docs", "Development"],
    stack: ["Markdown", "AI Agents", "Developer Process"],
    highlights: [
      "Turns vague ideas into an executable build process.",
      "Focuses on handoff, sequencing, and clarity.",
      "Works as a repeatable template for agent-assisted work.",
    ],
    featured: true,
    published: true,
    date: "2025-12-15",
  },
  {
    slug: "autoblog01",
    title: "AutoBlog01",
    repo: "autoblog01",
    repoUrl: "https://github.com/kliewerdaniel/autoblog01",
    category: "Full-Stack AI",
    summary: "An AI-driven Next.js blogging platform that generates posts from RSS feeds and RAG.",
    description:
      "Built for content workflows that need automatic summarization, SEO-aware structure, and a clean publishing path.",
    tags: ["Next.js", "RAG", "Content", "SEO"],
    stack: ["Python", "Next.js", "RSS", "Retrieval-Augmented Generation"],
    highlights: [
      "Automates content generation from external feeds.",
      "Keeps the publishing pipeline structured and reviewable.",
      "Matches the site's own documentation-heavy content model.",
    ],
    featured: true,
    published: true,
    date: "2025-11-30",
  },
  {
    slug: "specgen",
    title: "SpecGen",
    repo: "specgen",
    repoUrl: "https://github.com/kliewerdaniel/specgen",
    category: "AI Orchestration",
    summary: "Turns natural language specifications into production-ready application skeletons.",
    description:
      "An agentic generation workflow that converts a plain-English brief into the early shape of a real project.",
    tags: ["Code Generation", "Agents", "Automation"],
    stack: ["AI Agents", "Templates", "Application Scaffolding"],
    highlights: [
      "Reduces the gap between idea and scaffold.",
      "Treats specification as an executable artifact.",
      "Useful for rapid project bootstrapping.",
    ],
    featured: true,
    published: true,
    date: "2026-01-01",
  },
  {
    slug: "graphrag-research-assistant",
    title: "MCBot01 — GraphRAG Research Assistant",
    repo: "mcbot01",
    repoUrl: "https://github.com/kliewerdaniel/mcbot01",
    category: "Knowledge Systems",
    summary: "A GraphRAG assistant for document processing, entity extraction, and cited research.",
    description:
      "Combines graph databases, retrieval, and MCP integration to make document-heavy research queries usable.",
    tags: ["GraphRAG", "MCP", "Research", "Knowledge Graph"],
    stack: ["Graph DB", "Retrieval", "MCP", "Document Analysis"],
    highlights: [
      "Supports conversational document exploration.",
      "Adds cited-source workflows for research tasks.",
      "Connects graph structure to practical retrieval.",
    ],
    featured: true,
    published: true,
    date: "2025-12-05",
  },
  {
    slug: "mind-map-ai",
    title: "Mind Map AI",
    repo: "mindmap03",
    repoUrl: "https://github.com/kliewerdaniel/mindmap03",
    category: "Knowledge Systems",
    summary: "A personal knowledge system that turns notes into interactive maps and graphs.",
    description:
      "A local LLM and vector-embedding workflow for surfacing structure inside scattered notes.",
    tags: ["Knowledge Graph", "Mind Map", "Local LLM", "Vector DB"],
    stack: ["Python", "Embeddings", "Graph Visualization", "Local Models"],
    highlights: [
      "Turns unstructured notes into navigable context.",
      "Makes relationships visible instead of buried.",
      "Supports personal knowledge management use cases.",
    ],
    featured: false,
    published: true,
    date: "2025-11-22",
  },
  {
    slug: "local-llm-debugger",
    title: "Local LLM Debugger",
    repo: "local-lit-debugger",
    repoUrl: "https://github.com/kliewerdaniel/local-lit-debugger",
    category: "AI Evaluation",
    summary: "A local-first evaluation framework with human-in-the-loop scoring and review.",
    description:
      "Built for debugging, testing, and dataset curation when model behavior needs to be inspected carefully.",
    tags: ["Evaluation", "QA", "Human-in-the-loop", "Debugging"],
    stack: ["Local Models", "Scoring", "Review Workflows"],
    highlights: [
      "Makes model behavior measurable and reviewable.",
      "Supports structured evaluation and curation.",
      "Useful for building better datasets and test loops.",
    ],
    featured: false,
    published: true,
    date: "2025-11-18",
  },
  {
    slug: "qwen3-tts-web-ui",
    title: "Qwen3-TTS Web UI",
    repo: "qwen3tts",
    repoUrl: "https://github.com/kliewerdaniel/qwen3tts",
    category: "Creative AI",
    summary: "A text-to-speech web UI with voice cloning support.",
    description:
      "An audio generation interface aimed at practical experimentation with synthesized voice workflows.",
    tags: ["Audio", "TTS", "Voice Cloning", "Web UI"],
    stack: ["TypeScript", "Web UI", "Audio Pipelines"],
    highlights: [
      "Turns speech synthesis into an accessible interface.",
      "Explores expressive audio generation workflows.",
      "Built to make voice experimentation easier to use.",
    ],
    featured: false,
    published: true,
    date: "2025-11-12",
  },
  {
    slug: "zero-trust-ai-code",
    title: "Zero Trust",
    repo: "zero-trust",
    repoUrl: "https://github.com/kliewerdaniel/zero-trust",
    category: "Security",
    summary: "A security architecture for stopping poisoning and trust-inheritance risks in AI code generation.",
    description:
      "Designed to harden AI-generated code against supply-chain problems, sideloading, and inherited trust assumptions.",
    tags: ["Security", "Supply Chain", "Hardening", "AI Code"],
    stack: ["Security Architecture", "Policy", "Review Controls"],
    highlights: [
      "Focuses on practical trust boundaries for generated code.",
      "Targets supply-chain poisoning risks directly.",
      "Applies a layered defense model to AI-assisted work.",
    ],
    featured: false,
    published: true,
    date: "2025-11-04",
  },
  {
    slug: "turboq-inference-platform",
    title: "TurboQ",
    repo: "turboq",
    repoUrl: "https://github.com/kliewerdaniel/turboq",
    category: "Infrastructure",
    summary: "A local LLM inference platform that combines routing, optimization, and cluster deployment.",
    description:
      "A systems-heavy project for Apple Silicon and multi-model routing with a bias toward practical throughput.",
    tags: ["Inference", "KV Cache", "Clusters", "Apple Silicon"],
    stack: ["Local Inference", "Routing", "Optimization", "Deployment"],
    highlights: [
      "Synthesizes research-grade inference optimizations.",
      "Supports multi-model and distributed execution paths.",
      "Targets real local hardware constraints.",
    ],
    featured: false,
    published: true,
    date: "2025-10-31",
  },
  {
    slug: "divinelight-memory-system",
    title: "DivineLight",
    repo: "divinelight",
    repoUrl: "https://github.com/kliewerdaniel/divinelight",
    category: "Knowledge Systems",
    summary: "A unified AI memory system combining verbatim storage, graphs, and reasoning agents.",
    description:
      "Built to unify memory layers so systems can retrieve facts, structures, and reasoning context together.",
    tags: ["Memory", "Knowledge Graph", "Reasoning", "Agents"],
    stack: ["Graph Memory", "Retrieval", "Agent Coordination"],
    highlights: [
      "Merges storage and reasoning into one memory layer.",
      "Useful for persistent AI context and recall.",
      "Supports structured knowledge reuse across tasks.",
    ],
    featured: false,
    published: true,
    date: "2025-10-24",
  },
  {
    slug: "sovereign-scaffold",
    title: "Sovereign Scaffold",
    repo: "sovereign-scaffold",
    repoUrl: "https://github.com/kliewerdaniel/sovereign-scaffold",
    category: "Infrastructure",
    summary: "A deployable sovereign AI system that can be run locally and adapted for clients.",
    description:
      "A configurable scaffold for shipping private, local-first AI systems without cloud dependence.",
    tags: ["Local AI", "Deployment", "Client-ready", "Scaffold"],
    stack: ["DevOps", "Local Models", "Configuration"],
    highlights: [
      "Provides a reusable base for sovereign deployments.",
      "Designed for both personal and client use.",
      "Keeps deployment patterns explicit and portable.",
    ],
    featured: false,
    published: true,
    date: "2025-10-18",
  },
];

export const CASE_STUDIES = PROJECTS;

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
    year: "10+ years",
    title: "Data annotation, adjudication, and operational quality work",
    subtitle: "Built a foundation in human feedback, evaluation, and QA",
  },
  {
    year: "2022",
    title: "Focused on local-first AI systems",
    subtitle: "Shifted from general web work into local LLMs and AI operations",
  },
  {
    year: "2024",
    title: "Built GraphRAG, agent, and knowledge systems",
    subtitle: "Worked on retrieval, persona logic, and evaluation tooling",
  },
  {
    year: "2025",
    title: "Expanded into full-stack AI product delivery",
    subtitle: "Combined engineering, documentation, SEO, and deployment",
  },
  {
    year: "2026",
    title: "Positioning the work around clarity and leverage",
    subtitle: "Building a site that explains who I am and what I can do",
  },
] as const;

export const ABOUT_BELIEFS = [
  {
    title: "Evaluation is the work",
    desc: "If a model, workflow, or product cannot be measured, it cannot be trusted.",
  },
  {
    title: "Local matters",
    desc: "I prefer local-first systems when privacy, latency, and control are non-negotiable.",
  },
  {
    title: "Operational clarity matters",
    desc: "Good systems are documented, testable, and usable by the people who inherit them.",
  },
  {
    title: "Shipping matters",
    desc: "I can write, build, and deploy. The site should make that obvious quickly.",
  },
] as const;

export const FAQS = [
  {
    q: "What kind of work do you actually do?",
    a: "I work on AI operations, RLHF and evaluation, local AI systems, full-stack AI products, and technical documentation.",
  },
  {
    q: "What technologies do you use?",
    a: "Common tools include Ollama, llama.cpp, LangChain, GraphRAG, Next.js, Python, Django, PostgreSQL, Docker, and MCP.",
  },
  {
    q: "Do you work remotely?",
    a: "Yes. I work remotely and can support US-based teams across time zones.",
  },
  {
    q: "What happens after we build?",
    a: "You get the system, documentation, and a practical handoff. Optional ongoing support is available.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes. Standard NDAs are fine before discovery work begins.",
  },
  {
    q: "How is this different from generic AI consulting?",
    a: "The work is grounded in operational reality: data quality, evaluation, local inference, and systems that can actually be run.",
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
