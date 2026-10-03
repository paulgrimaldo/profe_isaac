import { LATEST_VIDEO_ID, YOUTUBE_CHANNEL_URL } from "../data/content.js";

export default function VideoShowcase() {
  return (
    <section className="section" id="video">
      <div className="container">
        <h2 className="section-title">Último tutorial</h2>
        <p className="section-subtitle">
          Mira la lección más reciente y suscríbete al canal para no perderte
          ninguna clase.
        </p>
        <div className="video-wrapper">
          <div className="video-frame">
            {LATEST_VIDEO_ID ? (
              <iframe
                src={`https://www.youtube.com/embed/${encodeURIComponent(
                  LATEST_VIDEO_ID
                )}`}
                title="Último tutorial de Profe Isaac"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            ) : (
              <div className="video-placeholder">
                <div className="play-icon" />
                <p>Aquí aparecerá tu último tutorial de YouTube</p>
              </div>
            )}
          </div>
          <div className="video-cta">
            <a
              className="btn btn-primary"
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visita el canal de YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
