import { WHATSAPP_URL_WITH_MESSAGE } from "../data/content.js";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <span className="hero-badge">Clases de matemáticas en línea</span>
        <h1>
          Domina el <span>Cálculo</span> y las Matemáticas con lecciones
          claras, paso a paso
        </h1>
        <p>
          Desde secundaria hasta la universidad, aprende con clases en vivo,
          tutoriales en pizarra y apoyo personalizado para cada duda.
        </p>
        <a
          className="btn btn-primary"
          href={WHATSAPP_URL_WITH_MESSAGE}
          target="_blank"
          rel="noopener noreferrer"
        >
          Escríbeme por WhatsApp
        </a>
      </div>
    </section>
  );
}
