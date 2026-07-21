"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useEffect, useState } from "react";
import { menuSections } from "../menu-data";
import ProductSlider from "./ProductSlider";

const bottomLinks = [
  { id: "alitas", label: "Alitas", icon: "♨" },
  { id: "hamburguesas", label: "Burgers", icon: "●" },
  { id: "hot-dogs", label: "Hot Dogs", icon: "〰" },
  { id: "snacks", label: "Snacks", icon: "◇" },
  { id: "bebidas", label: "Bebidas", icon: "▽" },
];

export default function MenuPage() {
  const [active, setActive] = useState("alitas");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    menuSections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (!element) return;
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setActive(section.id);
      }, { rootMargin: "-22% 0px -68% 0px" });
      observer.observe(element);
      observers.push(observer);
    });
    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <main className="menu-page visual-menu-page">
      <header className="menu-logo-header">
        <Link href="/" aria-label="Volver a bienvenida">
          <Image src="/axkan/logo-transparente.png" alt="AXKAN Comida Rápida Gourmet" width={360} height={360} priority />
        </Link>
        <p>Elige una categoría y descubre todos sus sabores</p>
      </header>

      <div className="category-showcase">
        {menuSections.map((section, index) => (
          <motion.section
            className={"category-preview theme-" + section.theme}
            id={section.id}
            key={section.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{ duration: 0.42, delay: Math.min(index * 0.025, 0.12) }}
          >
            <div className="preview-heading">
              <div>
                <span>Menú AXKAN</span>
                <h2>{section.title}</h2>
              </div>
              <i aria-hidden="true">{section.icon}</i>
            </div>

            <div className="preview-card">
              <ProductSlider
                images={section.images}
                alt={section.featured.name}
                priority={index === 0}
              />
              <div className="preview-product-copy">
                <div className="preview-product-topline">
                  <div>
                    <span className="featured-label">Recomendación</span>
                    <h3>{section.featured.name}</h3>
                  </div>
                  <strong>{section.featured.price}</strong>
                </div>
                <p>{section.description}</p>
                {section.featured.detail && <small>{section.featured.detail}</small>}
                <Link href={"/menu/" + section.id} className="view-more-button">
                  Ver más <FiArrowRight aria-hidden="true" />
                </Link>
              </div>
            </div>
          </motion.section>
        ))}

        <p className="alcohol-note">ⓘ &nbsp; El consumo excesivo de alcohol es perjudicial para la salud.</p>
        <footer className="menu-footer">
          <Image src="/axkan/logo-transparente.png" alt="AXKAN" width={190} height={190} />
          <p>Fresco, rico y hecho para ti</p>
          <span>@axkan.gourmet · Axkan Banderilla · 228 179 8637</span>
        </footer>
      </div>

      <nav className="bottom-menu-nav" aria-label="Accesos rápidos">
        {bottomLinks.map((item) => (
          <a
            href={"#" + item.id}
            className={active === item.id ? "active" : ""}
            key={item.id}
            onClick={() => setActive(item.id)}
          >
            {active === item.id && (
              <motion.span
                className="bottom-nav-indicator"
                layoutId="bottom-nav-indicator"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            )}
            <span className="bottom-nav-icon" aria-hidden="true">{item.icon}</span>
            <small>{item.label}</small>
          </a>
        ))}
      </nav>
    </main>
  );
}
