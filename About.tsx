import { motion } from 'motion/react';
import { Award, Users, Target, CheckCircle2, Quote } from 'lucide-react';
import SEO from '../components/SEO';

export default function About() {
  return (
    <div className="pt-32 pb-24 bg-white dark:bg-black min-h-screen">
      <SEO 
        title="About Us" 
        description="Learn about Cooling Merchants, founded over 30 years ago by Varad Tiwari. We are Lucknow's most trusted HVAC service provider."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 text-black dark:text-white uppercase leading-none">
              OUR <span className="text-blue-600">LEGACY.</span>
            </h1>
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
              <p>
                Founded over <span className="text-black dark:text-white font-bold">30 years ago by Varad Tiwari</span>, Cooling Merchants – Airconditioning Systems & Solutions began its journey at a time when air conditioning was considered a luxury rather than a necessity.
              </p>
              <p>
                With a strong vision and deep understanding of the evolving HVAC industry, the company steadily grew alongside the transformation of climate control technologies in India.
              </p>
              <p>
                Over the decades, Cooling Merchants has built a strong reputation for delivering professional, reliable, and cost-effective HVAC solutions. Our approach is rooted in understanding each client’s unique requirements and providing solutions that are prompt, efficient, and engineered for long-term performance.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-blue-600" />
                <span className="font-bold text-black dark:text-white">30+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-blue-600" />
                <span className="font-bold text-black dark:text-white">Commercial Experts</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-blue-600" />
                <span className="font-bold text-black dark:text-white">Integrity Driven</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-blue-600" />
                <span className="font-bold text-black dark:text-white">Prompt Execution</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000"
                alt="Our Legacy"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-blue-600 text-white p-12 rounded-[3rem] shadow-2xl hidden md:block z-20">
              <p className="text-6xl font-black mb-2">30+</p>
              <p className="text-sm uppercase tracking-[0.2em] font-black opacity-80">Years of Excellence</p>
            </div>
          </motion.div>
        </div>

        {/* Founder Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="bg-gray-50 dark:bg-gray-900 rounded-[4rem] p-8 md:p-16 flex flex-col items-center text-center border border-gray-100 dark:border-gray-800">
            <div className="w-full max-w-4xl">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-black dark:text-white uppercase">
                MR. VARAD <span className="text-blue-600">TIWARI</span>
              </h2>
              <p className="text-xl text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase mb-8">
                Founder & Visionary
              </p>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                <p>
                  With over three decades of experience in the HVAC industry, Mr. Varad Tiwari has been the driving force behind Cooling Merchants' success and reputation.
                </p>
                <p>
                  Starting the company at a time when air conditioning was a luxury, his foresight and dedication to quality service helped establish Cooling Merchants as a trusted name in Lucknow's commercial and residential sectors.
                </p>
                <p>
                  His philosophy of treating every client's project as a personal responsibility continues to be the guiding principle for the entire team today.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Philosophy Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 p-12 md:p-24 rounded-[4rem] bg-zinc-900 text-white relative overflow-hidden"
        >
          <div className="relative z-10 max-w-4xl">
            <Quote className="w-16 h-16 text-blue-500 mb-8 opacity-50" />
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 leading-tight">
              "When a client entrusts us with a project, we treat it as a <span className="text-blue-500">responsibility</span>—not just a task."
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed font-medium">
              Every project we undertake is approached with dedication, precision, and a sense of ownership. We believe that maintaining our client’s trust is our greatest achievement, and we execute every assignment with the same care and commitment as if it were our own.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full -mr-48 -mt-48 blur-[100px]" />
        </motion.section>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: <Target className="w-12 h-12 text-red-500" />, 
              title: "Our Expertise", 
              desc: "For more than three decades, we have remained one of the most trusted names in the HVAC industry, particularly in the commercial sector." 
            },
            { 
              icon: <Users className="w-12 h-12 text-blue-500" />, 
              title: "Our Commitment", 
              desc: "Today, Cooling Merchants continues to stand for expertise, integrity, and dependable HVAC solutions, serving businesses with passion." 
            },
            { 
              icon: <Award className="w-12 h-12 text-sky-500" />, 
              title: "Our Integrity", 
              desc: "We execute every assignment with the same care and professionalism that defined our beginnings over 30 years ago." 
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-12 rounded-[3rem] bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 transition-all"
            >
              <div className="mb-8">{card.icon}</div>
              <h3 className="text-2xl font-black mb-4 text-black dark:text-white uppercase tracking-tighter">{card.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-medium">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
