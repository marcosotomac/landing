"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Análisis y Diagnóstico",
    description:
      "Evaluamos tus procesos actuales e identificamos oportunidades de optimización y automatización.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Diseño de Solución",
    description:
      "Creamos una arquitectura personalizada que se adapta perfectamente a tus necesidades y objetivos.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Implementación",
    description:
      "Desarrollamos e integramos la solución con metodología ágil, garantizando calidad en cada fase.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Soporte Continuo",
    description:
      "Mantenimiento proactivo, actualizaciones y mejoras constantes para asegurar el máximo rendimiento.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
];

export default function ProcessSection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 dark:via-purple-500/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white">
            Nuestro <span className="text-gradient">proceso</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
            Un enfoque estructurado para garantizar el éxito de tu
            transformación digital
          </p>
        </motion.div>

        {/* Desktop Roadmap */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Path */}
            <svg
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              style={{ height: "300px" }}
            >
              <motion.path
                d="M 150 150 Q 400 50, 650 150 T 1150 150"
                stroke="url(#gradient)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="10 5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>

            {/* Steps */}
            <div className="grid grid-cols-4 gap-8 relative pt-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  {/* Connector Dot */}
                  <div className="flex justify-center mb-6">
                    <motion.div
                      className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                    />
                  </div>

                  {/* Card */}
                  <div className="relative group">
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
                    
                    <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-8 border-2 border-slate-300 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300">
                      {/* Number Badge */}
                      <div className="absolute -top-4 left-6 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {step.number}
                      </div>

                      {/* Icon */}
                      <div className="mt-4 mb-6 text-blue-600 dark:text-blue-400 flex justify-center">
                        {step.icon}
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold mb-3 text-center text-slate-900 dark:text-white">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-700 dark:text-gray-400 text-center leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Roadmap - Vertical */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex gap-6">
                {/* Timeline Line & Dot */}
                <div className="flex flex-col items-center">
                  {/* Number Badge */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shrink-0">
                    {step.number}
                  </div>
                  
                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600 mt-4 opacity-30" />
                  )}
                </div>

                {/* Card */}
                <div className="flex-1 pb-8">
                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border-2 border-slate-300 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
                    {/* Icon */}
                    <div className="mb-4 text-blue-600 dark:text-blue-400">
                      {step.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-700 dark:text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
