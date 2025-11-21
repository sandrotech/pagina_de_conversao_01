import { motion } from 'motion/react';
import { MessageCircle, Sparkles } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <div className="relative">
      {/* Animated glow effect */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-gradient-to-r from-pink-400 via-rose-500 to-pink-400 rounded-full blur-xl"
      />

      {/* Main button */}
      <motion.a
        href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20meu%20Botox%20Day!"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative block"
      >
        <motion.button
          animate={{
            boxShadow: [
              "0 10px 40px rgba(236, 72, 153, 0.3)",
              "0 10px 60px rgba(236, 72, 153, 0.5)",
              "0 10px 40px rgba(236, 72, 153, 0.3)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white py-6 rounded-full shadow-2xl relative overflow-hidden group"
        >
          {/* Shimmer effect */}
          <motion.div
            animate={{
              x: ['-100%', '200%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 1
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
          />

          {/* Button content */}
          <div className="relative flex items-center justify-center gap-3">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
            
            <span className="text-xl tracking-wide">
              QUERO AGENDAR AGORA
            </span>

            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-5 h-5" />
            </motion.div>
          </div>

          {/* Bottom shine effect */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        </motion.button>

        {/* WhatsApp indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-2 mt-4"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
            <MessageCircle className="w-4 h-4 text-white" />
          </div>
          <p className="text-sm text-rose-700">
            Atendimento direto via WhatsApp
          </p>
        </motion.div>
      </motion.a>

      {/* Floating sparkles */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0.5
        }}
        className="absolute -top-4 left-8 text-amber-400"
      >
        <Sparkles className="w-6 h-6" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -10, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 1
        }}
        className="absolute -top-4 right-8 text-amber-400"
      >
        <Sparkles className="w-6 h-6" />
      </motion.div>
    </div>
  );
}
