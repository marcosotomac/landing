"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function CTASection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Spotlight effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="glass rounded-3xl p-6 md:p-12 lg:p-16 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 text-slate-900 dark:text-white">
            ¿Listo para{" "}
            <span className="text-gradient">automatizar tu empresa</span>?
          </h2>

          <p className="text-base md:text-xl lg:text-2xl text-slate-600 dark:text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto font-medium">
            Agenda una consultoría gratuita y descubre cómo podemos transformar
            tus operaciones
          </p>

          {/* Form */}
          <div className="max-w-2xl mx-auto mb-6 md:mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
              <input
                type="text"
                placeholder="Nombre completo"
                className="glass rounded-xl px-4 md:px-6 py-3 md:py-4 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-blue text-sm md:text-base"
              />
              <input
                type="email"
                placeholder="Email corporativo"
                className="glass rounded-xl px-4 md:px-6 py-3 md:py-4 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-blue text-sm md:text-base"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
              <input
                type="text"
                placeholder="Empresa"
                className="glass rounded-xl px-4 md:px-6 py-3 md:py-4 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-blue text-sm md:text-base"
              />
              <input
                type="tel"
                placeholder="Teléfono"
                className="glass rounded-xl px-4 md:px-6 py-3 md:py-4 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-blue text-sm md:text-base"
              />
            </div>
          </div>

          <Button
            variant="primary"
            className="text-base md:text-xl px-8 md:px-12 py-4 md:py-5 w-full md:w-auto"
          >
            Agendar Consultoría Gratuita
          </Button>

          <p className="text-slate-600 dark:text-gray-400 mt-4 md:mt-6 text-xs md:text-sm font-medium px-4">
            Sin compromisos • Respuesta en 24 horas • 100% confidencial
          </p>
        </motion.div>
      </div>
    </section>
  );
}
