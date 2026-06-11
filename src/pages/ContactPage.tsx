import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import BookCTA from '../components/BookCTA';

const contactInfo = [
  { icon: MapPin, title: 'Our Location', lines: ['801 Upland', 'PA 19013'] },
  { icon: Phone, title: 'Phone', lines: ['+1 (610) 499-9999'], href: 'tel:+16104999999' },
  { icon: Mail, title: 'Email', lines: ['dreamsmileonline@gmail.com'], href: 'mailto:dreamsmileonline@gmail.com' },
  { icon: Clock, title: 'Office Hours', lines: ['Mon-Fri: 9AM - 5PM', 'Sat-Sun: Closed'] },
];

const ContactPage: React.FC = () => {
  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out to schedule an appointment or ask a question."
        backgroundImage="https://images.pexels.com/photos/3845766/pexels-photo-3845766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        compact
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeading
            overline="Get in Touch"
            title="How to Reach Us"
            subtitle="We're here to help with any questions about our services, scheduling, or dental care needs."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {contactInfo.map((item) => (
              <div key={item.title} className="card-premium p-7 text-center">
                <div className="w-14 h-14 rounded-2xl bg-accent-aqua-50 flex items-center justify-center mx-auto mb-5">
                  <item.icon size={24} className="text-accent-aqua" />
                </div>
                <h3 className="text-heading-sm text-text-main mb-3">{item.title}</h3>
                {item.lines.map((line) =>
                  item.href ? (
                    <a key={line} href={item.href} className="block text-body-sm text-text-light hover:text-primary-teal transition-colors">
                      {line}
                    </a>
                  ) : (
                    <p key={line} className="text-body-sm text-text-light">{line}</p>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary-teal-900">
        <div className="container-wide text-center">
          <h3 className="font-display text-heading-lg text-white mb-3">Dental Emergency?</h3>
          <p className="text-white/70 text-body mb-6">We offer same-day appointments for dental emergencies.</p>
          <a href="tel:+16104999999" className="btn-primary !bg-white !text-primary-teal !border-white hover:!bg-accent-aqua-50">
            <Phone size={18} />
            Call Now: (610) 499-9999
          </a>
        </div>
      </section>

      <section className="py-16 bg-surface-50">
        <div className="container-wide text-center">
          <BookCTA />
        </div>
      </section>
    </>
  );
};

export default ContactPage;
