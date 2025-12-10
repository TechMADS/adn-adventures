import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { packages } from '@/data/packages';
import { Button } from '@/components/ui/button';
import { BookingForm } from '@/components/BookingForm';
import {
  Calendar,
  MapPin,
  Users,
  CheckCircle2,
  XCircle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export const PackageDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const pkg = packages.find((p) => p.id === id);

  if (!pkg) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Package Not Found</h1>
          <Button onClick={() => navigate('/packages')}>Back to Packages</Button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % pkg.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? pkg.gallery.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate('/packages')}
          className="mb-6"
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Packages
        </Button>

        {/* Image Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-[500px] rounded-2xl overflow-hidden mb-8 group"
        >
          <img
            src={pkg.gallery[currentImageIndex]}
            alt={`${i18n.language === 'en' ? pkg.title : pkg.titleHi} - ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Carousel Controls */}
          {pkg.gallery.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              
              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {pkg.gallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? 'bg-primary w-8'
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Title and Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold capitalize">
                  {pkg.category}
                </span>
                <span className="text-muted-foreground">
                  {pkg.duration} {t('packages.days')}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                {i18n.language === 'en' ? pkg.title : pkg.titleHi}
              </h1>
              <p className="text-xl text-muted-foreground">
                {i18n.language === 'en' ? pkg.description : pkg.descriptionHi}
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8 p-6 bg-card rounded-2xl"
            >
              <h2 className="text-2xl font-display font-bold mb-4">Tour Highlights</h2>
              <ul className="space-y-3">
                {(i18n.language === 'en' ? pkg.highlights : pkg.highlightsHi).map(
                  (highlight, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  )
                )}
              </ul>
            </motion.div>

            {/* Itinerary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-display font-bold mb-6">Detailed Itinerary</h2>
              <div className="space-y-4">
                {pkg.itinerary.map((day, index) => (
                  <div
                    key={index}
                    className="p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold mr-3">
                        {day.day}
                      </div>
                      <h3 className="text-xl font-display font-semibold">
                        {i18n.language === 'en' ? day.title : day.titleHi}
                      </h3>
                    </div>
                    <p className="text-muted-foreground ml-13">
                      {i18n.language === 'en' ? day.description : day.descriptionHi}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Inclusions/Exclusions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {/* Included */}
              <div className="p-6 bg-card rounded-2xl">
                <h3 className="text-xl font-display font-bold mb-4 text-green-600 dark:text-green-500">
                  What's Included
                </h3>
                <ul className="space-y-2">
                  {(i18n.language === 'en' ? pkg.included : pkg.includedHi).map(
                    (item, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Excluded */}
              <div className="p-6 bg-card rounded-2xl">
                <h3 className="text-xl font-display font-bold mb-4 text-red-600 dark:text-red-500">
                  What's Not Included
                </h3>
                <ul className="space-y-2">
                  {(i18n.language === 'en' ? pkg.excluded : pkg.excludedHi).map(
                    (item, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <XCircle className="h-4 w-4 text-red-600 dark:text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="sticky top-24"
            >
              <div className="p-6 bg-card rounded-2xl shadow-lg border border-border">
                {/* <div className="mb-6">
                  <span className="text-sm text-muted-foreground block mb-2">
                    {t('packages.from')}
                  </span>
                  <p className="text-4xl font-bold text-primary">
                    ₹{pkg.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">per person</p>
                </div> */}

                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-5 w-5 text-primary mr-3" />
                    <span>{pkg.duration} days / {pkg.duration - 1} nights</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-5 w-5 text-primary mr-3" />
                    <span>India</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="h-5 w-5 text-primary mr-3" />
                    <span>Small groups (max 15)</span>
                  </div>
                </div>

                <Button
                  onClick={() => setShowBookingForm(true)}
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6"
                >
                  {t('packages.bookNow')}
                </Button>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  Free cancellation up to 7 days before departure
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <BookingForm
          packageId={pkg.id}
          packageTitle={i18n.language === 'en' ? pkg.title : pkg.titleHi}
          onClose={() => setShowBookingForm(false)}
        />
      )}
    </div>
  );
};
