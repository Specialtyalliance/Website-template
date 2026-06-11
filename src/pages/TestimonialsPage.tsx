import React from 'react';
import { ExternalLink } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import TestimonialCard from '../components/TestimonialCard';
import BookCTA from '../components/BookCTA';
import { testimonialData } from '../data/testimonials';

const TestimonialsPage: React.FC = () => {
  return (
    <>
      <HeroSection
        title="Patient Testimonials"
        subtitle="Hear from our patients about their experiences at Dream Smile Dental"
        backgroundImage="https://images.pexels.com/photos/3881449/pexels-photo-3881449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        compact
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeading
            overline="Reviews"
            title="What Our Patients Say"
            subtitle="Real stories from real patients who trust us with their smiles"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {testimonialData.map((t) => (
              <TestimonialCard
                key={t.id}
                name={t.name}
                comment={t.comment}
                rating={t.rating}
                image={t.image}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-50">
        <div className="container-tight text-center">
          <SectionHeading
            overline="Your Voice Matters"
            title="Share Your Story"
            subtitle="We'd love to hear about your experience. Leave a review on your preferred platform."
            centered
          />
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {['Google', 'Facebook', 'Yelp'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="card-premium px-8 py-5 flex items-center gap-3 group"
              >
                <span className="font-semibold text-text-main group-hover:text-primary-teal transition-colors">
                  Review on {platform}
                </span>
                <ExternalLink size={16} className="text-text-muted group-hover:text-accent-aqua transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-wide text-center">
          <BookCTA />
        </div>
      </section>
    </>
  );
};

export default TestimonialsPage;
