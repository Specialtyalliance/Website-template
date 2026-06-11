import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  comment: string;
  rating: number;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, comment, rating, image }) => {
  return (
    <div className="card-premium p-8 h-full flex flex-col relative overflow-hidden group">
      {/* Decorative quote */}
      <Quote
        size={48}
        className="absolute top-6 right-6 text-accent-aqua/10 transition-colors duration-400 group-hover:text-accent-aqua/20"
      />

      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={18}
            fill={i < rating ? 'currentColor' : 'none'}
            className={i < rating ? 'text-warm-gold' : 'text-surface-300'}
          />
        ))}
      </div>

      {/* Comment */}
      <p className="text-body text-text-light leading-relaxed flex-grow mb-6 relative z-10">
        "{comment}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-5 border-t border-surface-200">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-surface-200"
          />
        )}
        <div>
          <p className="font-semibold text-text-main">{name}</p>
          <p className="text-caption text-text-muted">Verified Patient</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
