import Navbar from "./components/Home/NavBar";
import Hero from "./components/Home/Hero";
import AboutUs from "./components/Home/AboutUs";
import History from "./components/Home/History";
import Services from "./components/Home/Services";
import Clients from "./components/Home/Clients";
import Footer from "./components/Home/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <History />
      <Services />
      <Clients />
      <Footer />
    </main>
  );
}
