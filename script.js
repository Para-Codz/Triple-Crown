"use strict";
(() => {
  // icons.js
  var PATHS = {
    "arrow-right": '<path d="M5 12h14M13 6l6 6-6 6"/>',
    "arrow-up-right": '<path d="M7 17L17 7M8 7h9v9"/>',
    "chevron-down": '<path d="m6 9 6 6 6-6"/>',
    "chevron-left": '<path d="m15 6-6 6 6 6"/>',
    "chevron-right": '<path d="m9 6 6 6-6 6"/>',
    check: '<path d="M4 12.5 9.5 18 20 6.5"/>',
    "check-circle": '<circle cx="12" cy="12" r="9"/><path d="m8.5 12.2 2.4 2.4 4.6-5"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20.5 20.5-4.6-4.6"/>',
    "search-x": '<circle cx="11" cy="11" r="7"/><path d="m9.2 9.2 3.6 3.6M12.8 9.2l-3.6 3.6"/><path d="m20.5 20.5-3.4-3.4"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z"/>',
    dashboard: '<rect x="3.5" y="3.5" width="7" height="9" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="5" rx="1.5"/><rect x="13.5" y="11.5" width="7" height="9" rx="1.5"/><rect x="3.5" y="15.5" width="7" height="5" rx="1.5"/>',
    cart: '<circle cx="9.5" cy="20" r="1.3"/><circle cx="17.5" cy="20" r="1.3"/><path d="M3 4h2l2.4 11.2a1.5 1.5 0 0 0 1.5 1.2h7.9a1.5 1.5 0 0 0 1.5-1.2L20 8H6"/>',
    palette: '<path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-.9 2-1.9 0-.8-.6-1.2-.6-2 0-.9.7-1.6 1.7-1.6H17a4.5 4.5 0 0 0 4.5-4.5C21.4 6.6 17.1 3 12 3Z"/><circle cx="7.5" cy="10.5" r="0.6" fill="currentColor"/><circle cx="12" cy="7.5" r="0.6" fill="currentColor"/><circle cx="16.5" cy="10.5" r="0.6" fill="currentColor"/>',
    gauge: '<path d="m12 14 4-4"/><path d="M3.5 17.5a9 9 0 1 1 17 0"/><path d="M12 14h.01"/>',
    plug: '<path d="M9 7V3.5M15 7V3.5"/><path d="M7 7h10v3.5a5 5 0 0 1-10 0Z"/><path d="M12 15.5V21"/>',
    bug: '<path d="M9 8a3 3 0 0 1 6 0v1.5H9Z"/><path d="M8.5 9.5h7V15a3.5 3.5 0 0 1-7 0Z"/><path d="M8.5 11.5H4M8.5 15.5H4.5M15.5 11.5H20M15.5 15.5h4M10 21l.8-2.7M14 21l-.8-2.7M12 9.5V19"/>',
    "scan-search": '<path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3"/><circle cx="11" cy="11" r="3.2"/><path d="m13.3 13.3 1.7 1.7"/>',
    radar: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="0.8" fill="currentColor"/><path d="M12 12 18.5 5.5"/>',
    cloud: '<path d="M7 18.5h9.7a4.25 4.25 0 0 0 .8-8.4 6 6 0 0 0-11.3 1.3A4 4 0 0 0 7 18.5Z"/>',
    siren: '<path d="M7 16v-3.5a5 5 0 0 1 10 0V16Z"/><path d="M4.5 20h15M12 2.5v1.5M5.3 4.8l1 1M18.7 4.8l-1 1M3 9.5h1.5M20 9.5h1.5"/>',
    "file-check": '<path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7Z"/><path d="M14 3v4h4"/><path d="m9.2 14.8 2 2 3.8-4"/>',
    "grad-cap": '<path d="M12 4 2.5 8.5 12 13l9.5-4.5Z"/><path d="M6.5 10.7V16c0 1.6 2.5 3 5.5 3s5.5-1.4 5.5-3v-5.3"/><path d="M21.5 8.5V14"/>',
    "git-branch": '<circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="8" r="2.5"/><path d="M6 8.5v7"/><path d="M18 10.5c0 4.5-5.5 3.5-8.5 5"/>',
    shield: '<path d="M12 3l7 2.6V11c0 4.6-3 7.7-7 9.4C8 18.7 5 15.6 5 11V5.6Z"/><path d="m9 11.6 2.2 2.2 4.2-4.2"/>',
    lock: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8.5 11V8a3.5 3.5 0 0 1 7 0v3"/>',
    zap: '<path d="M13 2.5 4.8 13.5H11L10.2 21.5l8.2-11H12.2Z"/>',
    rocket: '<path d="M9.5 14.5C8 18 7.5 20.5 7.5 20.5s2.5-.5 6.5-2.5"/><path d="M14.6 3.4c3 .3 5.7 3 6 6 .2 3-1.6 6.8-4.6 9.3-2.3.5-4.9-.3-6.6-2s-2.5-4.3-2-6.6C9.8 6.9 12.6 4.2 14.6 3.4Z"/><circle cx="14.5" cy="9.5" r="1.7"/>',
    activity: '<path d="M3 12h4l2.5-6.5 4 13L16 12h5"/>',
    code: '<path d="m8 7-5 5 5 5M16 7l5 5-5 5"/>',
    crown: '<path d="m3 8 3.6 3L12 5.2 17.4 11 21 8l-1.6 9.2H4.6Z"/><path d="M5 20.5h14"/>',
    quote: '<path d="M6.5 6.5h4v4.2c0 3-1.4 4.9-3.8 6M15.5 6.5h4v4.2c0 3-1.4 4.9-3.8 6"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 7 8.5 6 8.5-6"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/>',
    "map-pin": '<path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z"/><circle cx="12" cy="10" r="2.6"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    send: '<path d="M21 3 10.8 13.2M21 3l-6.6 18-3.6-7.6L3.2 9.8Z"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M3 20c.6-3.2 2.8-5 6-5s5.4 1.8 6 5"/><path d="M15.5 4.9a3.5 3.5 0 0 1 0 6.2M21 20c-.4-2.4-1.6-4-3.4-4.7"/>',
    layers: '<path d="m12 3 9 5-9 5-9-5Z"/><path d="m3.5 13 8.5 4.7 8.5-4.7"/>',
    "file-text": '<path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7Z"/><path d="M14 3v4h4"/><path d="M9 13h6M9 17h6"/>',
    "life-buoy": '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="m5.7 5.7 2.9 2.9M15.4 15.4l2.9 2.9M18.3 5.7l-2.9 2.9M8.6 15.4l-2.9 2.9"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-1.8 5-5 1.8 1.8-5Z"/>',
    eye: '<path d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z"/><circle cx="12" cy="12" r="3"/>',
    gem: '<path d="M7 3.5h10L20.5 8 12 20.5 3.5 8Z"/><path d="M3.5 8h17M12 20.5 8.6 8 12 3.5 15.4 8 12 20.5"/>',
    heart: '<path d="M12 20.5C7 16.6 3.5 13.4 3.5 9.7A4.6 4.6 0 0 1 12 7.2a4.6 4.6 0 0 1 8.5 2.5c0 3.7-3.5 6.9-8.5 10.8Z"/>',
    lightbulb: '<path d="M9.5 18h5M10.3 21h3.4"/><path d="M12 3a6 6 0 0 1 3.4 10.9c-.7.5-1 1-1 2.1h-4.8c0-1.1-.3-1.6-1-2.1A6 6 0 0 1 12 3Z"/>',
    "message-square": '<path d="M4 4.5h16V16H9.5L4 20Z"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/>',
    award: '<circle cx="12" cy="9" r="5.5"/><path d="m8.9 13.6-1.4 7L12 18l4.5 2.6-1.4-7"/>',
    wrench: '<path d="M14.8 5.6a4.3 4.3 0 0 1 5.8-4.2l-2.7 2.7 1.6 2.6 3-.6a4.3 4.3 0 0 1-5.6 5L9 19a2.1 2.1 0 0 1-3-3l7.9-7.9a4.3 4.3 0 0 1 .9-2.5Z"/>',
    star: '<path d="M12 3l2.7 5.6 6.1.8-4.5 4.2 1.1 6L12 16.7 6.6 19.6l1.1-6L3.2 9.4l6.1-.8Z"/>'
  };
  function icon(name, cls = "", sw = 1.8) {
    return `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${PATHS[name] || ""}</svg>`;
  }
  function starIcon(cls = "") {
    return `<svg class="${cls}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${PATHS.star}</svg>`;
  }

  // data.js
  var webServices = [
    { icon: "globe", title: "Custom Websites", text: "Fast, accessible, conversion-focused marketing sites engineered on modern stacks — never a recycled template." },
    { icon: "dashboard", title: "Web Apps & Portals", text: "SaaS platforms, customer portals and internal dashboards built to scale and to withstand real-world abuse." },
    { icon: "cart", title: "E-commerce", text: "Headless and platform-based stores with frictionless checkout, PCI-aware architecture and rich integrations." },
    { icon: "palette", title: "UI/UX & Design Systems", text: "Research-led interface design, prototypes and component libraries that keep your product consistent as it grows." },
    { icon: "gauge", title: "Performance & SEO", text: "Core Web Vitals tuning, technical SEO and analytics so your site ranks well and loads in a blink." },
    { icon: "plug", title: "APIs & Integrations", text: "Payments, CRMs, ERPs and custom APIs — connected securely with clean documentation and monitoring." }
  ];
  var securityServices = [
    { icon: "bug", title: "Penetration Testing", text: "Manual, attacker-style testing of web apps, APIs, mobile apps and networks — with proof-of-concept evidence." },
    { icon: "scan-search", title: "Vulnerability Assessment", text: "Continuous scanning and triage that turns thousands of alerts into a short, prioritised fix list." },
    { icon: "radar", title: "24/7 Managed Monitoring", text: "Round-the-clock detection and response from our security operations team, with clear escalation paths." },
    { icon: "cloud", title: "Cloud & Infrastructure Security", text: "Hardening and configuration review for AWS, Azure and GCP, plus secure CI/CD and secrets management." },
    { icon: "siren", title: "Incident Response", text: "Rapid containment, forensics and recovery when something goes wrong — and a plan so it doesn't repeat." },
    { icon: "file-check", title: "Compliance & Audits", text: "Gap analysis and practical remediation plans that help your team build stronger, well-documented security controls." },
    { icon: "grad-cap", title: "Security Awareness Training", text: "Engaging team training and phishing simulations that measurably reduce human-factor risk." },
    { icon: "git-branch", title: "Secure Development (DevSecOps)", text: "Threat modelling, code review and automated security gates built into your delivery pipeline." }
  ];
  var processSteps = [
    { n: "01", title: "Discover", text: "Workshops to understand your goals, users, risks and constraints. We leave with a scoped plan and a fixed roadmap." },
    { n: "02", title: "Design", text: "Wireframes, visual design and architecture — with threat modelling done up front, not bolted on later." },
    { n: "03", title: "Build & Harden", text: "Iterative sprints with code review, automated testing and security checks in every release." },
    { n: "04", title: "Launch & Protect", text: "Penetration-tested launch, performance tuning and ongoing monitoring so you stay fast and secure." }
  ];
  var projects = [
    {
      id: "meridian",
      name: "Meridian Capital",
      title: "Secure investor portal",
      category: "Web Development",
      kind: "fintech",
      summary: "A regulated investor portal with real-time portfolio views and bank-grade authentication.",
      challenge: "Meridian's legacy portal was slow, hard to audit and failing internal security reviews ahead of a funding round.",
      solution: "We rebuilt it as a modern React and Node platform with MFA, role-based access, audit trails and a full penetration test before launch.",
      results: [["42%", "faster onboarding"], ["0", "critical findings at launch"], ["99.99%", "uptime since go-live"]],
      tags: ["React", "Node.js", "AWS", "MFA"]
    },
    {
      id: "northwind",
      name: "Northwind Outfitters",
      title: "Headless storefront redesign",
      category: "E-commerce",
      kind: "store",
      summary: "A blazing-fast headless commerce rebuild that turned browsers into buyers.",
      challenge: "Slow pages and a clunky checkout were costing Northwind sales during peak season.",
      solution: "A headless storefront with edge caching, streamlined one-page checkout, and bot and fraud protection at the edge.",
      results: [["+68%", "conversion rate"], ["1.1s", "largest contentful paint"], ["-83%", "bot traffic on checkout"]],
      tags: ["Next.js", "Shopify", "Cloudflare"]
    },
    {
      id: "helix",
      name: "Helix Health",
      title: "Patient portal & security hardening",
      category: "Cybersecurity",
      kind: "health",
      summary: "A privacy-first patient portal, hardened and validated against healthcare security requirements.",
      challenge: "Helix needed to open patient records online without exposing sensitive data or failing compliance audits.",
      solution: "Secure architecture, encryption in transit and at rest, a full application pentest and healthcare privacy control mapping.",
      results: [["37", "vulnerabilities remediated"], ["9 days", "to resolve all criticals"], ["100%", "audit controls satisfied"]],
      tags: ["Pentest", "Patient Privacy", "Azure"]
    },
    {
      id: "atlas",
      name: "Atlas Logistics",
      title: "Fleet tracking SaaS platform",
      category: "Web Development",
      kind: "logistics",
      summary: "A real-time fleet visibility platform processing millions of telemetry events daily.",
      challenge: "Dispatchers were juggling spreadsheets and three disconnected tools to track vehicles.",
      solution: "A unified live-map dashboard with streaming data, alerting and a secure customer-facing API.",
      results: [["3.2M", "events processed daily"], ["-31%", "dispatch time"], ["<200ms", "live update latency"]],
      tags: ["TypeScript", "WebSockets", "PostgreSQL"]
    },
    {
      id: "corvus",
      name: "Corvus Credit Union",
      title: "Red team & remediation programme",
      category: "Cybersecurity",
      kind: "audit",
      summary: "An attacker-style assessment of web, API and network surfaces — and the fix plan that followed.",
      challenge: "Corvus wanted independent assurance their online banking stack could withstand a targeted attack.",
      solution: "A four-week red team engagement, prioritised findings report and hands-on remediation with retesting.",
      results: [["5", "critical paths closed"], ["100%", "retest pass rate"], ["4 wks", "start to full remediation"]],
      tags: ["Red Team", "API Security", "Retest"]
    },
    {
      id: "lumen",
      name: "Lumen Architects",
      title: "Award-ready brand website",
      category: "Web Development",
      kind: "brand",
      summary: "An editorial, image-led portfolio site with buttery motion and perfect Lighthouse scores.",
      challenge: "Lumen's heavy imagery made their old site sluggish, undermining a premium brand.",
      solution: "Art-directed layouts, responsive image pipeline and a headless CMS the team can update themselves.",
      results: [["100", "Lighthouse performance"], ["2.4x", "enquiry volume"], ["0.9s", "average load time"]],
      tags: ["Astro", "Headless CMS", "Motion"]
    },
    {
      id: "vault",
      name: "Vault & Co.",
      title: "Managed security operations",
      category: "Cybersecurity",
      kind: "soc",
      summary: "24/7 monitoring and response for a fast-growing SaaS platform.",
      challenge: "A lean engineering team couldn't watch alerts around the clock — and enterprise buyers were asking for proof.",
      solution: "Managed detection and response, tuned alerting, runbooks and monthly executive security reporting.",
      results: [["11 min", "mean time to respond"], ["-92%", "alert noise"], ["24/7", "security coverage"]],
      tags: ["MDR", "SIEM", "Response"]
    },
    {
      id: "pulse",
      name: "Pulse Learning",
      title: "Learning platform & storefront",
      category: "E-commerce",
      kind: "learning",
      summary: "A course marketplace with secure payments, DRM-protected video and learner analytics.",
      challenge: "Pulse needed to launch paid courses quickly while protecting premium content from piracy.",
      solution: "Custom LMS with subscription billing, tokenised video delivery and a progress-tracking dashboard.",
      results: [["12k", "learners in 90 days"], ["4.8/5", "average course rating"], ["0", "content leaks"]],
      tags: ["React", "Stripe", "Video DRM"]
    }
  ];
  
  var team = [
  {
  id: "paradise-george",
  name: "Paradise George",
  initials: "PG",
  role: "Web Development",
  bio: "Building thoughtful digital experiences that help ambitious businesses grow.",
  image: "images/paradise.png"
},
  {
    id: "wisdom-ubuara",
    name: "Wisdom Ubuara",
    initials: "WU",
    role: "Cybersecurity",
    bio: "Building a safer space for teams to create, serve, and scale without fear.",
    image: "images/jahcares.jpg"
  },
  {
    id: "praise-jah-george",
    name: "Praise-Jah George",
    initials: "PJ",
    role: "Web Development",
    bio: "Creating seamless digital interactions that drive fast-growing businesses forward.",
    image: "images/praise.png"
  },
  {
    id: "joseph-ubuara",
    name: "Joseph Ubuara",
    initials: "JU",
    role: "Web Development",
    bio: "Connecting customers to your business with zero friction.",
    image: "images/joseph.png"
  }
];

  var testimonials = [
    { quote: "Triple Crown rebuilt our investor platform and then attacked it before launch. We shipped with total confidence — and our auditors had almost nothing to flag.", name: "Elena Marković", role: "CTO", company: "Meridian Capital", initials: "EM", metric: "0 critical findings" },
    { quote: "Our conversion rate jumped 68% after the redesign and the site feels instant. They treated our store like it was their own.", name: "Tom Whitaker", role: "Head of E-commerce", company: "Northwind Outfitters", initials: "TW", metric: "+68% conversion" },
    { quote: "Their penetration test uncovered issues two previous vendors missed, and the remediation guidance was clear enough for my whole team to act on immediately.", name: "Dr. Rachel Adeyemi", role: "CIO", company: "Helix Health", initials: "RA", metric: "37 issues fixed" },
    { quote: "Responsive, honest and refreshingly jargon-free. We always knew where the project stood and what came next.", name: "Carlos Mendes", role: "COO", company: "Atlas Logistics", initials: "CM" },
    { quote: "When we spotted suspicious activity at 2am, their team was already on it. Calm, fast and professional — exactly what you want in a crisis.", name: "Hannah Cole", role: "VP Engineering", company: "Vault & Co.", initials: "HC", metric: "11 min response" }
  ];
  var faqs = [
    { cat: "General", q: "What does Triple Crown do?", a: "We design and build high-performance websites and web applications, and we protect them — and the businesses behind them — with penetration testing, managed monitoring, compliance support and incident response. One accountable team handles both sides." },
    { cat: "General", q: "Why does a web developer also offer cybersecurity?", a: "Because most breaches start with how software is built. Having engineers and security specialists working side by side means vulnerabilities are prevented during design and development rather than discovered after launch." },
    { cat: "General", q: "What industries do you work with?", a: "Fintech, healthcare, e-commerce, logistics, education, professional services and SaaS. We're especially strong where trust, privacy and uptime matter most." },
    { cat: "General", q: "Do you work with clients outside your home region?", a: "Yes. We collaborate with clients worldwide and overlap working hours with your team. Our monitoring and incident response services operate 24/7." },
    { cat: "Web Development", q: "How long does a typical website take?", a: "Marketing sites usually take 4–8 weeks. Custom web applications and e-commerce builds range from 8–20 weeks depending on scope. We give you a fixed roadmap after discovery." },
    { cat: "Web Development", q: "Will I be able to update the site myself?", a: "Absolutely. We pair your site with a user-friendly CMS and train your team. You stay in control of content while we handle the engineering." },
    { cat: "Web Development", q: "Do you offer ongoing maintenance?", a: "Yes. Care plans cover updates, backups, uptime monitoring, performance checks and priority support so your site stays fast, current and secure." },
    { cat: "Cybersecurity", q: "What happens if we're hit by an incident?", a: "Call our 24/7 incident line. We help contain the threat, preserve evidence, restore operations and run a post-incident review so you're stronger afterwards." },
    { cat: "Pricing & Process", q: "How do you price projects?", a: "Most projects are fixed-price against a defined scope, so there are no surprises. Ongoing work such as monitoring and support is a predictable monthly retainer. Every proposal is itemised and transparent." },
    { cat: "Pricing & Process", q: "How do we get started?", a: "Send us a message or book a free consultation. We'll discuss your goals, review any existing systems and return with a clear proposal, timeline and cost within a few business days." },
    { cat: "Pricing & Process", q: "Who owns the code and designs?", a: "You do. Upon final payment, all code, designs and documentation transfer fully to you. No lock-in, ever." }
  ];
  var stack = ["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS", "Azure", "Cloudflare", "Docker", "Kubernetes", "Shopify", "Stripe", "Terraform"];

  // illos.js
  var ringSeq = 0;
  function scoreRing(value, size = 64, stroke = 5) {
    const id = `ring-${++ringSeq}`;
    const r = (size - stroke) / 2;
    const c = 2 * Math.PI * r;
    const off = (c * (1 - value / 100)).toFixed(1);
    return `<div style="position:relative;flex-shrink:0;width:${size}px;height:${size}px">
    <svg width="${size}" height="${size}" style="transform:rotate(-90deg)">
      <defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#3B82F6"/><stop offset="1" stop-color="#06B6D4"/>
      </linearGradient></defs>
      <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="rgba(59,130,246,0.22)" stroke-width="${stroke}"/>
      <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="url(#${id})" stroke-width="${stroke}" stroke-linecap="round" stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${off}"/>
    </svg>
    <span style="position:absolute;inset:0;display:grid;place-items:center;font-family:var(--font-display);font-weight:700;color:#fff;font-size:${Math.round(size * 0.3)}px">${value}</span>
  </div>`;
  }
  var winBar = (url, light = false) => `
  <div class="win-bar">
    <span class="dot dot-a"></span><span class="dot dot-b"></span><span class="dot dot-c"></span>
    <span class="url-bar">${icon("lock")}${url}</span>
  </div>`;
  function heroVisual() {
    const bars = [38, 56, 44, 70, 52, 84, 66, 92];
    return scale(
      560,
      540,
      `<div class="stage">
      <div class="stage-glow" style="left:60px;top:60px;width:440px;height:440px;background:rgba(37,99,235,.35)"></div>
      <svg viewBox="0 0 560 540" style="position:absolute;inset:0;width:100%;height:100%" fill="none">
        <g class="spin-slow" style="transform-origin:280px 270px">
          <circle cx="280" cy="270" r="255" stroke="rgba(59,130,246,0.3)" stroke-dasharray="3 9"/>
          <circle cx="535" cy="270" r="5" fill="#3B82F6"/><circle cx="40" cy="183" r="4" fill="#06B6D4"/><circle cx="152" cy="491" r="4" fill="#60A5FA"/>
        </g>
        <circle cx="280" cy="270" r="205" stroke="rgba(59,130,246,0.14)"/>
      </svg>

      <div class="glass-dark glow-blue" style="position:absolute;left:6px;top:14px;z-index:20;width:84px;height:84px;border-radius:16px;display:flex;align-items:center;justify-content:center">
        ${logo("mark", "", "Triple Crown").replace("<svg", '<svg style="width:54px;filter:drop-shadow(0 0 14px rgba(59,130,246,.7))"')}
      </div>

      <div class="win float-slow" style="left:30px;top:84px;width:410px;z-index:10">
        ${winBar("triplecrown.dev")}
        <div style="display:flex;gap:20px;padding:20px">
          <div style="width:190px">
            <div style="height:20px;width:96px;border-radius:99px;border:1px solid rgba(59,130,246,.3);background:rgba(59,130,246,.2)"></div>
            <div style="margin-top:12px;height:14px;border-radius:4px;background:rgba(255,255,255,.9)"></div>
            <div style="margin-top:8px;height:14px;width:80%;border-radius:4px;background:rgba(255,255,255,.9)"></div>
            <div style="margin-top:8px;height:14px;width:60%;border-radius:4px;background:linear-gradient(90deg,var(--electric),var(--cyan))"></div>
            <div style="margin-top:16px;display:flex;flex-direction:column;gap:6px">
              <div style="height:6px;border-radius:99px;background:rgba(255,255,255,.15)"></div>
              <div style="height:6px;width:92%;border-radius:99px;background:rgba(255,255,255,.15)"></div>
              <div style="height:6px;width:75%;border-radius:99px;background:rgba(255,255,255,.15)"></div>
            </div>
            <div style="margin-top:16px;display:flex;gap:8px">
              <div style="height:28px;width:80px;border-radius:8px;background:var(--brand)"></div>
              <div style="height:28px;width:64px;border-radius:8px;border:1px solid rgba(255,255,255,.15)"></div>
            </div>
          </div>
          <div style="flex:1;border-radius:12px;border:1px solid rgba(255,255,255,.05);background:rgba(11,18,32,.6);padding:12px">
            <div style="font-size:9px;text-transform:uppercase;letter-spacing:.08em;color:var(--slate-500)">Visitors</div>
            <div style="font-family:var(--font-display);font-size:18px;font-weight:700;color:#fff">48.2k</div>
            <div style="margin-top:8px;display:flex;height:84px;align-items:flex-end;gap:6px">
              ${bars.map((h, i) => `<div style="flex:1;border-radius:4px 4px 0 0;background:linear-gradient(180deg,var(--electric),var(--brand));height:${h}%;opacity:${(0.55 + i * 0.06).toFixed(2)}"></div>`).join("")}
            </div>
          </div>
        </div>
      </div>

      <div class="chip-card glass-dark float" style="left:326px;top:10px;width:218px;box-sizing:border-box">
        <div style="display:flex;align-items:center;gap:12px">
          <span class="bg-blue-cyan" style="display:flex;width:40px;height:40px;align-items:center;justify-content:center;border-radius:12px;color:#fff;box-shadow:0 10px 20px -8px rgba(37,99,235,.5)">${icon("shield", "", 1.8).replace("<svg", '<svg style="width:20px;height:20px"')}</span>
          <span>
            <span style="display:block;font-size:11px;color:var(--slate-400)">Threats blocked</span>
            <span style="display:block;font-family:var(--font-display);font-size:20px;font-weight:700;line-height:1.2;color:#fff">12,408</span>
          </span>
        </div>
        <svg viewBox="0 0 180 34" style="margin-top:12px;height:32px;width:100%" fill="none">
          <defs><linearGradient id="hv-spark" x1="0" x2="1"><stop offset="0" stop-color="#3B82F6"/><stop offset="1" stop-color="#06B6D4"/></linearGradient></defs>
          <path d="M2 28 L22 22 L40 25 L60 14 L80 19 L100 9 L122 15 L142 6 L160 10 L178 3" stroke="url(#hv-spark)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div style="margin-top:4px;font-size:10px;color:var(--slate-500)">Last 24 hours · 0 breaches</div>
      </div>

      <div class="chip-card glass-dark float-slow" style="left:0;top:392px;width:190px;box-sizing:border-box;display:flex;align-items:center;gap:12px;animation-delay:-3s">
        ${scoreRing(100, 56)}
        <span>
          <span style="display:block;font-size:11px;color:var(--slate-400)">Lighthouse</span>
          <span style="display:block;font-family:var(--font-display);font-size:14px;font-weight:600;color:#fff">Performance</span>
        </span>
      </div>

      <div class="chip-card glass-dark float" style="left:208px;top:396px;width:336px;box-sizing:border-box;font-family:var(--font-mono);font-size:11px;line-height:1.7">
        <div style="color:#fff"><span style="color:var(--electric)">$</span> tc scan --target production</div>
        <div style="color:var(--slate-300)"><span style="color:var(--cyan)">✓</span> 0 critical · 0 high · TLS 1.3</div>
        <div style="color:var(--slate-300)"><span style="color:var(--cyan)">✓</span> Headers hardened · WAF active</div>
        <div style="color:var(--slate-400)"><span style="color:var(--electric)">$</span> <span class="caret blink"></span></div>
      </div>
    </div>`
    );
  }
  function webDevVisual() {
    const code = `<span style="color:var(--slate-500)">// every response ships hardened</span>
<span style="color:#60A5FA">export function</span> <span style="color:#fff">secure</span>(res) {
  res.headers.<span style="color:#fff">set</span>(<span style="color:#93C5FD">"Content-Security-Policy"</span>, csp);
  res.headers.<span style="color:#fff">set</span>(<span style="color:#93C5FD">"Strict-Transport-Security"</span>, hsts);
  <span style="color:#60A5FA">return</span> res;
}`;
    return scale(
      540,
      470,
      `<div class="stage">
      <div class="stage-glow" style="left:80px;top:40px;width:360px;height:360px;background:rgba(37,99,235,.3)"></div>

      <div class="win light float-slow" style="left:0;top:24px;width:400px;z-index:10">
        ${winBar("yourbrand.com", true)}
        <div style="padding:20px">
          <div style="display:flex;align-items:center;justify-content:space-between">
            <div style="height:12px;width:64px;border-radius:4px;background:var(--navy)"></div>
            <div style="display:flex;gap:12px">
              <span style="height:8px;width:32px;border-radius:99px;background:var(--slate-300)"></span>
              <span style="height:8px;width:32px;border-radius:99px;background:var(--slate-300)"></span>
              <span style="height:8px;width:32px;border-radius:99px;background:var(--slate-300)"></span>
            </div>
          </div>
          <div style="margin-top:20px;display:grid;grid-template-columns:1.1fr .9fr;gap:16px">
            <div>
              <div style="height:16px;border-radius:4px;background:var(--navy)"></div>
              <div style="margin-top:8px;height:16px;width:75%;border-radius:4px;background:var(--brand)"></div>
              <div style="margin-top:16px;height:6px;border-radius:99px;background:var(--line)"></div>
              <div style="margin-top:6px;height:6px;width:84%;border-radius:99px;background:var(--line)"></div>
              <div style="margin-top:16px;height:28px;width:96px;border-radius:8px;background:var(--brand)"></div>
            </div>
            <div class="bg-brand-gradient" style="height:110px;border-radius:12px"></div>
          </div>
          <div style="margin-top:20px;display:grid;grid-template-columns:repeat(3,1fr);gap:12px">
            ${[0, 1, 2].map(
        () => `<div style="border-radius:8px;border:1px solid var(--line);background:var(--ice);padding:10px">
                  <div style="margin-bottom:8px;width:20px;height:20px;border-radius:6px;background:rgba(37,99,235,.2)"></div>
                  <div style="height:6px;border-radius:99px;background:var(--slate-300)"></div>
                  <div style="margin-top:6px;height:6px;width:66%;border-radius:99px;background:var(--line)"></div>
                </div>`
      ).join("")}
          </div>
        </div>
      </div>

      <div class="float" style="position:absolute;left:130px;top:210px;z-index:10;width:400px;border-radius:16px;border:1px solid rgba(59,130,246,.3);background:var(--navy-800);box-shadow:0 30px 70px -20px rgba(0,0,0,.9);overflow:hidden;animation-delay:-2s">
        <div class="win-bar" style="height:36px">
          <span class="dot dot-a"></span><span class="dot dot-b"></span><span class="dot dot-c"></span>
          <span style="margin-left:8px;font-family:var(--font-mono);font-size:10px;color:var(--slate-400)">middleware.ts</span>
        </div>
        <pre style="margin:0;padding:16px;font-family:var(--font-mono);font-size:11px;line-height:1.75;color:var(--slate-200);overflow:hidden">${code}</pre>
      </div>

      <div class="chip-card glass-dark float-slow" style="left:330px;top:0;display:flex;align-items:center;gap:12px">
        ${scoreRing(100, 48, 4)}
        <span>
          <span style="display:block;font-size:10px;color:var(--slate-400)">Core Web Vitals</span>
          <span style="display:block;font-family:var(--font-display);font-size:12px;font-weight:600;color:#fff">All passing</span>
        </span>
      </div>

      <div class="chip-card glass-dark float" style="left:8px;top:400px;display:flex;align-items:center;gap:10px;animation-delay:-4s;padding:12px 16px">
        ${icon("rocket").replace("<svg", '<svg style="width:16px;height:16px;color:var(--electric)"')}
        <span style="font-size:12px;font-weight:500;color:#fff">Deployed to production</span>
        ${icon("check-circle").replace("<svg", '<svg style="width:16px;height:16px;color:var(--cyan)"')}
      </div>
    </div>`
    );
  }
  function shieldGraphic() {
    const chip = (style, ic, color, title, sub) => `
    <div class="chip-card glass-dark" style="position:absolute;z-index:20;display:flex;align-items:center;gap:10px;padding:10px 14px;${style}">
      ${icon(ic).replace("<svg", `<svg style="width:16px;height:16px;color:${color};flex-shrink:0"`)}
      <span>
        <span style="display:block;font-size:11px;font-weight:600;color:#fff">${title}</span>
        <span style="display:block;font-size:10px;color:var(--slate-400)">${sub}</span>
      </span>
    </div>`;
    const blips = [
      [90, 120],
      [380, 150],
      [350, 370],
      [110, 340]
    ].map(
      ([x, y], i) => `<span style="position:absolute;left:${x}px;top:${y}px">
        <span style="position:absolute;inset:-4px;border-radius:99px;background:rgba(6,182,212,.6);animation:pulse-ring-anim 2.8s cubic-bezier(.2,.6,.3,1) infinite;animation-delay:${i * 0.7}s"></span>
        <span style="position:relative;display:block;width:8px;height:8px;border-radius:99px;background:var(--cyan)"></span>
      </span>`
    ).join("");
    return scale(
      540,
      520,
      `<div class="stage">
      <div class="stage-glow" style="left:110px;top:100px;width:320px;height:320px;background:rgba(37,99,235,.4)"></div>
      <div style="position:absolute;left:30px;top:20px;width:480px;height:480px">
        <svg viewBox="0 0 480 480" style="position:absolute;inset:0" fill="none">
          <circle cx="240" cy="240" r="238" stroke="rgba(59,130,246,0.3)"/>
          <circle cx="240" cy="240" r="180" stroke="rgba(59,130,246,0.22)"/>
          <circle cx="240" cy="240" r="122" stroke="rgba(59,130,246,0.16)"/>
          <path d="M240 2 V478 M2 240 H478" stroke="rgba(59,130,246,0.1)"/>
        </svg>
        <div style="position:absolute;inset:2px;border-radius:999px;animation:spin 7s linear infinite;background:conic-gradient(from 0deg, transparent 0deg, transparent 300deg, rgba(6,182,212,0.28) 358deg, rgba(6,182,212,0.5) 360deg)"></div>
        ${blips}
      </div>

      <div class="float" style="position:absolute;left:150px;top:110px;z-index:10;width:240px;height:300px">
        <svg viewBox="0 0 200 250" style="position:absolute;inset:0;width:100%;height:100%;filter:drop-shadow(0 0 40px rgba(37,99,235,.6))">
          <defs>
            <linearGradient id="sg-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1E3A8A"/><stop offset="1" stop-color="#0B1220"/></linearGradient>
            <linearGradient id="sg-stroke" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#60A5FA"/><stop offset="0.6" stop-color="#2563EB"/><stop offset="1" stop-color="#06B6D4"/></linearGradient>
          </defs>
          <path d="M100 6 L186 38 V120 C186 178 150 220 100 244 C50 220 14 178 14 120 V38 Z" fill="url(#sg-fill)" stroke="url(#sg-stroke)" stroke-width="3"/>
          <path d="M100 22 L172 48 V120 C172 170 142 206 100 227 C58 206 28 170 28 120 V48 Z" fill="none" stroke="rgba(96,165,250,0.25)"/>
        </svg>
        ${logo("mark", "", "Triple Crown").replace("<svg", '<svg style="position:absolute;left:50%;top:52%;width:112px;transform:translate(-50%,-50%)"')}
      </div>

      ${chip("left:0;top:56px", "bug", "var(--electric)", "SQL injection blocked", "/api/v2/search")}
      ${chip("right:0;top:150px", "zap", "var(--electric)", "DDoS mitigated", "2.4 Gbps · edge scrubbed")}
      ${chip("left:6px;top:372px", "lock", "var(--electric)", "Brute-force banned", "184 IPs · auto-block")}
      ${chip("right:16px;top:440px", "siren", "var(--cyan)", "Response: 11 min", "SOC analyst engaged")}
    </div>`
    );
  }
  function mockBar(light = false) {
    return `<div class="mock-bar"><i></i><i></i><i></i></div>`;
  }
  function thumb(kind, style = "") {
    let inner = "";
    if (kind === "fintech") {
      inner = `<div class="mock-win">${mockBar()}<div style="padding:12px">
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
        ${["$2.4M", "+12.4%", "98.2"].map(
        (v, i) => `<div style="border-radius:6px;border:1px solid rgba(255,255,255,.05);background:rgba(255,255,255,.05);padding:8px">
              <div style="height:4px;width:32px;border-radius:99px;background:rgba(255,255,255,.2)"></div>
              <div style="margin-top:6px;font-family:var(--font-display);font-size:12px;font-weight:700;color:${i === 1 ? "var(--cyan)" : "#fff"}">${v}</div>
            </div>`
      ).join("")}
      </div>
      <svg viewBox="0 0 300 90" preserveAspectRatio="none" style="margin-top:12px;height:72px;width:100%" fill="none">
        <defs><linearGradient id="ft-a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3B82F6" stop-opacity="0.5"/><stop offset="1" stop-color="#3B82F6" stop-opacity="0"/></linearGradient></defs>
        <path d="M0 70 C30 60 50 66 80 50 S130 55 160 36 S220 40 250 20 L300 10 V90 H0Z" fill="url(#ft-a)"/>
        <path d="M0 70 C30 60 50 66 80 50 S130 55 160 36 S220 40 250 20 L300 10" stroke="#60A5FA" stroke-width="2"/>
      </svg></div></div>`;
    } else if (kind === "store") {
      inner = `<div class="mock-win light">${mockBar(true)}<div style="padding:12px">
      <div style="display:flex;align-items:center;justify-content:space-between">
        <div style="height:8px;width:48px;border-radius:99px;background:var(--navy)"></div>
        <div style="height:8px;width:24px;border-radius:99px;background:var(--brand)"></div>
      </div>
      <div style="margin-top:12px;display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
        ${["linear-gradient(135deg,var(--brand),var(--deep))", "linear-gradient(135deg,var(--electric),var(--brand))", "linear-gradient(135deg,var(--ice),#bfdbfe)"].map(
        (g) => `<div>
              <div style="aspect-ratio:4/5;border-radius:6px;background:${g}"></div>
              <div style="margin-top:6px;height:6px;width:75%;border-radius:99px;background:var(--slate-300)"></div>
              <div style="margin-top:4px;height:6px;width:33%;border-radius:99px;background:var(--brand)"></div>
            </div>`
      ).join("")}
      </div></div></div>`;
    } else if (kind === "health") {
      inner = `<div class="mock-win">${mockBar()}<div style="display:flex;gap:12px;padding:12px">
      <div>
        ${scoreRing(86, 50, 5)}
        <div style="margin-top:8px;height:6px;width:48px;border-radius:99px;background:rgba(255,255,255,.2)"></div>
      </div>
      <div style="flex:1;display:flex;flex-direction:column;gap:8px">
        ${[70, 55, 82].map(
        (w) => `<div style="display:flex;align-items:center;gap:8px;border-radius:6px;border:1px solid rgba(255,255,255,.05);background:rgba(255,255,255,.05);padding:8px">
              <span style="width:16px;height:16px;border-radius:99px;background:rgba(59,130,246,.4);flex-shrink:0"></span>
              <span style="flex:1">
                <span style="display:block;height:6px;border-radius:99px;background:rgba(255,255,255,.3);width:${w}%"></span>
                <span style="display:block;margin-top:4px;height:4px;width:33%;border-radius:99px;background:rgba(255,255,255,.15)"></span>
              </span>
              ${icon("shield").replace("<svg", '<svg style="width:12px;height:12px;color:var(--cyan)"')}
            </div>`
      ).join("")}
      </div></div></div>`;
    } else if (kind === "logistics") {
      inner = `<div class="mock-win">${mockBar()}<div style="position:relative;height:100%">
      <div style="position:absolute;inset:0;opacity:.6;background-image:radial-gradient(rgba(96,165,250,.45) 1px, transparent 1.5px);background-size:14px 14px"></div>
      <svg viewBox="0 0 300 140" preserveAspectRatio="none" style="position:absolute;inset:0;width:100%;height:100%" fill="none">
        <path d="M20 110 C70 90 90 40 140 60 S220 100 280 30" stroke="#3B82F6" stroke-width="2.5" stroke-dasharray="5 5"/>
        <circle cx="20" cy="110" r="5" fill="#60A5FA"/><circle cx="140" cy="60" r="5" fill="#06B6D4"/><circle cx="280" cy="30" r="5" fill="#fff"/>
      </svg>
      <div style="position:absolute;left:8px;right:8px;bottom:8px;display:flex;gap:8px">
        ${[0, 1, 2].map(
        () => `<div style="flex:1;border-radius:6px;border:1px solid rgba(255,255,255,.1);background:rgba(11,18,32,.85);padding:6px">
              <div style="height:4px;width:24px;border-radius:99px;background:rgba(255,255,255,.3)"></div>
              <div style="margin-top:4px;height:6px;width:40px;border-radius:99px;background:rgba(59,130,246,.6)"></div>
            </div>`
      ).join("")}
      </div></div></div>`;
    } else if (kind === "audit") {
      const rows = [
        ["Critical", 92],
        ["High", 74],
        ["Medium", 52],
        ["Low", 30]
      ];
      inner = `<div class="mock-win">${mockBar()}<div style="padding:12px;display:flex;flex-direction:column;gap:6px">
      ${rows.map(
        ([l, w], i) => `<div style="display:flex;align-items:center;gap:8px">
            <span style="width:40px;font-family:var(--font-mono);font-size:8px;text-transform:uppercase;color:var(--slate-400)">${l}</span>
            <span style="height:8px;flex:1;overflow:hidden;border-radius:99px;background:rgba(255,255,255,.05)">
              <span style="display:block;height:100%;border-radius:99px;background:${i === 0 ? "linear-gradient(90deg,var(--brand),var(--cyan))" : "linear-gradient(90deg,var(--brand),var(--electric))"};width:${w}%;opacity:${1 - i * 0.14}"></span>
            </span>
            ${icon("bug").replace("<svg", '<svg style="width:12px;height:12px;color:rgba(59,130,246,.7)"')}
          </div>`
      ).join("")}
      <div style="margin-top:8px;display:flex;align-items:center;gap:6px;border-radius:6px;border:1px solid rgba(6,182,212,.25);background:rgba(6,182,212,.1);padding:6px 8px;font-size:9px;font-weight:500;color:var(--cyan)">
        ${icon("check-circle").replace("<svg", '<svg style="width:12px;height:12px"')} Retest passed · all fixed
      </div></div></div>`;
    } else if (kind === "brand") {
      inner = `<div class="mock-win light">${mockBar(true)}<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;padding:12px;height:100%;box-sizing:border-box">
      <div>
        <div style="height:12px;border-radius:4px;background:var(--navy)"></div>
        <div style="margin-top:6px;height:12px;width:66%;border-radius:4px;background:var(--navy)"></div>
        <div style="margin-top:12px;height:6px;border-radius:99px;background:var(--line)"></div>
        <div style="margin-top:4px;height:6px;width:80%;border-radius:99px;background:var(--line)"></div>
        <div style="margin-top:12px;height:6px;width:25%;border-radius:99px;background:var(--brand)"></div>
      </div>
      <div style="display:grid;grid-template-rows:1.4fr 1fr;gap:8px">
        <div style="border-radius:6px;background:linear-gradient(135deg,var(--deep),var(--brand))"></div>
        <div style="border-radius:6px;background:linear-gradient(135deg,var(--ice),#93c5fd)"></div>
      </div></div></div>`;
    } else if (kind === "soc") {
      const cells = Array.from({ length: 36 }).map((_, i) => `<span style="aspect-ratio:1;border-radius:2px;background:var(--electric);opacity:${[0.12, 0.2, 0.35, 0.55, 0.8][(i * 7 + i % 5 * 3) % 5]}"></span>`).join("");
      inner = `<div class="mock-win">${mockBar()}<div style="padding:12px">
      <div style="display:flex;align-items:center;justify-content:space-between">
        <span style="display:flex;align-items:center;gap:6px;font-size:9px;font-weight:500;color:var(--slate-300)">
          <span class="pulse-dot" style="width:6px;height:6px"><span class="pulse-ring"></span><span class="pulse-core" style="width:6px;height:6px"></span></span>
          LIVE · 24/7
        </span>
        ${icon("activity").replace("<svg", '<svg style="width:12px;height:12px;color:var(--electric)"')}
      </div>
      <div style="margin-top:10px;display:grid;grid-template-columns:repeat(12,1fr);gap:4px">${cells}</div>
    </div></div>`;
    } else if (kind === "learning") {
      inner = `<div class="mock-win light">${mockBar(true)}<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;padding:12px">
      ${[72, 45, 90, 20].map(
        (p, i) => `<div style="border-radius:8px;border:1px solid var(--line);background:var(--ice);padding:8px">
            <div style="height:36px;border-radius:6px;background:${i % 2 ? "linear-gradient(135deg,var(--electric),var(--brand))" : "linear-gradient(135deg,var(--brand),var(--deep))"}"></div>
            <div style="margin-top:6px;height:6px;width:75%;border-radius:99px;background:var(--slate-300)"></div>
            <div style="margin-top:6px;height:4px;overflow:hidden;border-radius:99px;background:var(--line)">
              <span style="display:block;height:100%;background:var(--brand);width:${p}%"></span>
            </div>
          </div>`
      ).join("")}
    </div></div>`;
    }
    return `<span class="thumb thumb-${kind}" style="display:block;${style}">${inner}</span>`;
  }
  function terminal(title, lines) {
    const body = lines.map((l, i) => {
      let inner = "";
      if (l.t === "cmd") inner = `<span class="cmd-p">$ </span><span class="cmd-t">${l.text}</span>`;
      else if (l.t === "ok") inner = `<span class="ok">✓ </span>${l.text}`;
      else if (l.t === "warn") inner = `<span class="warn-i">▲ </span><span class="warn-t">${l.text}</span>`;
      else if (l.t === "info") inner = `<span class="info">${l.text}</span>`;
      else inner = l.text;
      return `<div class="term-line fade-up" style="--d:${i * 140}ms">${inner}</div>`;
    }).join("");
    return `<div class="terminal">
    <div class="term-bar"><span class="dot dot-a"></span><span class="dot dot-b"></span><span class="dot dot-c"></span><span class="term-title">${title}</span></div>
    <div class="term-body">${body}<div class="term-line"><span class="cmd-p">$ </span><span class="caret blink"></span></div></div>
  </div>`;
  }

  // components.js
  var VIEWBOX = { mark: "300 110 630 755", stacked: "200 110 850 990", horiz: "-6 -8 1262 352" };
  var logo = (variant, cls = "", label = "Triple Crown") => `<svg viewBox="${VIEWBOX[variant]}" class="${cls}" role="img" aria-label="${label}"><use href="#logo${variant === "mark" ? "Mark" : variant === "stacked" ? "Stacked" : "Horiz"}"/></svg>`;
  var eyebrow = (text, dark = false) => `<span class="eyebrow${dark ? " on-dark" : ""}">${text}</span>`;
  function sectionHead({ eyebrow: eb, title, desc, center = false, dark = false }) {
    return `<div class="sec-head${center ? " center" : ""}">
    ${eb ? eyebrow(eb, dark) : ""}
    <h2 class="sec-title${eb ? " has-eyebrow" : ""}">${title}</h2>
    ${desc ? `<p class="sec-desc">${desc}</p>` : ""}
  </div>`;
  }
  function btn(href, label, opts = {}) {
    const { variant = "primary", size = "", arrow = false, cls = "", attrs = "" } = opts;
    return `<a href="${href}" class="btn btn-${variant}${size ? " btn-" + size : ""} ${cls}" ${attrs}>${label}${arrow ? icon("arrow-right", "arr") : ""}</a>`;
  }
  var textLink = (href, label, dark = false) => `<a href="${href}" class="text-link${dark ? " on-dark" : ""}">${label}${icon("arrow-right")}</a>`;
  var iconBox = (name, opts = {}) => `<span class="icon-box${opts.dark ? " dark" : ""}${opts.cyan ? " cyan" : ""}">${icon(name)}</span>`;
  var checkList = (items, dark = false, cls = "") => `<ul class="check-list${dark ? " on-dark" : ""} ${cls}">${items.map((it) => `<li><span class="tick">${icon("check", "", 2.6)}</span>${it}</li>`).join("")}</ul>`;
  var pill = (text, dark = false, cls = "") => `<span class="pill${dark ? " on-dark" : ""} ${cls}">${text}</span>`;
  var stat = (value, label, dark = false) => `<div class="${dark ? "on-dark-stat" : ""}"><div class="stat-num">${value}</div><div class="stat-label">${label}</div></div>`;
  function section(tone, inner, opts = {}) {
    const dark = tone === "dark" || tone === "darker";
    const decor = dark ? `<div class="dark-glow"></div><div class="grid-bg-dark"></div>` : tone === "ice" ? `<div class="grid-bg-light"></div>` : "";
    return `<section class="section ${tone ? "tone-" + tone : ""} ${opts.cls || ""}">${decor}<div class="container">${inner}</div></section>`;
  }
  function pageHero({ route, label, eyebrow: eb, title, desc, actions = "", visual = "", extra = "" }) {
    return `<section class="page-hero">
    <div class="page-hero-bg"></div><div class="grid-bg-dark"></div>
    ${visual ? "" : `<div class="hero-watermark-glow"></div>${logo("mark", "hero-watermark")}`}
    <div class="page-hero-line"></div>
    <div class="container page-hero-inner">
      <div class="${visual ? "page-hero-cols" : ""}">
        <div class="${visual ? "" : "narrow"}">
          <nav class="breadcrumb fade-up" aria-label="Breadcrumb"><a href="#/">Home</a><span class="sep">/</span><span class="current">${label}</span></nav>
          <div class="fade-up" style="--d:60ms">${eyebrow(eb, true)}</div>
          <h1 class="page-title fade-up" style="--d:120ms">${title}</h1>
          <p class="hero-sub fade-up" style="--d:200ms;max-width:36rem">${desc}</p>
          ${actions ? `<div class="hero-actions fade-up" style="--d:280ms">${actions}</div>` : ""}
        </div>
        ${visual ? `<div class="fade-up" style="--d:220ms">${visual}</div>` : ""}
      </div>
      ${extra}
    </div>
  </section>`;
  }
  function ctaBand(opts = {}) {
    const tone = opts.tone || "white";
    const title = opts.title || "Ready to build something that lasts?";
    const desc = opts.desc || "Tell us about your project. We'll respond within one business day with a clear plan, timeline and next steps — no obligation.";
    const primary = opts.primary || "Start Your Project";
    const sec = opts.secondary || { href: "#/services", label: "Explore Services" };
    return `<section class="section-sm ${tone === "ice" ? "tone-ice" : ""}" style="padding-top:${tone === "ice" ? "64px" : "64px"}">
    <div class="container">
      <div class="cta-band bg-brand-gradient">
        <div class="grid-bg-dark" style="opacity:.7"></div>
        <div class="cta-glow"></div>
        ${logo("mark", "cta-logo")}
        <div class="cta-content">
          <h2 class="cta-title">${title}</h2>
          <p class="cta-desc">${desc}</p>
          <div class="cta-actions">
            ${btn("#/contact", primary, { variant: "white", size: "lg", arrow: true })}
            ${btn(sec.href, sec.label, { variant: "secondary", size: "lg" })}
          </div>
        </div>
      </div>
    </div>
  </section>`;
  }
  function processHTML(dark = false) {
    return `<div class="process-grid">
    <div class="process-line${dark ? "" : " light"}"></div>
    ${processSteps.map(
      (s) => `<div>
          <div class="process-num${dark ? " dark" : ""}">${s.n}</div>
          <h3 class="process-title">${s.title}</h3>
          <p class="process-text">${s.text}</p>
        </div>`
    ).join("")}
  </div>`;
  }
  function stackMarquee() {
    const items = [...stack, ...stack].map((s) => `<span class="marquee-item">${s}<span class="marquee-dot"></span></span>`).join("");
    return `<div class="marquee-band"><div class="marquee-track">${items}</div></div>`;
  }
  var stars = (cls = "") => `<div class="stars ${cls}" role="img" aria-label="5 out of 5 stars">${starIcon().repeat(5)}</div>`;
  function monogram(initials, i, size, fontSize, crownBadge = false) {
    return `<div class="avatar av-${i % 6}" style="width:${size}px;height:${size}px;font-size:${fontSize}px"><span>${initials}</span>${crownBadge ? icon("crown", "team-crown") : ""}</div>`;
  }
  var scale = (w, h, inner) => `<div class="scale-wrap" data-w="${w}" data-h="${h}" style="max-width:${w}px"><div class="scale-stage" style="width:${w}px;height:${h}px">${inner}</div></div>`;
  function projectCard(p) {
    return `<button type="button" class="project-card" data-project="${p.id}">
    <span style="position:relative;display:block">${thumb(p.kind)}<span class="project-open">${icon("arrow-up-right")}</span></span>
    <span class="project-body">
      <span class="project-meta">${pill(p.category)}<span class="project-client">${p.name}</span></span>
      <span class="project-title">${p.title}</span>
      <span class="project-summary">${p.summary}</span>
      <span class="project-results">
        ${p.results.slice(0, 2).map(([v, l]) => `<span><span class="result-num">${v}</span><br/><span class="result-label">${l}</span></span>`).join("")}
      </span>
    </span>
  </button>`;
  }
  function testimonialCard(t, i, dark = false) {
    return `<figure class="testimonial-card${dark ? " dark" : ""}" style="margin:0">
    <div style="display:flex;align-items:center;justify-content:space-between">${stars()}${icon("quote", "quote-icon")}</div>
    <blockquote class="testimonial-quote">“${t.quote}”</blockquote>
    ${t.metric ? `<div style="margin-top:20px">${pill(t.metric, dark)}</div>` : ""}
    <figcaption class="testimonial-foot">
      ${monogram(t.initials, i, 44, 14)}
      <span>
        <span style="display:block;font-size:14px;font-weight:600;${dark ? "color:#fff" : "color:var(--navy)"}">${t.name}</span>
        <span style="display:block;font-size:12px;${dark ? "color:var(--slate-400)" : "color:var(--slate-500)"}">${t.role}, ${t.company}</span>
      </span>
    </figcaption>
  </figure>`;
  }
  function modalHTML(p) {
    return `<div class="modal-overlay" id="modalOverlay">
    <div class="modal-box page-enter" role="dialog" aria-modal="true" aria-label="${p.name} case study">
      <button type="button" class="modal-close" id="modalClose" aria-label="Close case study">${icon("x")}</button>
      ${thumb(p.kind, "aspect-ratio:16/7")}
      <div class="modal-body">
        <div style="display:flex;flex-wrap:wrap;align-items:center;gap:12px">
          ${pill(p.category)}<span style="font-size:14px;font-weight:500;color:var(--slate-500)">${p.name}</span>
        </div>
        <h2 style="margin-top:16px;font-family:var(--font-display);font-size:28px;font-weight:700;letter-spacing:-0.02em;color:var(--navy)">${p.title}</h2>
        <p style="margin-top:12px;font-size:16px;line-height:1.65;color:var(--slate-600)">${p.summary}</p>
        <div class="grid-2" style="margin-top:32px;gap:24px">
          <div>
            <div style="font-size:12px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--brand)">The challenge</div>
            <p style="margin-top:8px;font-size:15px;line-height:1.7;color:var(--slate-700)">${p.challenge}</p>
          </div>
          <div>
            <div style="font-size:12px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--brand)">Our solution</div>
            <p style="margin-top:8px;font-size:15px;line-height:1.7;color:var(--slate-700)">${p.solution}</p>
          </div>
        </div>
        <div class="modal-results">
          ${p.results.map(([v, l]) => `<span><span class="result-num">${v}</span><br/><span class="result-label">${l}</span></span>`).join("")}
        </div>
        <div style="margin-top:24px;display:flex;flex-wrap:wrap;gap:8px">${p.tags.map((t) => pill(t)).join("")}</div>
        <div style="margin-top:32px;display:flex;flex-wrap:wrap;gap:12px">
          ${btn("#/contact", "Start a similar project", { arrow: true, attrs: 'data-modal-close="1"' })}
          <button type="button" class="btn btn-outline" data-modal-close="1">Close</button>
        </div>
      </div>
    </div>
  </div>`;
  }

  // pages.js
  var cardTitle = (t) => `font-family:var(--font-display);font-size:20px;font-weight:600;color:var(--navy)`;
  var cardText = `margin-top:12px;font-size:15px;line-height:1.65;color:var(--slate-600)`;
  function HomePage() {
    const pillars = [
      { icon: "code", n: "01", title: "Build", text: "Elegant, high-performance websites and applications engineered by senior developers and designers.", points: ["Custom design & engineering", "Accessible, SEO-ready, blazing fast", "Scalable architecture"] },
      { icon: "shield", n: "02", title: "Secure", text: "Security is designed in from day one, then proven by independent attacker-style testing.", points: ["Threat modelling & secure code", "Penetration testing before launch", "24/7 monitoring & response"] },
      { icon: "rocket", n: "03", title: "Scale", text: "We stay with you after launch — optimising, monitoring and evolving as your business grows.", points: ["Performance & uptime care plans", "Compliance-ready foundations", "A long-term technology partner"] }
    ];
    const hero = `<section class="hero">
    <div class="hero-bg"></div><div class="grid-bg-dark"></div>
    <div class="container hero-grid">
      <div>
        <div class="status-chip fade-up"><span class="pulse-dot"><span class="pulse-ring"></span><span class="pulse-core"></span></span>Web Development · Cybersecurity</div>
        <h1 class="hero-title fade-up" style="--d:80ms"><span class="line">Websites built to win.</span><span class="line text-gradient">Security built to hold.</span></h1>
        <p class="hero-sub fade-up" style="--d:160ms">Triple Crown designs high-performance digital products and protects them with enterprise-grade cybersecurity — one expert team, one uncompromising standard.</p>
        <div class="hero-actions fade-up" style="--d:240ms">
          ${btn("#/contact", "Start Your Project", { size: "lg", arrow: true })}
          ${btn("#/services", "Explore Services", { variant: "secondary", size: "lg" })}
        </div>
        <dl class="hero-stats fade-up" style="--d:320ms">
          <div><dt>10+</dt><dd>Projects delivered</dd></div>
          <div><dt>99.99%</dt><dd>Average uptime</dd></div>
          <div><dt>24/7</dt><dd>Security operations</dd></div>
        </dl>
      </div>
      <div class="fade-up" style="--d:200ms">${heroVisual()}</div>
    </div>
  </section>`;
    const pillarsHTML = section(
      "",
      `${sectionHead({ center: true, eyebrow: "The Triple Crown standard", title: "Three disciplines. One crown of excellence.", desc: "Most companies build, or they secure. We do both — together — so your product is beautiful, fast and resilient from the first commit." })}
    <div class="grid-3 mt-14">
      ${pillars.map(
        (p) => `<div class="card hoverable">
            <div style="display:flex;align-items:flex-start;justify-content:space-between">
              ${iconBox(p.icon)}
              <span class="big-num-ghost">${p.n}</span>
            </div>
            <h3 style="margin-top:24px;${cardTitle(p.title)};font-size:24px">${p.title}</h3>
            <p style="${cardText}">${p.text}</p>
            ${checkList(p.points, false, "")}
          </div>`
      ).join("")}
    </div>`
    );
    const duo = section(
      "ice",
      `<div class="head-row">
      ${sectionHead({ eyebrow: "What we do", title: "Everything you need to launch — and stay protected." })}
      ${textLink("#/services", "View all services")}
    </div>
    <div class="grid-2 mt-12" style="gap:24px">
      <div class="card" style="border-radius:24px;padding:40px;overflow:hidden">
        <div style="position:absolute;right:-64px;top:-64px;width:208px;height:208px;border-radius:999px;background:rgba(37,99,235,.1);filter:blur(48px)"></div>
        <div style="position:relative">
          ${iconBox("globe")}
          <h3 style="margin-top:24px;font-family:var(--font-display);font-size:28px;font-weight:700;color:var(--navy)">Web Development</h3>
          <p style="margin-top:12px;max-width:28rem;font-size:15px;line-height:1.65;color:var(--slate-600)">Websites, web apps and online stores crafted for speed, usability and growth.</p>
          <div style="margin-top:24px">${checkList(["Custom websites & design systems", "SaaS platforms & customer portals", "E-commerce & payment integrations", "Performance, SEO & accessibility"])}</div>
          <div style="margin-top:32px">${btn("#/web-development", "Explore Web Development", { variant: "outline", arrow: true })}</div>
        </div>
      </div>
      <div class="bg-brand-gradient" style="position:relative;overflow:hidden;border-radius:24px;padding:40px;color:#fff;box-shadow:0 30px 70px -30px rgba(30,58,138,.8)">
        <div class="grid-bg-dark" style="opacity:.6"></div>
        <div style="position:absolute;right:-40px;bottom:-80px;width:240px;height:240px;border-radius:999px;background:rgba(6,182,212,.15);filter:blur(48px)"></div>
        <div style="position:relative">
          <span class="icon-box dark" style="background:rgba(255,255,255,.1);color:#fff;box-shadow:inset 0 0 0 1px rgba(255,255,255,.25)">${icon("lock")}</span>
          <h3 style="margin-top:24px;font-family:var(--font-display);font-size:28px;font-weight:700">Cybersecurity</h3>
          <p style="margin-top:12px;max-width:28rem;font-size:15px;line-height:1.65;color:rgba(219,234,254,.85)">Find weaknesses before attackers do, and keep watch around the clock.</p>
          <ul class="check-list on-dark" style="margin-top:24px">
            ${["Penetration testing & red teaming", "Vulnerability management", "24/7 managed detection & response", "Compliance readiness & audit support"].map((it) => `<li><span class="tick" style="background:rgba(255,255,255,.15);color:#fff">${icon("check", "", 3)}</span>${it}</li>`).join("")}
          </ul>
          <div style="margin-top:32px">${btn("#/cybersecurity", "Explore Cybersecurity", { variant: "white", arrow: true })}</div>
        </div>
      </div>
    </div>`
    );
    const processSec = section(
      "dark",
      `${sectionHead({ dark: true, center: true, eyebrow: "How we work", title: "A proven process, from first call to long-term protection.", desc: "Transparent, collaborative and predictable. You'll always know what's happening and what comes next." })}
     <div class="mt-14">${processHTML(true)}</div>`
    );
    const featured = section(
      "",
      `<div class="head-row">
      ${sectionHead({ eyebrow: "Selected work", title: "Digital experiences built to perform." })}
      ${textLink("#/portfolio", "View full portfolio")}
    </div>
    <div class="grid-3 mt-12">${[projects[0], projects[1], projects[2]].map(projectCard).join("")}</div>`
    );
    const whyStats = [
      ["10+", "Projects shipped"],
      ["98%", "Client retention"],
      ["11 min", "Avg. incident response"],
      ["24/7", "Security operations"]
    ];
    const why = section(
      "ice",
      `<div class="two-col">
      <div>
        ${sectionHead({ eyebrow: "Why Triple Crown", title: "The agency that builds it — and the team that defends it.", desc: "Splitting design, development and security across vendors creates gaps. We close them." })}
        <div style="margin-top:32px">${checkList(["Security-first engineering at every sprint", "Senior specialists only — no handoffs to juniors", "Fixed scope, fixed price, transparent reporting", "You own everything we create. No lock-in."])}</div>
        <div style="margin-top:36px">${btn("#/why-choose-us", "See why clients choose us", { arrow: true })}</div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
        ${whyStats.map(
        ([v, l], i) => i === 0 ? `<div class="bg-brand-gradient" style="border-radius:16px;padding:28px;color:#fff;box-shadow:0 24px 50px -24px rgba(30,58,138,.8)">${stat(v, l, true)}</div>` : `<div style="border-radius:16px;padding:28px;background:var(--navy);color:#fff;border:1px solid rgba(59,130,246,.15)">${stat(v, l, true)}</div>`
      ).join("")}
      </div>
    </div>`
    );
    // NEW: homepage entry point for the secondary-school training program.
    const schoolPromo = `<section class="school-promo"><div class="container school-promo-inner">
      <div class="school-promo-copy">
        <span class="eyebrow">Triple Crown in Schools</span>
        <h2 class="school-promo-title">Bringing web development and cybersecurity to secondary schools.</h2>
        <p class="school-promo-text">Practical, student-friendly sessions that introduce learners to building for the web and staying safer online.</p>
      </div>
      ${btn("#/school-training", "Explore school training", { variant: "outline", arrow: true })}
    </div></section>`;
    return hero + schoolPromo + stackMarquee() + pillarsHTML + duo + processSec + featured + why + ctaBand({ tone: "ice" });
  }
  function AboutPage() {
    const pillars = [
      { icon: "target", title: "Our mission", text: "To give ambitious organisations digital products that are exceptional to use and impossible to compromise." },
      { icon: "eye", title: "Our vision", text: "A web where speed, design and security are never trade-offs — and every business can trust the technology it runs on." },
      { icon: "compass", title: "Our approach", text: "Senior specialists, honest communication and security built into every decision from the very first workshop." }
    ];
    const values = [
      { icon: "heart", title: "Integrity", text: "We say what we'll do, do what we said, and flag problems early." },
      { icon: "gem", title: "Craft", text: "Details matter. We sweat the pixels, the queries and the edge cases." },
      { icon: "message-square", title: "Clarity", text: "Plain-English communication — no jargon, no smoke and mirrors." },
      { icon: "shield", title: "Ownership", text: "We treat your product, data and reputation like our own." },
      { icon: "lightbulb", title: "Curiosity", text: "We keep learning so you benefit from what's next, not what was." },
      { icon: "target", title: "Results", text: "Beautiful is great. Beautiful, fast, secure and profitable is the goal." }
    ];
    return pageHero({
      route: "about",
      label: "About",
      eyebrow: "About Triple Crown",
      title: `Engineers, designers and defenders on <span class="text-gradient">one team.</span>`,
      desc: "We're a specialist web development and cybersecurity company obsessed with building digital products that perform beautifully and stay protected.",
      actions: `${btn("#/team", "Meet the team", { size: "lg", arrow: true })}${btn("#/contact", "Talk to us", { variant: "secondary", size: "lg" })}`
    }) + section(
      "",
      `<div class="two-col-a">
        <div>
          ${sectionHead({ eyebrow: "Our story", title: "We started Triple Crown because great websites kept getting hacked." })}
          <div style="margin-top:24px;display:flex;flex-direction:column;gap:20px;font-size:16px;line-height:1.7;color:var(--slate-600)">
            <p>Our founders spent years on both sides of the table — building high-traffic platforms, and then cleaning up after breaches that could have been prevented with better engineering. Too often the design agency, the developers and the security consultants never spoke to each other.</p>
            <p>So we built the company we wished existed: a single team where designers, engineers and ethical hackers collaborate from day one. The result is software that looks exceptional, loads instantly and stands up to real-world attacks.</p>
            <p>The name says it all. Winning a Triple Crown demands excellence across three very different challenges. For us, that's <strong style="color:var(--navy)">building</strong>, <strong style="color:var(--navy)">securing</strong> and <strong style="color:var(--navy)">scaling</strong> — and we won't settle for two out of three.</p>
          </div>
          <div style="margin-top:40px;padding-top:32px;border-top:1px solid var(--line);display:grid;grid-template-columns:repeat(3,1fr);gap:24px">
            ${stat("2025", "Founded")}${stat("2+", "Specialists")}${stat("10+", "Projects")}
          </div>
        </div>
        <div style="position:relative">
          <div style="position:absolute;inset:-16px;border-radius:32px;background:rgba(37,99,235,.2);filter:blur(48px)"></div>
          <div class="about-logo-frame bg-brand-gradient">
            <div class="about-logo-inner">
              <div class="grid-bg-dark"></div>
              <div style="position:absolute;left:50%;top:33%;transform:translateX(-50%);width:256px;height:256px;border-radius:999px;background:rgba(37,99,235,.4);filter:blur(80px)"></div>
              ${logo("stacked", "", "Triple Crown").replace("<svg", '<svg style="position:relative;width:62%;filter:drop-shadow(0 0 30px rgba(37,99,235,.45))"')}
            </div>
          </div>
        </div>
      </div>`
    ) + section(
      "ice",
      `${sectionHead({ center: true, eyebrow: "What drives us", title: "Purpose, principles and a point of view." })}
      <div class="grid-3 mt-14">
        ${pillars.map((p) => `<div class="card hoverable">${iconBox(p.icon)}<h3 style="margin-top:24px;${cardTitle(p.title)}">${p.title}</h3><p style="${cardText}">${p.text}</p></div>`).join("")}
      </div>`
    ) + section(
      "",
      `${sectionHead({ center: true, eyebrow: "Our values", title: "How we show up for every client." })}
      <div class="grid-3 mt-14" style="gap:20px">
        ${values.map(
        (v) => `<div class="hoverable" style="display:flex;gap:16px;border-radius:16px;border:1px solid rgba(226,232,240,.9);padding:24px;transition:all .3s">
              ${iconBox(v.icon)}
              <div><h3 style="font-family:var(--font-display);font-size:18px;font-weight:600;color:var(--navy)">${v.title}</h3>
              <p style="margin-top:6px;font-size:14px;line-height:1.65;color:var(--slate-600)">${v.text}</p></div>
            </div>`
      ).join("")}
      </div>`
    ) + ctaBand({ tone: "ice", secondary: { href: "#/team", label: "Meet the team" } });
  }
  function ServicesPage() {
    const models = [
      { icon: "wrench", title: "Project-based", text: "A defined scope, timeline and fixed price. Ideal for new websites, applications and one-off security assessments.", points: ["Fixed price & roadmap", "Dedicated project lead", "30 days post-launch support"], featured: false },
      { icon: "heart", title: "Dedicated partner", text: "A flexible monthly retainer with a team that knows your product inside out and ships continuously.", points: ["Priority design & dev capacity", "Monthly performance & security review", "Roadmap planning together"], featured: true },
      { icon: "radar", title: "Managed security", text: "Ongoing monitoring, testing and response, with transparent reporting for leadership and auditors.", points: ["24/7 detection & response", "Quarterly penetration tests", "Compliance evidence support"], featured: false }
    ];
    return pageHero({
      route: "services",
      label: "Services",
      eyebrow: "Our services",
      title: `Ship it great. <span class="text-gradient">Keep it safe.</span>`,
      desc: "From first sketch to 24/7 protection, Triple Crown covers the full lifecycle of your digital presence with one accountable team.",
      actions: `${btn("#/web-development", "Web Development", { size: "lg", arrow: true })}${btn("#/cybersecurity", "Cybersecurity", { variant: "secondary", size: "lg" })}`
    }) + section(
      "",
      `<div class="head-row">
        ${sectionHead({ eyebrow: "Web development", title: "Digital products designed to convert and built to last.", desc: "Modern engineering practices, obsessive attention to detail and zero templates." })}
        ${textLink("#/web-development", "Web development in depth")}
      </div>
      <div class="grid-3 mt-12">
        ${webServices.map((s) => `<div class="card hoverable">${iconBox(s.icon)}<h3 style="margin-top:24px;${cardTitle(s.title)}">${s.title}</h3><p style="${cardText}">${s.text}</p></div>`).join("")}
      </div>`
    ) + section(
      "dark",
      `<div class="head-row">
        ${sectionHead({ dark: true, eyebrow: "Cybersecurity", title: "Defence that thinks like an attacker.", desc: "Find the gaps first. Close them fast. Stay watchful forever." })}
        ${textLink("#/cybersecurity", "Cybersecurity in depth", true)}
      </div>
      <div class="grid-4 grid-4-md2 mt-12" style="gap:20px">
        ${securityServices.map(
        (s) => `<div class="card-dark hoverable" style="padding:24px">${iconBox(s.icon, { dark: true })}<h3 style="margin-top:20px;font-family:var(--font-display);font-size:18px;font-weight:600;line-height:1.35;color:#fff">${s.title}</h3><p style="margin-top:10px;font-size:14px;line-height:1.65;color:var(--slate-400)">${s.text}</p></div>`
      ).join("")}
      </div>`
    ) + section(
      "ice",
      `${sectionHead({ center: true, eyebrow: "Ways to work together", title: "Flexible engagement, predictable outcomes.", desc: "Start with a project, grow into a partnership — or add security whenever you need it." })}
      <div class="grid-3 mt-14">
        ${models.map((m) => {
        if (m.featured) {
          return `<div class="card featured-model bg-brand-gradient hoverable">
                <span class="model-badge">${icon("crown")} Most popular</span>
                <span class="icon-box dark" style="background:rgba(255,255,255,.1);color:#fff;box-shadow:inset 0 0 0 1px rgba(255,255,255,.25)">${icon(m.icon)}</span>
                <h3 style="margin-top:24px;font-family:var(--font-display);font-size:24px;font-weight:600;color:#fff">${m.title}</h3>
                <p style="margin-top:12px;font-size:15px;line-height:1.65;color:rgba(219,234,254,.85)">${m.text}</p>
                <ul class="check-list on-dark" style="margin-top:24px">
                  ${m.points.map((p) => `<li><span class="tick" style="background:rgba(255,255,255,.15);color:#fff">${icon("check", "", 3)}</span>${p}</li>`).join("")}
                </ul>
              </div>`;
        }
        return `<div class="card hoverable">${iconBox(m.icon)}<h3 style="margin-top:24px;font-family:var(--font-display);font-size:24px;font-weight:600;color:var(--navy)">${m.title}</h3><p style="${cardText}">${m.text}</p><div style="margin-top:24px">${checkList(m.points)}</div></div>`;
      }).join("")}
      </div>`
    ) + ctaBand({
      title: "Not sure what you need? Let's figure it out together.",
      desc: "Book a free 30-minute consultation. We'll review your goals and risks and recommend a clear path forward.",
      primary: "Book a free consultation",
      secondary: { href: "#/portfolio", label: "See our work" }
    });
  }
  function WebDevelopmentPage() {
    const included = [
      "Mobile-first, responsive design",
      "WCAG 2.2 AA accessibility",
      "Core Web Vitals optimisation",
      "Technical SEO foundations",
      "Security headers, HTTPS & hardening",
      "CMS training for your team",
      "Analytics & conversion tracking",
      "Documentation & 30 days of support"
    ];
    const miniFaq = faqs.filter((f) => f.cat === "Web Development").slice(0, 4);
    return pageHero({
      route: "web-development",
      label: "Web Development",
      eyebrow: "Web development",
      title: `Websites that look <span class="text-gradient">exceptional</span> and perform even better.`,
      desc: "Custom websites, web applications and online stores engineered for speed, search and conversion — with security built into every line.",
      actions: `${btn("#/contact", "Get a project quote", { size: "lg", arrow: true })}${btn("#/portfolio", "View our work", { variant: "secondary", size: "lg" })}`,
      visual: webDevVisual()
    }) + section(
      "",
      `${sectionHead({ center: true, eyebrow: "What we build", title: "Every kind of web project, done properly.", desc: "Whether you're launching a brand, scaling a SaaS product or selling online, we bring the same standard of craft." })}
      <div class="grid-3 mt-14">
        ${webServices.map((s) => `<div class="card hoverable">${iconBox(s.icon)}<h3 style="margin-top:24px;${cardTitle(s.title)}">${s.title}</h3><p style="${cardText}">${s.text}</p></div>`).join("")}
      </div>`
    ) + section(
      "ice",
      `<div style="max-width:64rem;margin:0 auto">
        ${sectionHead({ eyebrow: "Standard on every build", title: "The details most agencies charge extra for.", desc: "Quality isn't an upgrade. These come included in every Triple Crown project." })}
        <div style="margin-top:32px">${checkList(included, false, "cols-2")}</div>
      </div>`
    ) + section(
      "dark",
      `${sectionHead({ dark: true, center: true, eyebrow: "Performance you can measure", title: "We build for 100s — and we show the receipts.", desc: "Speed drives conversion and rankings. Every site we ship is audited against these four benchmarks before launch." })}
      <div class="grid-4 grid-4-md2 mt-14">
        ${["Performance", "Accessibility", "Best Practices", "SEO"].map(
        (s) => `<div class="score-card">
              ${scoreRing(100, 104, 7)}
              <div style="margin-top:20px;font-family:var(--font-display);font-size:16px;font-weight:600;color:#fff">${s}</div>
              <div style="margin-top:4px;font-size:12px;color:var(--slate-400)">Lighthouse target</div>
            </div>`
      ).join("")}
      </div>`
    ) + section(
      "",
      `${sectionHead({ center: true, eyebrow: "Our process", title: "From brief to launch in four clear stages." })}
       <div class="mt-14" style="margin-top:64px">${processHTML(false)}</div>`
    ) + section(
      "ice",
      `<div style="display:grid;gap:48px" class="faq-split">
        <div>
          ${sectionHead({ eyebrow: "Quick answers", title: "Common questions about web projects." })}
          <div style="margin-top:24px">${textLink("#/faq", "Read all FAQs")}</div>
        </div>
        <div>
          ${miniFaq.map(
        (f) => `<details class="mini-faq">
                <summary>${f.q}<span class="faq-toggle">${icon("plus")}</span></summary>
                <p>${f.a}</p>
              </details>`
      ).join("")}
        </div>
      </div>
      <style>@media(min-width:1024px){.faq-split{grid-template-columns:.8fr 1.2fr}}</style>`
    ) + ctaBand({ title: "Let's build something your customers will love.", secondary: { href: "#/cybersecurity", label: "Add cybersecurity" } });
  }

  // pages2.js
  function CybersecurityPage() {
    const lifecycle = [
      { icon: "search", title: "Assess", text: "We map your attack surface and test it like an adversary would — web, API, cloud and people.", cyan: false },
      { icon: "shield", title: "Protect", text: "Prioritised fixes, hardened configurations and secure-by-default engineering patterns.", cyan: false },
      { icon: "eye", title: "Monitor", text: "24/7 detection across endpoints, cloud and applications with tuned, low-noise alerting.", cyan: true },
      { icon: "siren", title: "Respond", text: "Rapid containment and recovery, with root-cause analysis and measurable improvement.", cyan: false }
    ];
    const termLines = [
      { t: "cmd", text: "tc pentest --scope app.client.com --mode authenticated" },
      { t: "info", text: "[recon] 214 endpoints · 18 parameters · 3 roles mapped" },
      { t: "ok", text: "Authentication & session management reviewed" },
      { t: "warn", text: "HIGH  IDOR on /api/invoices/{id}  — proof of concept attached" },
      { t: "warn", text: "MED   Missing rate limiting on /auth/reset" },
      { t: "ok", text: "Injection, XSS, SSRF and file-upload checks complete" },
      { t: "info", text: "[report] 12 findings · fix guidance · retest included" }
    ];
    const findings = [
      ["Critical", 0],
      ["High", 2],
      ["Medium", 5],
      ["Low", 5]
    ];
    return pageHero({
      route: "cybersecurity",
      label: "Cybersecurity",
      eyebrow: "Cybersecurity",
      title: `Find the weaknesses <span class="text-gradient">before attackers do.</span>`,
      desc: "Penetration testing, managed monitoring and compliance support from ethical hackers who've defended banks, hospitals and fast-growing SaaS.",
      actions: `${btn("#/contact", "Request a security assessment", { size: "lg", arrow: true })}${btn("https://wa.me/2348085034062", `${icon("phone").replace("<svg", '<svg style="width:16px;height:16px"')} WhatsApp us`, { variant: "secondary", size: "lg", attrs: 'target="_blank" rel="noreferrer"' })}`,
      visual: shieldGraphic()
    }) + `<section class="stats-band"><div class="container">
      <dl style="display:grid;grid-template-columns:repeat(1,1fr);gap:32px" class="stats-band-grid">
        ${[["11 min", "Mean time to respond"], ["24/7", "Security operations centre"], ["100%", "Fixes verified by retest"]].map(([v, l]) => `<div class="stat-center"><dt class="stat-num">${v}</dt><dd style="margin-top:6px;font-size:14px;color:var(--slate-400)">${l}</dd></div>`).join("")}
      </dl>
    </div>
    <style>@media(min-width:640px){.stats-band-grid{grid-template-columns:repeat(3,1fr)!important}}@media(min-width:1024px){.stat-center{text-align:left!important}}</style></section>` + section(
      "",
      `${sectionHead({ center: true, eyebrow: "Security services", title: "A complete security programme, delivered by specialists.", desc: "Choose a single engagement or let us run security end to end as your outsourced team." })}
      <div class="grid-4 grid-4-md2 mt-14" style="gap:20px">
        ${securityServices.map(
        (s) => `<div class="card hoverable" style="padding:24px">${iconBox(s.icon)}<h3 style="margin-top:20px;font-family:var(--font-display);font-size:18px;font-weight:600;line-height:1.35;color:var(--navy)">${s.title}</h3><p style="margin-top:10px;font-size:14px;line-height:1.65;color:var(--slate-600)">${s.text}</p></div>`
      ).join("")}
      </div>`
    ) + section(
      "dark",
      `${sectionHead({ dark: true, center: true, eyebrow: "Security lifecycle", title: "Continuous protection, not a once-a-year checkbox." })}
      <div class="process-grid" style="margin-top:64px">
        <div class="process-line"></div>
        ${lifecycle.map(
        (l, i) => `<div class="card-dark hoverable" style="padding:32px 28px 28px">
              <span class="lifecycle-num">0${i + 1}</span>
              ${iconBox(l.icon, { dark: true, cyan: l.cyan })}
              <h3 style="margin-top:24px;font-family:var(--font-display);font-size:20px;font-weight:600;color:#fff">${l.title}</h3>
              <p style="margin-top:10px;font-size:15px;line-height:1.65;color:var(--slate-400)">${l.text}</p>
            </div>`
      ).join("")}
      </div>`
    ) + section(
      "ice",
      `<div class="two-col">
        <div>
          ${sectionHead({ eyebrow: "Penetration testing", title: "Real attacks, real evidence, real fixes.", desc: "Automated scanners find the obvious. Our testers chain subtle flaws into real-world attack paths — then show you exactly how to close them." })}
          <div style="margin-top:32px">${checkList(["Manual testing led by experienced ethical hackers", "Web, API, mobile, cloud and internal network", "Executive summary plus developer-ready remediation steps", "Free retest to verify every fix"])}</div>
          <div style="margin-top:36px;max-width:28rem">
            ${findings.map(
        ([l, n]) => `<div class="finding-row">
                  <span class="finding-label">${l}</span>
                  <span class="finding-track"><span class="finding-fill${l === "Critical" ? " cyan-fill" : ""}" style="display:block;width:${n === 0 ? 4 : n === 2 ? 55 : 78}%"></span></span>
                  <span class="finding-num">${n}</span>
                </div>`
      ).join("")}
          </div>
        </div>
        ${terminal("triple-crown — pentest session", termLines)}
      </div>`
    ) + `<section style="background:#fff;padding-bottom:16px"><div class="container">
      <div style="position:relative;overflow:hidden;border-radius:24px;border:1px solid rgba(59,130,246,.25);background:var(--navy);padding:48px">
        <div class="grid-bg-dark"></div>
        <div style="position:absolute;left:-64px;top:0;width:256px;height:256px;border-radius:999px;background:rgba(37,99,235,.3);filter:blur(90px)"></div>
        <div style="position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:32px">
          <div style="display:flex;align-items:flex-start;gap:20px">
            <span class="icon-box dark" style="width:56px;height:56px;border-radius:16px">${icon("siren").replace("<svg", '<svg style="width:28px;height:28px"')}</span>
            <span>
              <span style="display:block;font-family:var(--font-display);font-size:28px;font-weight:700;color:#fff">Active incident? Call us now.</span>
              <span style="display:block;margin-top:8px;max-width:36rem;color:var(--slate-300);line-height:1.65">Suspected breach, ransomware or data leak? Our incident response team is on call 24/7 and starts containment within minutes.</span>
            </span>
          </div>
          ${btn("https://wa.me/2348085034062", `${icon("phone").replace("<svg", '<svg style="width:16px;height:16px"')} WhatsApp · 08085034062`, { size: "lg", attrs: 'target="_blank" rel="noreferrer"' })}
        </div>
      </div>
    </div></section>` + ctaBand({
      title: "Know exactly where you stand.",
      desc: "Request a scoped security assessment. We'll show you what attackers can see and give you a clear plan to fix it.",
      primary: "Request an assessment",
      secondary: { href: "#/faq", label: "Security FAQs" }
    });
  }
  function projectGridHTML(filter) {
    const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);
    return list.map(projectCard).join("");
  }
  function PortfolioPage() {
    return pageHero({
      route: "portfolio",
      label: "Portfolio",
      eyebrow: "Portfolio",
      title: `Work that performs. <span class="text-gradient">Built with purpose.</span>`,
      desc: "A selection of websites, applications and security engagements delivered for ambitious teams across fintech, healthcare, retail and beyond."
    }) + section(
      "",
      `<div class="head-row" style="align-items:center">
        ${sectionHead({ eyebrow: "Selected work", title: "Explore recent projects." })}
        <p style="font-size:14px;color:var(--slate-500)">Click any project to read the case study.</p>
      </div>
      <div class="grid-3 page-enter" id="projectGrid" style="margin-top:40px">${projectGridHTML("All")}</div>`
    ) + section(
      "dark",
      `<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:40px" class="quad-stats">
        ${stat("10+", "Projects delivered", true)}${stat("98%", "Client retention", true)}${stat("+68%", "Best conversion uplift", true)}${stat("0", "Critical findings left open at launch", true)}
      </div>
      <style>@media(min-width:1024px){.quad-stats{grid-template-columns:repeat(4,1fr)!important}}</style>`
    ) + ctaBand({
      tone: "ice",
      title: "Your project could be next.",
      desc: "Share your goals and we'll show you how we'd approach them — with relevant examples and a clear plan."
    });
  }
  function WhyChooseUsPage() {
    const reasons = [
      { icon: "shield", title: "Security-first by design", text: "Threat modelling, secure coding and independent testing are part of every project — not an expensive afterthought." },
      { icon: "users", title: "Senior specialists only", text: "You work directly with experienced engineers, designers and security experts. No bait-and-switch with junior teams." },
      { icon: "layers", title: "One accountable team", text: "Design, development and defence under one roof means fewer handoffs, faster delivery and nobody to blame but us." },
      { icon: "gauge", title: "Obsessed with performance", text: "Fast sites convert better and rank higher. We measure everything and don't ship until the numbers are right." },
      { icon: "file-text", title: "Transparent and fixed-scope", text: "Clear proposals, fixed prices and weekly updates. You'll never wonder where the budget or the project stands." },
      { icon: "life-buoy", title: "A partner for the long term", text: "Launch is the starting line. Ongoing care, monitoring and improvement keep you ahead of competitors and threats." }
    ];
    const rows = [
      ["Security", "Checked briefly at the end, if at all", "Built into every sprint and proven by pentesting"],
      ["Team", "Separate vendors for design, dev and security", "One integrated, senior team"],
      ["Pricing", "Open-ended hourly billing and change fees", "Fixed scope and transparent pricing"],
      ["Communication", "Account managers relaying messages", "Direct access to the people doing the work"],
      ["After launch", "Handover and goodbye", "Care plans, monitoring and 24/7 response"],
      ["Ownership", "Licences, lock-in and hidden dependencies", "You own all code, designs and documentation"]
    ];
    const guarantees = [
      ["01", "Fixed-price promise", "Agree the scope, agree the price. If we misjudge the effort, that's on us — not your budget."],
      ["02", "Free security retest", "Every vulnerability we report is retested at no extra charge once you've fixed it, with written proof."],
      ["03", "You own everything", "On final payment, all source code, designs and documentation are yours. No licences, no lock-in."]
    ];
    return pageHero({
      route: "why-choose-us",
      label: "Why Choose Us",
      eyebrow: "Why choose us",
      title: `The rare team that can <span class="text-gradient">build it and defend it.</span>`,
      desc: "Plenty of agencies can make a good-looking website. Very few can make one that is fast, scalable and genuinely secure. That's the Triple Crown difference.",
      actions: `${btn("#/contact", "Start a conversation", { size: "lg", arrow: true })}${btn("#/portfolio", "See the results", { variant: "secondary", size: "lg" })}`
    }) + section(
      "",
      `${sectionHead({ center: true, eyebrow: "Six reasons", title: "What you get when you work with Triple Crown." })}
      <div class="grid-3 mt-14">
        ${reasons.map((r) => `<div class="card hoverable">${iconBox(r.icon)}<h3 style="margin-top:24px;font-family:var(--font-display);font-size:20px;font-weight:600;color:var(--navy)">${r.title}</h3><p style="margin-top:12px;font-size:15px;line-height:1.65;color:var(--slate-600)">${r.text}</p></div>`).join("")}
      </div>`
    ) + section(
      "ice",
      `${sectionHead({ center: true, eyebrow: "The difference", title: "Triple Crown vs. the typical agency." })}
      <div class="compare" style="margin-top:56px">
        <div class="compare-head bg-brand-gradient" style="background-image:none">
          <div></div>
          <div class="col-them" style="background:#fff">Typical agency</div>
          <div class="col-us bg-brand-gradient">Triple Crown</div>
        </div>
        ${rows.map(
        ([k, a, b]) => `<div class="compare-row">
              <div class="compare-key">${k}</div>
              <div class="compare-cell compare-them">${icon("x")}<span>${a}</span></div>
              <div class="compare-cell compare-us">${icon("check", "", 3)}<span>${b}</span></div>
            </div>`
      ).join("")}
      </div>`
    ) + section(
      "dark",
      `${sectionHead({ dark: true, center: true, eyebrow: "Our guarantees", title: "Confidence, in writing.", desc: "We stand behind our work with commitments you can hold us to." })}
      <div class="grid-3 mt-14">
        ${guarantees.map(
        ([n, t, x]) => `<div class="card-dark hoverable" style="overflow:hidden">
              <div class="guarantee-num">${n}</div>
              <h3 style="margin-top:-8px;font-family:var(--font-display);font-size:20px;font-weight:600;color:#fff">${t}</h3>
              <p style="margin-top:12px;font-size:15px;line-height:1.65;color:var(--slate-400)">${x}</p>
            </div>`
      ).join("")}
      </div>`
    ) + section(
      "",
      `<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:40px" class="quad-stats">
        ${stat("10+", "Projects delivered")}${stat("98%", "Client retention rate")}${stat("11 min", "Average incident response")}${stat("2 yrs", "Building and defending")}
      </div>`
    ) + ctaBand({ tone: "ice" });
  }
  function TeamPage() {
    const culture = [
      { icon: "award", title: "Craft over speed", text: "We'd rather ship something we're proud of than something merely finished." },
      { icon: "users", title: "Radical collaboration", text: "Designers, engineers and hackers pair up and challenge each other early." },
      { icon: "heart", title: "Care about the client", text: "We celebrate your wins and take your risks personally." },
      { icon: "rocket", title: "Always learning", text: "Conference budgets, research time and capture-the-flag nights keep us sharp." }
    ];
    return pageHero({
      route: "team",
      label: "Our Team",
      eyebrow: "Our team",
      title: `The people behind <span class="text-gradient">the crown.</span>`,
      desc: "A focused team of web development and cybersecurity specialists who genuinely love helping people build safer digital skills.",
      actions: `${btn("#/contact", "Work with us", { size: "lg", arrow: true })}${btn("#/about", "Our story", { variant: "secondary", size: "lg" })}`
    }) + section(
      "",
      `${sectionHead({ center: true, eyebrow: "Leadership & specialists", title: "Meet the experts on your project.", desc: "Every engagement is led by senior specialists you'll actually speak to." })}
      <div class="grid-2 mt-14 team-grid" style="gap:24px">
        ${team.map(
        (m, i) => `<article class="team-card">
              <div class="team-photo">
                <img class="team-image" data-team-image="${m.id}" src="${m.image}" alt="${m.name}" loading="lazy" />
                <div class="avatar av-${i} team-fallback" aria-hidden="true"><span>${m.initials}</span></div>
                <div class="team-hover">
                  <div class="team-socials">
                    <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="${m.name} on Twitter">
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 5.9c-.7.3-1.5.6-2.4.7a4.1 4.1 0 0 0 1.8-2.3 8 8 0 0 1-2.6 1 4.1 4.1 0 0 0-7 3.7 11.7 11.7 0 0 1-8.5-4.3 4.1 4.1 0 0 0 1.3 5.5 4 4 0 0 1-1.9-.5v.1a4.1 4.1 0 0 0 3.3 4 4 4 0 0 1-1.9.1 4.1 4.1 0 0 0 3.8 2.8A8.2 8.2 0 0 1 2 18.4a11.6 11.6 0 0 0 17.9-9.8v-.5A8.3 8.3 0 0 0 22 5.9Z" /></svg>
                    </a>
                    <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" aria-label="${m.name} on TikTok">
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.6 6.4a5.2 5.2 0 0 1-3.3-1.2 5.1 5.1 0 0 1-1.7-3.1H11v13.3a2.4 2.4 0 1 1-2.4-2.4c.4 0 .8.1 1.1.2V9.8c-.4-.1-.8-.1-1.2-.1a6.2 6.2 0 1 0 6.2 6.2V8.2c1.4 1 3.1 1.6 5 1.6V6.4Z" /></svg>
                    </a>
                  </div>
                </div>
              </div>
              <div class="team-body">
                <h3 class="team-name">${m.name}</h3>
                <div class="team-role">${m.role}</div>
                <p class="team-bio">${m.bio}</p>
              </div>
            </article>`
      ).join("")}
      </div>`
    ) + section(
      "dark",
      `${sectionHead({ dark: true, center: true, eyebrow: "How we work together", title: "A culture built on craft and care." })}
      <div class="grid-4 grid-4-md2 mt-14" style="gap:20px">
        ${culture.map((c) => `<div class="card-dark hoverable" style="padding:24px">${iconBox(c.icon, { dark: true })}<h3 style="margin-top:20px;font-family:var(--font-display);font-size:18px;font-weight:600;color:#fff">${c.title}</h3><p style="margin-top:10px;font-size:14px;line-height:1.65;color:var(--slate-400)">${c.text}</p></div>`).join("")}
      </div>`
    ) + ctaBand({
      title: "Want to join the crown?",
      desc: "We're always interested in meeting exceptional engineers, designers and security researchers. Introduce yourself and tell us what you'd love to build.",
      primary: "Get in touch",
      secondary: { href: "#/about", label: "Learn about us" }
    });
  }
  function featHTML(t, i) {
    return `<div class="page-enter" style="position:relative">
    ${stars("on-gradient")}
    <blockquote style="margin-top:24px;font-family:var(--font-display);font-size:22px;font-weight:500;line-height:1.45">“${t.quote}”</blockquote>
    <div style="margin-top:32px;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:20px">
      <div style="display:flex;align-items:center;gap:16px">
        ${monogram(t.initials, i, 56, 18)}
        <span>
          <span style="display:block;font-weight:600">${t.name}</span>
          <span style="display:block;font-size:14px;color:rgba(219,234,254,.8)">${t.role}, ${t.company}</span>
        </span>
      </div>
      ${t.metric ? `<span style="border-radius:999px;background:rgba(255,255,255,.15);padding:6px 16px;font-size:14px;font-weight:600;backdrop-filter:blur(6px)">${t.metric}</span>` : ""}
    </div>
  </div>`;
  }
  function TestimonialsPage() {
    return pageHero({
      route: "testimonials",
      label: "Testimonials",
      eyebrow: "Testimonials",
      title: `Don't take our word for it. <span class="text-gradient">Take theirs.</span>`,
      desc: "The best measure of our work is the people who rely on it every day. Here's what clients say about building and securing with Triple Crown.",
      extra: `<div class="rating-chip fade-up" style="--d:340ms">
        <span class="rating-num">4.9</span>
        <span>${stars()}<span style="display:block;margin-top:4px;font-size:12px;color:var(--slate-400)">Average rating across client reviews</span></span>
      </div>`
    }) + section(
      "ice",
      `${sectionHead({ center: true, eyebrow: "Featured story", title: "Real results, in our clients' words." })}
      <div style="position:relative;max-width:56rem;margin:56px auto 0" id="featWrap">
        <div style="position:absolute;inset:-12px;border-radius:32px;background:rgba(37,99,235,.15);filter:blur(24px)"></div>
        <div class="bg-brand-gradient" style="position:relative;overflow:hidden;border-radius:32px;padding:56px;color:#fff;box-shadow:0 40px 90px -30px rgba(30,58,138,.85)">
          <div class="grid-bg-dark" style="opacity:.7"></div>
          ${icon("quote", "quote-icon").replace('class="quote-icon"', 'style="position:absolute;right:32px;top:32px;width:96px;height:96px;color:rgba(255,255,255,.1)"')}
          <div id="featBox" style="position:relative">${featHTML(testimonials[0], 0)}</div>
        </div>
        <div class="carousel-controls">
          <button type="button" class="car-btn" id="featPrev" aria-label="Previous testimonial">${icon("chevron-left")}</button>
          <div class="car-dots" id="featDots">
            ${testimonials.map((t, idx) => `<button type="button" class="car-dot${idx === 0 ? " active" : ""}" data-dot="${idx}" aria-label="Show testimonial ${idx + 1}"></button>`).join("")}
          </div>
          <button type="button" class="car-btn" id="featNext" aria-label="Next testimonial">${icon("chevron-right")}</button>
        </div>
      </div>`
    ) + section(
      "",
      `<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:40px;text-align:center" class="quad-stats">
        ${stat("98%", "Clients who'd recommend us")}${stat("+68%", "Top conversion uplift")}${stat("37", "Vulnerabilities fixed (one engagement)")}${stat("11 min", "Mean incident response")}
      </div>`
    ) + ctaBand({ tone: "ice", title: "Join the clients who sleep better at night." });
  }
  function ContactPage() {
    const services = ["Website design & development", "Web application / portal", "E-commerce store", "Penetration testing", "Managed security monitoring", "Compliance readiness", "Not sure yet"];
    const budgets = ["< $10k", "$10k – $25k", "$25k – $75k", "$75k+"];
    const cards = [
      { icon: "mail", title: "Email", lines: ["triplecrown096@gmail.com"], href: "mailto:triplecrown096@gmail.com" },
      { icon: "phone", title: "Phone", lines: ["09033173219", "08085034062"], href: "tel:09033173219" },
      { icon: "map-pin", title: "Studio", lines: ["Eneka, Port Harcourt", "Nigeria"] },
      { icon: "clock", title: "Hours", lines: ["Mon – Fri · 8:00 – 18:00 WAT", "WhatsApp: 24/7"] }
    ];
    const steps = [
      ["01", "We review your message", "A senior team member reads every enquiry — usually within a few hours."],
      ["02", "Free consultation call", "A relaxed 30-minute conversation about goals, risks, timelines and budget."],
      ["03", "Clear proposal", "An itemised, fixed-price proposal with scope, milestones and next steps."]
    ];
    const formHTML = `<div id="formWrap">
    <form id="contactForm" novalidate>
      <h2 style="font-family:var(--font-display);font-size:24px;font-weight:700;color:var(--navy)">Start the conversation</h2>
      <p style="margin-top:8px;font-size:14px;color:var(--slate-500)">Fields marked * are required.</p>
      <div class="field-row">
        <div class="field">
          <label for="f-name">Full name *</label>
          <input class="input" id="f-name" name="name" autocomplete="name" placeholder="Jane Cooper" />
          <p class="field-error" id="err-name" hidden></p>
        </div>
        <div class="field">
          <label for="f-email">Work email *</label>
          <input class="input" id="f-email" name="email" type="email" autocomplete="email" placeholder="jane@company.com" />
          <p class="field-error" id="err-email" hidden></p>
        </div>
        <div class="field">
          <label for="f-company">Company</label>
          <input class="input" id="f-company" name="company" autocomplete="organization" placeholder="Acme Inc." />
        </div>
        <div class="field">
          <label for="f-phone">Phone</label>
          <input class="input" id="f-phone" name="phone" type="tel" autocomplete="tel" placeholder="0903 317 3219" />
        </div>
      </div>
      <div class="field">
        <label for="f-service">I'm interested in</label>
        <select class="input" id="f-service" name="service">${services.map((s) => `<option>${s}</option>`).join("")}</select>
      </div>
      <fieldset class="field">
        <legend>Estimated budget</legend>
        <div class="chip-row" id="budgetRow">
          ${budgets.map((b) => `<button type="button" class="budget-chip" data-budget="${b}" aria-pressed="false">${b}</button>`).join("")}
        </div>
      </fieldset>
      <div class="field">
        <label for="f-message">Tell us about your project *</label>
        <textarea class="input" id="f-message" name="message" rows="5" placeholder="What are you looking to build or protect? Any deadlines, existing systems or concerns?"></textarea>
        <p class="field-error" id="err-message" hidden></p>
      </div>
      <div class="field">
        <label class="checkbox-row">
          <input type="checkbox" id="f-consent" name="consent" />
          <span>I agree to Triple Crown contacting me about my enquiry. Your details stay confidential.</span>
        </label>
        <p class="field-error" id="err-consent" hidden></p>
      </div>
      <div style="margin-top:32px;display:flex;flex-wrap:wrap;align-items:center;gap:16px">
        <button type="submit" class="btn btn-primary btn-lg" id="submitBtn"><span id="submitLabel">Send message</span>${icon("send").replace("<svg", '<svg style="width:16px;height:16px" id="submitIcon"')}</button>
        <span style="font-size:12px;color:var(--slate-500)">We reply within 1 business day.</span>
      </div>
    </form>
    <div id="formSuccess" class="success-box page-enter" hidden>
      <span class="success-icon">${icon("check-circle")}</span>
      <h2 style="margin-top:28px;font-family:var(--font-display);font-size:30px;font-weight:700;color:var(--navy)">Message Sent.</h2>
      <p style="margin-top:12px;max-width:28rem;color:var(--slate-600);line-height:1.65">WhatsApp has opened with your enquiry ready to send. If it did not open, message us directly at 08085034062.</p>
      <div style="margin-top:32px;display:flex;flex-wrap:wrap;justify-content:center;gap:12px">
        <button type="button" class="btn btn-primary" id="sendAnother">Send another message</button>
        ${btn("#/portfolio", "Browse our work", { variant: "outline" })}
      </div>
    </div>
  </div>`;
    const sidebar = `<aside style="display:flex;flex-direction:column;gap:20px">
    ${cards.map((c) => {
      const body = `${iconBox(c.icon)}<span><span class="contact-label">${c.title}</span>${c.lines.map((l) => `<span class="contact-value" style="display:block">${l}</span>`).join("")}</span>`;
      return c.href ? `<a href="${c.href}" class="contact-card hoverable">${body}</a>` : `<div class="contact-card hoverable">${body}</div>`;
    }).join("")}
    <div style="position:relative;overflow:hidden;border-radius:16px;border:1px solid rgba(59,130,246,.25);background:var(--navy);padding:24px;color:#fff">
      <div class="grid-bg-dark"></div>
      <div style="position:absolute;right:-40px;top:-40px;width:160px;height:160px;border-radius:999px;background:rgba(37,99,235,.4);filter:blur(48px)"></div>
      <div style="position:relative">
        <span class="icon-box dark">${icon("siren")}</span>
        <h3 style="margin-top:16px;font-family:var(--font-display);font-size:18px;font-weight:600">Security emergency?</h3>
        <p style="margin-top:6px;font-size:14px;color:var(--slate-300)">Don't use the form. Message our 24/7 WhatsApp line.</p>
        <a href="https://wa.me/2348085034062" target="_blank" rel="noreferrer" class="btn btn-primary" style="margin-top:16px">${icon("phone").replace("<svg", '<svg style="width:16px;height:16px"')} WhatsApp · 08085034062</a>
      </div>
    </div>
  </aside>`;
    return pageHero({
      route: "contact",
      label: "Contact",
      eyebrow: "Contact",
      title: `Let's talk about <span class="text-gradient">what you're building.</span>`,
      desc: "Tell us about your project or security concern. You'll hear back from a senior team member within one business day."
    }) + section("", `<div class="contact-grid" style="display:grid;gap:40px"><div class="form-card">${formHTML}</div>${sidebar}</div>
      <style>@media(min-width:1024px){.contact-grid{grid-template-columns:1.4fr .8fr}}</style>`) + section(
      "ice",
      `${sectionHead({ center: true, eyebrow: "What happens next", title: "From hello to a clear plan in three steps." })}
      <div class="grid-3 mt-14">
        ${steps.map(
        ([n, t, x]) => `<div style="border-radius:16px;border:1px solid rgba(226,232,240,.9);background:#fff;padding:28px">
              <div class="text-gradient-light" style="font-family:var(--font-display);font-size:36px;font-weight:700">${n}</div>
              <h3 style="margin-top:16px;font-family:var(--font-display);font-size:18px;font-weight:600;color:var(--navy)">${t}</h3>
              <p style="margin-top:8px;font-size:15px;line-height:1.65;color:var(--slate-600)">${x}</p>
            </div>`
      ).join("")}
      </div>
      <div style="margin-top:40px;text-align:center">${textLink("#/faq", "Have a quick question? Read our FAQ")}</div>`
    );
  }

  /* NEW: School Training page. Edit the state list, program labels and form copy here. */
  function SchoolTrainingPage() {
    const states = [
      "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
      "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT - Abuja", "Gombe",
      "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos",
      "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers",
      "Sokoto", "Taraba", "Yobe", "Zamfara"
    ];
    const stateOptions = states.map((state) => `<option value="${state}">${state}</option>`).join("");

    return pageHero({
      route: "school-training",
      label: "School Training",
      eyebrow: "Triple Crown in Schools",
      title: `Helping secondary-school students <span class="text-gradient">build and stay safe online.</span>`,
      desc: "We bring practical web development and cybersecurity sessions to secondary schools, giving students a friendly first step into useful digital skills.",
      actions: `<a href="#school-enquiry" data-scroll-target="school-enquiry" class="btn btn-primary btn-lg">Enquire for your school ${icon("arrow-right", "arr")}</a>${btn("#/contact", "Contact Triple Crown", { variant: "secondary", size: "lg" })}`
    }) +
    section(
      "dark",
      `${sectionHead({ dark: true, center: true, eyebrow: "Learning pathways", title: "Choose one pathway or bring both to your school.", desc: "Sessions are designed for secondary-school learners and can be adapted to the students' age and experience." })}
      <div class="school-program-grid">
        <article class="school-program">
          ${iconBox("code", { dark: true })}
          <h3>Web Development</h3>
          <p>Students learn how websites are made, explore HTML, CSS and JavaScript, and finish with a simple page or project of their own.</p>
        </article>
        <article class="school-program">
          ${iconBox("shield", { dark: true, cyan: true })}
          <h3>Cybersecurity</h3>
          <p>Students learn safer online habits, privacy basics, common digital threats and responsible ways to protect accounts and information.</p>
        </article>
      </div>`,
    ) +
    section(
      "ice",
      `<div class="school-enquiry-layout" id="school-enquiry">
        <div>
          ${sectionHead({ eyebrow: "School enquiry", title: "Tell us about your school.", desc: "Complete the form and we'll open WhatsApp with your enquiry addressed to our school-training team." })}
          <div style="margin-top:28px">${checkList(["Sessions for Nigerian secondary schools", "Choose web development, cybersecurity or both", "Practical, age-appropriate learning", "Direct follow-up through WhatsApp"])}</div>
        </div>
        <div class="school-form-card">
          <h2 style="font-family:var(--font-display);font-size:24px;font-weight:700;color:var(--navy)">Request school training</h2>
          <p style="margin-top:8px;font-size:14px;color:var(--slate-500)">Fields marked * are required.</p>
          <form id="schoolTrainingForm" style="margin-top:8px">
            <div class="school-form-grid">
              <div class="field">
                <label for="school-contact-name">Contact person's name *</label>
                <input class="input" id="school-contact-name" name="contactName" autocomplete="name" required placeholder="Your full name" />
              </div>
              <div class="field">
                <label for="school-country">Country *</label>
                <select class="input" id="school-country" name="country" required>
                  <option value="Nigeria" selected>Nigeria</option>
                  <option value="Ghana">Ghana</option>
                  <option value="South Africa">South Africa</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div class="field">
                <label for="school-state">State / FCT *</label>
                <select class="input" id="school-state" name="state" required>
                  <option value="" selected disabled>Select state or FCT</option>
                  ${stateOptions}
                  <option value="Other / not listed">Other / not listed</option>
                </select>
              </div>
              <div class="field">
                <label for="school-name">School name *</label>
                <input class="input" id="school-name" name="schoolName" required placeholder="Name of secondary school" />
              </div>
              <div class="field">
                <label for="school-program">Training program *</label>
                <select class="input" id="school-program" name="program" required>
                  <option value="" selected disabled>Select a program</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Both Web Development and Cybersecurity">Both Web Development and Cybersecurity</option>
                </select>
              </div>
              <div class="field">
                <label for="school-phone">Phone number *</label>
                <input class="input" id="school-phone" name="phone" type="tel" autocomplete="tel" required placeholder="08085034062" />
              </div>
            </div>
            <button type="submit" class="btn btn-primary btn-lg" style="margin-top:24px;width:100%">
              Send enquiry on WhatsApp ${icon("arrow-right", "arr")}
            </button>
            <div class="school-status" id="schoolTrainingStatus" role="status" aria-live="polite" hidden></div>
          </form>
        </div>
      </div>`,
    ) +
    ctaBand({
      tone: "white",
      title: "Let's bring practical digital skills to your students.",
      desc: "Send a school enquiry and we'll follow up on WhatsApp to discuss the right session for your students.",
      primary: "Enquire for your school",
      secondary: { href: "#/about", label: "Learn about Triple Crown" }
    });
  }

  var FAQ_CATS = ["All", "General", "Web Development", "Cybersecurity", "Pricing & Process"];
  function faqItemsHTML(list, openQ) {
    if (!list.length) {
      return `<div class="empty-state">
      ${icon("search-x").replace("<svg", '<svg style="width:40px;height:40px;color:rgba(37,99,235,.6);margin:0 auto"')}
      <h3 style="margin-top:16px;font-family:var(--font-display);font-size:18px;font-weight:600;color:var(--navy)">No matching questions</h3>
      <p style="margin-top:6px;font-size:14px;color:var(--slate-600)">Try a different keyword, or ask us directly — we're happy to help.</p>
      <div style="margin-top:24px;display:flex;justify-content:center;gap:12px">
        <button type="button" class="btn btn-outline" id="faqClear">Clear filters</button>
        ${btn("#/contact", "Ask us", {})}
      </div>
    </div>`;
    }
    return list.map(
      (f) => `<div class="faq-item${f.q === openQ ? " open" : ""}">
        <h3><button type="button" class="faq-q" data-faq="${encodeURIComponent(f.q)}" aria-expanded="${f.q === openQ}">
          <span class="faq-q-text">${f.q}</span>
          <span class="faq-toggle">${icon("plus")}</span>
        </button></h3>
        <div class="faq-a"><div class="faq-a-inner"><div class="faq-a-body">
          <span class="pill" style="margin-bottom:12px">${f.cat}</span>
          <p>${f.a}</p>
        </div></div></div>
      </div>`
    ).join("");
  }
  function FAQPage() {
    return pageHero({
      route: "faq",
      label: "FAQ",
      eyebrow: "FAQ",
      title: `Answers to the questions <span class="text-gradient">we hear most.</span>`,
      desc: "Clear, honest answers about our process, pricing, technology and security services. Can't find yours? Just ask.",
      extra: `<div class="faq-search fade-up" style="--d:340ms">
        ${icon("search")}
        <input type="search" id="faqSearch" aria-label="Search frequently asked questions" placeholder="Search questions — e.g. pricing, pentest, timeline…" />
      </div>`
    }) + section(
      "",
      `<div style="max-width:48rem;margin:0 auto">
        <div class="filter-row" role="tablist" aria-label="FAQ categories">
          ${FAQ_CATS.map((c) => `<button type="button" role="tab" aria-selected="${c === "All"}" data-cat="${c}" class="filter-btn${c === "All" ? " active" : ""}" style="padding:8px 16px">${c}</button>`).join("")}
        </div>
        <p id="faqCount" aria-live="polite" style="margin-top:24px;font-size:14px;color:var(--slate-500)">${faqs.length} questions</p>
        <div id="faqList" style="margin-top:16px">${faqItemsHTML(faqs, faqs[0].q)}</div>
      </div>`
    ) + ctaBand({
      tone: "ice",
      title: "Still have questions?",
      desc: "Our team is happy to talk through your situation. Book a free consultation and get straight answers.",
      primary: "Talk to our team",
      secondary: { href: "#/services", label: "Explore services" }
    });
  }

  // app.js
  var TITLES = {
    home: "Triple Crown | Web Development & Cybersecurity",
    about: "About Us | Triple Crown",
    services: "Services | Triple Crown",
    "web-development": "Web Development | Triple Crown",
    cybersecurity: "Cybersecurity | Triple Crown",
    portfolio: "Portfolio | Triple Crown",
    "why-choose-us": "Why Choose Us | Triple Crown",
    team: "Our Team | Triple Crown",
    testimonials: "Testimonials | Triple Crown",
    contact: "Contact | Triple Crown",
    "school-training": "School Training | Triple Crown",
    faq: "FAQ | Triple Crown"
  };
  var PAGES = {
    home: HomePage,
    about: AboutPage,
    services: ServicesPage,
    "web-development": WebDevelopmentPage,
    cybersecurity: CybersecurityPage,
    portfolio: PortfolioPage,
    "why-choose-us": WhyChooseUsPage,
    team: TeamPage,
    testimonials: TestimonialsPage,
    contact: ContactPage,
    "school-training": SchoolTrainingPage,
    faq: FAQPage
  };
  var main = document.getElementById("main");
  var modalRoot = document.getElementById("modal-root");
  var header = document.getElementById("siteHeader");
  var menuBtn = document.getElementById("menuBtn");
  var drawer = document.getElementById("drawer");
  function currentRoute() {
    const raw = location.hash.replace(/^#/, "").split("?")[0];
    const path = raw.startsWith("/") ? raw : `/${raw}`;
    const key = path === "/" ? "home" : path.slice(1);
    return PAGES[key] ? key : "home";
  }
  var carouselTimer = null;
  function render() {
    const route = currentRoute();
    if (carouselTimer) {
      clearInterval(carouselTimer);
      carouselTimer = null;
    }
    closeModal();
    closeDrawer();
    main.innerHTML = PAGES[route]();
    main.classList.remove("page-enter");
    void main.offsetWidth;
    main.classList.add("page-enter");
    document.title = TITLES[route];
    window.scrollTo(0, 0);
    markActiveNav(route);
    fitScales();
    bindProjectCards();
    if (route === "testimonials") bindTestimonials();
    if (route === "faq") bindFAQ();
    if (route === "contact") bindContact();
    if (route === "school-training") bindSchoolTraining();
    if (route === "team") bindTeamPhotos();
  }
  function markActiveNav(route) {
    document.querySelectorAll("[data-nav]").forEach((el) => {
      const key = el.getAttribute("data-nav");
      const children = (el.getAttribute("data-children") || "").split(" ").filter(Boolean);
      el.classList.toggle("active", key === route || children.includes(route));
    });
  }
  function closeDrawer() {
    if (drawer.hidden) return;
    drawer.hidden = true;
    menuBtn.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Open menu");
    document.body.style.overflow = "";
  }
  menuBtn.addEventListener("click", () => {
    const open = drawer.hidden;
    drawer.hidden = !open;
    menuBtn.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.style.overflow = open ? "hidden" : "";
  });
  drawer.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeDrawer));
  window.addEventListener(
    "scroll",
    () => header.classList.toggle("scrolled", window.scrollY > 8),
    { passive: true }
  );
  header.classList.toggle("scrolled", window.scrollY > 8);
  document.getElementById("skipLink").addEventListener("click", (e) => {
    e.preventDefault();
    main.focus();
  });
  document.getElementById("year").textContent = (/* @__PURE__ */ new Date()).getFullYear();
  function fitScales() {
    document.querySelectorAll(".scale-wrap").forEach((wrap) => {
      const w = parseFloat(wrap.dataset.w);
      const h = parseFloat(wrap.dataset.h);
      const stage = wrap.querySelector(".scale-stage");
      const s = Math.min(1, wrap.clientWidth / w);
      stage.style.transform = `scale(${s})`;
      wrap.style.height = `${h * s}px`;
    });
  }
  var resizeRaf = 0;
  window.addEventListener("resize", () => {
    cancelAnimationFrame(resizeRaf);
    resizeRaf = requestAnimationFrame(fitScales);
  });
  function bindProjectCards() {
    main.querySelectorAll("[data-project]").forEach((card) => {
      card.addEventListener("click", () => {
        const p = projects.find((x) => x.id === card.dataset.project);
        if (p) openModal(p);
      });
    });
  }
  function openModal(p) {
    modalRoot.innerHTML = modalHTML(p);
    document.body.style.overflow = "hidden";
    modalRoot.querySelector("#modalClose").addEventListener("click", closeModal);
    modalRoot.querySelector("#modalOverlay").addEventListener("click", (e) => {
      if (e.target.id === "modalOverlay") closeModal();
    });
    modalRoot.querySelectorAll("[data-modal-close]").forEach((el) => el.addEventListener("click", closeModal));
  }
  function closeModal() {
    if (!modalRoot.innerHTML) return;
    modalRoot.innerHTML = "";
    document.body.style.overflow = "";
  }
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
  function bindTestimonials() {
    const box = document.getElementById("featBox");
    const wrap = document.getElementById("featWrap");
    const dots = [...main.querySelectorAll("[data-dot]")];
    let i = 0;
    let paused = false;
    const show = (n) => {
      i = (n + testimonials.length) % testimonials.length;
      box.innerHTML = featHTML(testimonials[i], i);
      dots.forEach((d, idx) => d.classList.toggle("active", idx === i));
    };
    document.getElementById("featPrev").addEventListener("click", () => show(i - 1));
    document.getElementById("featNext").addEventListener("click", () => show(i + 1));
    dots.forEach((d) => d.addEventListener("click", () => show(parseInt(d.dataset.dot, 10))));
    wrap.addEventListener("mouseenter", () => paused = true);
    wrap.addEventListener("mouseleave", () => paused = false);
    carouselTimer = setInterval(() => {
      if (!paused) show(i + 1);
    }, 7e3);
  }
  function normalizeSearch(q) {
    return q.trim().toLowerCase().replace(/pen[\s-]?test(ing|s)?/g, "penetration test").replace(/\b(cost|costs|price|prices)\b/g, "pric").replace(/\bhack(ing|ers?)?\b/g, "attack");
  }
  function bindFAQ() {
    const list = document.getElementById("faqList");
    const count = document.getElementById("faqCount");
    const search = document.getElementById("faqSearch");
    let cat = "All";
    let openQ = faqs[0].q;
    const draw = () => {
      const term = normalizeSearch(search.value);
      const filtered = faqs.filter(
        (f) => (cat === "All" || f.cat === cat) && (!term || f.q.toLowerCase().includes(term) || f.a.toLowerCase().includes(term))
      );
      count.textContent = `${filtered.length} ${filtered.length === 1 ? "question" : "questions"}`;
      list.innerHTML = faqItemsHTML(filtered, openQ);
    };
    search.addEventListener("input", draw);
    main.querySelectorAll("[data-cat]").forEach((b) => {
      b.addEventListener("click", () => {
        cat = b.dataset.cat;
        main.querySelectorAll("[data-cat]").forEach((x) => {
          x.classList.toggle("active", x === b);
          x.setAttribute("aria-selected", String(x === b));
        });
        draw();
      });
    });
    list.addEventListener("click", (e) => {
      const clear = e.target.closest("#faqClear");
      if (clear) {
        cat = "All";
        search.value = "";
        main.querySelectorAll("[data-cat]").forEach((x) => {
          const on = x.dataset.cat === "All";
          x.classList.toggle("active", on);
          x.setAttribute("aria-selected", String(on));
        });
        draw();
        return;
      }
      const q = e.target.closest("[data-faq]");
      if (!q) return;
      const question = decodeURIComponent(q.dataset.faq);
      openQ = openQ === question ? null : question;
      draw();
    });
  }
  function bindContact() {
    const form = document.getElementById("contactForm");
    const success = document.getElementById("formSuccess");
    let budget = "";
    document.querySelectorAll("[data-budget]").forEach((chip) => {
      chip.addEventListener("click", () => {
        budget = budget === chip.dataset.budget ? "" : chip.dataset.budget;
        document.querySelectorAll("[data-budget]").forEach((c) => {
          const on = c.dataset.budget === budget && budget !== "";
          c.classList.toggle("active", on);
          c.setAttribute("aria-pressed", String(on));
        });
      });
    });
    const setErr = (name, msg) => {
      const err = document.getElementById(`err-${name}`);
      const input = form.elements[name];
      if (err) {
        err.textContent = msg || "";
        err.hidden = !msg;
      }
      if (input && input.classList) input.classList.toggle("invalid", !!msg);
      if (input) input.setAttribute("aria-invalid", String(!!msg));
    };
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.elements.name.value.trim();
      const email = form.elements.email.value.trim();
      const message = form.elements.message.value.trim();
      let ok = true;
      if (!name) {
        setErr("name", "Please tell us your name.");
        ok = false;
      } else setErr("name", "");
      if (!email) {
        setErr("email", "Please enter your email address.");
        ok = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setErr("email", "That email doesn't look quite right.");
        ok = false;
      } else setErr("email", "");
      if (message.length < 10) {
        setErr("message", "Please share a few details (at least 10 characters).");
        ok = false;
      } else setErr("message", "");
      if (!form.elements.consent.checked) {
        const err = document.getElementById("err-consent");
        err.textContent = "Please confirm so we can contact you.";
        err.hidden = false;
        ok = false;
      } else {
        document.getElementById("err-consent").hidden = true;
      }
      if (!ok) return;
      const company = form.elements.company.value.trim();
      const phone = form.elements.phone.value.trim();
      const service = form.elements.service.value;
      const text = [
        "Hello Triple Crown, I'd like to discuss a project.",
        `Name: ${name}`,
        `Email: ${email}`,
        company && `Company: ${company}`,
        phone && `Phone: ${phone}`,
        `Service: ${service}`,
        budget && `Budget: ${budget}`,
        `Project details: ${message}`
      ].filter(Boolean).join("\n");
      const whatsappUrl = `https://wa.me/2348085034062?text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      const submitBtn = document.getElementById("submitBtn");
      const label = document.getElementById("submitLabel");
      const ic = document.getElementById("submitIcon");
      submitBtn.disabled = true;
      if (ic) ic.outerHTML = '<span class="spinner" id="submitIcon"></span>';
      label.textContent = "Sending…";
      setTimeout(() => {
        form.hidden = true;
        success.hidden = false;
      }, 900);
    });
    document.getElementById("sendAnother").addEventListener("click", () => {
      form.reset();
      budget = "";
      document.querySelectorAll("[data-budget]").forEach((c) => {
        c.classList.remove("active");
        c.setAttribute("aria-pressed", "false");
      });
      ["name", "email", "message"].forEach((n) => setErr(n, ""));
      document.getElementById("err-consent").hidden = true;
      const submitBtn = document.getElementById("submitBtn");
      submitBtn.disabled = false;
      const spin = document.getElementById("submitIcon");
      if (spin) spin.outerHTML = '<svg style="width:16px;height:16px" id="submitIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 3 10.8 13.2M21 3l-6.6 18-3.6-7.6L3.2 9.8Z"/></svg>';
      document.getElementById("submitLabel").textContent = "Send message";
      success.hidden = true;
      form.hidden = false;
    });
  }

  /* NEW: send school-training requests to the school WhatsApp contact. */
  function bindSchoolTraining() {
    const form = document.getElementById("schoolTrainingForm");
    const status = document.getElementById("schoolTrainingStatus");
    if (!form || !status) return;

    // NEW: scroll within this hash-routed page without changing the route hash.
    main.querySelectorAll("[data-scroll-target]").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        document.getElementById(link.dataset.scrollTarget)?.scrollIntoView({ behavior: "smooth" });
      });
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const values = new FormData(form);
      const message = [
        "Hello Triple Crown, I am enquiring about secondary-school training.",
        `Contact person: ${values.get("contactName")}`,
        `Country: ${values.get("country")}`,
        `State / FCT: ${values.get("state")}`,
        `School: ${values.get("schoolName")}`,
        `Program: ${values.get("program")}`,
        `Phone: ${values.get("phone")}`
      ].join("\n");

      // NEW: edit this destination if the school-training WhatsApp number changes.
      const whatsappUrl = `https://wa.me/2348085034062?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      status.innerHTML = `WhatsApp is ready with your enquiry. Tap Send in WhatsApp to complete it. <a href="${whatsappUrl}" target="_blank" rel="noreferrer">Open WhatsApp again</a>`;
      status.hidden = false;
    });
  }

  function bindTeamPhotos() {
    document.querySelectorAll("[data-team-image]").forEach((img) => {
      const fallback = img.parentElement.querySelector(".team-fallback");
      img.addEventListener("load", () => {
        img.hidden = false;
        if (fallback) fallback.hidden = true;
      });
      img.addEventListener("error", () => {
        img.hidden = true;
        if (fallback) fallback.hidden = false;
      });
      if (img.complete && img.naturalWidth > 0) {
        img.hidden = false;
        if (fallback) fallback.hidden = true;
      }
    });
  }
  window.addEventListener("hashchange", render);
  render();
})();
