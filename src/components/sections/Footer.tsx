"use client";

import { motion } from "framer-motion";

const footerSections = [
  {
    title: "Servicios",
    links: [
      "Automatización de Procesos",
      "Software Personalizado",
      "Integración de Sistemas",
      "Optimización de Operaciones",
    ],
  },
  {
    title: "Empresa",
    links: ["Sobre Nosotros", "Casos de Éxito", "Blog", "Carreras"],
  },
  {
    title: "Recursos",
    links: ["Documentación", "Webinars", "Guías", "FAQ"],
  },
  {
    title: "Contacto",
    links: [
      "contacto@automatech.com",
      "+1 (555) 123-4567",
      "LinkedIn",
      "Twitter",
    ],
  },
];

const logos = [
  "Empresa A",
  "Empresa B",
  "Empresa C",
  "Empresa D",
  "Empresa E",
  "Empresa F",
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      {/* Client logos section */}
      <div className="py-16 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.p
            className="text-center text-slate-700 dark:text-gray-400 mb-12 text-lg font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Empresas que confían en nosotros
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                className="glass rounded-xl p-6 flex items-center justify-center h-24 hover:bg-white dark:hover:bg-white/10 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-slate-700 dark:text-gray-400 font-semibold">
                  {logo}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-gradient mb-4">
                AutomaTech
              </h3>
              <p className="text-slate-700 dark:text-gray-400 mb-6 font-semibold">
                Transformando empresas con automatización y software de clase
                mundial.
              </p>
              {/* Social links */}
              <div className="flex gap-4">
                {["linkedin", "twitter", "github", "youtube"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-accent-blue/20 transition-all text-slate-700 dark:text-gray-400"
                  >
                    <span className="sr-only">{social}</span>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="8" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="font-bold text-lg mb-4 text-slate-900 dark:text-white">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-slate-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors font-medium"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-700 dark:text-gray-400 text-sm font-medium">
              © 2024 AutomaTech. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm text-slate-700 dark:text-gray-400 font-medium">
              <a
                href="#"
                className="hover:text-blue-600 dark:hover:text-white transition-colors"
              >
                Privacidad
              </a>
              <a
                href="#"
                className="hover:text-blue-600 dark:hover:text-white transition-colors"
              >
                Términos
              </a>
              <a
                href="#"
                className="hover:text-blue-600 dark:hover:text-white transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
