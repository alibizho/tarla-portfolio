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
      "I loved exploring the modern cities with their stunning architecture and the vast golden deserts. The contrast between futuristic skyscrapers and ancient traditions was fascinating.",
    imageUrl: travelUae,
  },
  {
    name: "Thailand",
    description:
      "The beautiful beaches with crystal clear waters and the vibrant culture made this trip unforgettable. I enjoyed trying delicious street food and visiting ancient temples.",
    imageUrl: travelThailand,
  },
  {
    name: "Poland",
    description:
      "Walking through charming cobblestone streets and discovering rich history at every corner. The colorful old towns and warm people made me feel right at home.",
    imageUrl: travelPoland,
  },
  {
    name: "France",
    description:
      "From the iconic Eiffel Tower to cozy cafes, Paris was a dream. I learned a lot about art, history, and what it means to truly appreciate the little moments.",
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
