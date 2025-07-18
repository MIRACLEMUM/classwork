import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrendingSection from "./components/TrendingSection";
import TopCreatorsSection from "./components/TopCreatorsSection"; 




function App() {
  return (
    <div className="bg-[#2B2B2B] min-h-screen">
      <Navbar />
      <HeroSection />
      <TrendingSection />
      <TopCreatorsSection />


       

    </div>
  );
}

export default App;
