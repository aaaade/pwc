import { useEffect } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Tiag from "./components/Tiag";
import Copyright from "./components/Copyright";


function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonial />
      <Tiag/>
      <Footer />
      <Copyright/>
    </div>
  );
}

export default App;
