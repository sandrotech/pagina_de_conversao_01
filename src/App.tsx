import { motion } from 'motion/react';
import { Clock, Star, Instagram, MapPin, Phone } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { CountdownTimer } from './components/CountdownTimer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { TestimonialCard } from './components/TestimonialCard';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-rose-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-200/30 to-yellow-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-pink-300/30 to-rose-300/20 rounded-full blur-3xl" />
        
        <div className="relative px-6 pt-12 pb-8">
          {/* Doctor Photo Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-8 w-48 h-48 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 rounded-full animate-pulse" 
                 style={{ animationDuration: '3s' }} />
            <div className="absolute inset-1 bg-white rounded-full" />
            <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400"
                alt="Dra. Especialista"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Golden accent corners */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full shadow-lg" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full shadow-lg" />
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center mb-6"
          >
            <h1 className="text-5xl mb-4 bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 bg-clip-text text-transparent">
              Botox Day
            </h1>
            <div className="inline-block bg-gradient-to-r from-amber-400 to-yellow-500 px-6 py-2 rounded-full shadow-lg">
              <p className="text-white text-sm tracking-wide">
                Vagas Limitadas!
              </p>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center text-rose-800 px-4 mb-8 max-w-sm mx-auto"
          >
            O dia perfeito para rejuvenescer com descontos exclusivos.
          </motion.p>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="px-6 py-8">
        <CountdownTimer />
      </section>

      {/* Package Section */}
      <section className="px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Golden border effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 rounded-3xl blur-sm opacity-50" />
          
          <div className="relative bg-gradient-to-br from-pink-50 to-rose-100 rounded-3xl p-8 shadow-2xl border-2 border-amber-300/50">
            <div className="absolute top-4 right-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            <h2 className="text-3xl mb-6 text-center bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              Pacote Especial Botox Day
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 mt-2 flex-shrink-0" />
                <p className="text-rose-900">Aplicação completa de Botox nas áreas de sua escolha</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 mt-2 flex-shrink-0" />
                <p className="text-rose-900">Avaliação personalizada com nossa especialista</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 mt-2 flex-shrink-0" />
                <p className="text-rose-900">Produto premium importado e certificado</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 mt-2 flex-shrink-0" />
                <p className="text-rose-900">Acompanhamento pós-procedimento incluso</p>
              </div>
            </div>

            {/* Price */}
            <div className="text-center py-6 bg-white/50 rounded-2xl shadow-inner mb-6">
              <p className="text-rose-600 text-sm mb-2">De R$ 1.200,00 por apenas</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-5xl bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">
                  R$ 799
                </span>
                <span className="text-2xl text-amber-600">*</span>
              </div>
              <p className="text-rose-500 text-xs mt-2">*Condição especial válida apenas para o Botox Day</p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-lg">
              <p className="text-amber-900 text-sm">
                💎 Brinde exclusivo: Kit de cuidados pós-procedimento
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Button */}
      <section className="px-6 py-8">
        <WhatsAppButton />
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-12 bg-gradient-to-b from-transparent to-pink-100/50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl text-center mb-2 text-rose-800">
            Quem já fez, aprovou!
          </h2>
          <p className="text-center text-rose-600 mb-8">Veja o que nossas clientes dizem</p>

          <div className="space-y-4 max-w-md mx-auto">
            <TestimonialCard
              name="Mariana Silva"
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200"
              rating={5}
              text="Resultado incrível! A Dra. é super cuidadosa e o resultado ficou muito natural. Recomendo!"
            />
            <TestimonialCard
              name="Juliana Costa"
              image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200"
              rating={5}
              text="Melhor investimento que fiz em mim! Ambiente impecável e atendimento excepcional."
            />
            <TestimonialCard
              name="Patricia Alves"
              image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200"
              rating={5}
              text="Profissionalismo e resultado perfeito! Já estou na minha terceira sessão e amo o resultado."
            />
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-rose-900 to-pink-800 text-white px-6 py-12">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl mb-2 bg-gradient-to-r from-amber-200 to-yellow-300 bg-clip-text text-transparent">
              Clínica Estética Premium
            </h3>
            <p className="text-pink-200 text-sm">Sua beleza é nossa prioridade</p>
          </div>

          <div className="space-y-6">
            {/* WhatsApp */}
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-pink-200">WhatsApp</p>
                <p className="text-white">(11) 99999-9999</p>
              </div>
            </a>

            {/* Instagram */}
            <a 
              href="https://instagram.com/clinicaestetica" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 rounded-full flex items-center justify-center shadow-lg">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-pink-200">Instagram</p>
                <p className="text-white">@clinicaestetica</p>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-pink-200">Endereço</p>
                <p className="text-white">Av. Paulista, 1000 - São Paulo, SP</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-pink-700/50 text-center">
            <p className="text-pink-300 text-sm">
              © 2025 Clínica Estética Premium. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
