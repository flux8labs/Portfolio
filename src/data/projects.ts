
export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  client: string;
  timeline: string;
  challenge: string;
  solution: string;
  technologies: string[];
  results: string[];
  images: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
  id: "aurora-luxe",
  title: "Aurora Luxe Jewellery",
  description: "Minimal and modern jewellery store designed to feel elegant while staying lightning fast and responsive",
  category: "ecommerce",
  client: "Luxe Fashion Co.",
  timeline: "6 months",
  challenge: "Build a luxury brand experience online without bloated visuals or slow load times",
  solution: "Delivered a sleek, mobile-first store built in React, focused on product presentation, simplified filtering, and smooth checkout flow",
  technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
  results: [
    "300% increase in user engagement post-launch",
    "45% improvement in checkout completion rate",
    "2.5M+ monthly page views across the platform"
  ],
  images: [
    "/img/ecom/luxe.avif",
    "/img/ecom/luxe2.avif"
  ],
  testimonial: {
    quote: "Flux8Labs helped us deliver a luxurious yet practical experience. Everything feels fast, intuitive, and brand-aligned.",
    author: "Sarah Johnson",
    position: "CEO, Luxe Fashion Co."
  },
  liveUrl: "https://aurora.flux8labs.com/",
  featured: true
},
{
  id: "code-bros",
  title: "Code Bros Tech Store",
  description: "Dev-friendly hardware and gear store focused on comparisons, specs, and efficient buying decisions",
  category: "ecommerce",
  client: "Code Bros Technologies",
  timeline: "7 months",
  challenge: "Help developers filter through hundreds of products without decision fatigue",
  solution: "Created a React-based platform with detailed product pages, smart filters, and an intuitive compare view",
  technologies: ["React", "Node.js", "MongoDB", "Elasticsearch", "Stripe", "Redis", "AWS"],
  results: [
    "350% boost in conversion via comparison features",
    "85% positive feedback on product recommendations",
    "200K+ devs served with a 4.8/5 rating"
  ],
  images: [
    "/img/ecom/codebro.avif",
    "/img/ecom/codebro2.avif"
  ],
  testimonial: {
    quote: "Code Bros made technical shopping feel simple. The comparison tools saved us days of research.",
    author: "Alex Rodriguez",
    position: "Lead Developer, TechStart Inc."
  },
  liveUrl: "https://code-bros.flux8labs.com/",
  featured: true
},
{
  id: "flux8-shop",
  title: "Flux8Shop",
  description: "A clean and compact tech lifestyle store showcasing curated gadgets, accessories, and limited-edition releases",
  category: "ecommerce",
  client: "Flux8 Labs",
  timeline: "5 months",
  challenge: "Create a storefront that reflects the brand’s identity—clear, purposeful, and slightly playful",
  solution: "Built a minimal React-based storefront with fast filtering, high mobile performance, and Stripe integration",
  technologies: ["React", "Tailwind CSS", "Stripe"],
  results: [
    "Live in 5 months with 98% Lighthouse mobile performance",
    "2x higher user retention after UX iteration",
    "500+ early repeat buyers in first 30 days"
  ],
  images: [
    "/img/ecom/Flux8shop.avif",
    "/img/ecom/flux8shop2.avif"
  ],
  testimonial: {
    quote: "Flux8Shop feels like a side project that turned into a brand. It's fast, well built, and super clean.",
    author: "Niharika Jain",
    position: "Product Designer, CreativeBit"
  },
  liveUrl: "https://shop.flux8labs.com/",
  featured: false
},
{
  id: "flame-gear-gaming-store",
  title: "Flame Gear Gaming Store",
  description: "A performance-driven gaming gear store with bold visuals, powerful UI, and real-time engagement tools",
  category: "ecommerce",
  client: "Flame Gear Gaming",
  timeline: "7 months",
  challenge: "Make high-end gaming gear feel accessible while adding speed, depth, and excitement to shopping",
  solution: "Delivered a React-based store with product highlights, usage stats, community features, and live stock updates",
  technologies: ["Vue.js", "Node.js", "MongoDB", "Stripe", "Socket.io", "AWS"],
  results: [
    "275% increase in average order value",
    "60% fewer product inquiries due to better specs layout",
    "500K+ registered users in the gaming ecosystem"
  ],
  images: [
    "/img/ecom/flame.avif",
    "/img/ecom/flame2.avif"
  ],
  testimonial: {
    quote: "They got gaming. The store is fast, visually strong, and just the right amount of aggressive.",
    author: "Marcus Thompson",
    position: "Founder, Flame Gear Gaming"
  },
  liveUrl: "https://flame-gear.flux8labs.com/",
  featured: false
},
{
  id: "sakura-ecom-store",
  title: "Sakura Japanese Store",
  description: "Online store offering authentic Japanese crafts, snacks, and souvenirs, made for culture-focused buyers",
  category: "ecommerce",
  client: "Sakura Import Co.",
  timeline: "5 months",
  challenge: "Build trust in cultural products and communicate heritage without overloading users",
  solution: "Built a calming storefront in React with storytelling components, artisan bios, and origin verification features",
  technologies: ["React", "Node.js", "MongoDB", "Stripe", "Shopify API", "AWS"],
  results: [
    "450% increase in traditional product sales",
    "90% satisfaction on product authenticity",
    "180K+ international buyers in year one"
  ],
  images: [
    "/img/ecom/sakura.avif",
    "/img/ecom/sakura2.avif"
  ],
  testimonial: {
    quote: "Flux8Labs gave our culture-focused brand the space and respect it needed to grow globally.",
    author: "Hiroshi Tanaka",
    position: "Owner, Sakura Import Co."
  },
  liveUrl: "https://sakura.flux8labs.com/",
  featured: false
},
{
  id: "serene-store",
  title: "Serene Wellness",
  description: "E-commerce platform for wellness products with clean design, simple subscriptions, and transparent product sourcing",
  category: "ecommerce",
  client: "Serene Wellness Co.",
  timeline: "6 months",
  challenge: "Build something calming, modern, and easy to use across all age groups interested in wellness",
  solution: "Focused on whitespace, guided product quizzes, and a Shopify-driven subscription model",
  technologies: ["React", "Node.js", "MongoDB", "Stripe", "Shopify API", "AWS"],
  results: [
    "420% increase in recurring subscription orders",
    "65% improvement in bundled sales",
    "150K+ monthly shoppers and growing"
  ],
  images: [
    "/img/ecom/Serene.avif",
    "/img/ecom/serene2.avif"
  ],
  testimonial: {
    quote: "They made wellness look and feel right online. Customers trust the flow, and it shows in our sales.",
    author: "Sarah Chen",
    position: "Founder, Serene Wellness Co."
  },
  liveUrl: "https://serene.flux8labs.com/",
  featured: false
},
{
  id: "pulse-fitness-store",
  title: "Pulse Fitness Store",
  description: "Full-stack fitness products store with smart product filters, subscription nutrition, and guided recommendations",
  category: "ecommerce",
  client: "Pulse Fitness Solutions",
  timeline: "7 months",
  challenge: "Make it easy for users to match fitness goals with gear, food, and supplements all in one place",
  solution: "Created a dynamic React-based platform with recommendation engines and simple UI for beginners and pros",
  technologies: ["React", "Node.js", "MongoDB", "Stripe", "TensorFlow.js", "AWS", "Shopify API"],
  results: [
    "380% boost in subscription sales",
    "75% higher accuracy in recommendation mapping",
    "300K+ fitness customers onboarded"
  ],
  images: [
    "/img/ecom/pulse.avif",
    "/img/ecom/pulse2.avif"
  ],
  testimonial: {
    quote: "Flux8Labs made a fitness platform that truly works—it’s clean, accurate, and doesn’t get in the way.",
    author: "Jessica Martinez",
    position: "Head of Marketing, Pulse Fitness Solutions"
  },
  liveUrl: "https://pulse.flux8labs.com/",
  featured: false
},
{
  id: "cavewear-streetwear-store",
  title: "CaveWear",
  description: "Streetwear e-commerce site built around limited drops, fast visuals, and bold brand storytelling",
  category: "ecommerce",
  client: "CaveWear Collective",
  timeline: "6 months",
  challenge: "Create urgency and exclusivity in a brand-first experience for the underground streetwear scene",
  solution: "Delivered time-based drop modules, waitlists, minimal product pages, and strong mobile UX",
  technologies: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io", "AWS"],
  results: [
    "800% faster sell-outs on limited editions",
    "65% rise in mobile conversion",
    "400K+ streetwear fans in the community"
  ],
  images: [
    "/img/ecom/cave.avif",
    "/img/ecom/cave2.avif"
  ],
  testimonial: {
    quote: "The platform feels real—built for drop culture, not just another Shopify clone. It works.",
    author: "Jordan Kim",
    position: "Creative Director, CaveWear Collective"
  },
  liveUrl: "https://cavewear.flux8labs.com/",
  featured: false
},
  {
  id: "mohit-portfolio-site",
  title: "Mohit Phogat Personal Portfolio",
  description: "Minimal and performance-focused developer portfolio with smooth animations, project showcases, and contact gateway",
  category: "portfolios",
  client: "Mohit Phogat",
  timeline: "2 weeks",
  challenge: "Build a clean, fast, and visually engaging site that reflects Mohit's skills while staying lightweight and easy to maintain",
  solution: "Developed a fully responsive portfolio with React, TailwindCSS, and tsParticles for animated backgrounds, showcasing work, skills, and contact info",
  technologies: ["React", "TailwindCSS", "tsParticles", "Framer Motion"],
  results: [
    "100% Lighthouse performance and SEO scores",
    "Used by recruiters to evaluate skills quickly",
    "Enabled inbound freelance queries via direct CTA"
  ],
  images: [
    "/img/portfolio/mohit.avif",
    "/img/portfolio/mohit2.avif"],
  testimonial: {
    quote: "Exactly what I needed—fast, minimal, and impactful. It shows who I am and what I do in seconds.",
    author: "Mohit Phogat",
    position: "Developer"
  },
  liveUrl: "https://mohit.flux8labs.com/",
  featured: false
},
  {
  id: "goimg-image-tools",
  title: "GoIMG — Free Image Tools Suite",
  description: "Browser-based image utility suite for compression, resizing, conversion, and enhancement — all client-side",
  category: "saas",
  client: "Internal Product",
  timeline: "1.5 months",
  challenge: "Create a privacy-first image toolset that runs entirely in the browser with fast performance and modern UI",
  solution: "Built a progressive web app using WebAssembly to enable powerful image processing in the browser with zero server calls",
  technologies: ["React", "TailwindCSS", "WASM", "PWA", "Vite"],
  results: [
    "Served 500k+ images within first 3 months",
    "Zero backend infrastructure cost",
    "100% GDPR-compliant with full client-side execution"
  ],
  images: [
    "/img/saas/goimg.avif",
    "/img/saas/goimg2.avif"
  ],
  testimonial: {
    quote: "The GoIMG suite just works. Super fast, secure, and no annoying uploads. A no-brainer for anyone working with images.",
    author: "Internal Feedback",
    position: "Beta User"
  },
  liveUrl: "https://goimg.run",
  featured: false
},
{
  id: "gopdf-pdf-tools",
  title: "GoPDF — Free PDF Tools in One Place",
  description: "Web-based toolkit for merging, splitting, compressing, and converting PDFs without any account or limits",
  category: "saas",
  client: "Internal Product",
  timeline: "1.5 months",
  challenge: "Provide powerful PDF manipulation tools with complete privacy, zero server interaction, and instant processing",
  solution: "Developed a WebAssembly-powered PWA that handles all PDF operations locally in the browser, ensuring speed and data safety",
  technologies: ["React", "TailwindCSS", "WASM", "PWA", "Vite"],
  results: [
    "Processed 1M+ PDFs with 0 server load",
    "Used by freelancers, students, and legal professionals daily",
    "100% uptime and privacy-respecting by design"
  ],
  images: [
    "/img/saas/gopdf.avif",
    "/img/saas/gopdf2.avif"
  ],
  testimonial: {
    quote: "It’s rare to find a PDF tool that’s this fast and doesn’t touch your data. GoPDF nailed it.",
    author: "Internal Feedback",
    position: "Beta User"
  },
  liveUrl: "https://gopdf.run",
  featured: true
},
  {
    id: "productivity-toolkit",
    title: "ProTools Productivity Suite",
    description: "All-in-one productivity toolkit with task management, time tracking, and team collaboration features",
    category: "tools",
    client: "Internal Project",
    timeline: "4 months",
    challenge: "Create a unified productivity solution that replaces multiple separate tools",
    solution: "Developed an integrated suite with seamless data sync and intelligent automation features",
    technologies: ["Vue.js", "Express.js", "MongoDB", "Socket.io", "PWA"],
    results: [
      "50K+ active users",
      "40% productivity increase reported",
      "4.8/5 app store rating"
    ],
    images: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800"
    ],
    featured: false
  },
  {
  id: "sandhyaneed-platform",
  title: "Sandhyaneed Senior Living Platform",
  description: "Compassionate digital presence for senior-care homes, focused on warmth, transparency, and community engagement",
  category: "ngos",
  client: "Sandhyaneed Foundation",
  timeline: "5 months",
  challenge: "Design a site that feels comforting to senior residents and their families, while offering clear info and easy navigation",
  solution: "Built a React + Django platform with serene UI, facility listings, schedule highlights, contact forms, and story-driven content",
  technologies: ["React", "Django", "PostgreSQL", "Chart.js", "AWS"],
  results: [
    "Families report 90% higher trust in care through online transparency",
    "75% increase in inquiry submissions",
    "Featured as ‘Project of the Month’ on Flux8Labs’ portfolio"
  ],
  images: [
    "/img/ngo/sandhyaneed.avif",
    "/img/ngo/sandhyaneed2.avif"
  ],
  testimonial: {
    quote: "Flux8Labs created a digital sanctuary for our residents—it’s warm, clear, and welcoming.",
    author: "Anita Mehra",
    position: "Director, Sandhyaneed Foundation"
  },
  liveUrl: "https://sandhyaneed.flux8labs.com/",
  featured: false
},
{
  id: "paws-compassion-platform",
  title: "Paws for Compassion Rescue Portal",
  description: "Non-profit site supporting animal rescue, education, and sponsorship in Đà Nẵng, Vietnam",
  category: "ngos",
  client: "Paws for Compassion",
  timeline: "5 months",
  challenge: "Combine story, purpose, and action into one cohesive site that drives education, sponsorship, and adoption",
  solution: "Created a React + Django portal with clear navigation, volunteer and sponsor flows, event listings, and multilingual support",
  technologies: ["React", "Django", "PostgreSQL", "Chart.js", "AWS"],
  results: [
    "60% increase in sponsorship sign-ups",
    "40% boost in volunteer inquiries",
    "Expanded educational reach to 5 schools in Vietnam"
  ],
  images: [
    "/img/ngo/paws.avif",
    "/img/ngo/paws2.avif"
  ],
  testimonial: {
    quote: "They built us a platform that tells our story and grows our mission—Vietnamese youth are more engaged than ever.",
    author: "Dom Nguyen",
    position: "Co‑Founder, Paws for Compassion"
  },
  liveUrl: "https://paws-of-compassion.flux8labs.com/",
  featured: false
},
  {
  id: "flux8-school-erp",
  title: "Flux8 School Website & ERP System",
  description: "Dual-purpose platform combining a modern school website with a full-featured ERP backend for academic and administrative operations",
  category: "software",
  client: "Springfield International School",
  timeline: "5 months",
  challenge: "Build an all-in-one platform to manage school operations, student data, teacher workflows, and public-facing web presence",
  solution: "Designed a static school site paired with a role-based ERP system for admissions, attendance, fees, exams, and staff management",
  technologies: ["React", "Node.js", "MongoDB", "JWT", "AWS"],
  results: [
    "Centralized 100% of school operations in one dashboard",
    "Enabled paperless admissions and digital report cards",
    "Improved fee collection tracking by 3x within first term"
  ],
  images: [
    "/img/softsol/school.avif",
    "/img/softsol/school2.avif"
  ],
  testimonial: {
    quote: "Their system brought clarity to our operations. Everything from fees to attendance now runs smoothly.",
    author: "Priya Mehta",
    position: "Principal, Springfield International School"
  },
  liveUrl: "https://flux8-school.flux8labs.com/",
  featured: false
},
  {
    id: "apex-fitness-gym",
    title: "Apex Fitness - Complete Gym Management System",
    description: "Comprehensive fitness center management platform with member tracking, class scheduling, and payment processing",
    category: "business",
    client: "Apex Fitness Group",
    timeline: "6 months",
    challenge: "Streamline operations across 12 gym locations with unified member management and automated billing systems",
    solution: "Developed integrated management suite with real-time member tracking, automated class scheduling, and seamless payment processing",
    technologies: ["React Native", "Node.js", "MongoDB", "Socket.io", "Stripe"],
    results: [
      "35% reduction in operational costs",
      "40% improvement in member retention",
      "Deployed across 15 gym locations"
    ],
    images: [
      "/img/busi/apex.avif",
      "/img/busi/apex2.avif"
    ],
    testimonial: {
      quote: "Flux8Labs transformed our gym operations completely. The system is intuitive and has significantly improved our efficiency.",
      author: "Rajesh Kumar",
      position: "CEO, Apex Fitness Group"
    },
    liveUrl: "https://apex-fitness.flux8labs.com/",
    featured: false
  },
  {
    id: "infra-industries-storage",
    title: "INFRA Industries Ltd. - Water & Industrial Storage Solutions",
    description: "Comprehensive digital platform for industrial storage containers and tanks manufacturing company established in 1991",
    category: "business",
    client: "INFRA Industries Ltd.",
    timeline: "5 months",
    challenge: "Modernize the digital presence of a 30+ year old industrial storage company with complex product catalogs and B2B customer requirements",
    solution: "Developed a robust industrial platform with detailed product specifications, quote management system, and streamlined B2B ordering process",
    technologies: ["React", "Node.js", "MongoDB", "Express", "AWS S3"],
    results: [
      "60% increase in online inquiries",
      "40% reduction in quote processing time",
      "Expanded digital reach to 25+ industrial sectors"
    ],
    images: [
      "/img/busi/infra.avif",
      "/img/busi/infra2.avif"
    ],
    testimonial: {
      quote: "The platform has modernized our entire business process. Our clients now have 24/7 access to product catalogs and can request quotes instantly.",
      author: "Suresh Patel",
      position: "Managing Director, INFRA Industries Ltd."
    },
    liveUrl: "https://infra.flux8labs.com",
    featured: false
  },
  {
    id: "homeifye-interior-design",
    title: "Homeifye - Modern Home Design & Decor",
    description: "Premium interior design platform offering exquisite furnishing solutions and personalized home transformation services",
    category: "business",
    client: "Homeifye Design Studio",
    timeline: "4 months",
    challenge: "Create an elegant digital platform that showcases premium interior design services while providing personalized customer experiences",
    solution: "Built a sophisticated design platform with interactive room visualization, premium furnishing catalogs, and personalized consultation booking",
    technologies: ["React", "Three.js", "Node.js", "PostgreSQL", "Stripe"],
    results: [
      "150% increase in consultation bookings",
      "75% improvement in customer satisfaction",
      "Featured in 3 design magazines"
    ],
    images: [
      "/img/busi/homeifye.avif",
      "/img/busi/homeifye2.avif"
    ],
    testimonial: {
      quote: "Flux8Labs created a stunning platform that perfectly represents our design philosophy. The 3D visualization feature has been a game-changer for our clients.",
      author: "Priya Sharma",
      position: "Founder, Homeifye Design Studio"
    },
    liveUrl: "https://homeifye.flux8labs.com",
    featured: false
  },
  {
    id: "cinema-stories-platform",
    title: "Cinema Stories - Cinematic Storytelling Platform",
    description: "Interactive storytelling platform for cinematic experiences with immersive scroll-based narratives",
    category: "business",
    client: "Digital Media Collective",
    timeline: "5 months",
    challenge: "Build an engaging platform for cinematic storytelling with smooth scroll interactions and multimedia integration",
    solution: "Created an innovative storytelling platform with cinematic scroll effects, multimedia integration, and immersive user experience",
    technologies: ["React", "GSAP", "Three.js", "Node.js", "PostgreSQL"],
    results: [
      "50% increase in user session duration",
      "85% positive user feedback",
      "Featured in 3 design showcases"
    ],
    images: [
      "/img/busi/cs.avif",
      "/img/busi/cs2.avif"
    ],
    testimonial: {
      quote: "The platform brings stories to life in ways we never imagined. The scroll-based interactions create truly immersive experiences.",
      author: "Arjun Verma",
      position: "Creative Director, Digital Media Collective"
    },
    liveUrl: "https://cinema-stories.flux8labs.com/",
    featured: true
  },
  {
    id: "desi-fit-verse",
    title: "DESIFitVerse - Premier Fitness Destination",
    description: "Comprehensive fitness platform tailored for the Indian market with personalized workout plans and nutrition tracking",
    category: "business",
    client: "FitIndia Wellness",
    timeline: "6 months",
    challenge: "Develop a culturally-adapted fitness platform for Indian users with localized content and community features",
    solution: "Built a comprehensive fitness ecosystem with Indian cuisine nutrition tracking, cultural workout preferences, and community engagement",
    technologies: ["React Native", "Firebase", "Node.js", "MongoDB", "ML Kit"],
    results: [
      "80K+ active users within 6 months",
      "45% improvement in user fitness goals",
      "Expanded to 12 Indian cities"
    ],
    images: [
      "/img/busi/desi.avif",
      "/img/busi/desi2.avif"
    ],
    testimonial: {
      quote: "DESIFitVerse understands the Indian fitness culture perfectly. The app has helped thousands achieve their health goals with culturally relevant content.",
      author: "Dr. Meera Joshi",
      position: "Co-founder, FitIndia Wellness"
    },
    liveUrl: "https://desi-fit.flux8labs.com/",
    featured: false 
   },
];

export const categories = [
  {
    id: "ecommerce",
    name: "E-commerce Stores",
    description: "Modern online shopping experiences with advanced features",
    icon: "🛍️",
    count: projects.filter(p => p.category === "ecommerce").length
  },
  {
    id: "portfolios",
    name: "Portfolios",
    description: "Creative and professional portfolio websites that stand out",
    icon: "🎨",
    count: projects.filter(p => p.category === "portfolios").length
  },
  {
    id: "saas",
    name: "SaaS Platforms",
    description: "Scalable software-as-a-service solutions for businesses",
    icon: "💼",
    count: projects.filter(p => p.category === "saas").length
  },
  {
    id: "software",
    name: "Software Solutions",
    description: "Custom software solutions for complex business needs",
    icon: "💻",
    count: projects.filter(p => p.category === "software").length
  },
  {
    id: "ngos",
    name: "NGO Websites",
    description: "Impactful websites for non-profit organizations",
    icon: "🌍",
    count: projects.filter(p => p.category === "ngos").length
  },
  {
    id: "business",
    name: "Business Websites",
    description: "Professional business websites that drive results",
    icon: "🏢",
    count: projects.filter(p => p.category === "business").length
  }
];
