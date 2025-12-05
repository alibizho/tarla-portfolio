import { useEffect, useRef, useState } from "react";

interface HeroSectionProps {
  name: string;
  photoUrl: string;
}

const HeroSection = ({ name, photoUrl }: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div
            className={`space-y-6 ${
              isVisible ? "animate-slide-left" : "opacity-0"
            }`}
          >
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              Welcome
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground leading-tight">
              Hi! I'm{" "}
              <span className="text-primary">{name}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              A 14-year-old student who loves exploring new things and learning
              about the world. I enjoy video games, spending time with my dog,
              trying out new activities with friends, and discovering new places
              through travel.


            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Learn More
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Photo */}
          <div
            className={`relative ${
              isVisible ? "animate-slide-right" : "opacity-0"
            }`}
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-accent rounded-3xl -rotate-3" />
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl rotate-3" />
              {/* Photo container */}
              <div className="relative h-full rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={photoUrl}
                  alt={`${name}'s portrait`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
