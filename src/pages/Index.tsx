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
      "Dubai is full of people from all over the world. Visit to Global Village let me see so many cultures in one place. I love that I got to try different foods, see traditional clothes and performances, and it made me appreciate how unique each culture really is.",
    imageUrl: travelUae,
  },
  {
    name: "Thailand",
    description:
      "In Thailand, I visited markets, towns, beaches, and I tried many new foods. Life there is slower and more relaxed and seeing how people live every day helped me understand a different way of living.",
    imageUrl: travelThailand,
  },
  {
    name: "Poland",
    description:
      "Poland is a very special country for me because I lived there for three years. I visited a lot of museums and learned a lot about the country's history. The people are very kind and living there was a great experience.",
    imageUrl: travelPoland,
  },
  {
    name: "France",
    description:
      "I visited France for my birthday and it was amazing. I went to museums, historic streets, famous spots and I learned a lot about French history, art, and culture. Seeing everything in real life helped me understand it much better than in books and pictures.",
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
