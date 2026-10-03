import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Subjects from "./components/Subjects.jsx";
import VideoShowcase from "./components/VideoShowcase.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Subjects />
        <VideoShowcase />
      </main>
      <Footer />
    </>
  );
}
