import {
  Code2,
  Server,
  Palette,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import SectionHeader from "./SectionHeader";

interface SkillGroup {
  title: string;
  icon: LucideIcon;
  iconClass: string;
  summary: string;
  strengths: string[];
  footerLabel: string;
  footerItems: string[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    icon: Code2,
    iconClass: "bg-primary-50 text-primary-600 border-primary-200",
    summary:
      "Building responsive, accessible, and performance-focused interfaces for modern web products.",
    strengths: [
      "Mobile-First Responsive Development",
      "Accessibility & Performance Optimization",
      "Component Architecture",
    ],
    footerLabel: "Technologies",
    footerItems: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend Integration",
    icon: Server,
    iconClass: "bg-violet-50 text-violet-600 border-violet-200",
    summary:
      "Connecting interfaces to reliable APIs and structured data workflows.",
    strengths: [
      "Server-side Logic",
      "Database Design",
      "Data Handling",
    ],
    footerLabel: "Technologies",
    footerItems: ["Node.js", "Express", "PostgreSQL"],
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    iconClass: "bg-purple-50 text-purple-600 border-purple-200",
    summary:
      "Designing clean, intuitive interfaces with a focus on usability and visual clarity.",
    strengths: [
      "UI Design",
      "Wireframing",
      "User-Centered Design",
    ],
    footerLabel: "Tools",
    footerItems: ["Figma", "Adobe XD"],
  },
  {
    title: "Workflow & Delivery",
    icon: Wrench,
    iconClass: "bg-fuchsia-50 text-fuchsia-600 border-fuchsia-200",
    summary:
      "Maintaining efficient development workflows and smooth collaboration from build to launch.",
    strengths: [
      "Version Control",
      "Team Collaboration",
      "Project Delivery",
    ],
    footerLabel: "Tools",
    footerItems: ["Git", "GitHub"],
  },
];

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-4 sm:py-12 relative bg-gradient-to-br from-primary-50 via-white to-violet-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Skills"
          title="Skills & Technologies"
          description="Core capabilities first, with tools and technologies supporting the work behind them."
        />

        <div
          ref={ref}
          className={`max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <div
                key={group.title}
                className="rounded-3xl border-2 border-violet-300 bg-white transition-all duration-700 hover:border-violet-400 hover:shadow-lg"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="p-6 sm:p-7 flex h-full flex-col">
                  {/* Card header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${group.iconClass}`}
                    >
                      <Icon size={22} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {group.title}
                    </h3>
                  </div>

                  {/* Card body */}
                  <div className="space-y-5">
                    <p className="text-sm sm:text-base leading-relaxed text-slate-500">
                      {group.summary}
                    </p>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-3">
                        Core strengths
                      </p>
                      <ul className="space-y-2.5">
                        {group.strengths.map((strength) => (
                          <li key={strength} className="flex items-start gap-3 text-sm sm:text-[15px] text-slate-700">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                            <span>{strength}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card footer */}
                  <div className="mt-6 pt-5 border-t border-slate-200">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-3">
                      {group.footerLabel}
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      {group.footerItems.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-primary-100 text-primary-700 px-3.5 py-2 text-xs font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
