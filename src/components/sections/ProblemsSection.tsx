"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const problems = [
  {
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Procesos Manuales Lentos",
    description:
      "Horas perdidas en tareas repetitivas que podrían automatizarse en minutos",
    color: "from-red-500 to-orange-500",
    bgColor: "bg-red-500/10 dark:bg-red-500/20",
  },
  {
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),
    title: "Errores Humanos Costosos",
    description:
      "Errores en datos y procesos que impactan directamente en tu operación",
    color: "from-yellow-500 to-amber-500",
    bgColor: "bg-yellow-500/10 dark:bg-yellow-500/20",
  },
  {
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Sistemas Desconectados",
    description:
      "Falta de integración entre herramientas que genera cuellos de botella",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10 dark:bg-blue-500/20",
  },
  {
    icon: (
      <svg
        className="w-12 h-12"
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
    title: "Falta de Visibilidad",
    description:
      "Dificultad para tomar decisiones por ausencia de datos en tiempo real",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10 dark:bg-purple-500/20",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function ProblemsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile screen
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Auto-advance carousel in mobile only
    const interval = setInterval(() => {
      if (window.innerWidth < 768) {
        setActiveIndex((prev) => (prev + 1) % problems.length);
      }
    }, 4000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const slideVariants = {
    enter: {
      y: 300,
      opacity: 0,
    },
    center: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: -300,
      opacity: 0,
    },
  };

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-400 font-semibold text-sm border border-red-200 dark:border-red-500/30 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Los desafíos que frenan tu crecimiento
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 dark:text-white">
            ¿Te suenan estos <span className="text-gradient">problemas</span>?
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
            Estos son los obstáculos que enfrentan empresas en crecimiento cada
            día
          </p>
        </motion.div>

        {/* Desktop Grid View */}
        <motion.div
          className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {problems.map((problem, index) => (
            <motion.div key={index} variants={item} className="group relative">
              <div className="relative h-full p-8 rounded-2xl bg-white dark:bg-white/5 border-2 border-slate-300 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20 transition-all duration-300 overflow-hidden shadow-md hover:shadow-xl">
                {/* Icon background */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 ${problem.bgColor} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${problem.color} text-white mb-6 shadow-md`}
                  >
                    {problem.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                    {problem.title}
                  </h3>
                  <p className="text-slate-900 dark:text-gray-300 leading-relaxed font-semibold">
                    {problem.description}
                  </p>
                </div>

                {/* Hover border effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${problem.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Vertical Carousel */}
        <div className="md:hidden relative min-h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                y: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
              }}
              className="absolute w-full px-4 pr-16"
            >
              <div className="group relative">
                <div className="relative h-full p-8 rounded-2xl bg-white dark:bg-white/5 border-2 border-slate-300 dark:border-white/10 shadow-xl">
                  {/* Icon background */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 ${problems[activeIndex].bgColor} rounded-full blur-2xl opacity-50`}
                  />

                  <div className="relative z-10">
                    <div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${problems[activeIndex].color} text-white mb-6 shadow-md`}
                    >
                      {problems[activeIndex].icon}
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                      {problems[activeIndex].title}
                    </h3>
                    <p className="text-slate-900 dark:text-gray-300 leading-relaxed font-semibold">
                      {problems[activeIndex].description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile Vertical Indicators */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3">
            {problems.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex
                    ? "h-12 w-2 bg-gradient-to-b from-blue-600 to-purple-600"
                    : "h-2 w-2 bg-slate-300 dark:bg-gray-600"
                }`}
                aria-label={`Go to problem ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
