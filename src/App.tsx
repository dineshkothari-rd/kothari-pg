import "./App.css";
import Contact from "./components/sections/Contact";
import Facilities from "./components/sections/Facilities";
import Footer from "./components/sections/Footer";
import Gallery from "./components/sections/Gallery";
import Hero from "./components/sections/Hero";
import Location from "./components/sections/Location";
import Navbar from "./components/sections/Navbar";
import Rooms from "./components/sections/Rooms";
import WhatsAppButton from "./components/ui/WhatsAppButton";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Facilities />
      <Rooms />
      <Gallery />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
