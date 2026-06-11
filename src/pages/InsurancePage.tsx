import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, ArrowRight, CheckCircle2, DollarSign, Heart, Shield } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import BookCTA from '../components/BookCTA';
import { insuranceData } from '../data/insurance';

const paymentOptions = [
  {
    icon: CreditCard,
    title: 'Traditional Payment',
    desc: 'We accept all major credit cards, debit cards, and cash. Payment is due at the time of service.',
  },
  {
    icon: DollarSign,
    title: 'CareCredit Financing',
    desc: 'Flexible monthly payment plans with low or no interest. Apply online or in our office to spread costs over time.',
  },
  {
    icon: Heart,
    title: 'Dream Smile Savings Plan',
    desc: 'No insurance? No problem. Individual: $299/year. Family: $799/year. Includes cleanings, exams, X-rays, and discounts on treatments.',
  },
];

const InsurancePage: React.FC = () => {
  return (
    <>
      <HeroSection
        title="Insurance & Payment Options"
        subtitle="Making quality dental care accessible and affordable for everyone"
        backgroundImage="https://images.pexels.com/photos/3845766/pexels-photo-3845766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        compact
      />

      {/* Accepted Insurance */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeading
            overline="Insurance"
            title="Accepted Insurance Plans"
            subtitle="We accept most major dental insurance plans and are in-network with many providers."
            centered
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {insuranceData.map((ins) => (
              <div
                key={ins.id}
                className="card-premium p-6 flex items-center justify-center text-center"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-accent-aqua-50 flex items-center justify-center mx-auto mb-3">
                    <Shield size={22} className="text-accent-aqua" />
                  </div>
                  <p className="font-semibold text-text-main text-sm">{ins.name}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-text-muted text-body-sm mt-8">
            Don't see your plan? Contact us -- we work with many additional providers.
          </p>
        </div>
      </section>

      {/* Verification */}
      <section className="py-12 bg-surface-50">
        <div className="container-tight">
          <div className="card-premium p-8 md:p-10">
            <div className="text-center mb-8">
              <h3 className="font-display text-heading-lg text-text-main mb-3">Insurance Verification</h3>
              <p className="text-text-light text-body">We make understanding your benefits easy.</p>
            </div>
            <div className="space-y-4">
              {[
                'Our team will verify your insurance benefits before your appointment',
                'We file all claims electronically for faster processing',
                'We maximize your coverage and minimize your out-of-pocket costs',
                'Detailed treatment estimates provided before any work begins',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-accent-aqua flex-shrink-0 mt-0.5" />
                  <span className="text-text-main text-body-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeading
            overline="Payment"
            title="Payment Options"
            subtitle="Quality dental care should be accessible to everyone."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {paymentOptions.map((opt) => (
              <div key={opt.title} className="card-premium p-8 text-center">
                <div className="w-14 h-14 rounded-2xl bg-accent-aqua-50 flex items-center justify-center mx-auto mb-6">
                  <opt.icon size={26} className="text-accent-aqua" />
                </div>
                <h3 className="text-heading-sm text-text-main mb-3">{opt.title}</h3>
                <p className="text-body-sm text-text-light leading-relaxed">{opt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-teal-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-aqua/5 rounded-full blur-3xl" />
        <div className="container-wide relative z-10 text-center">
          <h2 className="font-display text-display-sm text-white max-w-3xl mx-auto mb-6">
            Questions About Your Coverage?
          </h2>
          <p className="text-white/70 text-body-lg max-w-2xl mx-auto mb-10">
            Our team is happy to help you understand your benefits and find the best payment option.
          </p>
          <BookCTA specialContrast />
        </div>
      </section>
    </>
  );
};

export default InsurancePage;
