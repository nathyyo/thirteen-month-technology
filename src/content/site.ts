import { resolvePublicUrl } from "@/lib/site-url";

export const site = {
  name: "Thirteen Month Technology",
  shortName: "Thirteen Month",
  legalName: "Thirteen Month Technology",
  tagline: "Building Trusted Digital Infrastructure for a Connected World.",
  descriptor: "Digital Trusted Infrastructure",
  summary:
    "Thirteen Month Technology develops secure digital platforms that enable financial institutions, governments, aviation organizations, and enterprises to verify, connect, and manage critical digital workflows with confidence.",
  heroLede:
    "Secure platforms for finance, government, aviation, automotive, and cross-border verification.",
  sectors: [
    { label: "Financial Services", href: "/financial-services" },
    { label: "Government", href: "/government" },
    { label: "Aviation", href: "/aviation" },
    { label: "Automotive", href: "/automotive" },
    { label: "Cross-Border Verification", href: "/technology#cross-border" },
  ],
  url: resolvePublicUrl(),
  locale: "en",
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@thirteenmonth.technology",
    inquiryEmail: process.env.CONTACT_TO_EMAIL ?? "contact@thirteenmonth.technology",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Solutions",
      href: "/solutions",
      children: [
        {
          label: "All Solutions",
          href: "/solutions",
          description: "Secure platforms for institutions that matter.",
        },
        {
          label: "Financial Services",
          href: "/financial-services",
          description: "Digital financial infrastructure and visa bond services.",
        },
        {
          label: "Government",
          href: "/government",
          description: "Digital public services, verification, and audit trails.",
        },
        {
          label: "Aviation",
          href: "/aviation",
          description: "Future solutions for trusted aviation workflows.",
        },
        {
          label: "Automotive",
          href: "/automotive",
          description: "Vehicle inspection, maintenance, and fleet infrastructure.",
        },
        {
          label: "Technology",
          href: "/technology",
          description: "Reusable capabilities for identity, documents, and data.",
        },
      ],
    },
    { label: "Vision 2036", href: "/vision-2036" },
    { label: "Partnerships", href: "/partnerships" },
    { label: "Contact", href: "/contact" },
  ],
  footerNav: [
    {
      title: "Company",
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Vision 2036", href: "/vision-2036" },
        { label: "Partnerships", href: "/partnerships" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "Overview", href: "/solutions" },
        { label: "Financial Services", href: "/financial-services" },
        { label: "Government", href: "/government" },
        { label: "Aviation", href: "/aviation" },
        { label: "Automotive", href: "/automotive" },
        { label: "Technology", href: "/technology" },
      ],
    },
    {
      title: "Focus",
      links: [
        { label: "Visa Bond Platform", href: "/financial-services" },
        { label: "Cross-Border Verification", href: "/technology#cross-border" },
        { label: "Digital Public Services", href: "/government" },
        { label: "Future Aviation Solutions", href: "/aviation" },
        { label: "Smart Automotive Infrastructure", href: "/automotive" },
      ],
    },
  ],
} as const;

export const pillars = [
  {
    id: "verify",
    title: "Verify",
    text: "Confirm identities, documents, credentials, and critical information.",
  },
  {
    id: "connect",
    title: "Connect",
    text: "Enable secure digital workflows between organizations and systems.",
  },
  {
    id: "manage",
    title: "Manage",
    text: "Simplify complex processes through structured digital platforms.",
  },
  {
    id: "audit",
    title: "Audit",
    text: "Create transparent, traceable records of important actions and decisions.",
  },
] as const;

export const audiences = [
  {
    href: "/financial-services",
    kicker: "Financial Services",
    title: "Digital Financial Infrastructure",
    text: "Secure platforms designed to help financial institutions manage emerging digital financial services, verification, customer workflows, and auditable transactions.",
    image: "/images/finance.jpg",
    imageAlt: "Contemporary financial district architecture at dusk",
  },
  {
    href: "/government",
    kicker: "Government",
    title: "Digital Government & Verification",
    text: "Technology that supports secure document verification, institutional workflows, transparency, and digital transformation across public services.",
    image: "/images/government.jpg",
    imageAlt: "Civic architecture representing public institutions",
  },
  {
    href: "/aviation",
    kicker: "Aviation",
    title: "Digital Trust for Aviation",
    text: "Building the foundation for secure passenger, cargo, supplier, procurement, maintenance, and verification solutions across the aviation ecosystem.",
    image: "/images/aviation.jpg",
    imageAlt: "Commercial aircraft in flight above cloud cover",
  },
  {
    href: "/automotive",
    kicker: "Automotive",
    title: "Smart Automotive Infrastructure",
    text: "Digital infrastructure for vehicle inspection, maintenance, repair, and fleet operations across the vehicle lifecycle.",
    image: null,
    imageAlt: "",
  },
] as const;

