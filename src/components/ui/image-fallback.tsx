import { ImageOff, User } from "lucide-react";

interface ImageFallbackProps {
  variant?: number;
  mode?: "project" | "about";
  title?: string;
  subtitle?: string;
}

const variants = [
  {
    orbA: "bg-primary-200/45",
    orbB: "bg-accent-400/20",
  },
  {
    orbA: "bg-violet-200/45",
    orbB: "bg-primary-200/20",
  },
  {
    orbA: "bg-fuchsia-200/45",
    orbB: "bg-violet-200/20",
  },
];

export default function ImageFallback({
  variant = 0,
  mode = "project",
  title,
  subtitle,
}: ImageFallbackProps) {
  const palette = variants[variant % variants.length];

  return (
    <div
      className="relative h-full w-full overflow-hidden bg-gradient-to-br from-primary-100 via-violet-50 to-white"
      aria-hidden="true"
    >
      <div className={`absolute -top-10 -left-8 h-40 w-40 rounded-full blur-3xl ${palette.orbA}`} />
      <div className={`absolute -bottom-12 right-8 h-44 w-44 rounded-full blur-3xl ${palette.orbB}`} />

      {mode === "about" ? (
        <>
          <div className="relative z-10 flex h-full items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/20">
              <User size={44} className="text-white" />
            </div>
          </div>

          {(title || subtitle) && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-center sm:left-5 sm:translate-x-0 sm:text-left">
              {title && (
                <p className="text-base sm:text-lg font-bold text-slate-800 leading-tight">
                  {title}
                </p>
              )}
              {subtitle && (
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  {subtitle}
                </p>
              )}
            </div>
          )}
        </>
      ) : (
        <div className="relative z-0 flex h-full items-center justify-center">
          <div className="flex flex-col items-center text-center px-6 opacity-90">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-accent-500 shadow-lg shadow-primary-500/20">
              <ImageOff size={28} className="text-white" />
            </div>
            <p className="text-sm sm:text-base font-semibold text-slate-800 leading-tight">
              Image unavailable
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
