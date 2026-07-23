"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiChevronRight, FiInfo } from "react-icons/fi";
import type { MenuSection } from "../menu-data";
import { flavors } from "../menu-data";
import { slugifyProduct } from "../product-details";
import ProductSlider from "./ProductSlider";

export default function CategoryDetail({ section }: { section: MenuSection }) {
  let featuredSkipped = false;
  const products = section.items.filter((item) => {
    const isFeatured = item.name === section.featured.name && item.price === section.featured.price;
    if (isFeatured && !featuredSkipped) {
      featuredSkipped = true;
      return false;
    }
    return true;
  });

  return (
    <main className={"detail-page category-detail-page theme-" + section.theme}>
      <header className="detail-header">
        <a href="/menu" className="back-button" aria-label="Volver al menú">
          <FiArrowLeft aria-hidden="true" />
        </a>
        <Link href="/" className="detail-logo">
          <Image src="/axkan/logo-global-actualizado.png" alt="AXKAN" width={180} height={180} />
        </Link>
      </header>

      <div className="detail-hero">
        <ProductSlider images={section.images} alt={section.featured.name} priority className="detail-slider" />
        <div className="detail-fade" />
      </div>

      <div className="detail-content">
        <motion.article
          className="detail-product-card"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.46 }}
        >
          <div className="detail-product-title">
            <div>
              <span className="featured-label">Destacado</span>
              <h1>{section.featured.name}</h1>
            </div>
            <strong>{section.featured.price}</strong>
          </div>
          <p>{section.description}</p>
          <span>♧ &nbsp; Ingredientes frescos · Hecho al momento</span>
        </motion.article>

        {section.id === "alitas" && (
          <section className="detail-info-section">
            <h2>Sabores disponibles</h2>
            <div className="detail-flavor-grid">
              {flavors.map((flavor, index) => (
                <div className={index === 0 ? "highlighted" : ""} key={flavor}>
                  <strong>{flavor}</strong>
                </div>
              ))}
            </div>
          </section>
        )}

        {products.length > 0 && (
          <section className="detail-info-section all-products-section">
            <div className="all-products-heading">
              <div>
                <span>Explora la categoría</span>
                <h2>Más {section.title}</h2>
                <p>Toca un platillo para abrir su ficha completa.</p>
              </div>
              <b>{products.length}</b>
            </div>

            <div className="detail-product-list">
              {products.map((item, index) => (
                <motion.article
                  className="detail-list-motion"
                  key={item.name + item.price}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.3, delay: Math.min(index * 0.035, 0.18) }}
                >
                  <Link
                    className="detail-list-item"
                    href={`/menu/${section.id}/${slugifyProduct(item.name)}`}
                    scroll={false}
                    aria-label={`Ver información completa de ${item.name}`}
                  >
                    <span className="detail-list-image">
                      <Image
                        src={section.images[index % section.images.length]}
                        alt={item.name}
                        fill
                        sizes="116px"
                      />
                    </span>
                    <span className="detail-list-copy">
                      <small>Opción {String(index + 1).padStart(2, "0")}</small>
                      <span className="detail-list-title-row">
                        <h3>{item.name}</h3>
                        <strong>{item.price}</strong>
                      </span>
                      <span className="detail-list-description">
                        {item.detail ?? "Conoce sus ingredientes, sabores y detalles."}
                      </span>
                      <span className="detail-list-action">
                        <FiInfo aria-hidden="true" /> Ver información <FiChevronRight aria-hidden="true" />
                      </span>
                    </span>
                  </Link>
                </motion.article>
              ))}
            </div>
          </section>
        )}

        {section.note && <p className="design-section-note detail-note">{section.note}</p>}

        <Link href="/menu" className="return-menu">
          <FiArrowLeft aria-hidden="true" /> Volver al menú completo
        </Link>
      </div>
    </main>
  );
}