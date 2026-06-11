import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ClipboardList, Stethoscope, MessageSquare, CalendarCheck, ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import AppointmentForm from '../components/AppointmentForm';

const steps = [
  { icon: CalendarCheck, title: 'Choose a Time', desc: 'Select a convenient date and time using the form below.' },
  { icon: ClipboardList, title: 'Confirm Details', desc: 'Provide your information and preferred service.' },
  { icon: Stethoscope, title: 'Visit Us', desc: 'Arrive 15 minutes early for your first visit.' },
  { icon: MessageSquare, title: 'Follow Up', desc: "We'll create your personalized care plan." },
];

const BookingPage: React.FC = () => {
  return (
    <>
      <HeroSection
        title="Book Your Appointment"
        subtitle="Schedule your visit online in minutes. We look forward to welcoming you."
        backgroundImage="https://images.pexels.com/photos/3845766/pexels-photo-3845766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        compact
      />

      {/* Steps */}
      <section className="py-16 bg-surface-50">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.title} className="text-center">
                <div className="w-12 h-12 rounded-2xl bg-accent-aqua-50 flex items-center justify-center mx-auto mb-4">
                  <step.icon size={22} className="text-accent-aqua" />
                </div>
                <p className="text-overline text-accent-aqua mb-1">Step {i + 1}</p>
                <h3 className="font-semibold text-text-main text-sm">{step.title}</h3>
                <p className="text-caption text-text-muted mt-1 hidden md:block">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-white">
        <div className="container-tight">
          <SectionHeading
            overline="Schedule"
            title="Request an Appointment"
            subtitle="Fill out the form below and our team will confirm your appointment."
            centered
          />
          <div className="mt-10">
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* Emergency */}
      <section className="py-12 bg-primary-teal-900">
        <div className="container-wide flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
          <div>
            <h3 className="font-display text-heading-md text-white mb-1">Need urgent care?</h3>
            <p className="text-white/70 text-sm">Emergency appointments available same-day.</p>
          </div>
          <a href="tel:+16104999999" className="btn-primary !bg-white !text-primary-teal !border-white hover:!bg-accent-aqua-50">
            <Phone size={18} />
            Call (610) 499-9999
          </a>
        </div>
      </section>
    </>
  );
};

export default BookingPage;
