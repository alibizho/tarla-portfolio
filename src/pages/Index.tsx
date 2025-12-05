import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HobbiesSection from "@/components/HobbiesSection";
import TravelSection from "@/components/TravelSection";
import AchievementsSection from "@/components/AchievementsSection";
import Footer from "@/components/Footer";

import portraitImage from "@/assets/portrait.jpg";
import travelUae from "@/assets/travel-uae.jpg";
import travelThailand from "@/assets/travel-thailand.jpg";
import travelPoland from "@/assets/travel-poland.jpg";
import travelFrance from "@/assets/travel-france.jpg";
import travelGermany from "@/assets/travel-germany.jpg";

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
  {
    name: "Germany",
    description:
      "The fairy-tale castles and breathtaking Alps were like stepping into a storybook. German precision and beautiful nature showed me a different way of life.",
    imageUrl: travelGermany,
  },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection name="[Your Name]" photoUrl={portraitImage} />
      <AboutSection />
      <HobbiesSection />
      <TravelSection destinations={destinations} />
      <AchievementsSection />
      <Footer />
    </main>
  );
};

export default Index;
