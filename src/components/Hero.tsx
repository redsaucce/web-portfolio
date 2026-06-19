import { ArrowDown, Code2, Palette, Server, Database, Star, Briefcase, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

const skillCards = [
  {
    icon: Code2,
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js"],
    iconBg: "bg-primary-50 text-primary-600",
    border: "border-violet-300",
  },
  {
    icon: Palette,
    title: "UI / UX",
    skills: ["Wireframe", "Figma", "Animations"],
    iconBg: "bg-violet-50 text-violet-600",
    border: "border-violet-300",
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "REST APIs"],
    iconBg: "bg-purple-50 text-purple-600",
    border: "border-violet-300",
  },
  {
    icon: Database,
    title: "Database Design",
    skills: ["Schema Design", "PostgreSQL"],
    iconBg: "bg-fuchsia-50 text-fuchsia-600",
    border: "border-violet-300",
  },
];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary-50"
    >
      {/* Decorative background */}
      <div className="absolute top-1/4 left-16 h-72 w-72 rounded-full bg-primary-200/30 blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-16 h-96 w-96 rounded-full bg-accent-400/20 blur-3xl animate-float animation-delay-500" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-violet-200/20 blur-3xl" />

      {/* Left-side gradient wash */}
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden lg:block w-3/5">
        <div className="absolute inset-y-0 left-0 right-0 bg-gradient-to-r from-primary-100/80 via-primary-50/60 to-transparent" />
        <div className="absolute -left-16 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary-200/30 blur-3xl" />
        <div className="absolute left-20 top-12 h-64 w-64 rounded-full bg-accent-400/20 blur-3xl" />
      </div>

      {/* Main grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full min-h-dvh flex items-center px-5 sm:px-6 lg:px-8">
        <div className="w-full space-y-8 sm:space-y-10">
          <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Text content */}
            <div
              className={`relative flex items-center transition-all duration-1000 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
            <div className="w-full max-w-xl sm:max-w-2xl lg:max-w-none text-center lg:text-left lg:pr-10">
              <h1 className="text-2xl sm:text-3xl xl:text-4xl font-bold tracking-tight mb-5 max-w-3xl mx-auto lg:mx-0 text-slate-900 leading-tight">
                Front-End Developer focused on
                <span className="gradient-text-warm"> performance, usability &amp; design.</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-500 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                I create fast, accessible, and user-focused web experiences using
                <span className="text-primary-600 font-medium"> Next.js</span> and
                <span className="text-accent-600 font-medium"> TypeScript</span>, with a strong emphasis on
                <span className="text-slate-800 font-medium"> performance</span> and
                <span className="text-slate-800 font-medium"> design</span>.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-8">
                <a
                  href="#projects"
                  className="group w-full sm:w-auto px-6 sm:px-7 py-3.5 rounded-full bg-primary-600 hover:bg-primary-500 text-white text-sm sm:text-base font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-primary-600/25 flex items-center justify-center gap-2"
                >
                  View Projects
                  <ArrowDown
                    size={18}
                    className="group-hover:translate-y-1 transition-transform"
                  />
                </a>
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-6 sm:px-7 py-3.5 rounded-full border border-slate-300 hover:border-primary-400 text-slate-700 hover:text-primary-600 text-sm sm:text-base font-semibold transition-all duration-300 hover:bg-primary-50 text-center"
                >
                  Contact Me
                </a>
              </div>


            </div>
          </div>

            {/* Right: Staggered skill cards (desktop only) */}
            <div
              className={`relative hidden lg:flex items-center justify-end transition-all duration-1000 delay-300 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <div className="grid w-full max-w-xl grid-cols-2 gap-5">
                <div className="flex flex-col gap-5">
                  {skillCards.slice(0, 2).map((card, i) => (
                    <div
                      key={card.title}
                      className={`bg-white/80 backdrop-blur-sm rounded-2xl p-5 border-2 ${card.border} hover:border-violet-400 hover:shadow-lg transition-all duration-700 h-40 flex flex-col`}
                      style={{ transitionDelay: `${400 + i * 150}ms` }}
                    >
                      <div className={`w-10 h-10 rounded-xl ${card.iconBg} flex items-center justify-center mb-3`}>
                        <card.icon size={20} />
                      </div>
                      <h3 className="font-bold text-slate-900 mb-2">{card.title}</h3>
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {card.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-50 text-slate-600 border border-slate-100"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-5 mt-16">
                  {skillCards.slice(2, 4).map((card, i) => (
                    <div
                      key={card.title}
                      className={`bg-white/80 backdrop-blur-sm rounded-2xl p-5 border-2 ${card.border} hover:border-violet-400 hover:shadow-lg transition-all duration-700 h-40 flex flex-col`}
                      style={{ transitionDelay: `${550 + i * 150}ms` }}
                    >
                      <div className={`w-10 h-10 rounded-xl ${card.iconBg} flex items-center justify-center mb-3`}>
                        <card.icon size={20} />
                      </div>
                      <h3 className="font-bold text-slate-900 mb-2">{card.title}</h3>
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {card.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-50 text-slate-600 border border-slate-100"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-violet-50 border border-violet-200 flex items-center justify-center">
                  <Star size={16} className="text-violet-500 fill-violet-500" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-slate-800">10+ Projects Built</p>
                  <p className="text-xs text-slate-400">Production-ready work</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary-50 border border-primary-200 flex items-center justify-center">
                  <Briefcase size={16} className="text-primary-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-slate-800">3+ Years of Experience</p>
                  <p className="text-xs text-slate-400">Front-end focused work</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-fuchsia-50 border border-fuchsia-200 flex items-center justify-center">
                  <CheckCircle2 size={16} className="text-fuchsia-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-slate-800">100%</p>
                  <p className="text-xs text-slate-400">Responsive layouts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
