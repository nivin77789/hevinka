import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#12141C] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">
              Hevinka<span className="text-crypto-purple">Tech</span>
            </h2>
            <p className="text-gray-400 mb-6 max-w-xs">
              A trusted IT solutions company, building powerful software and modern websites to help businesses innovate and grow.
            </p>
            <div className="flex space-x-4">
              <a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Web Development</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Software Solutions</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">UI/UX Design</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">API Integration</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">IT Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Blog</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Case Studies</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Guides</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Documentation</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">About Us</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Careers</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Press</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Legal & Privacy</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Hevinka. All rights reserved. Designed by 

              Nivin Mathew
            </p>
            <div className="flex space-x-6">
              <a href="#!" className="text-gray-400 hover:text-crypto-purple text-sm transition-colors">Terms of Service</a>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple text-sm transition-colors">Privacy Policy</a>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
