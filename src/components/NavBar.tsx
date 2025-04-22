
import { useState, useEffect } from 'react';
import { Menu, X, User, Briefcase, Code, Award, Book, Mail } from 'lucide-react';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'About', icon: <User size={18} />, to: 'about' },
    { name: 'Skills', icon: <Code size={18} />, to: 'skills' },
    { name: 'Experience', icon: <Briefcase size={18} />, to: 'internship' },
    { name: 'Projects', icon: <Code size={18} />, to: 'projects' },
    { name: 'Education', icon: <Book size={18} />, to: 'education' },
    { name: 'Achievements', icon: <Award size={18} />, to: 'achievements' },
    { name: 'Contact', icon: <Mail size={18} />, to: 'contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
              <h1 className="font-playfair font-bold text-xl md:text-2xl gradient-text">HS</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                className="cursor-pointer flex items-center gap-1 text-gray-700 hover:text-accent font-medium text-sm transition-colors"
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-accent focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={closeMenu}
            className="text-gray-700 hover:text-accent focus:outline-none"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-6 p-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="cursor-pointer flex items-center gap-2 text-gray-700 hover:text-accent font-medium text-lg"
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
