import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { serviceData } from '../data/services';

const AppointmentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: 'Morning',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', date: '', time: 'Morning', service: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClass =
    'w-full px-4 py-3.5 bg-surface-50 border border-surface-200 rounded-xl text-text-main text-body-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-aqua/30 focus:border-accent-aqua transition-all duration-300';

  return (
    <div className="card-premium p-8 md:p-10">
      {submitted && (
        <div className="mb-6 p-4 bg-accent-aqua-50 border border-accent-aqua-200 rounded-xl text-center">
          <p className="text-primary-teal font-semibold text-sm">
            Thank you! We'll contact you to confirm your appointment.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-body-sm font-medium text-text-main mb-2">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Smith"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-body-sm font-medium text-text-main mb-2">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-body-sm font-medium text-text-main mb-2">Phone *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="(610) 555-0123"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-body-sm font-medium text-text-main mb-2">Preferred Date *</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-body-sm font-medium text-text-main mb-2">Preferred Time</label>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="Morning">Morning (9AM - 12PM)</option>
              <option value="Afternoon">Afternoon (12PM - 3PM)</option>
              <option value="Evening">Evening (3PM - 5PM)</option>
            </select>
          </div>
          <div>
            <label className="block text-body-sm font-medium text-text-main mb-2">Service</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select a service</option>
              {serviceData.map((s) => (
                <option key={s.id} value={s.id}>{s.title}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-body-sm font-medium text-text-main mb-2">Additional Notes</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Any specific concerns or questions..."
            className={`${inputClass} resize-none`}
          />
        </div>

        <button
          type="submit"
          className="btn-primary w-full justify-center group"
        >
          <Send size={18} />
          Request Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
