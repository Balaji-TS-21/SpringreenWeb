import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Navigation Header Component with Floating Design and Scroll Animation
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'Industrial sectors', href: '/industrial-sectors' },
    { name: 'Careers', href: '/careers' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  // Handle scroll effect for navbar (only floating style, no hide on scroll)
  useEffect(() => {
    const SCROLL_THRESHOLD = 300;
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > SCROLL_THRESHOLD);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[300ms] translate-y-0 mt-3`}>
      <div className={`transition-all duration-[500ms] ${
        isScrolled ? 'floating-nav' : 'bg-primary-700 text-white mx-10  rounded-lg shadow-lg'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center transition-all duration-[2000ms] ${
            isScrolled ? 'justify-center h-14' : 'justify-between h-16'
          } `}>
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 ">
              <div className={`font-bold transition-all duration-[300ms] ${
                isScrolled ? 'text-3xl' : 'text-3xl'
              } text-white`}>
                Springreen
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-2 ml-20">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => {
                    // Scroll to top when navigating
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-white bg-opacity-30 text-black hover:text-black'
                      : 'text-white hover:bg-white hover:bg-opacity-10 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Action Button */}
            <div className="hidden md:block">
              <Link
                to="/contact"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`bg-white text-primary-600 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-200 hover:scale-105 pulse-on-hover ${
                  isScrolled ? 'px-4 py-2 text-sm' : 'px-6 py-2.5 text-sm'
                }`}
              >
                Action
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-white hover:bg-opacity-10 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white border-opacity-20 animate-slide-up">
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => {
                      setIsMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'bg-white bg-opacity-20 text-white'
                        : 'text-white hover:bg-white hover:bg-opacity-10'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="block mt-4 bg-white text-primary-600 px-3 py-2 rounded-md text-base font-medium hover:bg-opacity-90"
                >
                  Action
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;