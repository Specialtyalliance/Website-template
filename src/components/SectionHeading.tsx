import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  overline?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = false,
  light = false,
  overline,
}) => {
  return (
    <div className={`mb-14 ${centered ? 'text-center' : ''}`}>
      {overline && (
        <p className={`text-overline uppercase tracking-widest mb-3 ${
          light ? 'text-accent-aqua-300' : 'text-accent-aqua'
        }`}>
          {overline}
        </p>
      )}
      <h2 className={`font-display text-display-sm md:text-display-md leading-tight mb-5 ${
        light ? 'text-white' : 'text-text-main'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-body-lg max-w-2xl leading-relaxed ${
          centered ? 'mx-auto' : ''
        } ${light ? 'text-white/70' : 'text-text-light'}`}>
          {subtitle}
        </p>
      )}
      <div className={`accent-line mt-6 ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionHeading;
