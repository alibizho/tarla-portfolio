import { useEffect, useRef, useState } from "react";
import { Gamepad2, Compass, Dog } from "lucide-react";

const hobbies = [
  {
    icon: Gamepad2,
    title: "Video Games",
    description:
      "I enjoy exploring different genres, from strategy and puzzles to story-driven adventures that take me to new worlds.",
  },
  {
    icon: Compass,
    title: "Trying New Activities",
    description:
      "I love experimenting with creative projects or going on adventures with friends.",
  },
  {
    icon: Dog,
    title: "Time with My Dog",
    description:
      "Going on walks or just playing together is one of my favorite ways to relax.",
  },
];

const HobbiesSection = () => {
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
      id="hobbies"
      ref={sectionRef}
      className="py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <p className="text-primary font-medium tracking-wide uppercase text-sm">
            What I Love
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mt-2">
            Hobbies & Interests
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            return (
              <div
                key={hobby.title}
                className={`group p-8 bg-card rounded-2xl hover:bg-accent/50 transition-all duration-300 ${
                  isVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {hobby.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {hobby.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
