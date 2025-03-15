import Navbar from "./components/Home/NavBar";
import Hero from "./components/Home/Hero";
import AboutUs from "./components/Home/AboutUs";
import History from "./components/Home/History";
import Services from "./components/Home/Services";
import Footer from "./components/Home/Footer";
import MissionVision from "./components/Home/MissionVision";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <MissionVision />
      <History />
      <Services />
      <Footer />
    </main>
  );
}
