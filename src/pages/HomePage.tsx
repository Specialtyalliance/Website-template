import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  ArrowRight,
  ArrowLeft,
  Phone,
  Shield,
  Heart,
  Award,
  Clock,
  CheckCircle2,
  ChevronRight,
  Users,
  Star,
  Sparkles,
  Camera,
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import Accordion from '../components/Accordion';
import BookCTA from '../components/BookCTA';
import FacilityTourModal from '../components/FacilityTourModal';
import { serviceData } from '../data/services';
import { testimonialData } from '../data/testimonials';
import { faqData } from '../data/faqs';

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const serviceImages: Record<string, string> = {
  'general-dentistry': 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800',
  'cosmetic-dentistry': 'https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=800',
  'dental-implants': 'https://images.pexels.com/photos/6812567/pexels-photo-6812567.jpeg?auto=compress&cs=tinysrgb&w=800',
  'invisalign': '/invisalign-photo.png',
  'teeth-whitening': '/Screen_Shot_2026-04-26_at_1.50.35_PM.png',
  'emergency-dentistry': 'https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=800',
  'preventive-care': 'https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?auto=compress&cs=tinysrgb&w=800',
};

const stats = [
  { value: '15+', label: 'Years Experience', icon: Award },
  { value: '10,000+', label: 'Happy Patients', icon: Users },
  { value: '4.9', label: 'Star Rating', icon: Star },
  { value: '24/7', label: 'Book Online', icon: Clock },
];

const whyChoose = [
  { icon: Shield, title: 'Advanced Technology', desc: 'State-of-the-art digital equipment for precise, comfortable treatment.' },
  { icon: Heart, title: 'Gentle Care', desc: 'Patient comfort is our top priority with sedation options available.' },
  { icon: Award, title: 'Expert Team', desc: 'University of Pennsylvania-trained doctors with decades of experience.' },
  { icon: Sparkles, title: 'Beautiful Results', desc: 'Customized treatment plans designed to achieve your dream smile.' },
];

