
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
    id: "luxe-fashion-store",
    title: "Luxe Fashion E-commerce Platform",
    description: "Premium fashion e-commerce platform with AR try-on features and personalized shopping experience",
    category: "ecommerce",
    client: "Luxe Fashion Co.",
    timeline: "6 months",
    challenge: "Create a luxury shopping experience that combines traditional elegance with cutting-edge technology",
    solution: "Built a sophisticated e-commerce platform with AR integration, AI-powered recommendations, and seamless checkout flow",
    technologies: ["React", "Node.js", "MongoDB", "AR.js", "Stripe", "AWS"],
    results: [
      "300% increase in conversion rates",
      "45% reduction in return rates through AR try-on",
      "2.5M+ monthly active users"
    ],
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800"
    ],
    testimonial: {
      quote: "Flux8labs transformed our vision into reality. The AR features are game-changing!",
      author: "Sarah Johnson",
      position: "CEO, Luxe Fashion Co."
    },
    liveUrl: "https://luxefashion.demo",
    featured: true
  },
  {
    id: "creative-portfolio-studio",
    title: "Creative Studio Portfolio",
    description: "Interactive portfolio showcasing creative works with immersive 3D galleries and smooth animations",
    category: "portfolios",
    client: "Studio Artisan",
    timeline: "3 months",
    challenge: "Design a portfolio that stands out in the competitive creative industry",
    solution: "Created an immersive 3D gallery experience with WebGL animations and interactive storytelling",
    technologies: ["Three.js", "React", "GSAP", "WebGL", "TypeScript"],
    results: [
      "500% increase in client inquiries",
      "Featured in 12 design publications",
      "Award-winning design recognition"
    ],
    images: [
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800"
    ],
    testimonial: {
      quote: "Our new portfolio website is absolutely stunning. It perfectly captures our creative essence.",
      author: "Marcus Chen",
      position: "Creative Director, Studio Artisan"
    },
    featured: true
  },
  {
    id: "saas-analytics-platform",
    title: "DataFlow Analytics SaaS",
    description: "Comprehensive analytics platform for enterprise data visualization and business intelligence",
    category: "saas",
    client: "DataFlow Inc.",
    timeline: "8 months",
    challenge: "Build a scalable SaaS platform handling millions of data points with real-time processing",
    solution: "Architected a microservices-based platform with real-time data streaming and advanced visualization",
    technologies: ["React", "Python", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
    results: [
      "$2M ARR within first year",
      "150+ enterprise clients",
      "99.9% uptime reliability"
    ],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
    ],
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
    id: "ngo-impact-tracker",
    title: "Global Impact NGO Platform",
    description: "Impact tracking and donor management platform for international NGO operations",
    category: "ngos",
    client: "Global Hope Foundation",
    timeline: "5 months",
    challenge: "Create transparent impact tracking system for global NGO operations and donor reporting",
    solution: "Built comprehensive platform with real-time impact metrics, donor portal, and automated reporting",
    technologies: ["React", "Django", "PostgreSQL", "Chart.js", "AWS"],
    results: [
      "200% increase in donations",
      "90% improvement in reporting efficiency",
      "Expanded to 25 countries"
    ],
    images: [
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800"
    ],
    testimonial: {
      quote: "This platform revolutionized how we track and report our global impact.",
      author: "Dr. Maria Santos",
      position: "Director, Global Hope Foundation"
    },
    featured: false
  },
  {
    id: "fintech-trading-platform",
    title: "TradePro Financial Platform",
    description: "Advanced trading platform with real-time market data, AI-powered insights, and risk management",
    category: "software",
    client: "TradePro Financial",
    timeline: "12 months",
    challenge: "Build enterprise-grade trading platform with microsecond latency and advanced security",
    solution: "Architected high-frequency trading system with AI analytics and comprehensive risk management",
    technologies: ["React", "C++", "Python", "WebSocket", "PostgreSQL", "Machine Learning"],
    results: [
      "$50M+ daily trading volume",
      "Sub-millisecond execution speed",
      "SOC 2 Type II compliance"
    ],
    images: [
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800"
    ],
    featured: true
  },
  {
    id: "restaurant-management-system",
    title: "RestaurantFlow Management Suite",
    description: "Complete restaurant management system with POS, inventory, staff scheduling, and analytics",
    category: "business",
    client: "Metro Restaurant Group",
    timeline: "6 months",
    challenge: "Streamline operations across 50+ restaurant locations with unified management system",
    solution: "Developed comprehensive management suite with real-time sync, automated inventory, and predictive analytics",
    technologies: ["React Native", "Node.js", "MongoDB", "Socket.io", "Stripe"],
    results: [
      "35% reduction in operational costs",
      "25% improvement in customer satisfaction",
      "Deployed across 75 locations"
    ],
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800"
    ],
    featured: false
  }
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
    id: "tools",
    name: "Tools & Utilities",
    description: "Productivity tools and utilities that make work easier",
    icon: "🔧",
    count: projects.filter(p => p.category === "tools").length
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
