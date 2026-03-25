import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronDown } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const INITIAL_REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    rating: 5,
    comment: 'Excellent service! The technicians were very professional and fixed my AC in no time. Highly recommended.',
    date: new Date(Date.now() - 86400000 * 2).toISOString(),
  },
  {
    id: '2',
    name: 'Sneha Singh',
    rating: 5,
    comment: 'Cooling Merchants provided a great installation service for our new office HVAC system. Very clean and efficient work.',
    date: new Date(Date.now() - 86400000 * 5).toISOString(),
  },
  {
    id: '3',
    name: 'Amit Sharma',
    rating: 5,
    comment: 'Prompt response and genuine spare parts used. My AC is working like new again. Thank you!',
    date: new Date(Date.now() - 86400000 * 10).toISOString(),
  },
  {
    id: '4',
    name: 'Priya Verma',
    rating: 5,
    comment: 'Very knowledgeable staff. They explained the issue clearly and charged a reasonable price.',
    date: new Date(Date.now() - 86400000 * 15).toISOString(),
  },
  {
    id: '5',
    name: 'Vikram Singh',
    rating: 5,
    comment: 'Best HVAC service in Lucknow! Have been using their services for the past 5 years.',
    date: new Date(Date.now() - 86400000 * 20).toISOString(),
  },
  {
    id: '6',
    name: 'Neha Gupta',
    rating: 4,
    comment: 'Good service but took a bit longer than expected. Overall satisfied.',
    date: new Date(Date.now() - 86400000 * 25).toISOString(),
  }
];

export default function CustomerReviews() {
  const [showAll, setShowAll] = useState(false);

  const fiveStarReviews = INITIAL_REVIEWS.filter(r => r.rating === 5);
  const displayedReviews = showAll ? INITIAL_REVIEWS : fiveStarReviews.slice(0, 5);

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-950 border-t border-gray-100 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-black tracking-tighter mb-4 text-black dark:text-white uppercase">
              Customer <span className="text-blue-600">Reviews</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">See what our clients have to say about our services.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {displayedReviews.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col h-full"
              >
                <div className="flex items-center mb-4 space-x-1">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      size={20}
                      className={idx < review.rating ? "text-yellow-400 fill-current" : "text-gray-300 dark:text-gray-700"}
                    />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 flex-grow mb-6 italic">"{review.comment}"</p>
                <div className="flex items-center space-x-3 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                    {review.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-bold text-black dark:text-white text-sm">{review.name}</p>
                    <p className="text-xs text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {INITIAL_REVIEWS.length > 5 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-bold hover:text-blue-700 transition-colors"
            >
              <span>{showAll ? 'Show Less' : 'See All Reviews'}</span>
              <ChevronDown className={`transform transition-transform ${showAll ? 'rotate-180' : ''}`} size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
