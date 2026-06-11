import React, { useState } from 'react';

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

function getInitials(name: string): string {
  return name
    .replace(/^Dr\.\s*/, '')
    .split(' ')
    .filter(Boolean)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, bio, image }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group">
      <div className="card-premium overflow-hidden">
        {/* Photo or Initials */}
        <div className="relative h-64 overflow-hidden">
          {image ? (
            <>
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-600 ease-premium group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-teal-900/70 via-primary-teal-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            </>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary-teal-800 to-primary-teal-900 flex items-center justify-center transition-all duration-500 group-hover:from-primary-teal-700 group-hover:to-primary-teal-800">
              <span className="text-5xl font-display font-bold text-white/90 tracking-wide select-none">
                {getInitials(name)}
              </span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-6">
          <h3 className="text-heading-sm text-text-main mb-1 group-hover:text-primary-teal transition-colors duration-300">
            {name}
          </h3>
          <p className="text-sm font-medium text-accent-aqua mb-3">{role}</p>
          <p className={`text-body-sm text-text-light leading-relaxed ${expanded ? '' : 'line-clamp-3'}`}>
            {bio}
          </p>
          {bio.length > 120 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-2 text-sm font-medium text-primary-teal hover:text-primary-teal-700 transition-colors duration-200"
            >
              {expanded ? 'Show less' : 'Read more'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
