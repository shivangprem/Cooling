import { motion } from 'motion/react';
import { ArrowRight, Wind, Shield, Clock, Award, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Landing() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      <SEO 
        title="Premium HVAC Services" 
        description="Get the best AC repair, installation, and maintenance services in Lucknow. Trusted by leading brands for over 30 years."
      />
      {/* High Impact Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl relative z-10"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-8 shadow-lg shadow-red-500/30"
          >
            <Star size={16} fill="currentColor" />
            <span>LIMITED TIME OFFER: 20% OFF ON FIRST SERVICE</span>
          </motion.div>

          <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.9] mb-8">
            STAY <span className="text-blue-600">COOL</span> <br />
            LUCKNOW.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
            Don't let the heat win. Get expert AC repair and installation from Lucknow's most trusted HVAC team.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-12 py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-xl transition-all transform hover:scale-105 shadow-2xl shadow-blue-500/40 flex items-center justify-center"
            >
              Get Free Quote <ArrowRight className="ml-3" />
            </Link>
            <a
              href="tel:+919415029966"
              className="w-full sm:w-auto px-12 py-6 border-4 border-black dark:border-white rounded-2xl font-black text-xl transition-all hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black flex items-center justify-center"
            >
              Call +91 9415029966
            </a>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-20 left-10 hidden lg:block"
        >
          <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                <Shield size={32} />
              </div>
              <div className="text-left">
                <p className="font-black text-lg">Guaranteed</p>
                <p className="text-sm text-gray-500">Service Warranty</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-40 right-10 hidden lg:block"
        >
          <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800">
            <div className="flex items-center space-x-4">
              <div className="bg-red-100 p-3 rounded-xl text-red-600">
                <Clock size={32} />
              </div>
              <div className="text-left">
                <p className="font-black text-lg">60 Mins</p>
                <p className="text-sm text-gray-500">Response Time</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-y border-gray-100 dark:border-gray-900">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <motion.div
            animate={{ x: [0, -1000, 0] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex items-center space-x-20 whitespace-nowrap"
          >
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="flex items-center space-x-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                <Award size={40} />
                <span className="text-2xl font-black tracking-tighter uppercase">Certified Partner</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
