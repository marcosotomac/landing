"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const industries = [
  {
    name: "Finanzas",
    icon: "💰",
    description:
      "Automatización de procesos de crédito, conciliaciones bancarias y reportes regulatorios en tiempo real.",
    benefits: [
      "Reducción de errores en 95%",
      "Procesos 10x más rápidos",
      "Cumplimiento normativo garantizado",
    ],
  },
  {
    name: "Retail",
    icon: "🛍️",
    description:
      "Gestión de inventario inteligente, análisis de ventas y automatización de cadena de suministro.",
    benefits: [
      "Optimización de stock",
      "Predicción de demanda",
      "Integración omnicanal",
    ],
  },
  {
    name: "Manufactura",
    icon: "🏭",
    description:
      "Control de producción, mantenimiento predictivo y optimización de recursos en planta.",
    benefits: [
      "Reducción de downtime",
      "Trazabilidad completa",
      "Eficiencia operativa +40%",
    ],
  },
  {
    name: "Logística",
    icon: "🚚",
    description:
      "Optimización de rutas, tracking en tiempo real y automatización de documentación.",
    benefits: [
      "Reducción de costos de envío",
      "Visibilidad total",
      "Entregas más rápidas",
    ],
  },
];

export default function IndustriesSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white">
            Soluciones por <span className="text-gradient">industria</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
            Experiencia comprobada en sectores clave de la economía
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {industries.map((industry, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 md:px-8 py-3 md:py-4 rounded-xl text-sm md:text-lg font-semibold transition-all ${
                activeTab === index
                  ? "bg-gradient-to-r from-accent-blue to-accent-purple text-white shadow-lg"
                  : "glass text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/20 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10"
              }`}
            >
              <span className="mr-2">{industry.icon}</span>
              <span className="hidden sm:inline">{industry.name}</span>
              <span className="sm:hidden">{industry.icon}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-6 md:p-12 max-w-4xl mx-auto bg-white dark:bg-white/5 border-2 border-slate-300 dark:border-white/10 shadow-md"
        >
          <div className="text-5xl md:text-7xl mb-6 text-center">
            {industries[activeTab].icon}
          </div>
          <h3 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-center text-slate-900 dark:text-white">
            {industries[activeTab].name}
          </h3>
          <p className="text-base md:text-xl text-slate-900 dark:text-gray-300 mb-6 md:mb-8 text-center font-bold">
            {industries[activeTab].description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {industries[activeTab].benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-slate-100 dark:bg-white/5 rounded-xl p-4 md:p-6 text-center border border-slate-200 dark:border-white/10"
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-accent-blue/20 flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-5 h-5 text-blue-600 dark:text-accent-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-sm md:text-base text-slate-800 dark:text-white font-medium">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
