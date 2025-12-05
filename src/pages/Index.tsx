import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HobbiesSection from "@/components/HobbiesSection";
import TravelSection from "@/components/TravelSection";
import AchievementsSection from "@/components/AchievementsSection";
import Footer from "@/components/Footer";

import portraitImage from "@/assets/portrait.jpg";
import travelUae from "@/assets/uae.JPG";
import travelThailand from "@/assets/thailand.JPG";
import travelPoland from "@/assets/poland.JPG";
import travelFrance from "@/assets/france.JPG";

const destinations = [
  {
    name: "United Arab Emirates",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: travelUae,
  },
  {
    name: "Thailand",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: travelThailand,
  },
  {
    name: "Poland",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: travelPoland,
  },
  {
    name: "France",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: travelFrance,
  },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection name="Tarlan Imangozha" photoUrl={portraitImage} />
      <AboutSection />
      <HobbiesSection />
      <TravelSection destinations={destinations} />
      <AchievementsSection />
      <Footer />
    </main>
  );
};

export default Index;
