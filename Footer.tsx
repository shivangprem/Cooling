import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import MapSection from './MapSection';

export default function Footer() {
  return (
    <>
      <div className="h-96 w-full">
        <MapSection />
      </div>
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src="https://lh3.googleusercontent.com/pw/AP1GczOwCXa-Ho3S9PWP7nqPMVswj04IgXW-kREyC9hABRfYsxjbKY21XhMpFw12VwuIbkmAiRlYvU1GK1xrMcP08Jr9MC1gUOCnfUSWQcMBr_bG08gBsEg=s0" 
                alt="Cooling Merchants Logo" 
                className="h-12 w-auto object-contain bg-white/90 p-1.5 rounded-lg dark:bg-transparent dark:p-0 dark:invert transition-all duration-300"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lucknow's premier HVAC specialists. Providing top-tier cooling and heating solutions for over 30 years. Quality service you can trust.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/coolingmerchants" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/share/1LxmSFsHWK/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.linkedin.com/company/cooling-merchants/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-blue-500 shrink-0" size={20} />
                <span className="text-gray-400 text-sm">Near Sinha Market, IT Crossing, Nirala Nagar, Lucknow</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-blue-500 shrink-0" size={20} />
                <span className="text-gray-400 text-sm">0522-4004009 / +91 9415029966</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-blue-500 shrink-0" size={20} />
                <span className="text-gray-400 text-sm">coolingmerchants@rediffmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Cooling Merchants. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs flex items-center justify-center md:justify-end">
            MADE WITH <Heart size={12} className="mx-1 text-red-500 fill-current" /> Clect Social
          </p>
        </div>
      </div>
    </footer>
  </>
  );
}
