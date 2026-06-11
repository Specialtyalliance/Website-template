import React from 'react';

import { Shield, Zap, GraduationCap, ArrowRight } from 'lucide-react';
import { openChatWidget } from '../utils/openChat';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import BookCTA from '../components/BookCTA';
import { technologyData } from '../data/technologies';

const promises = [
  { icon: Shield, title: 'Safety First', desc: 'All our technology meets or exceeds the highest safety standards in dentistry.' },
  { icon: Zap, title: 'Continuous Innovation', desc: 'We continually invest in the latest advances to provide you with the best possible care.' },
  { icon: GraduationCap, title: 'Expert Training', desc: 'Our team undergoes extensive training on every new technology we introduce.' },
];

const TechnologyPage: React.FC = () => {
  return (
    <>
      <HeroSection
        title="Advanced Dental Technology"
        subtitle="State-of-the-art equipment and techniques for precise, comfortable care"
        backgroundImage="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        compact
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeading
            overline="Our Technology"
            title="Cutting-Edge Equipment"
            subtitle="We invest in the latest dental technology to provide you with precise, comfortable, and efficient care."
            centered
          />
          <div className="space-y-24 mt-16">
            {technologyData.map((tech, index) => (
              <div
                key={tech.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:[direction:rtl]' : ''}`}
              >
                <div className="rounded-3xl overflow-hidden shadow-elevated lg:[direction:ltr]">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-full h-[380px] object-cover"
                  />
                </div>
                <div className="lg:[direction:ltr]">
                  <span className="text-overline uppercase tracking-widest text-accent-aqua mb-2 block">
                    Technology {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="font-display text-display-sm text-text-main mb-5">{tech.name}</h2>
                  <p className="text-text-light text-body leading-relaxed mb-8">{tech.description}</p>
                  <button onClick={openChatWidget} className="btn-primary group">
                    Schedule a Visit
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-50">
        <div className="container-wide">
          <SectionHeading
            overline="Our Promise"
            title="Technology You Can Trust"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {promises.map((p) => (
              <div key={p.title} className="card-premium p-8 text-center">
                <div className="w-14 h-14 rounded-2xl bg-accent-aqua-50 flex items-center justify-center mx-auto mb-6">
                  <p.icon size={26} className="text-accent-aqua" />
                </div>
                <h3 className="text-heading-sm text-text-main mb-3">{p.title}</h3>
                <p className="text-body-sm text-text-light leading-relaxed">{p.desc}</p>
              </div>
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

export default TechnologyPage;
