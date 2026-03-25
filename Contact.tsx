import { motion } from 'motion/react';
import React from 'react';
import { Send, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 bg-white dark:bg-black min-h-screen">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Cooling Merchants for emergency AC repair, installation, or maintenance in Lucknow. Call us at +91 6386636037."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-black dark:text-white">
              GET IN <span className="text-red-600">TOUCH.</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-12 leading-relaxed">
              Have an emergency repair or planning a new installation? Our team is ready to help you stay cool.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-2xl text-blue-600">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-black dark:text-white">Visit Us</h4>
                  <p className="text-gray-500 dark:text-gray-400">Near Sinha Market, IT Crossing, Nirala Nagar, Lucknow</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-2xl text-red-600">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-black dark:text-white">Call Us</h4>
                  <p className="text-gray-500 dark:text-gray-400">0522-4004009 / +91 6386636037 / +91 9415029966</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-sky-100 dark:bg-sky-900/30 p-4 rounded-2xl text-sky-600">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-black dark:text-white">Email Us</h4>
                  <p className="text-gray-500 dark:text-gray-400">coolingmerchants@rediffmail.com</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12 flex space-x-4">
              <a href="https://www.facebook.com/share/1LxmSFsHWK/" target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-100 dark:bg-gray-900 rounded-2xl text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com/coolingmerchants" target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-100 dark:bg-gray-900 rounded-2xl text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                <Instagram size={24} />
              </a>
              <a href="https://www.linkedin.com/company/cooling-merchants/" target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-100 dark:bg-gray-900 rounded-2xl text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-50 dark:bg-gray-900 p-8 md:p-12 rounded-[3rem] border border-gray-100 dark:border-gray-800 shadow-2xl"
          >
            <form action="https://formsubmit.co/coolingmerchants@rediffmail.com" method="POST" className="space-y-6">
              <input type="hidden" name="_subject" value="New Ticket Inquiry from Website" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-2">Full Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-2">Phone Number</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="+91 00000 00000"
                    className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-2">Email Address</label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-2">Service Needed</label>
                <select
                  name="service"
                  className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                >
                  <option value="AC Repair">AC Repair</option>
                  <option value="AC Installation">AC Installation</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="AMC Inquiry">AMC Inquiry</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-2">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your requirement..."
                  className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-2 shadow-xl shadow-blue-500/20"
              >
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
