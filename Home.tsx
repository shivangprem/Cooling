import { motion } from 'motion/react';
import { ArrowRight, Wind, Shield, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import CustomerReviews from '../components/CustomerReviews';
import SEO from '../components/SEO';

const ALL_PROJECTS = [
  "MERCEDES", "BMW", "VOLVO", "HONDA", "FORD", "TATA MOTORS",
  "TAJ HOTELS", "GRAND RADIANT", "SKY HILTON", "NOVELTY CINEMAS", "ZAO",
  "LUCKNOW UNIVERSITY", "CITY MONTESSORI SCHOOL", "SHAKUNTALA MISHRA UNIVERSITY", "ALLEN CAREER ACADEMY", "IET LUCKNOW", "RACE IAS",
  "LUCKNOW METRO {LMRC}", "INDIAN INSTITUTE OF TOXICOLOGY RESEARCH {CSIR-IITR}", "UTTAR PRADESH STATE ROAD TRANSPORT CORPORATION {UPSRTC}", "CIVIL AIRPORT {ALLAHABAD}", "RESERVE BANK OF INDIA- LUCKNOW", "PRAYAGRAJ POWER", "AYURVED BHAWAN", "SANSKRIT BHAWAN", "NTPC",
  "NIRVAN HOSPITAL", "CHARAK HOSPITAL", "VATSALYA HOSPITAL", "ASTHA HOSPITAL", "DR. RAM MANOHAR LOHIA INSTITUTE OF MEDICAL SCIENCES {Dr RMLIMS}", "SGPGI, LUCKNOW",
  "GREAT BAKERS", "LUCKNOW KITCHEN",
  "SKETCHERS", "BAJAJ AUTO", "ALSTOM", "FINO BANK", "TATA PROJECT", "SHALIMAR BUILDERS", "ELDECO BUILDERS", "VIRAJ CONSTRUCTIONS"
];

export default function Home() {
  const randomProjects = useMemo(() => {
    const shuffled = [...ALL_PROJECTS].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 7);
  }, []);

  return (
    <div className="overflow-hidden">
      <SEO 
        title="Home" 
        description="Expert AC repair, installation, and maintenance services in Lucknow. Cooling Merchants provides reliable cooling and heating solutions for home and business."
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-white dark:bg-black">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block py-1 px-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6"
              >
                #1 HVAC Specialists in Lucknow
              </motion.span>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8 text-black dark:text-white">
                EXPERIENCE <br />
                <span className="text-blue-600">PERFECT</span> <br />
                CLIMATE.
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-lg leading-relaxed">
                Cooling Merchants brings you advanced AC solutions, expert repairs, and precision maintenance for your home and office.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all transform hover:scale-105 flex items-center group shadow-xl shadow-blue-500/20"
                >
                  Book Service <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="px-8 py-4 border-2 border-gray-200 dark:border-gray-800 text-black dark:text-white rounded-full font-bold transition-all hover:bg-gray-50 dark:hover:bg-gray-900"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform hover:rotate-2 transition-transform duration-500">
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczMy_g_P_XgcBf3KE4upc9J7XXdXvLGRafLWCKfUNDrj5Ymih_toaNi5TyTQxURCzmgOf4QL_469wOleEXbP9WGUO1mrIeJIiIjXFLCU1Sr8sGInC4I=s0"
                  alt="Smart Cooling Systems"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="text-sm font-medium opacity-80">Latest Technology</p>
                    <h3 className="text-2xl font-bold">Smart Cooling Systems</h3>
                  </div>
                </div>
              </div>
              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-2xl z-20 border border-gray-100 dark:border-gray-800"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl text-green-600">
                    <Award size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Experience</p>
                    <p className="text-xl font-bold text-black dark:text-white">30+ Years</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">Why Choose Us?</h2>
            <p className="text-gray-600 dark:text-gray-400">The Cooling Merchants advantage for your comfort.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Wind className="text-blue-500" />, title: "Expert Cooling", desc: "Precision installation and repair for all AC types." },
              { icon: <Shield className="text-red-500" />, title: "Certified Pros", desc: "Highly trained and background-checked technicians." },
              { icon: <Clock className="text-sky-500" />, title: "Quick Response", desc: "Same-day service for emergency repairs in Lucknow." },
              { icon: <Award className="text-yellow-500" />, title: "Quality Parts", desc: "We use only genuine spare parts for longevity." },
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 transition-all"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-black dark:text-white">{feature.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">5000+</p>
              <p className="text-blue-100 text-sm uppercase tracking-widest">Happy Clients</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">30+</p>
              <p className="text-blue-100 text-sm uppercase tracking-widest">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">20+</p>
              <p className="text-blue-100 text-sm uppercase tracking-widest">Expert Staff</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">100%</p>
              <p className="text-blue-100 text-sm uppercase tracking-widest">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Brands Marquee */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950 overflow-hidden border-y border-gray-100 dark:border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-gray-400">Our Trusted Partner Brands</p>
        </div>
        <div className="flex space-x-12 animate-marquee whitespace-nowrap">
          {[
            "SAMSUNG", "VOLTAS", "MITSUBISHI ELECTRIC", "LG", "HITACHI", "DAIKIN", "JOHNSON CONTROLS",
            "SAMSUNG", "VOLTAS", "MITSUBISHI ELECTRIC", "LG", "HITACHI", "DAIKIN", "JOHNSON CONTROLS"
          ].map((brand, i) => (
            <span key={i} className="text-3xl md:text-5xl font-black text-gray-300 dark:text-gray-800 hover:text-blue-600 transition-colors cursor-default uppercase tracking-tighter">
              {brand}
            </span>
          ))}
        </div>
      </section>

      {/* Milestone Projects Marquee (Reverse) */}
      <section className="py-16 bg-white dark:bg-black overflow-hidden border-b border-gray-100 dark:border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-gray-400">Our Milestone Projects</p>
        </div>
        <div className="flex space-x-12 animate-marquee-reverse whitespace-nowrap">
          {[...randomProjects, ...randomProjects].map((project, i) => (
            <span key={i} className="text-3xl md:text-5xl font-black text-blue-600/30 dark:text-blue-900/30 hover:text-red-600 transition-colors cursor-default uppercase tracking-tighter">
              {project}
            </span>
          ))}
        </div>
      </section>

      {/* Offerings Summary */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase">
                COMPLETE <span className="text-blue-600">HVAC</span> SOLUTIONS.
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 font-medium">
                From high-rise commercial VRF systems to residential split units, we deliver excellence across all cooling and ventilation categories.
              </p>
            </div>
            <Link
              to="/services"
              className="group flex items-center space-x-3 text-xl font-black uppercase tracking-tighter hover:text-blue-600 transition-colors"
            >
              <span>View All Offerings</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Commercial", items: ["VRF/VRV Systems", "AHU & Chillers", "Ductable Splits"] },
              { title: "Residential", items: ["Hi-Wall Splits", "Cassette ACs", "Window Units"] },
              { title: "Ventilation", items: ["Treated Fresh Air", "Inline Fans", "Heat Recovery"] }
            ].map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[3rem] bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
              >
                <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">{cat.title}</h3>
                <ul className="space-y-4">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 font-medium">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <CustomerReviews />
    </div>
  );
}
