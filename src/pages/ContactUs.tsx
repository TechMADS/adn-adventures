import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function ContactUs() {
    const { t } = useTranslation();
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            toast({
                title: "Booking Submitted!",
                description: t('booking.success'),
            });
            setIsSubmitting(false);
            // onClose();
        }, 1500);
    };


    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4 flex flex-col items-center gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
                        {t('contact.title')}
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t('contact.subtitle')}
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-background rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                >
                    <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between">
                        <h2 className="text-2xl font-display font-bold">{t('booking.title')}</h2>
                        {/* <button onClick={() => {}} className="p-2 hover:bg-muted rounded-full">
                            <X className="h-6 w-6" />
                        </button> */}
                    </div>

                    <form onSubmit={handleSubmit} className="p-6 space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">{t('booking.package')}</label>
                            <select required className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground">
                                <option value="">{t('booking.selectPackage')}</option>
                                <option value="adventure">Adventure Package</option>
                                <option value="luxury">Luxury Package</option>
                                <option value="cultural">Cultural Package</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">{t('booking.name')}</label>
                            <Input required placeholder="John Doe" />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">{t('booking.email')}</label>
                                <Input type="email" required placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">{t('booking.phone')}</label>
                                <Input type="tel" required placeholder="+91 1234567890" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">{t('booking.date')}</label>
                                <Input type="date" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">{t('booking.guests')}</label>
                                <Input type="number" min="1" required placeholder="2" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">{t('booking.message')}</label>
                            <Textarea placeholder="Any special requirements..." rows={4} />
                        </div>

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                            size="lg"
                        >
                            {isSubmitting ? 'Submitting...' : t('booking.submit')}
                        </Button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}