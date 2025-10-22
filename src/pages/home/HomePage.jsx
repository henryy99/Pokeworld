import Contact from "../../ui/Contact";
import Footer from "../../ui/Footer";
import GameIntroduction from "../../ui/GameIntroduction";
import Hero from "../../ui/Hero";
function HomePage() {
  return (
    <div class="flex flex-col min-h-screen start-screen font-roboto gap-20">
      <Hero />
      <GameIntroduction />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
