import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { projects } from "../data/portfolio";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import SectionHeader from "./SectionHeader";
import ImageFallback from "./ui/image-fallback";

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      ref={ref}
      className={`project-card bg-white rounded-2xl overflow-hidden border-2 border-violet-300 hover:border-violet-400 hover:shadow-lg transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Image fallback */}
      <div className="group relative overflow-hidden aspect-video">
        <ImageFallback variant={index} />

        {/* Desktop hover links — image hover only */}
        <div className="hidden md:flex absolute inset-0 z-10 items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/35 backdrop-blur-sm">
          <a
            href={project.liveUrl}
            className="px-5 py-3 rounded-full bg-primary-600 text-white text-sm font-semibold hover:bg-primary-500 transition-colors shadow-lg"
            aria-label="Live demo"
          >
            Live Demo
          </a>
          <a
            href={project.sourceUrl}
            className="px-5 py-3 rounded-full bg-white text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors shadow-lg border border-violet-300"
            aria-label="GitHub"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        <h3 className="text-xl font-bold text-slate-900 mb-3 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-3">
          {project.description}
        </p>

        <div className="mb-5">
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              expanded ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pb-2">
              <p className="text-slate-600 text-sm leading-relaxed italic border-l-2 border-primary-400 pl-3">
                {project.impact}
              </p>
            </div>
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="group inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors cursor-pointer"
          >
            {expanded ? "Show less" : "Read more"}
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${
                expanded ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-xs font-medium bg-primary-50 text-primary-700 border border-primary-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Mobile actions */}
        <div className="mt-6 flex gap-3 md:hidden">
          <a
            href={project.liveUrl}
            className="flex-1 px-4 py-3 rounded-xl bg-primary-600 text-white text-sm font-semibold text-center"
          >
            Live Demo
          </a>
          <a
            href={project.sourceUrl}
            className="flex-1 px-4 py-3 rounded-xl bg-white border border-violet-300 text-slate-700 text-sm font-semibold text-center"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-4 sm:py-12 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Projects"
          title="Featured Work"
          description="Projects that showcase my skills in design, development, and problem-solving."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
