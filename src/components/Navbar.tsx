import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-crypto-blue/80 backdrop-blur-md py-3 shadow-lg' : 'py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white">
            Hev<span className="text-crypto-purple">inka</span>
          </h1>
        </div>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center space-x-8">
          <li>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">
              Services
            </a>
          </li>
          <li>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
              Process
            </a>
          </li>
          <li>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
              Clients
            </a>
          </li>
          <li>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
              Plans
            </a>
          </li>
          <li>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
              FAQ
            </a>
          </li>
        </ul>

        <div className="hidden lg:flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-300 hover:text-white">
            Login
          </Button>
          <Link to="#!">
            <Button className="bg-crypto-purple hover:bg-crypto-dark-purple text-white w-full">Get Started</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-crypto-blue/95 backdrop-blur-lg absolute top-full left-0 w-full py-4 shadow-lg">
          <div className="container mx-auto px-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <a href="#features" className="text-gray-300 hover:text-white transition-colors block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  Services
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  Process
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  Clients
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-300 hover:text-white transition-colors block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  Plans
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  FAQ
                </a>
              </li>
              <li className="pt-4 flex flex-col space-y-3">
                <Button variant="ghost" className="text-gray-300 hover:text-white w-full justify-start">
                  Login
                </Button>
                <Link to="#!">
                  <Button className="bg-crypto-purple hover:bg-crypto-dark-purple text-white w-full">Get Started</Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
