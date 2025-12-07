import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Globe, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import path from 'path';

export const Header = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/packages', label: t('nav.packages') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/testimonials', label: t('nav.testimonials') },
    // { path: '/terms', label: t('nav.terms') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 text-2xl font-display font-bold text-primary"
            >
              <img src="/logo.webp" alt="ADN Adventures Logo" className="h-12 w-12 rounded-full" />
              <h1>ADN <span className="text-foreground">Adventures</span></h1>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.path
                    ? 'text-primary'
                    : 'text-foreground/80'
                  }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="rounded-full"
              aria-label="Change language"
            >
              <Globe className="h-5 w-5" />
              <span className="ml-1 text-xs">
                {i18n.language === 'en' ? 'HI' : 'EN'}
              </span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background border-t border-border mt-2 pt-4 pb-4"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3 px-4 rounded-lg transition-colors ${location.pathname === link.path
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'text-foreground/80 hover:bg-muted'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
