import { useEffect, useRef, useState } from "react";
import { Award, BookOpen, Lightbulb, Trophy } from "lucide-react";

const achievements = [
  {
    icon: BookOpen,
    title: "English Olympiads",
    description: "Participated and competed in multiple English language competitions",
  },
  {
    icon: Trophy,
    title: "Project Competitions",
    description: "Completed various project competitions at school with creative solutions",
  },
  {
    icon: Lightbulb,
    title: "Creative Projects",
    description: "Successfully finished personal projects exploring new interests",
  },
  {
    icon: Award,
    title: "Problem Solving",
    description: "Learned to think creatively and challenge myself through competitions",
  },
];

const AchievementsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

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
      id="achievements"
      ref={sectionRef}
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-12 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <p className="text-primary font-medium tracking-wide uppercase text-sm">
            Things I'm Proud Of
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mt-2">
            Achievements
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            These experiences have taught me how to work hard, think creatively,
            and challenge myself.
          </p>
        </div>

        {/* Horizontal scroll container */}
        <div
          ref={scrollRef}
          className={`flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: "200ms" }}
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={achievement.title}
                className="flex-shrink-0 w-72 md:w-80 snap-center"
              >
                <div className="h-full p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-6 gap-2">
          <span className="text-sm text-muted-foreground">
            Scroll to explore
          </span>
          <svg
            className="w-5 h-5 text-muted-foreground animate-pulse"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
