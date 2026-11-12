import { Project } from '../types/project';

export const projectsData: Project[] = [
  {
    id: "permitshub",
    title: "PermitsHub — Town Planning & Development Consultancy",
    subtitle: "Melbourne planning consultancy website with a clear, guided story",
    category: "website",
    categoryLabel: "Consultancy / Business Website",
    description: "A calm, editorial website for a Melbourne town planning consultancy: five service lines, plain-language guidance for landowners and developers, an illustrated hero concept and a clear enquiry path.",
    longDescription: "PermitsHub guides landowners, developers and business owners from the first site question to the next approval. The website presents five service lines (due diligence, multi-lot subdivisions, use and development permits, building permit documentation and construction-stage project consultation) in plain language, organises content around the situations clients actually arrive with, and walks visitors through the planning process step by step. An illustrated isometric hero, chaptered storytelling and a focused enquiry flow give a technical service a clear, human voice.",
    tags: ["React", "Vite", "Responsive Design", "Editorial UI", "SEO", "Vercel"],
    features: [
      "Illustrated isometric hero and chaptered scroll story that explains the planning journey",
      "Five service lines, each written around real client situations",
      "Audience paths for landowners, developers and investors, and business owners",
      "FAQs and common-situation guides such as overlays, objections and permit conditions",
      "Projects, About and Contact pages with a persistent 'Discuss your project' call to action",
      "Descriptive page titles and meta descriptions for search visibility"
    ],
    architecture: {
      frontend: "React, Vite, responsive editorial layout",
      services: ["Vercel Hosting", "SEO Metadata", "Enquiry Call-to-Action Flow"]
    },
    metrics: [
      { label: "Service Lines", value: "5" },
      { label: "Region", value: "Victoria, AU" },
      { label: "Status", value: "Live" }
    ],
    liveUrl: "https://permitshub.com.au/",
    featured: true,
    platform: "web",
    imageGradient: "from-sky-700 via-slate-700 to-slate-950",
    coverImage: "/projects/permitshub.webp",
    badge: "Live Website (Australia)"
  },
  {
    id: "suhag-jewellers",
    title: "Suhag Jewellers — Hallmark Jewellery Showroom",
    subtitle: "Black-and-gold showcase site for a Doraha jewellery showroom, since 1953",
    category: "website",
    categoryLabel: "Jewellery Retail / Showcase Website",
    description: "A premium showcase website for a family jewellery showroom on Railway Road, Doraha, with collections, a gallery, featured pieces, a gold-rate section and one-tap call, directions and WhatsApp actions.",
    longDescription: "Suhag Jewellers is a hallmark gold, diamond, silver and gemstone showroom in Doraha. The website is a showcase rather than a shop: it presents five collections, a photo gallery, top-selling pieces and posts from the showroom's Instagram, shows the gold rate, and makes the three actions that matter immediate: call, get directions and message on WhatsApp. A black-first palette with gold accents, a cinematic hero carousel and smooth scroll motion give the brand a premium feel.",
    tags: ["React 19", "TypeScript", "Tailwind CSS v4", "GSAP ScrollTrigger", "Lenis", "Embla", "Google Maps", "Vercel"],
    features: [
      "Cinematic hero carousel with since-1953 heritage, hallmark purity and Google rating highlights",
      "Five collections: gold, diamond, silver and articles, gemstones and imitation jewellery",
      "Featured pieces with purity and weight details, plus an Instagram-sourced reels row",
      "Gold-rate section, customer reviews and a contact area with map directions",
      "Floating call, directions and WhatsApp buttons on every screen",
      "Smooth scrolling, scroll-triggered motion and a fully responsive layout"
    ],
    architecture: {
      frontend: "React 19, TypeScript, Vite, Tailwind CSS v4, GSAP ScrollTrigger, Lenis, Embla, Radix Dialog",
      services: ["Google Maps JavaScript API", "Instagram Media Showcase", "Vercel Hosting"]
    },
    metrics: [
      { label: "Heritage", value: "Since 1953" },
      { label: "Collections", value: "5" },
      { label: "Quick Actions", value: "Call · Map · WhatsApp" }
    ],
    liveUrl: "https://suhagjewellersdoraha.com/",
    featured: true,
    platform: "web",
    imageGradient: "from-yellow-700 via-amber-900 to-black",
    coverImage: "/projects/suhag-jewellers.webp",
    badge: "Live Website (Doraha)"
  },
  {
    id: "hazura-singh-trading",
    title: "Hazura Singh Trading Co. — Distributor Catalogue Website",
    subtitle: "Faucets, sanitaryware, paints and pipes, with quote requests and catalogues",
    category: "website",
    categoryLabel: "Building Materials / Business Website",
    description: "A catalogue-style website for an authorised distributor in Doraha: eight product categories, brand partner logos, downloadable catalogues and quote or WhatsApp enquiries on every screen.",
    longDescription: "Hazura Singh Trading Co. supplies bath fittings, sanitaryware, paints, pipes, pumps and water tanks from more than 19 brands. The website turns a wide product range into a clear, browsable catalogue: a swipeable hero of eight categories, brand logos for each, services and gallery pages, downloadable brand catalogues, and request-a-quote and WhatsApp buttons within reach on every screen, so retail and trade customers can reach the counter in a tap.",
    tags: ["React", "Vite", "Catalogue UI", "Responsive Design", "WhatsApp Enquiry", "Local SEO"],
    features: [
      "Swipeable hero carousel across eight categories, from bath fittings to tile care and mirrors",
      "Brand partner logos on each category, including Kartar, Simpolo and Duck",
      "Request-a-quote and WhatsApp enquiry actions in the header and every section",
      "Downloadable brand catalogues for retail and trade customers",
      "Services, About, Gallery and Contact pages with local Doraha search metadata"
    ],
    architecture: {
      frontend: "React, Vite, responsive catalogue layout",
      services: ["Quote Request Flow", "WhatsApp Click-to-Chat", "PDF Catalogue Delivery", "Local SEO Metadata"]
    },
    metrics: [
      { label: "Product Categories", value: "8" },
      { label: "Brands Listed", value: "19+" },
      { label: "Status", value: "Live" }
    ],
    liveUrl: "https://www.hazurasinghtrading.com/",
    featured: true,
    platform: "web",
    imageGradient: "from-emerald-700 via-slate-800 to-slate-950",
    coverImage: "/projects/hazura-singh-trading.webp",
    badge: "Live Website (Doraha)"
  },
  {
    id: "ekam-cloth-house",
    title: "Ekam Cloth House — Turban Cloth Storefront",
    subtitle: "A family turban shop since 1997, with a shade card, live rates and WhatsApp ordering",
    category: "website",
    categoryLabel: "Retail / Online Storefront",
    description: "A bilingual storefront for a Doraha turban cloth shop: shop by fabric, a 50+ shade card, live mandi rates, offers, order tracking and wedding or bulk enquiries, with express courier abroad.",
    longDescription: "Ekam Cloth House has sold Full Voile, Rubia 2×2 and Mal Mal Cotton turban cloth at Lakkar Mandi, Doraha since 1997. The storefront lets customers shop by fabric, pick from a printed-number shade card of more than fifty colours, check the per-metre rates, order directly on WhatsApp with free shade matching, track an order, and enquire about weddings and bulk orders. An English and Punjabi language toggle, an offers ticker and clear courier information for Canada, the UK, Australia, the USA and New Zealand make it easy for customers at home and abroad.",
    tags: ["React", "Vite", "E-commerce UI", "Bilingual (EN / ਪੰਜਾਬੀ)", "WhatsApp Ordering", "SEO"],
    features: [
      "Shop by fabric: Full Voile, Rubia 2×2 and Mal Mal Cotton, with per-metre pricing",
      "Interactive shade card of 50+ colours, ordered by printed shade number",
      "Live mandi rate panel and an offers ticker with promo codes",
      "Order on WhatsApp with free shade matching, plus an order tracking page",
      "English and Punjabi language toggle for local and overseas customers",
      "Wedding and bulk orders, with express courier information for five countries"
    ],
    architecture: {
      frontend: "React, Vite, responsive storefront layout, bilingual content",
      services: ["WhatsApp Click-to-Chat Ordering", "Order Tracking Page", "SEO & Structured Metadata"]
    },
    metrics: [
      { label: "Shades", value: "50+" },
      { label: "Languages", value: "EN · ਪੰਜਾਬੀ" },
      { label: "Serving Since", value: "1997" }
    ],
    liveUrl: "https://www.ekamclothhouse.com/",
    featured: true,
    platform: "web",
    imageGradient: "from-indigo-800 via-blue-900 to-slate-950",
    coverImage: "/projects/ekam-cloth-house.webp",
    badge: "Live Storefront (Doraha)"
  },
  {
    id: "retail-billing-ledger",
    title: "Billing — Retail POS & Staff Sales Ledger",
    subtitle: "Windows desktop billing app with live receipts, Udhar credit, GST reports, expenses and staff payroll",
    category: "desktop",
    categoryLabel: "Desktop App / Retail ERP",
    description: "A Windows desktop billing application for multi-store retailers: fast bill entry with a live receipt preview, per-staff sales credit, returns and exchanges, Udhar (pay-later) ledgers, GST reports, expenses, staff payroll, custom bill designs and printing on any paper size.",
    longDescription: "Built as an Electron and React desktop client on a Django 5 REST API, Billing is a point-of-sale and staff-ledger suite for retail organisations. Cashiers create bills in seconds while a live receipt preview shows exactly what will print; every line can be credited to a salesperson, and returns debit the staff member who made the sale. Owners see a live dashboard, sales-by-staff reports, a printable day-close report and customer history. Money is handled with exact decimals end to end (NUMERIC(12,2) in PostgreSQL and Python Decimal), receipts print to any Windows printer from 58 mm thermal rolls to A4, and the app ships as a Windows installer with English, Hindi and Punjabi menus.",
    tags: ["Electron", "React 18", "TypeScript", "Django 5", "Django REST Framework", "PostgreSQL", "Docker", "Nginx", "Thermal Printing"],
    features: [
      "Fast bill entry with keyboard shortcuts and a live GST receipt preview",
      "Per-staff sales credit: returns and exchanges debit the staff member who made the sale",
      "Udhar (pay later) bills with a ledger for every customer, part payments, payment receipts and returns",
      "GST reports for filing: HSN summary, B2B and B2C, tax by rate, sales register, credit notes, input credit and an accountant pack",
      "Expenses with GST, vendor, bill number and attachments, plus staff salary, commission and advances with payroll",
      "Bill designs: build your own bill for any paper size, with customer GSTIN and PO number on the invoice",
      "Owner dashboard with sales trend, payment-mode split, top seller and day-close report",
      "Exact decimal money handling with zero floating-point drift, covered by more than 300 automated tests",
      "Multi-organisation support with cashier-only views and a configurable business-day cut-off",
      "Prints to 58 mm and 80 mm thermal, A4 and A5, with colour themes and English, Hindi and Punjabi menus",
      "Dockerised backend with Nginx and a GitHub Actions workflow that builds the Windows installer"
    ],
    architecture: {
      frontend: "Electron 33, React 18, TypeScript, Vite, TanStack Query",
      backend: "Django 5, Django REST Framework, SimpleJWT, Python 3.12",
      database: "PostgreSQL with strict NUMERIC(12,2) decimal ledger schema",
      services: ["Docker Compose & Nginx", "Windows Print Driver Integration", "NSIS Windows Installer", "300+ Automated Tests"]
    },
    metrics: [
      { label: "Platform", value: "Windows Desktop" },
      { label: "Money Precision", value: "100% Decimal" },
      { label: "Automated Tests", value: "300+" }
    ],
    githubUrl: "https://github.com/jagjotsingh7935/billing_software",
    liveUrl: "",
    featured: true,
    platform: "desktop",
    imageGradient: "from-indigo-600 via-violet-700 to-slate-950",
    coverImage: "/projects/billing/02-billing-dashboard.webp",
    tourVideo: "/projects/billing/billing-tour.mp4",
    tourLabel: "Product tour",
    screenshots: [
      { url: "/projects/billing/02-billing-dashboard.webp", title: "Owner Dashboard", caption: "Live bills, net sales, top seller, a seven-day sales trend and the payment-mode split in one view." },
      { url: "/projects/billing/03-billing-new-bill.webp", title: "New Bill with Live Receipt Preview", caption: "Item, salesperson and rate per line, with a GST receipt that updates as the cashier types." },
      { url: "/projects/billing/04-billing-bills.webp", title: "Bills & Search", caption: "Every bill in one list, searchable by bill number, customer or mobile number." },
      { url: "/projects/billing/05-billing-staff.webp", title: "Staff & Cashier Accounts", caption: "Salespeople and cashier sign-ins managed in one place, each with their own sales profile." },
      { url: "/projects/billing/06-billing-reports.webp", title: "Staff Sales by Day", caption: "Sold, returned and net per salesperson per day, filterable by date range and exportable." },
      { url: "/projects/billing/07-billing-day-close.webp", title: "Day Closing Report", caption: "Bills, tax, returns, net collected and payment modes, ready to print or export." },
      { url: "/projects/billing/08-billing-customers.webp", title: "Customer Directory", caption: "Customer history built automatically from billing, for repeat-customer lookup." },
      { url: "/projects/billing/09-billing-settings.webp", title: "Themes, Language & Printing Settings", caption: "Colour themes, light and dark mode, English, Hindi and Punjabi menus and printer setup." }
    ],
    badge: "Windows Desktop App"
  },
  {
    id: "mgs-machining",
    title: "MGS Machining Services — Industrial Web Portal",
    subtitle: "Australian precision CNC machining & fabrication showcase",
    category: "website",
    categoryLabel: "Industrial Engineering / Web Portal",
    description: "A modern, responsive digital presence engineered for MGS Machining Services (Australia), showcasing heavy CNC milling, turning capabilities, precision tolerances, and rapid industrial quote requests.",
    longDescription: "MGS Machining Services is an Australian precision manufacturing enterprise. This project delivers a high-speed, modern responsive web portal built to present their advanced CNC machinery fleet, engineering fabrication capabilities, quality assurance standards, and custom part manufacturing inquiry workflows. Features clean industrial aesthetic styling, high-resolution equipment showcases, and frictionless customer consultation forms.",
    tags: ["React.js", "Tailwind CSS", "Vite", "Responsive Web Design", "Industrial UI", "SEO Optimization"],
    features: [
      "Showcase of precision CNC milling, turning, and industrial fabrication services",
      "Dynamic multi-step project RFQ (Request for Quote) inquiry workflow",
      "High-performance asset delivery with lazy loading and optimized imagery",
      "Comprehensive machinery specification sheets and material capability guides",
      "Complete mobile-first responsiveness and localized Australian contact channels"
    ],
    architecture: {
      frontend: "React.js, Vite, Tailwind CSS, Lucide Icons",
      backend: "Python / Static Microservices",
      services: ["Australian Domain Hosting", "Inquiry Notification Dispatch", "SEO Meta Telemetry"]
    },
    metrics: [
      { label: "Status", value: "Live in Prod" },
      { label: "Performance", value: "98/100 Lighthouse" },
      { label: "Region", value: "Australia (AU)" }
    ],
    githubUrl: "https://github.com/jagjotsingh7935",
    liveUrl: import.meta.env.VITE_PROJECT_MGS_MACHINING_URL || "https://mgsmachining.com.au/",
    featured: false,
    imageGradient: "from-amber-600 via-orange-700 to-slate-900",
    coverImage: "/projects/mgs-machining.png",
    badge: "Live Website (Australia)"
  },
  {
    id: "clothing-pos",
    title: "Clothing Inventory & Retail Billing POS",
    subtitle: "Automated retail stock tracking & dynamic invoicing system",
    category: "fullstack",
    categoryLabel: "Retail ERP / Billing",
    description: "A full-stack retail inventory and point-of-sale billing system featuring dynamic product tier pricing, real-time stock deductions, discount rules, and automated GST invoice generation.",
    longDescription: "Developed for retail apparel businesses to manage diverse SKU variations (sizes, colors, categories). Handles fast barcode scanning at checkout, dynamic customer discount rules, real-time warehouse inventory adjustments, and instant PDF invoice printing.",
    tags: ["React.js", "Django REST Framework", "PostgreSQL", "Billing POS", "Inventory Sync", "Python"],
    features: [
      "Rapid point-of-sale checkout with real-time stock deduction and barcode support",
      "Configurable dynamic pricing rules, seasonal discounts, and promotional offers",
      "Automated tax and GST invoice generation with printable PDF receipts",
      "Low-stock alert thresholds preventing inventory stockouts"
    ],
    architecture: {
      frontend: "React.js, Modern UI, Vite",
      backend: "Django REST Framework, Python",
      database: "PostgreSQL with multi-SKU inventory schema",
      services: ["PDF Invoice Generator", "Stock Audit Pipeline"]
    },
    metrics: [
      { label: "Checkout Time", value: "< 15s" },
      { label: "SKU Management", value: "Multi-Variant" },
      { label: "Billing Accuracy", value: "100% Automated" }
    ],
    githubUrl: "https://github.com/jagjotsingh7935",
    liveUrl: import.meta.env.VITE_PROJECT_CLOTHING_POS_URL || "",
    featured: false,
    imageGradient: "from-emerald-700 via-green-800 to-slate-950",
    badge: "Retail & POS ERP"
  },
  {
    id: "whatsapp-chatbot-studio",
    title: "Rapport Conversation Studio — WhatsApp Chatbot & Flow Builder",
    subtitle: "Visual flow builder, template manager and live inbox for WhatsApp automation",
    category: "enterprise",
    categoryLabel: "WhatsApp Automation / SaaS",
    description: "A web console for building and running WhatsApp chatbots: drag-and-drop conversation flows, Meta-approved message templates, contact imports, a conversation inbox and 24-hour billing-window tracking.",
    longDescription: "Rapport Conversation Studio lets a business design WhatsApp conversations without writing code. Teams drag blocks onto a canvas (messages, templates, quick-reply buttons, selectable lists, user input, conditions, REST API calls, file uploads and agent hand-off), connect them into a flow and save variables such as the patient's name or chosen treatment. Flows can answer incoming chats or be started for imported contacts, WhatsApp message templates are created and tracked through Meta's approval states, and every conversation is stored so staff can review the full chat, its status and its 24-hour billing window. Each organisation has its own users, roles and linked WhatsApp business number.",
    tags: ["React", "TypeScript", "React Flow", "Tailwind CSS", "Django REST Framework", "WhatsApp Cloud API", "JWT Auth", "REST API"],
    features: [
      "Drag-and-drop flow canvas with start, message, template, buttons, list, user input, condition, REST API, file upload and end or hand-off blocks",
      "Flow variables captured from buttons, lists, typed answers and API responses, reusable in later messages",
      "Template manager for WhatsApp message templates with Meta approval states: approved, pending and rejected",
      "Contact import from Excel, and one-click start of an outgoing flow for selected contacts",
      "Conversation inbox and history with the full chat, status (active, ended or handed off) and WhatsApp 24-hour billing and free windows",
      "Organisation-scoped users, groups and permissions, with Meta account linking for each WhatsApp business number",
      "Overview dashboard, Ctrl+K quick search, light and dark themes and four navigation layouts"
    ],
    architecture: {
      frontend: "React 18, TypeScript, Vite, React Flow (@xyflow/react), Tailwind CSS, Radix UI, TanStack Query, Recharts",
      backend: "Django, Django REST Framework, SimpleJWT, django-allauth (Facebook login)",
      database: "Relational schema for flows, nodes, edges, variables, templates, conversations and messages",
      services: ["WhatsApp Cloud API (Meta)", "Webhook message handler", "Excel contact import (pandas)", "Organisation-level role permissions"]
    },
    metrics: [
      { label: "Block Types", value: "10" },
      { label: "Template States", value: "Meta-tracked" },
      { label: "Tenancy", value: "Multi-organisation" }
    ],
    featured: true,
    platform: "web",
    liveUrl: "https://rapport.gkinfotech.io/",
    imageGradient: "from-amber-500 via-orange-700 to-slate-950",
    coverImage: "/projects/chatbot/03a-flow-zoomed.webp",
    tourVideo: "/projects/tours/chatbot-tour.mp4",
    tourLabel: "Product tour",
    screenshots: [
      { url: "/projects/chatbot/02-workflows.webp", title: "Workflows", caption: "All chatbot flows with their type and the number of active conversations." },
      { url: "/projects/chatbot/03-flow-builder.webp", title: "Visual Flow Builder", caption: "A whole appointment-booking conversation on one canvas: welcome, service list, date, confirmation and end." },
      { url: "/projects/chatbot/03a-flow-zoomed.webp", title: "Blocks and Connections", caption: "Messages, selectable lists and user-input blocks, connected so the conversation follows the user's choice." },
      { url: "/projects/chatbot/03b-flow-node-editor.webp", title: "Block Editor", caption: "Edit the prompt, input type, the variable the answer is saved into, retries and the fallback message." },
      { url: "/projects/chatbot/04-templates.webp", title: "WhatsApp Templates", caption: "Template categories, header and button types, and Meta approval status in one table." },
      { url: "/projects/chatbot/05-initiate-flow.webp", title: "Start a Flow for Contacts", caption: "Search imported contacts and start a flow for the selected people." },
      { url: "/projects/chatbot/06-conversations.webp", title: "Conversations", caption: "Open and past chats with their flow, status and last activity." },
      { url: "/projects/chatbot/07-conversation-detail.webp", title: "Conversation Detail", caption: "The full chat between the bot and the customer, including list selections." }
    ],
    badge: "WhatsApp Automation"
  },
  {
    id: "advocate-cms",
    title: "Tax Control India & Advocate CMS — Legal & Tax Compliance Portal",
    subtitle: "Enterprise legal practice, case management & GST/ITR compliance portal",
    category: "fullstack",
    categoryLabel: "Legal Tech & Tax Compliance / Full Stack",
    description: "A secure, role-based practice management and tax compliance system. Features real-time case & file tracking, a shared team task board, automated WhatsApp Cloud API alerts, Google Drive encrypted storage, and GST/ITR client management.",
    longDescription: "Tax Control India & Advocate CMS streamlines practice management and tax compliance operations for legal chambers and taxation advisors. It integrates a secure client-case tracking dashboard with strict Content Security Policy (CSP) nonce-based hardening, automated JWT refresh token rotation, Google Drive API for cloud legal document storage, Meta WhatsApp Cloud API for automated client compliance notifications, and granular Django RBAC permission matrices.",
    tags: ["Django REST Framework", "React.js", "Material UI", "PostgreSQL", "Google Drive API", "WhatsApp Business API", "JWT Auth", "Python"],
    features: [
      "Role-Based Access Control (RBAC) across Advocate, Staff, and Client portals with Django group permissions",
      "Task management for the team: assign work with priority, due date and attachments, in a list or board view",
      "Client onboarding: five-step registration, temporary clients and approval of members added by clients",
      "WhatsApp inbox, template sender, scheduled messages and delivery logs, with Excel and PDF exports of conversations",
      "Light and dark themes, staff accounts with activity logs and a permission matrix for every role",
      "Automated hearing date alerts & compliance notices sent directly to clients via WhatsApp Business API",
      "Cloud legal document storage and sync integrated with Google Drive API",
      "Real-time file status tracking, active client directory, and instant PAN/GSTIN verification lookup",
      "CSP nonce-based security hardening, session management, and per-device last-login tracking"
    ],
    architecture: {
      frontend: "React.js, Material UI (MUI), Vite, Service Workers",
      backend: "Django REST Framework, Python",
      database: "PostgreSQL with optimized case and client indexing",
      services: ["Google Drive API", "Meta WhatsApp Cloud API", "JWT Auth Engine"]
    },
    metrics: [
      { label: "Deployment", value: "taxcontrolindia.in" },
      { label: "Security", value: "CSP Hardened" },
      { label: "Client Alerts", value: "100% Automated" }
    ],
    githubUrl: "https://github.com/jagjotsingh7935",
    liveUrl: import.meta.env.VITE_PROJECT_ADVOCATE_URL || "https://taxcontrolindia.in",
    featured: true,
    imageGradient: "from-blue-600 via-indigo-700 to-slate-900",
    coverImage: "/projects/taxcontrol/01-taxcontrol-dashboard-full.webp",
    tourVideo: "/projects/tours/advocate-cms-tour.mp4",
    tourLabel: "Product tour",
    screenshots: [
      {
        url: "/projects/taxcontrol/01-taxcontrol-dashboard-full.webp",
        title: "Master Enterprise Dashboard",
        caption: "Real-time key business indicators, active client counts, file status tracker, quick GST/ITR search, and WhatsApp notifications monitor."
      },
      {
        url: "/projects/taxcontrol/02-taxcontrol-clientlist-full.webp",
        title: "Clients Directory & Filing Records",
        caption: "Centralized client database with quick WhatsApp dispatch, status badges, PAN/GSTIN tracking, and encrypted file access."
      },
      {
        url: "/projects/taxcontrol/03-taxcontrol-templates-full.webp",
        title: "WhatsApp Cloud API Templates",
        caption: "Meta-approved dynamic message templates for automated hearing date reminders, payment notices, and compliance alerts."
      },
      {
        url: "/projects/taxcontrol/04-taxcontrol-whatsapp-full.webp",
        title: "WhatsApp Cloud API — Live Client Compliance Chat",
        caption: "Real-time client messaging portal with automated ITR/GST reminder templates, interactive confirmation buttons, and encrypted document uploads."
      },
      {
        url: "/projects/taxcontrol/05-taxcontrol-clientprofile-full.webp",
        title: "Client Profile & Statutory Tax Identity Dossier",
        caption: "Comprehensive corporate KYC records, verified GSTIN/PAN credentials, linked legal counsel, audit status, and entity master data."
      }
    ,
      {
        url: "/projects/advocate/05-whatsapp-inbox.webp",
        title: "WhatsApp Inbox with Labels",
        caption: "Client conversations in one inbox, with unread counts, labels such as Urgent and Documents, and quick replies."
      },
      {
        url: "/projects/advocate/06-whatsapp-logs.webp",
        title: "Reminder Delivery Logs",
        caption: "Every reminder with its status (sent, delivered, read or failed), phone number and time, searchable and exportable."
      },
      {
        url: "/projects/advocate/08-permissions.webp",
        title: "Roles and Permissions",
        caption: "Group-based permissions let each staff role see only the modules it needs."
      }
    ],
    badge: "Live Production SaaS"
  },
  {
    id: "enterprise-lms",
    title: "Enterprise Learning Platform & School LMS",
    subtitle: "Multi-tenant educational management & examination portal",
    category: "enterprise",
    categoryLabel: "EdTech / Enterprise SaaS",
    description: "A comprehensive multi-tenant school learning management system with 4 distinct role portals, interactive exam & quiz grading engine, bulk student management, and dynamic school linking.",
    longDescription: "Engineered with a Django backend and a modern Vite React 19 TypeScript frontend with Material UI and ApexCharts. Designed for educational institutions, it features dedicated Super Admin, School Admin, Teacher, and Student portals. Includes live quiz engines with automated score breakdowns, course and assignment submission modules, bulk student CSV uploads, and language examination modules (Speaking & Writing).",
    tags: ["Django", "Django REST Framework", "React 19", "TypeScript", "Vite", "MUI", "ApexCharts", "Multi-Tenant"],
    features: [
      "4-Tier RBAC Architecture: Super Admin, School Admin, Instructor/Teacher, and Student dashboards",
      "Interactive Quiz Engine with instant answer grading, timer enforcement, and result analytics",
      "Complete School Management: Dynamic school profile creation, linking, and administrative delegation",
      "Bulk Student Upload and verification system streamlining batch enrollments",
      "Specialized Language Modules: Dedicated IELTS/Language Speaking and Writing assessment workflows"
    ],
    architecture: {
      frontend: "Vite, React 19, TypeScript, Material UI (MUI v7), ApexCharts, React Router v7",
      backend: "Django, Django REST Framework, Python",
      database: "Relational Schema with multi-tenant school partitioning",
      services: ["ApexCharts Visualization Engine", "Bulk CSV Parser", "Token-Based Authentication"]
    },
    metrics: [
      { label: "User Roles", value: "4 Tiers" },
      { label: "Architecture", value: "Multi-Tenant" },
      { label: "Quiz Engine", value: "Automated Grading" }
    ],
    githubUrl: "https://github.com/jagjotsingh7935",
    liveUrl: import.meta.env.VITE_PROJECT_LMS_URL || "http://72.61.171.121/",
    featured: true,
    imageGradient: "from-emerald-600 via-teal-700 to-slate-900",
    coverImage: "/projects/enterprise-lms.png",
    badge: "Enterprise LMS"
  },
  {
    id: "sunny-taxi",
    title: "Sunny Taxi — Fleet Booking & Dispatch",
    subtitle: "Real-time taxi reservation & dispatch coordination",
    category: "fullstack",
    categoryLabel: "Mobility / Logistics",
    description: "A real-time passenger booking and taxi fleet dispatch platform featuring live location pickups, dynamic vehicle tier selection, automated fare estimates, and booking confirmation.",
    longDescription: "Built to empower regional taxi operators with modern digital booking capabilities. Includes an intuitive responsive passenger booking UI, dynamic pickup/drop location calculation, fleet category selection (Sedan, SUV, Luxury), instant driver dispatch coordination, and automated reservation receipts.",
    tags: ["React.js", "Vite", "Tailwind CSS", "Maps API", "Python Backend", "Dispatch Engine"],
    features: [
      "Frictionless passenger booking flow with address autocomplete and route validation",
      "Fleet categorization with dynamic pricing and capacity filtering",
      "Automated dispatch notifications for instant driver assignment",
      "Mobile-optimized progressive web interface for on-the-go travelers"
    ],
    architecture: {
      frontend: "React.js, Tailwind CSS, Lucide Icons, Vite",
      backend: "Python / Django REST API",
      database: "PostgreSQL / SQLite",
      services: ["Google Maps Geocoding", "SMS Dispatch Alerts"]
    },
    metrics: [
      { label: "Booking Speed", value: "< 30s" },
      { label: "Fleet Coverage", value: "Multi-Tier" },
      { label: "UX Rating", value: "4.9/5" }
    ],
    githubUrl: "https://github.com/jagjotsingh7935",
    liveUrl: import.meta.env.VITE_PROJECT_SUNNY_TAXI_URL || "https://1300silvertopcabs.com.au/",
    featured: false,
    imageGradient: "from-amber-500 via-orange-600 to-stone-900",
    coverImage: "/projects/sunny-taxi.png",
    tourVideo: "/projects/tours/sunny-taxi-tour.mp4",
    badge: "Mobility & Fleet"
  },
  {
    id: "fitness-coach",
    title: "Fitness Coach App — Metabolic Coaching",
    subtitle: "Cross-platform personalized health & training app",
    category: "mobile",
    categoryLabel: "Mobile App / Flutter",
    description: "A secure cross-platform mobile application for personalized metabolic and fitness coaching, featuring separate Admin, Trainer, and Client portals with OTP authentication.",
    longDescription: "Engineered with Flutter & Dart for smooth 60fps performance on both iOS and Android. Clients receive custom daily workout plans, dietary guidance, and biometric progress logging, while trainers and admins manage coaching schedules, assess progress photos, and monitor client adherence via a Django REST API backend.",
    tags: ["Flutter", "Dart", "Django REST Framework", "PostgreSQL", "OTP Auth", "iOS", "Android"],
    features: [
      "Multi-Role mobile architecture: Client, Trainer, and Admin operational interfaces",
      "Secure passwordless OTP authentication ensuring frictionless login security",
      "Interactive workout routine tracker with exercise demos and rest timers",
      "Metabolic nutrition logging, calorie targets, and body metric analytics charts"
    ],
    architecture: {
      frontend: "Flutter SDK, Dart, Material 3, State Management",
      backend: "Django REST Framework, Python",
      database: "PostgreSQL",
      services: ["SMS Gateway for OTP Verification", "Secure Cloud Media Storage"]
    },
    metrics: [
      { label: "Platform", value: "iOS & Android" },
      { label: "Frame Rate", value: "Smooth 60 FPS" },
      { label: "Auth Flow", value: "OTP-Based" }
    ],
    githubUrl: "https://github.com/jagjotsingh7935",
    liveUrl: import.meta.env.VITE_PROJECT_FITNESS_URL || "",
    featured: false,
    imageGradient: "from-rose-600 via-pink-700 to-slate-900",
    badge: "Flutter Mobile App"
  },
  {
    id: "appointment-system",
    title: "AppointmentSystem — Automated Booking & Dispatch",
    subtitle: "Automated calendar scheduling & dispatch coordination",
    category: "fullstack",
    categoryLabel: "Enterprise Scheduling",
    description: "A robust online booking and reservation engine featuring calendar synchronization, staff availability allocation, client booking portals, and dispatch status tracking.",
    longDescription: "Features a modern React frontend connected to a dedicated Django appointment backend. Designed to streamline service booking for service businesses, doctors, and consultants, preventing double bookings with intelligent buffer slot calculation.",
    tags: ["React.js", "Django REST Framework", "Calendar Sync", "Scheduling", "Python"],
    features: [
      "Interactive calendar view displaying open, pending, and confirmed booking slots",
      "Customizable working hours, break times, and automated buffer windows",
      "Automated email and SMS confirmation dispatch for clients and staff",
      "Administrative dispatch portal with instant schedule rescheduling and cancellation"
    ],
    architecture: {
      frontend: "React.js, Tailwind CSS, Date-Fns",
      backend: "Django REST Framework, Python",
      database: "PostgreSQL / SQLite",
      services: ["Calendar Conflict Resolver", "Email Notification Dispatch"]
    },
    metrics: [
      { label: "Double Bookings", value: "Zero" },
      { label: "Automation", value: "100% Calendar Sync" },
      { label: "Client Ease", value: "3-Step Booking" }
    ],
    githubUrl: "https://github.com/jagjotsingh7935",
    liveUrl: import.meta.env.VITE_PROJECT_APPOINTMENT_URL || "",
    featured: false,
    imageGradient: "from-violet-600 via-purple-800 to-slate-950",
    badge: "Scheduling Engine"
  },
];
