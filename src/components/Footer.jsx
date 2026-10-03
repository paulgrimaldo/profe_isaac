import {
  SOCIAL_LINKS,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "../data/content.js";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>Profe Isaac</h4>
            <p>
              Educación matemática a cargo del Ing. Isaac Barriga Aguirre.
              Cálculo, Estadística y Matemáticas preuniversitarias para todos
              los estudiantes.
            </p>
          </div>
          <div>
            <h4>Contacto</h4>
            <ul>
              <li>Envía tus dudas por redes sociales o WhatsApp.</li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  WhatsApp: {WHATSAPP_DISPLAY}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Sígueme</h4>
            <ul>
              {SOCIAL_LINKS.map((social) => (
                <li key={social.id}>
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="footer-bottom">
          &copy; {currentYear} Profe Isaac. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
