import { personalInfo } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden py-12 bg-gradient-to-b from-primary-50 via-violet-50 to-slate-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-primary-200/35 via-accent-400/10 to-transparent blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Brand */}
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold gradient-text">AC</span>
            <span className="text-slate-300">|</span>
            <span className="text-sm text-slate-500">
              Designed & built by {personalInfo.name}
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-slate-500">
            Copyright © 2026 Alex Chen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
