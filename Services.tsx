import { motion } from 'motion/react';
import { Wind, Building2, Home, Fan, Package, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const serviceCategories = [
  {
    title: "COMMERCIAL AIR CONDITIONERS",
    icon: <Building2 className="w-10 h-10" />,
    color: "text-blue-600",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    items: [
      "VRF/VRV SYSTEMS",
      "AIR HANDLING UNITS {AHU}",
      "DUCTABLE SPLITS",
      "FLOOR STANDING SPLITS",
      "MULTISPLITS SYSTEM",
      "CHILLER SYSTEM"
    ]
  },
  {
    title: "RESIDENTIAL AIR CONDITIONERS",
    icon: <Home className="w-10 h-10" />,
    color: "text-red-600",
    bg: "bg-red-50 dark:bg-red-900/20",
    items: [
      "HI-WALL SPLIT AIR CONDITIONER",
      "CEILING MOUNTED CASSETTE AIR CONDITIONER",
      "WINDOW AIR CONDITIONER"
    ]
  },
  {
    title: "VENTILATION PRODUCTS",
    icon: <Fan className="w-10 h-10" />,
    color: "text-sky-600",
    bg: "bg-sky-50 dark:bg-sky-900/20",
    items: [
      "TREATED FRESH AIR",
      "INLINE FANS",
      "KITCHEN VENTILATION",
      "HEAT RECOVERY VENTILATORS"
    ]
  }
];

const products = [
  "WATER-COOLER CHILLER",
  "AIR-COOLED CHILLER",
  "VRF SYSTEM (TOP FLOW)",
  "VRF SYSTEM (FRONT FLOW)",
  "DUCTABLES",
  "CASSETTE",
  "SPLIT AC",
  "WINDOW AC"
];

export default function Services() {
  return (
    <div className="pt-32 pb-24 bg-white dark:bg-black min-h-screen">
      <SEO 
        title="Our Services" 
        description="Comprehensive HVAC services including commercial and residential air conditioners, ventilation systems, and more in Lucknow."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 text-black dark:text-white uppercase">
            OUR <span className="text-blue-600">OFFERINGS</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg font-medium">
            Lucknow's most comprehensive range of cooling and ventilation solutions for every space.
          </p>
        </motion.div>

        {/* Services Categories */}
        <div className="space-y-24">
          {serviceCategories.map((category, catIndex) => (
            <section key={catIndex} className="relative">
              <div className="flex items-center space-x-4 mb-12">
                <div className={`p-4 rounded-2xl ${category.bg} ${category.color}`}>
                  {category.icon}
                </div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">
                  {category.title}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: itemIndex * 0.1 }}
                    className="p-8 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-between group hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    <span className="font-bold text-lg tracking-tight">{item}</span>
                    <ArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" size={20} />
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Products Section */}
        <section className="mt-32">
          <div className="flex items-center space-x-4 mb-12">
            <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white">
              <Package className="w-10 h-10" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">
              OUR PRODUCTS
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-950 border-2 border-gray-100 dark:border-zinc-900 flex flex-col items-center justify-center text-center group hover:border-blue-600 transition-all"
              >
                <p className="font-black text-sm tracking-widest uppercase mb-2 opacity-50 group-hover:opacity-100">Product</p>
                <h4 className="font-bold text-lg leading-tight">{product}</h4>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-32 p-16 rounded-[4rem] bg-zinc-900 text-white text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-none">
              READY TO <span className="text-blue-500">UPGRADE</span> <br />
              YOUR SPACE?
            </h2>
            <p className="text-gray-400 mb-12 max-w-xl mx-auto text-xl font-medium">
              Get in touch with Lucknow's HVAC experts for a tailored solution that fits your budget and needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="tel:+919415029966"
                className="w-full sm:w-auto px-12 py-6 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/30"
              >
                Call +91 9415029966
              </a>
              <a
                href="/contact"
                className="w-full sm:w-auto px-12 py-6 border-2 border-white/20 rounded-2xl font-black text-xl hover:bg-white hover:text-black transition-all"
              >
                Get a Quote
              </a>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full -mr-48 -mt-48 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/10 rounded-full -ml-48 -mb-48 blur-[100px]" />
        </motion.div>
      </div>
    </div>
  );
}
