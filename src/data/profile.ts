import { ProfileData } from '../types/profile';

export const profileData: ProfileData = {
  name: "Guru Kirpa Infotech",
  brandName: "Guru Kirpa Infotech",
  logoText: "Guru Kirpa Infotech",
  role: "Software & Web Design Company",
  tagline: "Websites · Web Apps · Desktop Software · Mobile Apps",
  bio: "Guru Kirpa Infotech is a software and web design company based in Doraha, Punjab. We design and build websites, business web applications, Windows desktop software and mobile apps, and we take full responsibility for each project, from the first conversation and design to deployment and support.",
  location: "Doraha, Ludhiana, Punjab, India",
  address: "Railway Road, Doraha, Punjab, India",
  phone: "+91 75080 45650",
  email: "info@gkinfotech.io",
  msme: "UDYAM-PB-12-0320577",
  founder: "Jagjot Singh",
  linkedin: "https://linkedin.com/in/jagjotsingh7935",
  github: "https://github.com/jagjotsingh7935",
  status: "Accepting new projects",
  stats: [
    {
      value: "10+",
      label: "Clients served",
      subtext: "Retail, legal, education, healthcare and industry"
    },
    {
      value: "15+",
      label: "Projects delivered",
      subtext: "Websites, platforms, desktop and mobile apps"
    },
    {
      value: "3",
      label: "Platforms",
      subtext: "Web, Windows desktop and mobile"
    },
    {
      value: "MSME",
      label: "Udyam registered",
      subtext: "UDYAM-PB-12-0320577"
    }
  ],
  skills: [
    {
      category: "Backend & Systems",
      items: ["Python", "Django", "Django REST Framework", "FastAPI", "Go (Gin)", "Django Channels", "Celery & Celery Beat", "Temporal & Asynq", "WebSockets"]
    },
    {
      category: "Frontend & Mobile",
      items: ["React.js", "TypeScript", "Tailwind CSS", "Material UI (MUI)", "Vite", "Flutter & Dart", "Next.js", "Responsive Web"]
    },
    {
      category: "Desktop Software",
      items: ["Electron", "Windows installers (NSIS)", "Thermal & A4 printing", "Offline-friendly UI"]
    },
    {
      category: "Databases & Caching",
      items: ["PostgreSQL", "Redis", "SQLite", "Django ORM", "Schema Design", "Query Optimization"]
    },
    {
      category: "Cloud, DevOps & Tooling",
      items: ["Linux (Ubuntu)", "Nginx", "Docker", "Gunicorn", "Vercel", "Git & GitHub", "Postman", "CI/CD pipelines"]
    },
    {
      category: "Third-Party Integrations",
      items: ["Razorpay", "ICICI Eazypay", "PayU", "WhatsApp Business (Meta) API", "Google Drive API", "Google Maps", "Google Ads API", "Shopify API"]
    }
  ],
  workflowSteps: [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We learn how your business works, who your users are and what the software must do, then agree a clear scope, timeline and technical plan.",
      deliverables: ["Requirements document", "Data model and API outline", "Fixed scope and timeline"]
    },
    {
      step: "02",
      title: "UI/UX Design",
      description: "Clean, accessible interfaces designed mobile-first, shared as clickable screens so you can react before development begins.",
      deliverables: ["Wireframes and visual design", "Design system and colour palette", "Mobile and desktop layouts"]
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build in short iterations with regular demos, secure authentication and automated tests on the parts that handle money and data.",
      deliverables: ["Clean, documented codebase", "Secure API endpoints", "Tested core workflows"]
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Production deployment, SSL and domain setup, team handover and ongoing maintenance, so the product keeps working after launch.",
      deliverables: ["Production deployment", "SSL and domain configuration", "Handover and documentation"]
    }
  ]
};
