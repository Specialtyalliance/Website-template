import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import * as Icons from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
  image?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link, image }) => {
  const IconComponent = (Icons as Record<string, React.FC<{ size?: number; className?: string }>>)[icon] || Icons.Activity;

  return (
    <Link to={link} className="group block h-full">
      <div className="card-premium h-full overflow-hidden flex flex-col">
        {image && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-600 ease-premium group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-teal-900/40 to-transparent" />
          </div>
        )}
        <div className="p-7 flex flex-col flex-grow">
          <div className="w-12 h-12 rounded-2xl bg-accent-aqua-50 flex items-center justify-center mb-5 transition-all duration-400 ease-premium group-hover:bg-accent-aqua group-hover:shadow-glow-teal">
            <IconComponent
              size={22}
              className="text-accent-aqua transition-colors duration-400 group-hover:text-white"
            />
          </div>
          <h3 className="text-heading-sm text-text-main mb-3 group-hover:text-primary-teal transition-colors duration-300">
            {title}
          </h3>
          <p className="text-body-sm text-text-light leading-relaxed flex-grow mb-5">
            {description}
          </p>
          <div className="flex items-center gap-2 text-accent-aqua font-semibold text-sm transition-all duration-300 group-hover:gap-3">
            <span>Learn More</span>
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
