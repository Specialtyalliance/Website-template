import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, Users, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import BookCTA from '../components/BookCTA';

const values = [
  {
    icon: Shield,
    title: 'Patient-First Care',
    desc: 'We prioritize your comfort, safety, and satisfaction above all else. Our treatment plans are customized to your unique needs and goals.',
  },
  {
    icon: Award,
    title: 'Clinical Excellence',
    desc: "We're committed to providing the highest standard of dental care through continued education, advanced technology, and evidence-based practices.",
  },
  {
    icon: Users,
    title: 'Community Connection',
    desc: 'We believe in building lasting relationships with our patients and actively contributing to the health and wellness of our local community.',
  },
];

const AboutPage: React.FC = () => {
  return (
    <>
      <HeroSection
        title="About Dream Smile Dental"
        subtitle="Learn about our mission, values, and commitment to excellence in dental care"
        backgroundImage="https://images.pexels.com/photos/3845748/pexels-photo-3845748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        compact
      />

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src="https://images.pexels.com/photos/3845757/pexels-photo-3845757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Professional dental team providing patient care"
                  className="w-full h-[480px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-elevated p-5 border border-surface-200 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-aqua-50 flex items-center justify-center">
                    <Award size={20} className="text-accent-aqua" />
                  </div>
                  <div>
                    <p className="font-bold text-text-main text-sm">UPenn Trained</p>
                    <p className="text-caption text-text-muted">School of Dental Medicine</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <SectionHeading
                overline="Our Story"
                title="Excellence in Dental Care Led by Dr. Hamza Tariq"
              />
              <p className="text-text-light text-body leading-relaxed mb-6">
                Dream Smile Dental is led by Dr. Hamza Tariq, a distinguished graduate of NYU College of Dentistry, one of the nation's top 5 dental schools. Dr. Tariq's exceptional academic background, combined with his commitment to staying at the forefront of dental innovation, has established him as a leading dental professional in the region.
              </p>
              <p className="text-text-light text-body leading-relaxed mb-6">
                After graduating with honors, Dr. Tariq pursued advanced training in cosmetic dentistry, implantology, and the latest digital dental technologies. His dedication to excellence and patient-centered approach has earned him numerous accolades and a reputation for delivering outstanding results with a gentle, compassionate touch.
              </p>
              <p className="text-text-light text-body leading-relaxed">
                Today, Dream Smile Dental reflects Dr. Tariq's vision of combining clinical excellence with genuine compassion. Our state-of-the-art facility features the latest dental technology, enabling us to provide comprehensive care that meets the highest standards of modern dentistry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-surface-50">
        <div className="container-wide">
          <SectionHeading
            overline="Our Values"
            title="Our Mission & Values"
            subtitle="What drives us every day"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {values.map((v) => (
              <div key={v.title} className="card-premium p-8 text-center">
                <div className="w-14 h-14 rounded-2xl bg-accent-aqua-50 flex items-center justify-center mx-auto mb-6">
                  <v.icon size={26} className="text-accent-aqua" />
                </div>
                <h3 className="text-heading-sm text-text-main mb-3">{v.title}</h3>
                <p className="text-body-sm text-text-light leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="section-padding bg-primary-teal-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-aqua/5 rounded-full blur-3xl" />
        <div className="container-wide relative z-10 text-center">
          <p className="text-overline uppercase tracking-widest text-accent-aqua mb-4">Our Promise</p>
          <h2 className="font-display text-display-sm md:text-display-md text-white max-w-3xl mx-auto mb-6">
            Your Smile Is Our Priority
          </h2>
          <p className="text-white/70 text-body-lg max-w-2xl mx-auto mb-10">
            We promise to listen carefully, explain thoroughly, and treat you with the same care and respect we would want for our own families.
          </p>
          <BookCTA specialContrast />
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                overline="Our Approach"
                title="Comprehensive, Personalized & Preventive"
              />
              <p className="text-text-light text-body leading-relaxed mb-6">
                At Dream Smile Dental, Dr. Tariq leads our team with a holistic approach to dental care. Drawing from his prestigious education at NYU College of Dentistry and years of advanced training, he focuses on identifying and addressing the root causes of dental issues to provide long-lasting solutions.
              </p>
              <p className="text-text-light text-body leading-relaxed mb-8">
                Our preventive philosophy means we work with you to establish healthy habits and routine care that can help you avoid more extensive and costly treatments in the future.
              </p>
              <div className="space-y-3 mb-10">
                {[
                  'Minimally invasive techniques',
                  'Evidence-based treatment planning',
                  'Focus on long-term outcomes',
                  'Personalized preventive programs',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-accent-aqua flex-shrink-0" />
                    <span className="text-text-main font-medium text-body-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/services" className="btn-primary group">
                Explore Our Services
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: 'https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Dental care' },
                { src: 'https://images.pexels.com/photos/3845757/pexels-photo-3845757.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Dental treatment' },
                { src: 'https://images.pexels.com/photos/4269693/pexels-photo-4269693.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Patient consultation' },
                { src: 'https://images.pexels.com/photos/4270367/pexels-photo-4270367.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Dental checkup' },
              ].map((img, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-card">
                  <img src={img.src} alt={img.alt} className="w-full h-44 object-cover hover:scale-105 transition-transform duration-600" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface-50">
        <div className="container-wide">
          <div className="text-center">
            <BookCTA />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
