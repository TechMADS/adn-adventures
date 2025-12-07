import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-display font-bold mb-4 text-primary">
              ADN Adventures
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {t('footer.aboutText')}
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link
                  to="/packages"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('nav.packages')}
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('nav.gallery')}
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('nav.testimonials')}
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('nav.terms')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">
              {t('footer.contact')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@adnadventures.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  info@adnadventures.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+911234567890"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Chennai, India
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">
              Newsletter
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to get special offers and travel tips
            </p>
            <div className="w-full flex space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 text-sm rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="w-24 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ADN Adventures. {t('footer.rights')}
            </p>
            <p className="text-xs text-muted-foreground">
              Designed and Developed by{' '}
              <a
                href="https://www.techgajana.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[orange] hover:underline transition-colors"
              >
                TechGajana Digital Solutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
 