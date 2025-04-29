import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import TemplatesSection from "./components/TemplatesSection";
import ExamplesSection from "./components/ExamplesSection";
import StartNowSection from "./components/StartNowSection";
import Footer from "./components/Footer";

function App() {
  
  return (
    <main className="bg-white">
      <div className="overflow-hidden pr-1.5 pb-24 w-full bg-white max-md:max-w-full">
        <Header />
        <HeroSection />
      </div>

      <FeaturesSection />
      <TemplatesSection />
      <ExamplesSection />
      <StartNowSection />
      <Footer />
    </main>
  );
}

export default App;
