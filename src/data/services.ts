import { Service } from '../types/service';

export const servicesData: Service[] = [
  {
    id: "website-design",
    number: "01",
    title: "Website Design & Development",
    subtitle: "Fast, search-friendly business websites",
    description: "Modern, responsive websites for shops, consultancies and service businesses, designed around what your customers need to do: call, enquire, order or find you on the map.",
    iconName: "Globe",
    tags: ["React", "Vite", "Responsive Design", "SEO", "WhatsApp Enquiry"],
    deliverables: [
      "Custom UI design that matches your brand",
      "Mobile-first layouts that load fast",
      "Search metadata, sitemap and social previews",
      "Quote, call, map and WhatsApp actions built in"
    ],
    highlight: true
  },
  {
    id: "desktop-apps",
    number: "02",
    title: "Windows Desktop Applications",
    subtitle: "Billing, inventory and back-office software",
    description: "Installable Windows applications for counters and back offices, built with Electron and React on a secure API, with direct printer support and an installer you can hand to your team.",
    iconName: "AppWindow",
    tags: ["Electron", "React", "Django REST", "Thermal Printing", "NSIS Installer"],
    deliverables: [
      "Billing, POS and inventory workflows",
      "58 mm, 80 mm thermal and A4 or A5 printing",
      "Role-based access for owners and cashiers",
      "Secure sign-in and sync with a cloud database"
    ],
    highlight: true
  },
  {
    id: "web-apps",
    number: "03",
    title: "Custom Web Applications",
    subtitle: "End-to-end full stack web platforms",
    description: "Production-grade, bespoke web applications engineered with Django, Django REST Framework, FastAPI, and React.js. Built for high performance, enterprise security, and intuitive user experiences.",
    iconName: "Code2",
    tags: ["React.js", "Django", "FastAPI", "TypeScript", "Tailwind CSS"],
    deliverables: [
      "Modular full-stack architecture",
      "Role-Based Access Control (RBAC)",
      "Dynamic dashboards & administrative panels",
      "Mobile-responsive & cross-browser optimized"
    ],
    highlight: true
  },
  {
    id: "rest-apis",
    number: "04",
    title: "REST API Development",
    subtitle: "High-throughput secure backend engines",
    description: "Scalable, well-documented RESTful APIs and microservices with JWT auto-refresh authentication, rate limiting, and granular permission enforcement across user tiers.",
    iconName: "Server",
    tags: ["Django REST Framework", "FastAPI", "Go (Gin)", "JWT Auth", "Swagger/OpenAPI"],
    deliverables: [
      "Strict RESTful resource design",
      "Per-device session security & token refresh",
      "Database query optimization & indexing",
      "Postman collection & OpenAPI documentation"
    ]
  },
  {
    id: "flutter-apps",
    number: "05",
    title: "iOS & Android Apps (Flutter)",
    subtitle: "Cross-platform mobile applications",
    description: "High-performance native-feeling mobile applications built with Flutter and Dart, backed by scalable Python REST APIs with OTP authentication and real-time synchronization.",
    iconName: "Smartphone",
    tags: ["Flutter", "Dart", "iOS", "Android", "Cross-Platform"],
    deliverables: [
      "Single codebase for iOS & Android",
      "Smooth 60fps native performance",
      "Offline caching & state management",
      "Store deployment readiness"
    ],
    highlight: true
  },
  {
    id: "payment-gateways",
    number: "06",
    title: "Payment Gateway Integrations",
    subtitle: "Frictionless online transaction processing",
    description: "Seamless and secure payment gateway integrations with Razorpay, PayU, and ICICI Eazypay, complete with automated webhook listeners, invoice generation, and transaction reconciliation.",
    iconName: "CreditCard",
    tags: ["Razorpay", "PayU", "ICICI Eazypay", "Webhooks", "Invoicing"],
    deliverables: [
      "Instant payment links & embedded checkouts",
      "Idempotent webhook transaction reconciliation",
      "Automated PDF invoice generation",
      "Refund and settlement dispute handling"
    ]
  },
  {
    id: "booking-systems",
    number: "07",
    title: "Appointment & Booking Systems",
    subtitle: "Interactive scheduling & dispatch portals",
    description: "Custom automated booking engines featuring live interactive calendars, real-time availability sync, dispatch management, customer reminders, and interactive maps.",
    iconName: "CalendarCheck",
    tags: ["Calendars", "Live Map Booking", "Dispatch", "SMS/Email Reminders"],
    deliverables: [
      "Dynamic slot allocation & buffer times",
      "Automated email/SMS appointment alerts",
      "Real-time dispatch coordination",
      "Staff schedule management"
    ]
  },
  {
    id: "realtime-features",
    number: "08",
    title: "Real-Time Features & WebSockets",
    subtitle: "Instant live data feeds & notifications",
    description: "Low-latency bidirectional communication pipelines using Django Channels, WebSockets, and service worker push alerts for live dashboards, chat, and event notifications.",
    iconName: "Activity",
    tags: ["WebSockets", "Django Channels", "Redis", "Push Notifications"],
    deliverables: [
      "Instant multi-user data broadcasting",
      "Service worker browser push alerts",
      "Live order/ride status tracking",
      "Real-time test & exam score updates"
    ]
  },
  {
    id: "whatsapp-messaging",
    number: "09",
    title: "WhatsApp & Business Messaging",
    subtitle: "Conversational automation & CRM alerts",
    description: "Direct integration with the official WhatsApp Business (Meta) Cloud API to automate client transactional notifications, booking confirmations, and customer support workflows.",
    iconName: "MessageSquare",
    tags: ["WhatsApp Business API", "Meta Cloud API", "Chatbots", "Automated Alerts"],
    deliverables: [
      "Automated template message dispatch",
      "Interactive button replies & quick-links",
      "Webhook receiver for incoming customer replies",
      "Broadcast campaigns for business updates"
    ]
  },
  {
    id: "business-automation",
    number: "10",
    title: "Business Automation & Pipelines",
    subtitle: "Eliminating repetitive manual operations",
    description: "Backend task workers and data pipelines that automate billing, inventory sync, PDF report creation, periodic email campaigns, and custom web crawlers using Celery and Redis.",
    iconName: "Zap",
    tags: ["Celery", "Redis", "Celery Beat", "Web Scraping", "Data Pipelines"],
    deliverables: [
      "Scheduled background cron workflows",
      "Automated inventory & financial accounting",
      "Data extraction and Excel/CSV exporting",
      "Multi-step asynchronous task queues"
    ],
    highlight: true
  },
  {
    id: "google-ads",
    number: "11",
    title: "Google Ads & Conversion Tracking",
    subtitle: "Performance marketing & measurable ROI",
    description: "Setup and optimization of high-converting Google Search & PPC campaigns, paired with Google Tag Manager (GTM), GA4 event telemetry, and conversion tracking.",
    iconName: "TrendingUp",
    tags: ["Google Ads", "GTM", "GA4", "PPC Campaigns", "Conversion Telemetry"],
    deliverables: [
      "High-intent keyword architecture",
      "Custom GTM & GA4 conversion tracking",
      "Retargeting & audience segmentation",
      "Transparent ROI and cost-per-lead analytics"
    ]
  },
  {
    id: "cloud-deployment",
    number: "12",
    title: "Cloud Deployment & Linux DevOps",
    subtitle: "Reliable production hosting & security",
    description: "Production deployment and hardening on Linux servers (Ubuntu/Debian) with Nginx reverse proxy, Gunicorn/Uvicorn application servers, SSL certificates, and firewall security.",
    iconName: "Cloud",
    tags: ["Linux", "Nginx", "Gunicorn", "Uvicorn", "SSL / Let's Encrypt", "Systemd"],
    deliverables: [
      "Zero-downtime Nginx reverse proxy configuration",
      "Automated SSL/TLS certificate renewal",
      "Gunicorn/Uvicorn process orchestration",
      "Security hardening & firewall (UFW) rules"
    ]
  }
];