export const approach = [
  {
    step: "01",
    title: "Understand",
    text: "We begin with the real operational problem.",
  },
  {
    step: "02",
    title: "Design",
    text: "We design secure and practical digital workflows.",
  },
  {
    step: "03",
    title: "Verify",
    text: "We strengthen identity, document, and information verification.",
  },
  {
    step: "04",
    title: "Integrate",
    text: "We connect people, institutions, and systems.",
  },
  {
    step: "05",
    title: "Scale",
    text: "We build solutions capable of expanding across markets and borders.",
  },
] as const;

export const reasons = [
  {
    title: "Security",
    text: "Security is designed into the foundation of our platforms.",
  },
  {
    title: "Trust",
    text: "Verification and traceability are central to our technology.",
  },
  {
    title: "Integration",
    text: "Our solutions are designed to work within complex institutional environments.",
  },
  {
    title: "Scale",
    text: "We build with international expansion and interoperability in mind.",
  },
] as const;

export const financial = {
  title: "Visa Bond Digital Platform",
  lede: "Thirteen Month Technology is developing a secure digital platform designed to support the end-to-end management of visa bond services in collaboration with financial institutions.",
  body: "The platform brings together digital application workflows, identity and document verification, collateral management, financial processing, and comprehensive audit trails within a secure digital environment.",
  capabilities: [
    "Digital Application",
    "Verification",
    "Collateral Management",
    "Bank Workflow",
    "Digital Audit Trail",
  ],
} as const;

export const government = {
  title: "Strengthening Digital Public Services",
  lede: "Digital transformation is most powerful when it improves both efficiency and public trust.",
  body: "Our technology can support institutions seeking to modernize complex processes through secure verification, structured workflows, digital records, and audit-ready systems.",
  applications: [
    "Labour mobility",
    "Document verification",
    "Institutional verification",
    "Secure approvals",
    "Digital audit trails",
    "Cross-border workflows",
    "Public-service platforms",
  ],
  statement:
    "Technology designed to support transparency, accountability, and better service delivery.",
} as const;

export const aviation = {
  title: "Building the Future of Digital Aviation",
  lede: "Aviation is one of the world's most interconnected industries. Passengers, cargo, aircraft, suppliers, maintenance organizations, and regulators operate across borders every day.",
  body: "Thirteen Month Technology is developing a future portfolio of aviation technology solutions focused on verification, secure workflows, procurement, supplier trust, and traceability.",
  solutions: [
    {
      title: "Passenger Verification",
      text: "Secure digital workflows for passenger and travel-document verification.",
    },
    {
      title: "Cargo Verification",
      text: "Digital documentation, verification, and secure cargo workflows.",
    },
    {
      title: "Aviation Procurement",
      text: "Technology for supplier verification, procurement workflows, documentation, and transaction transparency.",
    },
    {
      title: "Supplier Verification",
      text: "Digital verification of aviation suppliers, credentials, and supporting documentation.",
    },
    {
      title: "MRO Digital Workflows",
      text: "Future solutions supporting maintenance, repair, overhaul, and technical workflows.",
    },
    {
      title: "Parts Traceability",
      text: "Future digital traceability for aviation components and their documentation history.",
    },
  ],
  closing: "From trusted travelers to trusted aircraft.",
} as const;

