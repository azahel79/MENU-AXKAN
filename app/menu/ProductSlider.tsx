"use client";

import Image from "next/image";
import { useState } from "react";
import { FiMaximize2 } from "react-icons/fi";
import { A11y, EffectFade, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

type ProductSliderProps = {
  images: string[];
  alt: string;
  priority?: boolean;
  className?: string;
};

export default function ProductSlider({ images, alt, priority = false, className = "" }: ProductSliderProps) {
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  return (
    <>
      <div className={"product-slider " + className}>
        <Swiper
          modules={[Pagination, Keyboard, A11y, EffectFade]}
          slidesPerView={1}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={450}
          spaceBetween={0}
          loop={images.length > 1}
          keyboard={{ enabled: true }}
          pagination={{ clickable: true }}
          a11y={{ enabled: true }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={src}>
              <button
                type="button"
                className="product-slide product-slide-open"
                onClick={() => setLightbox({ open: true, index })}
                aria-label={`Abrir fotografía ${index + 1} de ${alt} en pantalla completa`}
              >
                <Image
                  src={src}
                  alt={alt + " · vista " + (index + 1)}
                  fill
                  priority={priority && index === 0}
                  sizes="(max-width: 760px) 100vw, 760px"
                />
                <span className="slide-counter">{index + 1} / {images.length}</span>
                <span className="open-image-hint" aria-hidden="true">
                  <FiMaximize2 />
                </span>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Lightbox
        open={lightbox.open}
        close={() => setLightbox((current) => ({ ...current, open: false }))}
        index={lightbox.index}
        slides={images.map((src, index) => ({ src, alt: `${alt} · vista ${index + 1}` }))}
        plugins={[Zoom]}
        animation={{ fade: 250, swipe: 300 }}
        carousel={{ finite: images.length <= 1 }}
        controller={{ closeOnBackdropClick: true }}
        zoom={{ maxZoomPixelRatio: 3, scrollToZoom: true }}
      />
    </>
  );
}