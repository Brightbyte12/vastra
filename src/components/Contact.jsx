import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-900 text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-thin mb-6 tracking-wide">Get in Touch</h2>
          <p className="text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            We'd love to hear from you. Whether you have a question about our collections, 
            need assistance with an order, or want to schedule a consultation, our team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-light mb-8 tracking-[0.2em]">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-rose-300 mt-1" />
                  <div>
                    <h4 className="text-lg font-light mb-2">Visit Us</h4>
                    <p className="text-white/60 font-light">
                      123 Fashion Avenue<br />
                      New Delhi, India 110001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-rose-300 mt-1" />
                  <div>
                    <h4 className="text-lg font-light mb-2">Call Us</h4>
                    <p className="text-white/60 font-light">+91 11 4567 8900</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-rose-300 mt-1" />
                  <div>
                    <h4 className="text-lg font-light mb-2">Email Us</h4>
                    <p className="text-white/60 font-light">contact@vastraapparel.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-light mb-8 tracking-[0.2em]">Business Hours</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-white/60 font-light">
                  <span>Monday - Friday</span>
                  <span>10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between text-white/60 font-light">
                  <span>Saturday</span>
                  <span>11:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-white/60 font-light">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-light mb-8 tracking-[0.2em]">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-transparent border border-white/30 px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-rose-300 transition-colors duration-300 font-light"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full bg-transparent border border-white/30 px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-rose-300 transition-colors duration-300 font-light"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full bg-transparent border border-white/30 px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-rose-300 transition-colors duration-300 font-light"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="6"
                  className="w-full bg-transparent border border-white/30 px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-rose-300 transition-colors duration-300 font-light resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-rose-500 hover:bg-rose-600 px-10 py-4 font-light tracking-[0.2em] uppercase text-sm transition-colors duration-300 flex items-center gap-3"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 