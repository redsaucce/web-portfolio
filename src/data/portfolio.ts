export const personalInfo = {
  name: "Alex Chen",
  title: "Front-End Developer",
  tagline: "Creating fast, accessible & beautiful web experiences",
  email: "alex@alexchen.dev",
  github: "https://github.com/alexchen",
  linkedin: "https://linkedin.com/in/alexchen",
  twitter: "https://twitter.com/alexchendev",
  location: "San Francisco, CA",
};

export const aboutMe = {
  paragraphs: [
    "I'm a front-end developer with 5+ years of experience building modern web applications. I specialize in React, TypeScript, and crafting pixel-perfect user interfaces that are both beautiful and highly performant.",
    "My passion lies at the intersection of design and engineering — I believe great software should feel effortless to use. I'm obsessed with clean code architecture, web accessibility (a11y), and creating delightful micro-interactions that elevate user experiences.",
    "Currently, I'm focused on building design systems and component libraries that scale across enterprise applications. When I'm not coding, you'll find me contributing to open-source projects, writing technical articles, or exploring the latest in web animation.",
  ],
  highlights: [
    "5+ years of professional front-end development",
    "Passionate about accessibility & performance",
    "Open-source contributor & tech writer",
    "Design system architecture enthusiast",
  ],
};

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "HTML / CSS", level: 98 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Vue.js", level: 75 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express / Fastify", level: 80 },
      { name: "PostgreSQL", level: 72 },
      { name: "REST / GraphQL", level: 88 },
      { name: "Python / Django", level: 65 },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: "🛠️",
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "Docker", level: 70 },
      { name: "CI/CD Pipelines", level: 78 },
      { name: "Figma / Design Tools", level: 85 },
      { name: "Testing (Jest/Cypress)", level: 82 },
    ],
  },
];

export interface Project {
  id: number;
  title: string;
  description: string;
  impact: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  sourceUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "MindBlow",
    description:
      "An AI-powered quiz generator web application that creates interactive quizzes from user prompts and study topics.",
    impact:
      "Improved quiz creation speed through automated content generation and a streamlined user flow for studying and review.",
    technologies: ["Next.js", "FastAPI", "PostgreSQL"],
    image: "/images/project-1.jpg",
    liveUrl: "#",
    sourceUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Web Portfolio",
    description:
      "A personal portfolio website designed to present projects, skills, and experience through a clean and responsive interface.",
    impact:
      "Built to strengthen personal branding and communicate front-end capabilities through a polished, production-ready presentation.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/project-2.jpg",
    liveUrl: "#",
    sourceUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Product Landing Page",
    description:
      "A conversion-focused product landing page built to clearly communicate product value, features, and call-to-action sections.",
    impact:
      "Focused on visual hierarchy, responsive layout, and persuasive messaging to support product marketing goals.",
    technologies: ["React", "Tailwind CSS", "Vite"],
    image: "/images/project-3.jpg",
    liveUrl: "#",
    sourceUrl: "#",
    featured: true,
  },
];

export interface Experience {
  id: number;
  type: "work" | "education";
  title: string;
  organization: string;
  period: string;
  description: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    type: "work",
    title: "Commissioned Front-End Projects",
    organization: "Student & Independent Client Work",
    period: "2023 — 2026",
    description:
      "Built front-end interfaces for small commissioned websites and academic client projects, focusing on responsive layouts and clear user experiences.",
    achievements: [
      "Delivered custom landing pages and multi-section websites for student-led and local client needs",
      "Translated Figma references and content briefs into responsive interfaces using modern front-end tools",
      "Improved usability through mobile-first layouts, cleaner navigation, and accessible UI patterns",
    ],
  },
  {
    id: 2,
    type: "work",
    title: "Capstone Front-End Developer",
    organization: "University Capstone Project",
    period: "2025 — 2026",
    description:
      "Led the front-end implementation for a capstone project, turning product requirements into a complete and user-focused web interface.",
    achievements: [
      "Developed the main UI system and reusable components for the capstone application",
      "Collaborated with teammates handling back-end logic, research, and project documentation",
      "Presented the final product through a polished working prototype and project defense materials",
    ],
  },
  {
    id: 3,
    type: "work",
    title: "Database Design & Modeling",
    organization: "Academic & Project-Based Work",
    period: "2024 — 2026",
    description:
      "Worked on database planning for academic and project-based systems, focusing on schema structure, relationships, and clean data organization.",
    achievements: [
      "Designed relational database schemas based on project requirements and user workflows",
      "Created entity relationships and structured tables to support scalable data flow",
      "Applied data modeling principles to improve clarity, consistency, and maintainability of system data",
    ],
  },
  {
    id: 4,
    type: "education",
    title: "B.S. Computer Science",
    organization: "University of California, Berkeley",
    period: "2022 — 2026",
    description:
      "Fresh graduate focused on front-end development, web technologies, and human-centered interface design.",
    achievements: [
      "Completed academic web and software projects with a strong emphasis on interface implementation",
      "Built experience in collaborative development through class projects, presentations, and technical documentation",
      "Strengthened fundamentals in JavaScript, responsive design, usability, and modern front-end workflows",
    ],
  },
];

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}

export const certifications: Certification[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Jan 2024",
  },
  {
    title: "Google UX Design Professional Certificate",
    issuer: "Google",
    date: "Aug 2023",
  },
  {
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta",
    date: "May 2023",
  },
];
