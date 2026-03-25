import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingActions() {
  const whatsappNumber = "+916386636037";
  const phoneNumber = "+919415029966";

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col space-y-4">
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={`tel:${phoneNumber}`}
        className="bg-blue-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
        title="Call Us"
      >
        <Phone size={24} />
      </motion.a>
      
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={`https://wa.me/${whatsappNumber.replace('+', '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
        title="WhatsApp Us"
      >
        <MessageCircle size={24} />
      </motion.a>
    </div>
  );
}
