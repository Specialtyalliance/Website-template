import React from 'react';
import { Phone, Clock } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const BookAppointmentPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-surface-50 min-h-screen">
      <div className="container-tight">
        <SectionHeading
          overline="Schedule"
          title="Book Your Appointment"
          subtitle="Use our online scheduling system to find a time that works for you."
          centered
        />

        <div className="mt-10 card-premium overflow-hidden">
          <iframe
            src="https://dental4.me/dreamsmile"
            title="Book an Appointment"
            className="w-full border-0"
            style={{ height: '700px' }}
          />
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-premium p-7 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-accent-aqua-50 flex items-center justify-center flex-shrink-0">
              <Phone size={22} className="text-accent-aqua" />
            </div>
            <div>
              <h3 className="text-heading-sm text-text-main mb-1">Prefer to Call?</h3>
              <p className="text-body-sm text-text-light mb-3">Speak directly with our team.</p>
              <a href="tel:+16104999999" className="text-accent-aqua font-semibold text-sm hover:text-primary-teal transition-colors">
                (610) 499-9999
              </a>
            </div>
          </div>
          <div className="card-premium p-7 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-accent-aqua-50 flex items-center justify-center flex-shrink-0">
              <Clock size={22} className="text-accent-aqua" />
            </div>
            <div>
              <h3 className="text-heading-sm text-text-main mb-1">Office Hours</h3>
              <p className="text-body-sm text-text-light">Monday - Friday: 9AM - 5PM</p>
              <p className="text-body-sm text-text-light">Saturday - Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointmentPage;
