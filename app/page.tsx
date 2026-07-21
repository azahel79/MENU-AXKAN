import Image from "next/image";
import Link from "next/link";

const featured = [
  { label: "Alitas", icon: "♨", href: "/menu#alitas", tone: "red" },
  { label: "Burgers", icon: "●", href: "/menu#hamburguesas", tone: "green" },
  { label: "Snacks", icon: "◇", href: "/menu#snacks", tone: "gold" },
];

export default function WelcomePage() {
  return (
    <main className="landing-page">
      <div className="landing-inner">
        <div className="landing-logo-wrap">
          <Image src="/axkan/logo-transparente.png" alt="AXKAN Comida Rápida Gourmet" width={500} height={500} priority />
        </div>

        <section className="landing-copy">
          <h1>Sabor que se <span>siente</span></h1>
          <p>Comida Rápida Gourmet. Ingredientes frescos, sabores únicos y hechos al momento.</p>
        </section>

        <Link className="menu-cta" href="/menu">
          Ver menú <span aria-hidden="true">→</span>
        </Link>

        <section className="discover" aria-label="Categorías destacadas">
          <p>Descubre</p>
          <div className="discover-grid">
            {featured.map((item) => (
              <Link href={item.href} className={"discover-item tone-" + item.tone} key={item.label}>
                <span className="discover-icon" aria-hidden="true">{item.icon}</span>
                <strong>{item.label}</strong>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
