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
          className="glass rounded-3xl p-12 md:p-16 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900 dark:text-white">
            ¿Listo para{" "}
            <span className="text-gradient">automatizar tu empresa</span>?
          </h2>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto font-medium">
            Agenda una consultoría gratuita y descubre cómo podemos transformar
            tus operaciones
          </p>

          {/* Form */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Nombre completo"
                className="glass rounded-xl px-6 py-4 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-blue"
              />
              <input
                type="email"
                placeholder="Email corporativo"
                className="glass rounded-xl px-6 py-4 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-blue"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                placeholder="Empresa"
                className="glass rounded-xl px-6 py-4 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-blue"
              />
              <input
                type="tel"
                placeholder="Teléfono"
                className="glass rounded-xl px-6 py-4 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-blue"
              />
            </div>
          </div>

          <Button variant="primary" className="text-xl px-12 py-5">
            Agendar Consultoría Gratuita
          </Button>

          <p className="text-slate-600 dark:text-gray-400 mt-6 text-sm font-medium">
            Sin compromisos • Respuesta en 24 horas • 100% confidencial
          </p>
        </motion.div>
      </div>
    </section>
  );
}
