import AOS from "aos";
import "aos/dist/aos.css";

import Wrapper from "./layouts/Wrapper";
import Container from "./layouts/Container";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

// Durasi animasi
AOS.init({
  duration: 500,
});

function App() {
  return (
    <Wrapper>
      <ScrollToTop />
      <Navbar />
      <Container>
        <Home />
        <About />
        <Projects />
        <Contact />
      </Container>
    </Wrapper>
  );
}

export default App;
