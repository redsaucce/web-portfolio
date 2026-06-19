interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12">
      <div className="mb-4">
        <span className="text-sm sm:text-base font-semibold tracking-[0.24em] uppercase gradient-text">
          {label}
        </span>
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-slate-500 text-sm sm:text-base lg:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
