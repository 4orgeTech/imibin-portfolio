interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  id?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl">
      {eyebrow && (
        <p className="font-mono text-sm text-primary-300 mb-3 tracking-wide uppercase">
          {eyebrow}
        </p>
      )}
      <h2 id={id} className="text-3xl sm:text-4xl font-bold text-accent mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-text-secondary leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
