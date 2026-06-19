import { useState } from "react";
import { Code2, Sparkles, Target, Zap, ChevronDown } from "lucide-react";
import { aboutMe, personalInfo } from "../data/portfolio";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import SectionHeader from "./SectionHeader";
import ImageFallback from "./ui/image-fallback";

const highlights = [
  { icon: Code2, label: "5+", desc: "Years Experience" },
  { icon: Zap, label: "50+", desc: "Projects Delivered" },
  { icon: Sparkles, label: "30+", desc: "Happy Clients" },
  { icon: Target, label: "99%", desc: "Client Satisfaction" },
];

export default function About() {
  const { ref, isVisible } = useScrollAnimation();
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="py-4 sm:py-12 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="About"
          title="Get to Know Me"
          description="A brief look at my background, passions, and what drives me as a developer."
        />

        <div
          ref={ref}
          className={`space-y-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Image Fallback */}
            <div className="space-y-8">
              <div className="relative h-72 sm:h-80 lg:h-[21rem] rounded-2xl overflow-hidden border-2 border-violet-300">
                <ImageFallback
                  mode="about"
                  title={personalInfo.name}
                  subtitle={personalInfo.title}
                />
              </div>
            </div>

            {/* Right: Bio */}
            <div className="space-y-6">
              <div className="space-y-4">
                {aboutMe.paragraphs.slice(0, 2).map((paragraph, i) => (
                  <p key={i} className="text-slate-600 leading-relaxed text-base sm:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Collapsible: 3rd paragraph */}
              <div>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expanded ? "max-h-[240px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-2">
                    <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                      {aboutMe.paragraphs[2]}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setExpanded(!expanded)}
                  className="group inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors cursor-pointer"
                >
                  {expanded ? "Show less" : "Read more about me"}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      expanded ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Stats row with separators */}
          <div className="px-4 py-6 sm:px-6 sm:py-7">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className={`relative text-center px-4 ${
                    i < highlights.length - 1 ? "sm:border-r sm:border-slate-200" : ""
                  }`}
                >
                  <div className="text-3xl font-bold text-primary-600 leading-none mb-2">
                    {item.label}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 mt-1 leading-tight">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
