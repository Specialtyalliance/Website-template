import React from 'react';

import { Phone, AlertTriangle, Clock } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import Accordion from '../components/Accordion';
import BookCTA from '../components/BookCTA';

const emergencies = [
  { title: 'Severe Toothache', advice: 'Rinse with warm salt water. Use over-the-counter pain relief. Apply a cold compress to the outside of your cheek. Avoid hot or cold food and drinks.' },
  { title: 'Knocked-Out Tooth', advice: 'Handle the tooth by the crown only. Gently rinse without scrubbing. Try to place it back in the socket or keep it in milk. Get to our office within 30 minutes for the best chance of saving the tooth.' },
  { title: 'Cracked or Fractured Tooth', advice: 'Rinse with warm water immediately. Apply a cold compress to reduce swelling. Save any tooth fragments. Avoid chewing on that side.' },
  { title: 'Lost Filling or Crown', advice: 'Apply dental cement or sugar-free gum as a temporary cover. Avoid chewing on that side. Keep the crown or filling if you still have it and bring it to your appointment.' },
  { title: 'Dental Abscess', advice: 'Rinse with mild salt water several times daily. Do not try to drain the abscess yourself. Take over-the-counter pain relief. This is a serious condition -- seek care promptly.' },
  { title: 'Soft Tissue Injuries', advice: 'Apply gentle pressure with gauze or a clean cloth. Use a cold compress to reduce swelling. If bleeding does not stop after 15 minutes, visit the emergency room.' },
];

const faqItems = [
  { id: 'efaq-1', title: 'What counts as a dental emergency?', content: 'Severe pain, knocked-out teeth, uncontrolled bleeding, significant swelling, and broken teeth all require urgent care. When in doubt, call us.' },
  { id: 'efaq-2', title: 'How quickly can I be seen?', content: 'We reserve time daily for emergencies and can typically see you the same day you call.' },
  { id: 'efaq-3', title: 'What should I do after hours?', content: 'Call our office number at (610) 499-9999. Our answering service will connect you with Dr. Tariq or the on-call dentist.' },
  { id: 'efaq-4', title: 'Will my insurance cover emergency care?', content: 'Most dental insurance plans cover emergency procedures. Our team will verify your benefits and explain your options before treatment.' },
];

const EmergencyPage: React.FC = () => {
  return (
    <>
      <HeroSection
        title="Emergency Dental Care"
        subtitle="Immediate, compassionate care when you need it most. Available 24/7."
        backgroundImage="https://images.pexels.com/photos/3845837/pexels-photo-3845837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        compact
      />

      {/* Emergency Banner */}
      <section className="py-8 bg-error-red">
        <div className="container-wide flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <AlertTriangle size={24} className="text-white" />
            <span className="text-white font-bold text-lg">Having a dental emergency?</span>
          </div>
          <a href="tel:+16104999999" className="inline-flex items-center gap-2 bg-white text-error-red font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
            <Phone size={18} />
            Call Now: (610) 499-9999
          </a>
        </div>
      </section>

      {/* Common Emergencies */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeading
            overline="What To Do"
            title="Common Dental Emergencies"
            subtitle="Follow these first-aid guidelines while you arrange to visit our office."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {emergencies.map((e) => (
              <div key={e.title} className="card-premium p-7">
                <div className="w-10 h-10 rounded-xl bg-error-red/10 flex items-center justify-center mb-4">
                  <AlertTriangle size={20} className="text-error-red" />
                </div>
                <h3 className="text-heading-sm text-text-main mb-3">{e.title}</h3>
                <p className="text-body-sm text-text-light leading-relaxed">{e.advice}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-12 bg-surface-50">
        <div className="container-tight">
          <div className="card-premium p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 rounded-2xl bg-accent-aqua-50 flex items-center justify-center flex-shrink-0">
              <Clock size={30} className="text-accent-aqua" />
            </div>
            <div>
              <h3 className="text-heading-lg text-text-main mb-2">Emergency Hours</h3>
              <p className="text-text-light text-body leading-relaxed">
                Our office is open Mon-Fri 9AM-5PM, but our phone line is available 24/7. For after-hours emergencies, our answering service will connect you directly with Dr. Tariq or the on-call dentist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-tight">
          <SectionHeading
            overline="FAQ"
            title="Emergency Care FAQ"
            centered
          />
          <div className="mt-10">
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-teal-900">
        <div className="container-wide text-center">
          <h2 className="font-display text-display-sm text-white max-w-3xl mx-auto mb-6">
            Don't Wait When It Hurts
          </h2>
          <p className="text-white/70 text-body-lg max-w-2xl mx-auto mb-10">
            Dental emergencies can worsen quickly. Call us immediately for prompt, compassionate care.
          </p>
          <BookCTA specialContrast />
        </div>
      </section>
    </>
  );
};

export default EmergencyPage;
