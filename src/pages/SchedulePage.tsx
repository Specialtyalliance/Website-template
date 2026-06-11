import React, { useEffect } from 'react';
import SectionHeading from '../components/SectionHeading';

const SchedulePage: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="pt-24 pb-20 bg-surface-50 min-h-screen">
      <div className="container-tight">
        <SectionHeading
          overline="Calendar"
          title="Schedule Your Visit"
          subtitle="Pick a date and time that works for you."
          centered
        />
        <div className="mt-10 card-premium overflow-hidden">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/dreamsmiledentalai/60min"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
