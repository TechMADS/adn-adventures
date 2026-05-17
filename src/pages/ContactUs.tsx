"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactUs() {
    const { t } = useTranslation();
    const { toast } = useToast();

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        package: "",
        name: "",
        email: "",
        phone: "",
        date: "",
        guests: "",
        message: "",
    });

    const handleChange = (
        e: ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const whatsappMessage = `Enquiry:%0A
Package: ${formData.package}%0A
Name: ${formData.name}%0A
Email: ${formData.email}%0A
Phone: ${formData.phone}%0A
Date: ${formData.date}%0A
Guests: ${formData.guests}%0A
Message: ${formData.message}`;

        const whatsappNumber = "918098594364";

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

        window.open(whatsappUrl, "_blank");

        toast({
            title: "Enquiry Sent!",
            description: "Your enquiry has been sent via WhatsApp.",
        });

        setIsSubmitting(false);

        setFormData({
            package: "",
            name: "",
            email: "",
            phone: "",
            date: "",
            guests: "",
            message: "",
        });
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
                        {t("contact.title")}
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t("contact.subtitle")}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-background rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                >
                    <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between">
                        <h2 className="text-2xl font-display font-bold">
                            {t("booking.title")}
                        </h2>

                        {/* <button onClick={() => {}} className="p-2 hover:bg-muted rounded-full">
                            <X className="h-6 w-6" />
                        </button> */}
                    </div>

                    <form onSubmit={handleSubmit} className="p-6 space-y-4">

                        {/* Package */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                {t("booking.package")}
                            </label>

                            <select
                                required
                                name="package"
                                value={formData.package}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                            >
                                <option value="">
                                    {t("booking.selectPackage")}
                                </option>

                                <option value="Adventure Package">
                                    Adventure Package
                                </option>

                                <option value="Luxury Package">
                                    Luxury Package
                                </option>

                                <option value="Cultural Package">
                                    Cultural Package
                                </option>
                            </select>
                        </div>

                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                {t("booking.name")}
                            </label>

                            <Input
                                required
                                name="name"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Email + Phone */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    {t("booking.email")}
                                </label>

                                <Input
                                    type="email"
                                    required
                                    name="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    {t("booking.phone")}
                                </label>

                                <Input
                                    type="tel"
                                    required
                                    name="phone"
                                    placeholder="+91 1234567890"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Date + Guests */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    {t("booking.date")}
                                </label>

                                <Input
                                    type="date"
                                    required
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    {t("booking.guests")}
                                </label>

                                <Input
                                    type="number"
                                    min="1"
                                    required
                                    name="guests"
                                    placeholder="2"
                                    value={formData.guests}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                {t("booking.message")}
                            </label>

                            <Textarea
                                name="message"
                                placeholder="Any special requirements..."
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Submit */}
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                            size="lg"
                        >
                            {isSubmitting
                                ? "Submitting..."
                                : t("booking.submit")}
                        </Button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}