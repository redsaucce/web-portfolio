import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { personalInfo } from "../data/portfolio";
import { GitHubIcon, LinkedInIcon, TwitterIcon } from "./SocialIcons";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <section id="contact" className="py-4 sm:py-12 relative bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Contact"
          title="Let's Work Together"
          description="Have a project in mind or just want to chat? I'd love to hear from you."
        />

        <div
          ref={ref}
          className={`grid lg:grid-cols-5 gap-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-6">Get in Touch</h3>
              <div className="space-y-5">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-50 border border-primary-200 flex items-center justify-center text-primary-600 group-hover:bg-primary-100 transition-colors">
                    <Mail size={18} />
                  </div>
                  <p className="text-sm sm:text-[15px] text-slate-700 group-hover:text-primary-600 transition-colors">
                    {personalInfo.email}
                  </p>
                </a>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-50 border border-primary-200 flex items-center justify-center text-primary-600">
                    <MapPin size={18} />
                  </div>
                  <p className="text-sm sm:text-[15px] text-slate-700">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                Follow Me
              </h4>
              <div className="flex gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white border border-slate-200 text-[#181717] hover:text-primary-600 hover:border-primary-300 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <GitHubIcon size={18} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white border border-slate-200 text-[#0A66C2] hover:text-primary-600 hover:border-primary-300 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon size={18} />
                </a>
                <a
                  href={personalInfo.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white border border-slate-200 text-[#111111] hover:text-primary-600 hover:border-primary-300 transition-all duration-200"
                  aria-label="Twitter"
                >
                  <TwitterIcon size={18} />
                </a>
              </div>
            </div>

            {/* Decorative card */}
            <div className="bg-primary-50 rounded-xl p-5 sm:p-6 border-l-4 border-primary-500">
              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed italic">
                "Open to thoughtful collaborations — from new web products to refining existing experiences."
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <div className="w-full lg:px-16">
              <form
                onSubmit={handleSubmit}
                className="bg-gradient-to-br from-primary-100 via-violet-50 to-white rounded-2xl p-5 sm:p-8 space-y-6 border-2 border-violet-300 shadow-[0_18px_40px_-28px_rgba(126,34,206,0.18)] flex flex-col"
              >
                {submitted ? (
                  <div className="flex flex-1 flex-col items-center justify-center px-4 text-center">
                    <CheckCircle2 className="w-14 h-14 sm:w-16 sm:h-16 text-green-500 mb-4" />
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-sm sm:text-base text-slate-500">
                      Thanks for reaching out. I'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs sm:text-sm font-medium text-slate-700 mb-2"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={formState.name}
                          onChange={(e) =>
                            setFormState({ ...formState, name: e.target.value })
                          }
                          className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-white border border-slate-300 text-sm sm:text-base text-slate-900 placeholder:text-sm placeholder:sm:text-base placeholder:text-slate-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs sm:text-sm font-medium text-slate-700 mb-2"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({ ...formState, email: e.target.value })
                          }
                          className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-white border border-slate-300 text-sm sm:text-base text-slate-900 placeholder:text-sm placeholder:sm:text-base placeholder:text-slate-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs sm:text-sm font-medium text-slate-700 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({ ...formState, message: e.target.value })
                        }
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-white border border-slate-300 text-sm sm:text-base text-slate-900 placeholder:text-sm placeholder:sm:text-base placeholder:text-slate-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
                        placeholder="Tell me about your project..."
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="group w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-primary-600 hover:bg-primary-500 text-sm sm:text-base text-white font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-primary-600/25 flex items-center justify-center gap-2"
                    >
                      Send Message
                      <Send
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
