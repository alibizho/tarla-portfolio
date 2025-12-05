import { useEffect, useRef, useState } from "react";

interface Destination {
  name: string;
  description: string;
  imageUrl: string;
}

interface TravelSectionProps {
  destinations: Destination[];
}

const TravelSection = ({ destinations }: TravelSectionProps) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.3 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [destinations]);

  return (
    <section
      id="travel"
      ref={sectionRef}
      className="py-24 px-6 bg-card"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm">
            Exploring the World
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mt-2">
            My Travel Adventures
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I've been lucky to travel to many amazing countries. Traveling has
            helped me appreciate different cultures, try new foods, and make
            unforgettable memories.
          </p>
        </div>

        <div className="space-y-24">
          {destinations.map((destination, index) => {
            const isEven = index % 2 === 0;
            const isVisible = visibleItems.has(index);

            return (
              <div
                key={destination.name}
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                className={`grid md:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  isVisible
                    ? isEven
                      ? "animate-slide-left"
                      : "animate-slide-right"
                    : "opacity-0"
                }`}
              >
                {/* Text - alternates position */}
                <div
                  className={`space-y-4 ${
                    isEven ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
                    {destination.name}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {destination.description}
                  </p>
                </div>

                {/* Image - alternates position */}
                <div
                  className={`relative ${
                    isEven ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={destination.imageUrl}
                      alt={destination.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {/* Decorative element */}
                  <div
                    className={`absolute -z-10 w-full h-full bg-primary/10 rounded-2xl top-4 ${
                      isEven ? "-right-4" : "-left-4"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TravelSection;
