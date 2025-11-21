import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TestimonialCardProps {
  name: string;
  image: string;
  rating: number;
  text: string;
}

export function TestimonialCard({ name, image, rating, text }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100 relative overflow-hidden"
    >
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-200/30 to-transparent rounded-bl-full" />

      <div className="flex items-start gap-4 relative">
        {/* Avatar */}
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full animate-pulse" 
               style={{ animationDuration: '3s' }} />
          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-lg">
            <ImageWithFallback
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1">
          {/* Name and Rating */}
          <div className="mb-2">
            <p className="text-rose-900 mb-1">{name}</p>
            <div className="flex gap-1">
              {[...Array(rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>

          {/* Testimonial text */}
          <p className="text-sm text-rose-700 leading-relaxed">
            "{text}"
          </p>
        </div>
      </div>

      {/* Quote mark decoration */}
      <div className="absolute bottom-4 right-4 text-6xl text-pink-100 opacity-50 leading-none">
        "
      </div>
    </motion.div>
  );
}
