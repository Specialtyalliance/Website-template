import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-50 pt-20 pb-20">
      <div className="text-center px-4">
        <p className="font-display text-[8rem] md:text-[12rem] font-bold text-surface-200 leading-none select-none">
          404
        </p>
        <h1 className="font-display text-display-sm text-text-main -mt-6 mb-4">Page Not Found</h1>
        <p className="text-text-light text-body-lg max-w-md mx-auto mb-10">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary group">
            <Home size={18} />
            Back to Home
          </Link>
          <Link to="/contact" className="btn-secondary group">
            Contact Us
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
