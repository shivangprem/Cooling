import { motion } from 'motion/react';
import { Building2, Car, GraduationCap, Landmark, Hospital, Utensils, Briefcase, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

const projectCategories = [
  {
    title: "AUTOMOBILES/SHOWROOMS",
    icon: <Car className="w-10 h-10" />,
    color: "text-blue-600",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    projects: ["MERCEDES", "BMW", "VOLVO", "HONDA", "FORD", "TATA MOTORS"]
  },
  {
    title: "HOSPITALITY",
    icon: <Building2 className="w-10 h-10" />,
    color: "text-red-600",
    bg: "bg-red-50 dark:bg-red-900/20",
    projects: ["TAJ HOTELS", "GRAND RADIANT", "SKY HILTON", "NOVELTY CINEMAS", "ZAO"]
  },
  {
    title: "EDUCATION",
    icon: <GraduationCap className="w-10 h-10" />,
    color: "text-sky-600",
    bg: "bg-sky-50 dark:bg-sky-900/20",
    projects: ["LUCKNOW UNIVERSITY", "CITY MONTESSORI SCHOOL", "SHAKUNTALA MISHRA UNIVERSITY", "ALLEN CAREER ACADEMY", "IET LUCKNOW", "RACE IAS"]
  },
  {
    title: "GOVERNMENT",
    icon: <Landmark className="w-10 h-10" />,
    color: "text-emerald-600",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    projects: [
      "LUCKNOW METRO {LMRC}",
      "INDIAN INSTITUTE OF TOXICOLOGY RESEARCH {CSIR-IITR}",
      "UTTAR PRADESH STATE ROAD TRANSPORT CORPORATION {UPSRTC}",
      "CIVIL AIRPORT {ALLAHABAD}",
      "RESERVE BANK OF INDIA- LUCKNOW",
      "PRAYAGRAJ POWER",
      "AYURVED BHAWAN",
      "SANSKRIT BHAWAN",
      "NTPC"
    ]
  },
  {
    title: "MEDICAL",
    icon: <Hospital className="w-10 h-10" />,
    color: "text-rose-600",
    bg: "bg-rose-50 dark:bg-rose-900/20",
    projects: [
      "NIRVAN HOSPITAL",
      "CHARAK HOSPITAL",
      "VATSALYA HOSPITAL",
      "ASTHA HOSPITAL",
      "DR. RAM MANOHAR LOHIA INSTITUTE OF MEDICAL SCIENCES {Dr RMLIMS}",
      "SGPGI, LUCKNOW"
    ]
  },
  {
    title: "KITCHEN VENTILATION",
    icon: <Utensils className="w-10 h-10" />,
    color: "text-orange-600",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    projects: ["GREAT BAKERS", "LUCKNOW KITCHEN", "ZAO"]
  },
  {
    title: "CORPORATE",
    icon: <Briefcase className="w-10 h-10" />,
    color: "text-indigo-600",
    bg: "bg-indigo-50 dark:bg-indigo-900/20",
    projects: [
      "SKETCHERS",
      "BAJAJ AUTO",
      "ALSTOM",
      "FINO BANK",
      "TATA PROJECT",
      "SHALIMAR BUILDERS",
      "ELDECO BUILDERS",
      "VIRAJ CONSTRUCTIONS"
    ]
  }
];

export default function Projects() {
  return (
    <div className="pt-32 pb-24 bg-white dark:bg-black min-h-screen">
      <SEO 
        title="Our Projects" 
        description="View our milestone HVAC projects across automobiles, hospitality, education, government, healthcare, and corporate sectors in Lucknow."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 text-black dark:text-white uppercase">
            MILESTONE <span className="text-blue-600">PROJECTS</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg font-medium">
            Over 30 years of excellence, trusted by India's leading institutions, corporations, and government bodies.
          </p>
        </motion.div>

        <div className="space-y-24">
          {projectCategories.map((category, idx) => (
            <motion.section
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex items-center space-x-4 mb-12">
                <div className={`p-4 rounded-2xl ${category.bg} ${category.color}`}>
                  {category.icon}
                </div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">
                  {category.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.projects.map((project, pIdx) => (
                  <motion.div
                    key={pIdx}
                    whileHover={{ scale: 1.02 }}
                    className="p-8 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center space-x-4 group transition-all duration-300"
                  >
                    <CheckCircle2 className={`${category.color} shrink-0`} size={24} />
                    <span className="font-bold text-lg tracking-tight text-gray-800 dark:text-gray-200">
                      {project}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-32 p-16 rounded-[4rem] bg-blue-600 text-white text-center relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-none uppercase">
              BE OUR NEXT <br /> <span className="text-blue-200">SUCCESS STORY.</span>
            </h2>
            <p className="text-blue-100 mb-12 max-w-xl mx-auto text-xl font-medium">
              Join our list of prestigious clients and experience the Cooling Merchants difference.
            </p>
            <a
              href="/contact"
              className="inline-block px-12 py-6 bg-white text-blue-600 rounded-2xl font-black text-xl hover:bg-gray-100 transition-all shadow-xl"
            >
              Start Your Project
            </a>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full -ml-48 -mb-48 blur-[100px]" />
        </motion.div>
      </div>
    </div>
  );
}
