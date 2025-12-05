import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-6 bg-card"
    >
      <div className="max-w-4xl mx-auto">
        <div
          className={`space-y-8 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <div className="space-y-2">
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
              My Story
            </h2>
          </div>

          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              I was born in Turkmenistan and spent my early childhood there
              before moving to Kazakhstan, then Poland, and back to Kazakhstan.
              I love meeting new people, trying new experiences, and exploring
              different cultures.
            </p>

            <p>
              I've competed in English Olympiads and a few project competitions,
              which have taught me how to solve problems and think creatively.
              Outside of school, I enjoy playing video games, walking my dog, and
              having fun adventures with friends.
            </p>

            <p>
              Traveling to countries like UAE, Thailand, Poland, France, and
              Germany has given me a curiosity for the world and a love for
              learning in new ways.
            </p>
          </div>

          {/* Quick facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            {[
              { label: "Age", value: "14" },
              { label: "Countries Visited", value: "6+" },
              { label: "Languages", value: "3" },
              { label: "Adventures", value: "∞" },
            ].map((fact, index) => (
              <div
                key={fact.label}
                className={`p-4 bg-background rounded-xl text-center ${
                  isVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <p className="text-2xl md:text-3xl font-display font-semibold text-primary">
                  {fact.value}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
