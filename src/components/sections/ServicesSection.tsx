"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const services = [
  {
    icon: (
      <svg
        className="w-16 h-16"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
    title: "Automatización de Procesos",
    description:
      "RPA y workflows inteligentes que eliminan tareas repetitivas y optimizan operaciones",
    features: [
      "Robotic Process Automation",
      "Workflows personalizados",
      "Integración con sistemas existentes",
    ],
    gradient: "from-blue-500 to-cyan-500",
    stats: { value: "80%", label: "Reducción en tiempo" },
  },
  {
    icon: (
      <svg
        className="w-16 h-16"
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
    title: "Software Personalizado",
    description:
      "Desarrollo a medida que se adapta perfectamente a las necesidades únicas de tu empresa",
    features: [
      "Arquitectura escalable",
      "Desarrollo ágil",
      "Soporte técnico continuo",
    ],
    gradient: "from-purple-500 to-pink-500",
    stats: { value: "100%", label: "Personalización" },
  },
  {
    icon: (
      <svg
        className="w-16 h-16"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
    title: "Integración de Sistemas",
    description:
      "Conectamos todas tus herramientas para que trabajen como un ecosistema unificado",
    features: [
      "APIs y microservicios",
      "Sincronización en tiempo real",
      "Seguridad empresarial",
    ],
    gradient: "from-green-500 to-emerald-500",
    stats: { value: "99.9%", label: "Disponibilidad" },
  },
  {
    icon: (
      <svg
        className="w-16 h-16"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: "Optimización de Operaciones",
    description:
      "Análisis y mejora continua de procesos para maximizar eficiencia y reducir costos",
    features: ["Análisis de procesos", "KPIs y métricas", "Mejora continua"],
    gradient: "from-orange-500 to-red-500",
    stats: { value: "50%", label: "Reducción de costos" },
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile screen
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleDotClick = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? (isMobile ? 300 : 1000) : isMobile ? -300 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? (isMobile ? 300 : 1000) : isMobile ? -300 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white">
            Soluciones que <span className="text-gradient">transforman</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
            Tecnología empresarial diseñada para impulsar tu crecimiento
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center px-4">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
              }}
              className="absolute w-full max-w-5xl"
            >
              <div className="glass rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 bg-white dark:bg-white/5 border-2 border-slate-200 dark:border-white/10 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                  {/* Left side - Icon and Stats */}
                  <div className="flex flex-col items-center lg:items-start space-y-6 md:space-y-8">
                    <motion.div
                      className={`w-24 h-24 md:w-32 md:h-32 rounded-xl md:rounded-2xl bg-gradient-to-br ${services[activeIndex].gradient} p-6 md:p-8 shadow-xl`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-white w-full h-full flex items-center justify-center">
                        {services[activeIndex].icon}
                      </div>
                    </motion.div>

                    <div className="text-center lg:text-left">
                      <motion.div
                        className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                      >
                        {services[activeIndex].stats.value}
                      </motion.div>
                      <p className="text-slate-700 dark:text-gray-400 font-semibold mt-2 text-sm md:text-base">
                        {services[activeIndex].stats.label}
                      </p>
                    </div>
                  </div>

                  {/* Right side - Content */}
                  <div className="space-y-4 md:space-y-6">
                    <motion.h3
                      className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white text-center lg:text-left"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {services[activeIndex].title}
                    </motion.h3>

                    <motion.p
                      className="text-lg md:text-xl text-slate-700 dark:text-gray-300 leading-relaxed font-medium text-center lg:text-left"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {services[activeIndex].description}
                    </motion.p>

                    <motion.ul
                      className="space-y-3 md:space-y-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {services[activeIndex].features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-center gap-3 md:gap-4 justify-center lg:justify-start"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + idx * 0.1 }}
                        >
                          <div
                            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-gradient-to-r ${services[activeIndex].gradient} flex-shrink-0`}
                          />
                          <span className="text-slate-800 dark:text-gray-200 font-semibold text-base md:text-lg">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 md:gap-3 mt-12">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-300 rounded-full ${
                index === activeIndex
                  ? "w-10 md:w-12 h-2.5 md:h-3 bg-gradient-to-r from-blue-600 to-purple-600"
                  : "w-2.5 md:w-3 h-2.5 md:h-3 bg-slate-300 dark:bg-gray-600 hover:bg-slate-400 dark:hover:bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-6 md:mt-8 max-w-xs md:max-w-md mx-auto px-4">
          <div className="h-1 bg-slate-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
              key={activeIndex}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
