
import { Trophy, FileText, Award } from "lucide-react";

const achievements = [
  {
    title: "HackerRank Problem Solving Certification",
    icon: <Trophy className="w-12 h-12 text-accent" />,
    image: "https://imgur.com/o6bj1Va",
    fallback: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    key: "hackerrank",
  },
  {
    title: "Cyber Security Paper with 29K+ reads",
    icon: <FileText className="w-12 h-12 text-accent" />,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    fallback: null,
    key: "cybersecurity",
  },
  {
    title: "NPTEL Elite Badge",
    icon: <Award className="w-12 h-12 text-accent" />,
    image: "https://imgur.com/LHZwUWJ",
    fallback: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    key: "nptel",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="section">
      <div className="container mx-auto">
        <h2 className="flex items-center justify-center gap-2">
          <Trophy size={24} className="text-accent" />
          <span>Achievements</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 reveal"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-40 w-full bg-gray-50 flex items-center justify-center overflow-hidden">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="object-contain h-36 w-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (achievement.fallback) {
                      target.src = achievement.fallback;
                    }
                  }}
                />
              </div>
              <div className="p-6 relative">
                <div className="absolute -top-8 left-6 w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center">
                  {achievement.icon}
                </div>
                <div className="pt-8">
                  <h3 className="text-lg font-bold font-playfair">
                    {achievement.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

