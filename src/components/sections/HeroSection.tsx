"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "../ui/Button";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden will-change-transform">
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />

        {/* Gradient orbs - Reduced animations for performance */}
        <motion.div
          className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/30 dark:bg-blue-500/20 rounded-full blur-3xl will-change-transform"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 -right-48 w-96 h-96 bg-purple-500/30 dark:bg-purple-500/20 rounded-full blur-3xl will-change-transform"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating particles - Reduced from 20 to 10 for better performance */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/50 dark:bg-blue-400/30 rounded-full will-change-transform"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 font-semibold text-sm border border-blue-200 dark:border-blue-500/30 backdrop-blur-sm">
            🚀 Transformación Digital para Empresas
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-slate-900 
        dark:text-white"
        >
          Automatiza tu empresa. <br className="hidden md:block" />
          <span className="text-gradient">Multiplica resultados</span>
        </motion.h1>{" "}
        <motion.p
          className="text-xl md:text-2xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transformamos operaciones empresariales con{" "}
          <span className="font-bold text-blue-700 dark:text-blue-400">
            automatización inteligente
          </span>{" "}
          y{" "}
          <span className="font-bold text-purple-700 dark:text-purple-400">
            software personalizado
          </span>
          .
          <br />
          Optimiza procesos, reduce costos y escala sin límites.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button variant="primary" className="min-w-[200px]">
            Agenda una Demo
          </Button>
          <Button variant="secondary" className="min-w-[200px]">
            Ver Casos de Éxito
          </Button>
        </motion.div>
        {/* Stats preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto mb-20"
        >
          {[
            { value: "80%", label: "Menos tiempo en procesos" },
            { value: "99.9%", label: "Precisión operativa" },
            { value: "50+", label: "Empresas transformadas" },
            { value: "5M+", label: "Horas automatizadas" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="p-4 md:p-6 rounded-2xl bg-white dark:bg-white/5 border-2 border-slate-300 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 transition-all shadow-md hover:shadow-xl"
            >
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-slate-900 dark:text-gray-400 font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Visual mockup */}
        <motion.div
          className="relative max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 dark:border-white/10 shadow-2xl">
            {/* Window controls */}
            {/* Window controls */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-100 dark:bg-black/80 backdrop-blur-sm border-b-2 border-slate-200 dark:border-white/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 text-center text-sm text-slate-700 dark:text-gray-400 font-semibold">
                AutomaTech Dashboard
              </div>
            </div>

            {/* Dashboard content */}
            <div className="aspect-video bg-gradient-to-br from-blue-100 via-purple-100 to-cyan-100 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-cyan-950/20 p-4 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 h-full">
                {/* Left sidebar - Hidden on mobile */}
                <div className="hidden md:block md:col-span-1 space-y-4">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="h-12 bg-white/80 dark:bg-white/10 rounded-lg backdrop-blur-sm animate-pulse border border-slate-200/50 dark:border-white/5"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>

                {/* Main content */}
                <div className="md:col-span-2 space-y-4">
                  <div className="h-24 md:h-32 bg-white/80 dark:bg-white/10 rounded-xl backdrop-blur-sm animate-pulse border border-slate-200/50 dark:border-white/5" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div
                      className="h-32 md:h-40 bg-white/80 dark:bg-white/10 rounded-xl backdrop-blur-sm animate-pulse border border-slate-200/50 dark:border-white/5"
                      style={{ animationDelay: "0.2s" }}
                    />
                    <div
                      className="h-32 md:h-40 bg-white/80 dark:bg-white/10 rounded-xl backdrop-blur-sm animate-pulse border border-slate-200/50 dark:border-white/5"
                      style={{ animationDelay: "0.3s" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl -z-10" />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
