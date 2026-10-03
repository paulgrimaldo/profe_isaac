import { ABOUT_POINTS } from "../data/content.js";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title">Sobre el instructor</h2>
        <div className="about-grid">
          <div className="about-card">
            <div className="about-avatar">IB</div>
            <h3>Ing. Isaac Barriga Aguirre</h3>
            <p>Docente de matemáticas</p>
          </div>
          <div className="about-text">
            <p>
              El Ing. Isaac Barriga Aguirre enseña matemáticas con un objetivo
              sencillo: lograr que los temas complejos se vuelvan
              comprensibles. Sus lecciones dividen cada problema en pasos
              pequeños y lógicos que el estudiante puede seguir y repetir por
              su cuenta.
            </p>
            <p>
              Con sólida experiencia en docencia virtual, combina tutoriales
              grabados en pizarra con transmisiones en vivo donde los
              estudiantes pueden preguntar y ver los ejercicios resueltos en
              tiempo real.
            </p>
            <ul className="about-points">
              {ABOUT_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
