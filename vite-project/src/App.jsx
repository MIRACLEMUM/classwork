import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrendingSection from "./components/TrendingSection";
import TopCreatorsSection from "./components/TopCreatorsSection";
 import BrowseCategories from "./components/BrowseCategories";
 import DiscoverNFTSection from "./components/DiscoverNFTSection";
  import FeaturedNFT from "./components/FeaturedNFT";







function App() {
  return (
    <div className="bg-[#2B2B2B] min-h-screen">
      <Navbar />
      <HeroSection />
      <TrendingSection />
      <TopCreatorsSection />
      <BrowseCategories />
     <DiscoverNFTSection />
     <FeaturedNFT />




       

    </div>
  );
}

export default App;
