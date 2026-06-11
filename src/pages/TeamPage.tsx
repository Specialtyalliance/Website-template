import React from 'react';

import { CheckCircle2 } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import TeamCard from '../components/TeamCard';
import BookCTA from '../components/BookCTA';
import { teamData } from '../data/team';

const doctors = teamData.filter((m) => m.role.includes('Dentist'));
const management = teamData.filter((m) => m.role === 'Office Manager' || m.role === 'Front Desk');
const assistants = teamData.filter((m) => m.role === 'Dental Assistant');

const memberships = [
  'American Dental Association',
  'Academy of General Dentistry',
  'American Academy of Cosmetic Dentistry',
  'International Congress of Oral Implantologists',
  'State Dental Association',
];

const training = [
  'Invisalign Certification',
  'Advanced Implant Surgery',
  'Laser Dentistry',
  'Sedation Dentistry',
  'Cosmetic Smile Design',
];

const education = [
  'Digital Dentistry & CAD/CAM',
  'Minimally Invasive Techniques',
  'Sleep Dentistry & Airway Management',
];

const TeamPage: React.FC = () => {
  return (
    <>
      <HeroSection
        title="Meet Our Expert Team"
        subtitle="Dedicated professionals committed to your dental health and beautiful smiles"
        backgroundImage="https://images.pexels.com/photos/3845747/pexels-photo-3845747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        compact
      />

      {/* Doctors */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeading
            overline="Our Doctors"
            title="Your Dental Care Providers"
            subtitle="Skilled, compassionate dentists leading your treatment"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-3xl mx-auto">
            {doctors.map((member) => (
              <TeamCard
                key={member.id}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Office & Front Desk */}
      <section className="section-padding bg-surface-50">
        <div className="container-wide">
          <SectionHeading
            overline="Office Team"
            title="The Heart of Our Practice"
            subtitle="Friendly faces keeping everything running smoothly"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-4xl mx-auto">
            {management.map((member) => (
              <TeamCard
                key={member.id}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Dental Assistants */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeading
            overline="Assistants"
            title="Our Dental Assistants"
            subtitle="Skilled hands and warm hearts by your side during every visit"
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mt-10">
            {assistants.map((member) => (
              <TeamCard
                key={member.id}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-surface-50">
        <div className="container-tight text-center">
          <SectionHeading
            overline="Philosophy"
            title="Our Team Philosophy"
            subtitle="Working together to provide exceptional care"
            centered
          />
          <div className="space-y-5 text-text-light text-body leading-relaxed">
            <p>
              At Dream Smile Dental, we believe that the best dental care comes from a collaborative approach. Each member of our team brings unique expertise and perspective, allowing us to provide comprehensive care that addresses all aspects of your oral health.
            </p>
            <p>
              We're committed to ongoing education and staying at the forefront of dental advances. Our team regularly attends professional development courses, conferences, and training sessions to ensure we're providing the most current, evidence-based care.
            </p>
            <p>
              Most importantly, we share a common dedication to patient-centered care. We take the time to listen to your concerns, answer your questions, and develop treatment plans that respect your preferences and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="section-padding bg-primary-teal-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-aqua/5 rounded-full blur-3xl" />
        <div className="container-wide relative z-10 text-center">
          <p className="text-overline uppercase tracking-widest text-accent-aqua mb-4">Welcome</p>
          <h2 className="font-display text-display-sm md:text-display-md text-white max-w-3xl mx-auto mb-6">
            Join Our Dream Smile Family
          </h2>
          <p className="text-white/70 text-body-lg max-w-2xl mx-auto mb-10">
            Experience the difference our team can make for your dental health and confidence. We're accepting new patients and would be honored to welcome you.
          </p>
          <BookCTA specialContrast />
        </div>
      </section>

      {/* Credentials */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeading
            overline="Credentials"
            title="Professional Credentials"
            subtitle="Our commitment to excellence and continuing education"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {[
              { title: 'Professional Memberships', items: memberships },
              { title: 'Advanced Training', items: training },
              { title: 'Continuing Education', items: education, note: 'Our team exceeds the required continuing education hours, completing an average of 50+ hours annually per provider.' },
            ].map((section) => (
              <div key={section.title} className="card-premium p-8">
                <h3 className="text-heading-sm text-text-main mb-5">{section.title}</h3>
                {section.note && <p className="text-body-sm text-text-light mb-4">{section.note}</p>}
                <div className="space-y-3">
                  {section.items.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-accent-aqua flex-shrink-0" />
                      <span className="text-body-sm text-text-main">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-surface-50">
        <div className="container-wide text-center">
          <BookCTA />
        </div>
      </section>
    </>
  );
};

export default TeamPage;
