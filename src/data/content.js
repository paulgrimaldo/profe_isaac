export const LATEST_VIDEO_ID = "";

export const WHATSAPP_NUMBER = "59161313448";
export const WHATSAPP_DISPLAY = "+591 61313448";
export const WHATSAPP_MESSAGE =
  "Hola Profe Isaac, me gustaría recibir más información";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const WHATSAPP_URL_WITH_MESSAGE = `${WHATSAPP_URL}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const SOCIAL_LINKS = [
  {
    id: "youtube",
    label: "YouTube",
    url: "https://www.youtube.com/results?search_query=Profe+Isaac",
  },
  {
    id: "facebook",
    label: "Facebook",
    url: "https://www.facebook.com/search/top?q=Profe%20Isaac",
  },
  {
    id: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/explore/search/keyword/?q=profe%20isaac",
  },
];

export const YOUTUBE_CHANNEL_URL = SOCIAL_LINKS[0].url;

export const NAV_LINKS = [
  { id: "home", label: "Inicio" },
  { id: "subjects", label: "Materias" },
  { id: "about", label: "Acerca de" },
  { id: "contact", label: "Contacto" },
];

export const SUBJECTS = [
  {
    id: "calculus-1",
    icon: "∫",
    title: "Cálculo 1",
    description:
      "Límites, continuidad, derivadas y sus aplicaciones explicadas con ejemplos resueltos.",
  },
  {
    id: "calculus-2",
    icon: "∑",
    title: "Cálculo 2",
    description:
      "Técnicas de integración, sucesiones, series y aplicaciones de la integral definida.",
  },
  {
    id: "statistics",
    icon: "σ",
    title: "Estadística",
    description:
      "Estadística descriptiva, probabilidad, distribuciones e inferencia de forma práctica.",
  },
  {
    id: "pre-university-math",
    icon: "π",
    title: "Matemáticas preuniversitarias",
    description:
      "Álgebra, geometría y trigonometría para construir una base sólida antes de la universidad.",
  },
];

export const ABOUT_POINTS = [
  "Explicaciones claras que buscan comprender, no memorizar",
  "Transmisiones en vivo para resolver las dudas de los estudiantes",
  "Contacto directo por redes sociales y WhatsApp",
];
