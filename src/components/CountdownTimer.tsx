import { motion } from 'motion/react';
import { Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

export function CountdownTimer() {
  // Define a data do evento (você pode editar aqui facilmente)
  const eventDate = new Date();
  eventDate.setDate(eventDate.getDate() + 2); // 2 dias a partir de hoje
  
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      {/* Header with clock icon */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        >
          <Clock className="w-8 h-8 text-amber-500" />
        </motion.div>
        <p className="text-2xl text-rose-700">
          Faltam 2 dias!
        </p>
      </div>

      {/* Countdown boxes */}
      <div className="flex justify-center gap-3 max-w-sm mx-auto">
        <TimeBox value={timeLeft.days} label="Dias" />
        <TimeBox value={timeLeft.hours} label="Horas" />
        <TimeBox value={timeLeft.minutes} label="Min" />
        <TimeBox value={timeLeft.seconds} label="Seg" />
      </div>

      <motion.p
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-6 text-rose-600"
      >
        ⏰ Aproveite antes que acabe!
      </motion.p>
    </motion.div>
  );
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex-1 relative"
    >
      {/* Golden glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl blur-md opacity-40" />
      
      <div className="relative bg-gradient-to-br from-white to-amber-50 rounded-2xl p-4 shadow-xl border-2 border-amber-200">
        <div className="text-3xl bg-gradient-to-br from-amber-500 to-yellow-600 bg-clip-text text-transparent">
          {String(value).padStart(2, '0')}
        </div>
        <div className="text-xs text-rose-600 mt-1">
          {label}
        </div>
      </div>
    </motion.div>
  );
}