const SlickArrow = ({ direction, onClick }: { direction: 'prev' | 'next'; onClick?: () => void }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white shadow-card border border-surface-200 flex items-center justify-center text-text-main hover:bg-primary-teal hover:text-white hover:border-primary-teal transition-all duration-300 ${
      direction === 'prev' ? '-left-4 md:-left-6' : '-right-4 md:-right-6'
    }`}
    aria-label={direction === 'prev' ? 'Previous' : 'Next'}
  >
    {direction === 'prev' ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
  </button>
);

const HomePage: React.FC = () => {
  const [tourOpen, setTourOpen] = useState(false);
  const featuredServices = serviceData.slice(0, 6);
  const featuredFaqs = faqData.slice(0, 4).map(faq => ({
    id: faq.id,
    title: faq.question,
    content: faq.answer,
  }));

  const statsSection = useInView();
  const servicesSection = useInView();
  const whySection = useInView();
  const testimonialSection = useInView();

  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: <SlickArrow direction="prev" />,
    nextArrow: <SlickArrow direction="next" />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const serviceSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    prevArrow: <SlickArrow direction="prev" />,
    nextArrow: <SlickArrow direction="next" />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Your Smile Deserves the Best Care"
        subtitle="At Dream Smile Dental, we combine advanced technology with compassionate care to create beautiful, healthy smiles that last a lifetime."
        backgroundImage="/Screen_Shot_2026-04-26_at_3.43.17_PM.png"
        extraActions={
          <button
            onClick={() => setTourOpen(true)}
            className="btn-ghost group !border-accent-aqua/40 hover:!bg-accent-aqua hover:!text-white hover:!border-accent-aqua"
          >
            <Camera size={18} />
            Tour Our Facility
          </button>
        }
      />

      {/* Stats Bar */}
      <div ref={statsSection.ref} className="relative -mt-16 z-20">
        <div className="container-wide">
          <div className="bg-white rounded-3xl shadow-elevated border border-surface-200 p-2">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex items-center gap-4 p-6 lg:p-8 ${
                    i < stats.length - 1 ? 'border-b lg:border-b-0 lg:border-r border-surface-200' : ''
                  } ${i % 2 === 0 && i < stats.length - 1 ? 'border-r lg:border-r border-surface-200' : ''} ${
                    statsSection.visible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-accent-aqua-50 flex items-center justify-center flex-shrink-0">
                    <stat.icon size={22} className="text-accent-aqua" />
                  </div>
                  <div>
                    <p className="font-display text-2xl md:text-3xl font-bold text-primary-teal">{stat.value}</p>
                    <p className="text-body-sm text-text-muted">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                overline="Welcome"
                title="Where Comfort Meets Excellence in Dental Care"
                subtitle="At Dream Smile Dental, we believe that a healthy smile is essential to your overall well-being and confidence. Our team of experienced professionals is dedicated to providing personalized, comprehensive dental care in a comfortable and welcoming environment."
              />
              <p className="text-text-light text-body leading-relaxed mb-8">
                From routine check-ups to advanced cosmetic procedures, we utilize state-of-the-art technology and gentle techniques to ensure you receive the highest quality care. Our patient-centered approach means we take the time to listen to your concerns, answer your questions, and develop treatment plans tailored to your unique needs and goals.
              </p>
              <div className="space-y-3 mb-10">
                {[
                  'Comprehensive family dental care',
                  'Advanced cosmetic & restorative treatments',
                  'Same-day emergency appointments',
                  'Flexible financing & insurance options',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-accent-aqua flex-shrink-0" />
                    <span className="text-text-main font-medium text-body-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/about" className="btn-secondary group">
                  Learn About Us
                  <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link to="/services" className="btn-primary group">
                  Explore Services
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src="https://images.pexels.com/photos/3881449/pexels-photo-3881449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Our welcoming dental practice"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-elevated p-5 border border-surface-200 max-w-[240px] hidden md:block">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-aqua-50 flex items-center justify-center">
                    <Award size={20} className="text-accent-aqua" />
                  </div>
                  <div>
                    <p className="font-bold text-text-main text-sm">Top Rated</p>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={12} fill="currentColor" className="text-warm-gold" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-caption text-text-muted">Recognized as a top dental practice in Pennsylvania</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <section ref={servicesSection.ref} className="section-padding bg-surface-50">
        <div className="container-wide">
          <div className="text-center mb-14">
            <SectionHeading
              overline="Our Services"
              title="Comprehensive Dental Care"
              subtitle="From preventive care to advanced cosmetic procedures, we offer a full range of services to keep your smile healthy and beautiful."
              centered
            />
          </div>
          <div className={`px-8 ${servicesSection.visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Slider {...serviceSettings}>
              {featuredServices.map((service) => (
                <div key={service.id} className="px-3 h-full">
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    link={service.link}
                    image={serviceImages[service.id]}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="mt-14 text-center">
            <Link to="/services" className="btn-secondary group">
              View All Services
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={whySection.ref} className="section-padding bg-primary-teal-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-aqua/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-aqua/5 rounded-full blur-3xl" />
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                overline="Why Choose Us"
                title="Your Trusted Partner in Dental Health"
                subtitle="Schedule your consultation today and take the first step toward the smile you've always wanted."
                light
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                {whyChoose.map((item, i) => (
                  <div
                    key={item.title}
                    className={`p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-400 ${
                      whySection.visible ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${i * 150}ms` }}
                  >
                    <div className="w-11 h-11 rounded-xl bg-accent-aqua/15 flex items-center justify-center mb-4">
                      <item.icon size={22} className="text-accent-aqua" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                    <p className="text-white/60 text-body-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <BookCTA specialContrast />
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src="https://images.pexels.com/photos/3845766/pexels-photo-3845766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Modern dental technology"
                  className="w-full h-[560px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section ref={testimonialSection.ref} className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-14">
            <SectionHeading
              overline="Testimonials"
              title="What Our Patients Say"
              subtitle="Real stories from real patients who trust us with their smiles."
              centered
            />
          </div>
          <div className={`px-8 ${testimonialSection.visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Slider {...testimonialSettings}>
              {testimonialData.map((testimonial) => (
                <div key={testimonial.id} className="px-3 h-full">
                  <TestimonialCard
                    name={testimonial.name}
                    comment={testimonial.comment}
                    rating={testimonial.rating}
                    image={testimonial.image}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="mt-14 text-center">
            <Link to="/testimonials" className="btn-secondary group">
              Read More Reviews
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-surface-50">
        <div className="container-tight">
          <SectionHeading
            overline="FAQ"
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our services and practice."
            centered
          />
          <div className="mt-10">
            <Accordion items={featuredFaqs} />
          </div>
          <div className="mt-10 text-center">
            <Link to="/new-patients" className="btn-secondary group">
              More FAQs
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <FacilityTourModal open={tourOpen} onClose={() => setTourOpen(false)} />
    </>
  );
};

export default HomePage;
