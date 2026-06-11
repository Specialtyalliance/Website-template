import React from 'react';

import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { openChatWidget } from '../utils/openChat';
import * as Icons from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import BookCTA from '../components/BookCTA';
import { serviceData } from '../data/services';

const serviceImages: Record<string, string> = {
  'general-dentistry': 'https://images.pexels.com/photos/3881449/pexels-photo-3881449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'cosmetic-dentistry': '/Screen_Shot_2026-04-26_at_2.07.10_PM.png',
  'dental-implants': 'https://images.pexels.com/photos/6812567/pexels-photo-6812567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'invisalign': 'https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'teeth-whitening': 'https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'emergency-dentistry': '/Screen_Shot_2026-04-26_at_2.11.45_PM.png',
  'preventive-care': 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
};

const serviceDetails: Record<string, string[]> = {
  'general-dentistry': ['Comprehensive dental exams', 'Professional cleanings', 'Digital X-rays', 'Fillings and restorations', 'Gum disease treatment', 'Oral cancer screenings', 'Custom mouthguards'],
  'cosmetic-dentistry': ['Porcelain veneers', 'Dental bonding', 'Smile makeovers', 'Tooth-colored fillings', 'Gum contouring', 'Complete smile transformations'],
  'dental-implants': ['Single tooth implants', 'Implant-supported bridges', 'Implant-retained dentures', 'All-on-4 implants', 'Bone grafting', '3D implant planning'],
  'invisalign': ['Digital smile scanning', 'Customized treatment planning', 'Clear, removable aligners', 'Regular progress check-ups', 'Retainer fitting', 'Lifetime smile maintenance'],
  'teeth-whitening': ['In-office professional whitening', 'Custom take-home whitening kits', 'Whitening for sensitive teeth', 'Maintenance treatments', 'Stain prevention education'],
  'emergency-dentistry': ['Severe toothaches', 'Knocked-out teeth', 'Cracked or fractured teeth', 'Lost fillings or crowns', 'Dental abscess', 'Soft tissue injuries', 'Broken dentures or appliances'],
  'preventive-care': ['Regular check-ups and cleanings', 'Dental sealants', 'Fluoride treatments', 'Oral hygiene education', 'Nutritional counseling', 'Early intervention strategies', 'Prevention-focused treatment plans'],
};

const ServicesPage: React.FC = () => {
  return (
    <>
      <HeroSection
        title="Comprehensive Dental Services"
        subtitle="Expert care for all your dental needs, from routine check-ups to advanced treatments"
        backgroundImage="https://images.pexels.com/photos/3845757/pexels-photo-3845757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        compact
      />

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeading
            overline="What We Offer"
            title="Our Services"
            subtitle="Complete care for your smile"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {serviceData.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={`#${service.id}`}
                image={serviceImages[service.id]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {serviceData.map((service, index) => {
        const IconComponent = (Icons as Record<string, React.FC<{ size?: number; className?: string }>>)[service.icon] || Icons.Activity;
        const details = serviceDetails[service.id] || [];
        return (
          <section
            key={service.id}
            id={service.id}
            className={`section-padding ${index % 2 === 0 ? 'bg-surface-50' : 'bg-white'}`}
          >
            <div className="container-wide">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:[direction:rtl]' : ''}`}>
                <div className="rounded-3xl overflow-hidden shadow-elevated lg:[direction:ltr]">
                  <img
                    src={serviceImages[service.id]}
                    alt={service.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <div className="lg:[direction:ltr]">
                  <div className="w-12 h-12 rounded-2xl bg-accent-aqua-50 flex items-center justify-center mb-5">
                    <IconComponent size={22} className="text-accent-aqua" />
                  </div>
                  <h2 className="font-display text-display-sm text-text-main mb-4">{service.title}</h2>
                  <p className="text-text-light text-body leading-relaxed mb-8">{service.description}</p>
                  {details.length > 0 && (
                    <div className="space-y-3 mb-8">
                      {details.map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <CheckCircle2 size={18} className="text-accent-aqua flex-shrink-0" />
                          <span className="text-text-main text-body-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <button onClick={openChatWidget} className="btn-primary group">
                    Schedule a Consultation
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="section-padding bg-primary-teal-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-aqua/5 rounded-full blur-3xl" />
        <div className="container-wide relative z-10 text-center">
          <p className="text-overline uppercase tracking-widest text-accent-aqua mb-4">Not Sure?</p>
          <h2 className="font-display text-display-sm md:text-display-md text-white max-w-3xl mx-auto mb-6">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-white/70 text-body-lg max-w-2xl mx-auto mb-10">
            Book a comprehensive consultation with our team. We'll evaluate your oral health, discuss your goals, and recommend the best treatment options for your unique situation.
          </p>
          <BookCTA specialContrast />
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
