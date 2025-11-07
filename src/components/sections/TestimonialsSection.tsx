"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "CTO",
    company: "FinTech Solutions",
    content:
      "La automatización implementada redujo nuestros tiempos de procesamiento en un 85%. El ROI fue evidente en el primer mes. Un equipo excepcional que entiende las necesidades del negocio.",
    avatar: "CM",
    gradient: "from-blue-500 to-cyan-500",
    rating: 5,
  },
  {
    name: "María González",
    role: "Directora de Operaciones",
    company: "Retail Express",
    content:
      "Transformaron completamente nuestra gestión de inventario. Ahora tenemos visibilidad total y cero errores en stock. La implementación fue impecable y el soporte continuo es de primera.",
    avatar: "MG",
    gradient: "from-purple-500 to-pink-500",
    rating: 5,
  },
  {
    name: "Roberto Silva",
    role: "CEO",
    company: "Logistics Pro",
    content:
      "El software personalizado se adaptó perfectamente a nuestras necesidades únicas. Equipo altamente profesional, metodología ágil y resultados que superaron nuestras expectativas.",
    avatar: "RS",
    gradient: "from-orange-500 to-red-500",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    role: "Gerente de TI",
    company: "Manufactura Global",
    content:
      "La integración de sistemas fue impecable. Todos nuestros procesos están ahora conectados y funcionan sincronizados. La eficiencia operativa aumentó significativamente.",
    avatar: "AM",
    gradient: "from-green-500 to-emerald-500",
    rating: 5,
  },
  {
    name: "Luis Ramírez",
    role: "Director Digital",
    company: "Banking Corp",
    content:
      "Automatizamos procesos críticos sin comprometer la seguridad. La solución escaló perfectamente con nuestro crecimiento y el equipo siempre estuvo disponible para optimizar.",
    avatar: "LR",
    gradient: "from-indigo-500 to-blue-500",
    rating: 5,
  },
  {
    name: "Patricia Díaz",
    role: "VP de Operaciones",
    company: "E-commerce Plus",
    content:
      "ROI en menos de 6 meses. La plataforma automatizada maneja millones de transacciones sin errores. Una inversión que se paga sola rápidamente.",
    avatar: "PD",
    gradient: "from-yellow-500 to-orange-500",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 dark:via-blue-500/10 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 font-semibold text-sm border border-green-200 dark:border-green-500/30 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            ⭐ Historias de éxito reales
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 dark:text-white">
            Lo que dicen{" "}
            <span className="text-gradient">nuestros clientes</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
            Empresas líderes que transformaron sus operaciones con nuestra
            tecnología
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl bg-white dark:bg-white/5 border-2 border-slate-300 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20 transition-all duration-300 shadow-md hover:shadow-xl">
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 dark:opacity-5">
                  <svg
                    className="w-16 h-16 text-slate-900 dark:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg shrink-0 shadow-md`}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-slate-700 dark:text-gray-400 font-semibold">
                      {testimonial.role}
                    </p>
                    <p className="text-sm font-bold text-blue-700 dark:text-blue-400">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                <p className="text-slate-900 dark:text-gray-300 leading-relaxed mb-6 font-semibold">
                  "{testimonial.content}"
                </p>

                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm">
                    <div className="flex items-start gap-4 mb-6">
                      <div
                        className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg shrink-0`}
                      >
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonial.role}
                        </p>
                        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                      "{testimonial.content}"
                    </p>

                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-8 bg-blue-600"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
