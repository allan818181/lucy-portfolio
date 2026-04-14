import { AnimatedSection } from './AnimatedSection';

interface SectionHeadingProps {
  label?: string;
  whiteText: string;
  gradientText: string;
  subtitle?: string;
  align?: 'left' | 'center';
  accentColor?: 'mint' | 'pink';
}

export const SectionHeading = ({
  label,
  whiteText,
  gradientText,
  subtitle,
  align = 'center',
  accentColor = 'mint',
}: SectionHeadingProps) => {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  const accentStyle = accentColor === 'pink'
    ? { color: '#FF4D9D' }
    : { color: '#00E5B3' };

  return (
    <AnimatedSection className={`flex flex-col ${alignClass} mb-14`}>
      {label && (
        <span
          className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
          style={accentStyle}
        >
          {label}
        </span>
      )}
      <h2
        className={`text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight ${align === 'center' ? 'text-center' : 'text-left'}`}
        style={{ letterSpacing: '-0.02em' }}
      >
        <span className="text-foreground">{whiteText} </span>
        <span className="gradient-text">{gradientText}</span>
      </h2>
      {subtitle && (
        <p
          className={`text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed ${align === 'center' ? 'text-center' : 'text-left'}`}
        >
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
};
