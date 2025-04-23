
import { User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="flex items-center justify-center gap-2 mb-12">
          <User size={24} className="text-accent" />
          <span>About Me</span>
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3 animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto">
                <img
                  src="https://i.imgur.com/zFdTKNP.png"
                  alt="Harsha Srivastava"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-accent/20 -z-10"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 rounded-full bg-primary/20 -z-10"></div>
            </div>
          </div>
          
          <div className="lg:w-2/3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-2xl font-playfair font-bold mb-4 gradient-text">Hi! I'm Harsha Srivastava</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              B.tech Computer Science Engineering student at Lovely Professional University, specializing in Cyber Security. Dedicated to building new security measures and protocols and have a curious mind passionate about hacking, DSA, and weaving stories through tech. I love building things that solve real problems and bring joy. Whether it's securing systems or styling web pages, I do it with a spark of creativity.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">harshasrivastava71@gmail.com</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">Punjab, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

// Import at the top
import { Mail, MapPin } from "lucide-react";
