import { NAV_LINKS } from "../data/content.js";

export default function Header() {
  return (
    <header className="site-header" id="home">
      <div className="container header-inner">
        <a href="#home" className="brand" aria-label="Inicio de Profe Isaac">
          <span className="brand-symbol">&pi;</span>
          <span>Profe Isaac</span>
        </a>
        <nav className="main-nav" aria-label="Navegación principal">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
