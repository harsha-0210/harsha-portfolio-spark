
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="font-playfair font-bold text-2xl gradient-text">HS</h2>
            <p className="text-gray-400 mt-2">Cybersecurity Enthusiast & Creative Coder</p>
          </div>
          
          <div>
            <p className="text-center md:text-right text-gray-400">
              &copy; {currentYear} Harsha Srivastava. All rights reserved.
            </p>
            <p className="text-center md:text-right text-gray-500 text-sm mt-1">
              Made with <Heart size={14} className="inline text-accent" /> and curiosity
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
