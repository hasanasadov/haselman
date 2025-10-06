import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Research from "./components/Research";
import Projects from "./components/Projects";
import Awards from "./components/Awards";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Research />
      <Projects />
      <Awards />
      <Blog />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
