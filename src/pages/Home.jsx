import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Academics from '../components/Academics';
import Facilities from '../components/Facilities';
import Gallery from '../components/Gallery';
import Admission from '../components/Admission';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Academics />
      <Facilities />
      <Gallery />
      <Admission />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
