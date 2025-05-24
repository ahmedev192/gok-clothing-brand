import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import GokLogo from '../ui/GokLogo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <GokLogo className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-900 hover:text-black font-medium">
            Collection
          </Link>
          <a
            href="https://www.instagram.com/gok.store/?igsh=YnJxdG90M2t3OTYy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-black font-medium flex items-center"
          >
            <Instagram className="w-5 h-5 mr-1" />
            <span>Instagram</span>
          </a>
          {isAuthenticated ? (
            <>
              <Link to="/admin" className="text-gray-900 hover:text-black font-medium">
                Admin
              </Link>
              <button
                onClick={logout}
                className="text-gray-900 hover:text-black font-medium"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/admin" className="text-gray-900 hover:text-black font-medium">
              Admin
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md">
          <div className="py-4 px-4 space-y-4">
            <Link
              to="/"
              className="block py-2 text-gray-900 hover:text-black font-medium"
            >
              Collection
            </Link>
            <a
              href="https://www.instagram.com/gok.store/?igsh=YnJxdG90M2t3OTYy"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-gray-900 hover:text-black font-medium flex items-center"
            >
              <Instagram className="w-5 h-5 mr-1" />
              <span>Instagram</span>
            </a>
            {isAuthenticated ? (
              <>
                <Link
                  to="/admin"
                  className="block py-2 text-gray-900 hover:text-black font-medium"
                >
                  Admin
                </Link>
                <button
                  onClick={logout}
                  className="block w-full text-left py-2 text-gray-900 hover:text-black font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/admin"
                className="block py-2 text-gray-900 hover:text-black font-medium"
              >
                Admin
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;