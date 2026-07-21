"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import { FiArrowLeft, FiCheck, FiChevronRight, FiInfo } from "react-icons/fi";
import type { MenuItem, MenuSection } from "../menu-data";
import { getProductInsight, slugifyProduct } from "../product-details";
import AnimatedPrice from "./AnimatedPrice";
import ProductSlider from "./ProductSlider";

export default function ProductDetail({
  section,
  item,
  itemIndex,
}: {
  section: MenuSection;
  item: MenuItem;
  itemIndex: number;
}) {
  const reduceMotion = useReducedMotion();
  const insight = getProductInsight(section, item);
  const relatedProducts = section.items
    .map((relatedItem, index) => ({ item: relatedItem, index }))
    .filter(({ index }) => index !== itemIndex);
  const images = section.images.map(
    (_, index) => section.images[(index + itemIndex) % section.images.length],
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [item.name]);

  return (
    <motion.main
      className="detail-page category-detail-page product-detail-page"
      key={item.name}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.28 }}
    >
      <header className="detail-header">
        <motion.div whileTap={reduceMotion ? undefined : { scale: 0.92 }}>
          <Link href={`/menu/${section.id}`} className="back-button" aria-label={`Volver a ${section.title}`}>
            <FiArrowLeft aria-hidden="true" />
          </Link>
        </motion.div>
        <Link href="/" className="detail-logo">
          <Image src="/axkan/logo-transparente.png" alt="AXKAN" width={180} height={180} />
        </Link>
      </header>

      <motion.div
        className="detail-hero product-detail-hero"
        initial={reduceMotion ? false : { opacity: 0.7, scale: 1.025 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <ProductSlider images={images} alt={item.name} priority className="detail-slider" />
        <div className="detail-fade" />
      </motion.div>

      <div className="detail-content product-detail-content">
        <motion.article
          className="detail-product-card product-main-card"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.38, delay: reduceMotion ? 0 : 0.08 }}
        >
          <span className="featured-label">{section.title}</span>
          <div className="detail-product-title">
            <h1>{item.name}</h1>
            <strong><AnimatedPrice price={item.price} /></strong>
          </div>
          <p>{insight.description}</p>
          <span><FiInfo aria-hidden="true" /> &nbsp; Menú informativo · Preparado al momento</span>
        </motion.article>

        <motion.section
          className="product-insight-section"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.34 }}
        >
          <span>{insight.eyebrow}</span>
          <h2>{insight.heading}</h2>
          <div className="product-insight-grid">
            {insight.values.map((value, index) => (
              <motion.div
                key={value}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: reduceMotion ? 0 : 0.26, delay: reduceMotion ? 0 : Math.min(index * 0.045, 0.24) }}
              >
                <FiCheck aria-hidden="true" />
                <strong>{value}</strong>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {section.note && (
          <motion.aside
            className="product-detail-note"
            initial={reduceMotion ? false : { opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.3 }}
          >
            <FiInfo aria-hidden="true" />
            <div><span>Importante</span><strong>{section.note}</strong></div>
          </motion.aside>
        )}

        {relatedProducts.length > 0 && (
          <motion.section
            className="related-products-section"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: reduceMotion ? 0 : 0.36 }}
          >
            <div className="related-products-heading">
              <span>Sigue explorando</span>
              <h2>También puedes elegir</h2>
              <p>Desliza hacia abajo y selecciona otra opción de {section.title}.</p>
            </div>
            <div className="detail-product-list related-product-list">
              {relatedProducts.map(({ item: relatedItem, index }, position) => (
                <motion.div
                  key={relatedItem.name + relatedItem.price}
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: reduceMotion ? 0 : 0.28, delay: reduceMotion ? 0 : Math.min(position * 0.035, 0.2) }}
                >
                  <Link
                    className="detail-list-item related-product-card"
                    href={`/menu/${section.id}/${slugifyProduct(relatedItem.name)}`}
                  >
                    <span className="detail-list-image">
                      <Image
                        src={section.images[index % section.images.length]}
                        alt={relatedItem.name}
                        fill
                        sizes="116px"
                      />
                    </span>
                    <span className="detail-list-copy">
                      <small>Opción {String(position + 1).padStart(2, "0")}</small>
                      <span className="detail-list-title-row">
                        <h3>{relatedItem.name}</h3>
                        <strong>{relatedItem.price}</strong>
                      </span>
                      <span className="detail-list-description">
                        {relatedItem.detail ?? "Consulta su información completa."}
                      </span>
                      <span className="detail-list-action">
                        Ver este producto <FiChevronRight aria-hidden="true" />
                      </span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        <motion.div whileTap={reduceMotion ? undefined : { scale: 0.98 }}>
          <Link href={`/menu/${section.id}`} className="return-menu">
            <FiArrowLeft aria-hidden="true" /> Ver todos en {section.title}
          </Link>
        </motion.div>
      </div>
    </motion.main>
  );
}