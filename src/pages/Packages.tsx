import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { packages } from '@/data/packages';
import { Calendar, Users, MapPin, ArrowRight } from 'lucide-react';

export const Packages = () => {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { value: 'all', label: t('packages.filter.all') },
    { value: 'adventure', label: t('packages.filter.adventure') },
    { value: 'cultural', label: t('packages.filter.cultural') },
    { value: 'spiritual', label: t('packages.filter.spiritual') },
    { value: 'beach', label: t('packages.filter.beach') },
    { value: 'mountain', label: t('packages.filter.mountain') },
  ];

  const filteredPackages =
    selectedCategory === 'all'
      ? packages
      : packages.filter((pkg) => pkg.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            {t('packages.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('packages.subtitle')}
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category.value
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'bg-card hover:bg-muted border border-border'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={i18n.language === 'en' ? pkg.title : pkg.titleHi}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold capitalize">
                    {pkg.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {pkg.duration} {t('packages.days')}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-display font-bold mb-3">
                    {i18n.language === 'en' ? pkg.title : pkg.titleHi}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2 flex-1">
                    {i18n.language === 'en' ? pkg.description : pkg.descriptionHi}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      {pkg.duration} days / {pkg.duration - 1} nights
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      India
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2 text-primary" />
                      Small groups (max 15)
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-center pt-4 border-t border-border">
                    {/* <div>
                      <span className="text-sm text-muted-foreground block">
                        {t('packages.from')}
                      </span>
                      <p className="text-2xl font-bold text-primary">
                        ₹{pkg.price.toLocaleString()}
                      </p>
                    </div> */}
                    <Button
                      asChild
                      className="w-[80%] bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <Link to={`/packages/${pkg.id}`}>
                        {t('packages.viewDetails')}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredPackages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-muted-foreground">
              No packages found in this category
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};
