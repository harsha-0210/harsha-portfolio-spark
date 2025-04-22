
import { useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-scroll";

const HeroSection = () => {
  useEffect(() => {
    const titles = ["Cybersecurity Enthusiast", "Creative Coder", "Storyteller"];
    let count = 0;
    let index = 0;
    let currentTitle = "";
    let letter = "";

    const type = () => {
      if (count === titles.length) {
        count = 0;
      }
      currentTitle = titles[count];
      letter = currentTitle.slice(0, ++index);

      const typingElement = document.querySelector(".typing");
      if (typingElement) {
        typingElement.textContent = letter;
      }

      if (letter.length === currentTitle.length) {
        // Pause at end of word
        setTimeout(() => {
          count++;
          index = 0;
          type();
        }, 2000);
      } else {
        setTimeout(type, 150);
      }
    };

    type();
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative header-gradient pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="relative inline-block mb-4">
          <span className="typing text-accent text-2xl md:text-3xl font-medium"></span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair">
          Harsha Srivastava
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Cybersecurity Enthusiast | Creative Coder | Storyteller
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="button-primary"
          >
            Get in Touch
          </a>
          <a
            href="https://drive.google.com/file/d/14Y098j-e91_qVskTsKJ-5YPOgahzg6T6/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="button-secondary"
          >
            Download CV
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link to="about" smooth={true} duration={500} className="cursor-pointer">
          <ChevronDown size={32} className="text-accent" />
        </Link>
      </div>

      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-0"></div>
    </section>
  );
};

export default HeroSection;
