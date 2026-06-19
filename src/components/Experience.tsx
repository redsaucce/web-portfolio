import { Briefcase, GraduationCap, Award } from "lucide-react";
import { experiences, certifications } from "../data/portfolio";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import SectionHeader from "./SectionHeader";

function ExperienceCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const isWork = experience.type === "work";

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl border-2 border-violet-300 p-6 sm:p-8 hover:border-violet-400 hover:shadow-lg transition-all duration-700 group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
            isWork
              ? "bg-primary-50 text-primary-600 border border-primary-200"
              : "bg-violet-50 text-violet-600 border border-violet-200"
          }`}
        >
          {isWork ? <Briefcase size={20} /> : <GraduationCap size={20} />}
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-200 shrink-0">
          {experience.period}
        </span>
      </div>

      {/* Title & org */}
      <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary-600 transition-colors">
        {experience.title}
      </h3>
      <p className="text-primary-600 font-medium text-sm mb-3">
        {experience.organization}
      </p>

      <p className="text-slate-500 text-sm mb-4 leading-relaxed">
        {experience.description}
      </p>

      {/* Achievements */}
      <ul className="space-y-2">
        {experience.achievements.map((achievement, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
            <svg
              className="w-4 h-4 text-green-500 shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {achievement}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-4 sm:py-12 relative bg-gradient-to-br from-violet-50 via-white to-primary-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Experience"
          title="My Journey"
          description="Academic work, commissioned projects, and hands-on front-end experience that shaped my foundation as a developer."
        />

        {/* Grid layout */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} experience={exp} index={i} />
          ))}
        </div>

        {/* Certifications */}
        <div
          ref={ref}
          className={`mt-10 bg-white rounded-2xl border-2 border-violet-300 p-6 sm:p-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-5">
            <Award className="w-5 h-5 text-yellow-500" />
            <h3 className="text-lg font-bold text-slate-900">Certifications</h3>
          </div>

          <div className="space-y-4">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="rounded-xl border-2 border-violet-200 bg-slate-50/70 p-5 hover:border-violet-300 transition-colors"
              >
                <p className="text-base sm:text-lg font-semibold text-slate-900">
                  {cert.title}
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  {cert.issuer} <span className="mx-1 text-slate-300">|</span> {cert.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
