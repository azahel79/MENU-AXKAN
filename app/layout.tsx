import type { Metadata } from "next";
import { headers } from "next/headers";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "lenis/dist/lenis.css";
import "yet-another-react-lightbox/styles.css";
import "./globals.css";
import MotionProvider from "./MotionProvider";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const imageUrl = protocol + "://" + host + "/og.png";

  return {
    title: "AXKAN | Comida Rápida Gourmet",
    description: "Menú digital de AXKAN: comida rápida gourmet, sabores únicos e ingredientes frescos.",
    openGraph: {
      title: "AXKAN | Comida Rápida Gourmet",
      description: "Sabor que se siente. Conoce nuestro menú.",
      images: [{ url: imageUrl, width: 1792, height: 910, alt: "AXKAN Comida Rápida Gourmet" }],
      locale: "es_MX",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "AXKAN | Comida Rápida Gourmet",
      description: "Sabor que se siente. Conoce nuestro menú.",
      images: [imageUrl],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body><MotionProvider>{children}</MotionProvider></body>
    </html>
  );
}
