import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const Gallery = () => {
  const { t } = useTranslation();

  const images = Array.from({ length: 23 }, (_, i) => `/gallery/${i + 1}.jpg`);
  const videos = Array.from({ length: 2 }, (_, i) => `/gallery/${i + 15}.mp4`);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-display font-bold mb-4">{t('gallery.title')}</h1>
          <p className="text-xl text-muted-foreground">{t('gallery.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {videos.map((vid, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <video
                src={vid}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                autoPlay
                loop
                muted
                playsInline
              />
            </motion.div>
          ))}
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
