import React from 'react';

import { ClipboardList, Stethoscope, MessageSquare, CalendarCheck } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import Accordion from '../components/Accordion';
import BookCTA from '../components/BookCTA';
import { faqData } from '../data/faqs';

const steps = [
  { icon: CalendarCheck, title: 'Schedule Your Visit', desc: 'Book online or call us. We offer convenient scheduling, including same-day appointments for emergencies.' },
  { icon: ClipboardList, title: 'Complete Paperwork', desc: "Arrive 15 minutes early to complete paperwork, or download forms ahead of time. We'll review your dental and medical history." },
  { icon: Stethoscope, title: 'Comprehensive Exam', desc: "Your first visit includes a thorough exam, digital X-rays, professional cleaning, and oral cancer screening. Plan for about 60-90 minutes." },
  { icon: MessageSquare, title: 'Personalized Plan', desc: "We'll discuss findings, answer your questions, and create a treatment plan tailored to your goals and budget." },
];

const NewPatientsPage: React.FC = () => {
  const accordionItems = faqData.map(faq => ({
    id: faq.id,
    title: faq.question,
    content: faq.answer,
  }));

  return (
    <>
      <HeroSection
        title="Welcome, New Patients"
        subtitle="Everything you need to know about your first visit to Dream Smile Dental"
        backgroundImage="https://images.pexels.com/photos/3881449/pexels-photo-3881449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        compact
      />

      {/* Steps */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeading
            overline="Getting Started"
            title="Your First Visit"
            subtitle="We make your first appointment easy and comfortable. Here's what to expect."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {steps.map((step, i) => (
              <div key={step.title} className="card-premium p-7 text-center relative">
                <div className="absolute -top-3 left-6 bg-accent-aqua text-white text-xs font-bold rounded-full w-7 h-7 flex items-center justify-center">
                  {i + 1}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-accent-aqua-50 flex items-center justify-center mx-auto mb-5 mt-2">
                  <step.icon size={26} className="text-accent-aqua" />
                </div>
                <h3 className="text-heading-sm text-text-main mb-3">{step.title}</h3>
                <p className="text-body-sm text-text-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-surface-50">
        <div className="container-tight">
          <SectionHeading
            overline="FAQ"
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our practice and your dental care."
            centered
          />
          <div className="mt-10">
            <Accordion items={accordionItems} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-teal-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-aqua/5 rounded-full blur-3xl" />
        <div className="container-wide relative z-10 text-center">
          <p className="text-overline uppercase tracking-widest text-accent-aqua mb-4">Ready?</p>
          <h2 className="font-display text-display-sm md:text-display-md text-white max-w-3xl mx-auto mb-6">
            Start Your Journey to a Healthier Smile
          </h2>
          <p className="text-white/70 text-body-lg max-w-2xl mx-auto mb-10">
            We're accepting new patients and would be honored to welcome you to our practice.
          </p>
          <BookCTA specialContrast />
        </div>
      </section>
    </>
  );
};

export default NewPatientsPage;