export const automotive = {
  title: "Smart Automotive Infrastructure",
  lede: "Technology and digital infrastructure for vehicle inspection, maintenance, repair, and fleet operations.",
  body: "Thirteen Month Technology is developing solutions that help automotive businesses, fleets, insurers, and institutions improve vehicle lifecycle management, maintenance, quality control, and service documentation.",
  focus: [
    "Vehicle Inspection & Diagnostics",
    "Maintenance & Repair Management",
    "Fleet Operations",
    "Vehicle Lifecycle Records",
    "Parts & Service Traceability",
    "Body & Paint Services",
    "EV Service & Battery Diagnostics",
    "Quality & Compliance",
    "Digital Service Documentation",
  ],
  approachFlow: ["Inspect", "Maintain", "Repair", "Verify", "Record"],
  approachText:
    "We connect physical automotive services with secure digital records, helping organizations improve transparency, efficiency, accountability, and vehicle lifecycle management.",
  future: [
    "Passenger Vehicles",
    "Commercial Fleets",
    "Government Vehicles",
    "Insurance",
    "Electric Vehicles",
    "Automotive Service Networks",
  ],
  closing: "From inspection to record. Built for the full vehicle lifecycle.",
} as const;

export const technology = {
  title: "One Technology Foundation. Multiple Applications.",
  lede: "Our approach is built around reusable digital capabilities that can be adapted to complex institutional environments.",
  capabilities: [
    {
      title: "Identity",
      text: "Secure identity and entity verification.",
    },
    {
      title: "Documents",
      text: "Digital document management and authentication workflows.",
    },
    {
      title: "Workflows",
      text: "Structured processes with defined roles, approvals, and responsibilities.",
    },
    {
      title: "Data",
      text: "Secure information management and system integration.",
    },
    {
      title: "Audit",
      text: "Traceable records designed to strengthen accountability and transparency.",
    },
  ],
  closing: "Build once. Integrate intelligently. Scale globally.",
} as const;

export const crossBorder = {
  title: "Connecting Trust Across Borders",
  lede: "People, documents, businesses, financial transactions, and services increasingly move across national boundaries.",
  body: "Thirteen Month Technology is developing digital infrastructure designed to help organizations securely verify information and manage cross-border workflows.",
  pillars: [
    {
      title: "Identity",
      text: "Verify people and organizations.",
    },
    {
      title: "Documents",
      text: "Authenticate critical records and credentials.",
    },
    {
      title: "Institutions",
      text: "Connect trusted organizations through secure digital workflows.",
    },
  ],
} as const;

export const partnerships = {
  title: "Building Through Partnership",
  lede: "The most important challenges in finance, government, and aviation cannot be solved by technology companies alone.",
  intro: "We work toward partnerships with:",
  partners: [
    "Financial institutions",
    "Government institutions",
    "Aviation organizations",
    "Technology partners",
  ],
  closing:
    "We build technology. Our partners bring expertise, infrastructure, and institutional strength. Together, we create lasting solutions.",
} as const;

export const vision = {
  title: "Our Vision",
  statement:
    "To become a trusted provider of digital infrastructure connecting financial institutions, governments, aviation organizations, and enterprises across Africa and the world.",
  roadmap: [
    {
      period: "2026–2027",
      title: "Financial Technology",
      items: ["Visa Bond", "Digital Verification", "Banking Partnerships"],
    },
    {
      period: "2027–2028",
      title: "Government & Cross-Border Services",
      items: ["Verification", "Secure Workflows", "Digital Audit Trails"],
    },
    {
      period: "2028–2030",
      title: "African Aviation",
      items: ["Passenger", "Cargo", "Procurement", "Supplier Verification"],
    },
    {
      period: "2030+",
      title: "Global Digital Trust Infrastructure",
      items: ["Finance", "Government", "Aviation", "Enterprise"],
    },
  ],
  closing: "Start local. Build for global scale.",
} as const;

export const inquiryTypes = [
  { value: "general", label: "General enquiry" },
  { value: "financial", label: "Financial services" },
  { value: "government", label: "Government" },
  { value: "aviation", label: "Aviation" },
  { value: "automotive", label: "Automotive" },
  { value: "partnership", label: "Partnership" },
  { value: "technology", label: "Technology partnership" },
] as const;

export const images = {
  globe: "/images/globe.jpg",
  africa: "/images/africa.jpg",
  partnership: "/images/partnership.jpg",
  documents: "/images/documents.jpg",
  airport: "/images/airport.jpg",
} as const;
