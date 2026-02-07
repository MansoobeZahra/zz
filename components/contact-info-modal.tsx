"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, MapPin, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { oswald } from "@/data/constants/fonts";

interface ContactInfoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactInfoModal({ isOpen, onClose }: ContactInfoModalProps) {
    const contactInfo = {
        name: "Zain Abbas",
        phone: "+92 3169244827",
        address: "Confide, Office 23, Noor Market Khomer Yarkot, Gilgit, Pakistan",
        email: "abbaszayn08@gmail.com",
    };

    const socialLinks = [
        { icon: <FaGithub size={22} />, href: "https://github.com/abbaszaynn", label: "GitHub" },
        { icon: <FaLinkedinIn size={22} />, href: "http://www.linkedin.com/in/zain-abbas1", label: "LinkedIn" },
        { icon: <FaInstagram size={22} />, href: "https://www.instagram.com/abbas__zayn?igsh=MWVqb2V0ZjI1cHRucA==", label: "Instagram" },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-md bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-red-700 to-red-900 px-6 py-5">
                            <div className="flex items-center justify-between">
                                <h2 className={`${oswald.className} text-2xl font-bold text-white`}>
                                    Contact Info
                                </h2>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-full hover:bg-white/20 transition-colors"
                                >
                                    <X className="w-5 h-5 text-white" />
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-5">
                            {/* Name */}
                            <div className="text-center pb-4 border-b border-gray-200 dark:border-gray-700">
                                <h3 className={`${oswald.className} text-3xl font-bold text-gray-900 dark:text-white`}>
                                    {contactInfo.name}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">AI & Web Developer</p>
                            </div>

                            {/* Contact Details */}
                            <div className="space-y-4">
                                {/* Phone */}
                                <a
                                    href={`tel:${contactInfo.phone}`}
                                    className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 dark:bg-[#252525] hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center group-hover:bg-red-200 dark:group-hover:bg-red-800/40 transition-colors">
                                        <Phone className="w-5 h-5 text-red-600 dark:text-red-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Phone</p>
                                        <p className="text-gray-900 dark:text-white font-medium">{contactInfo.phone}</p>
                                    </div>
                                </a>

                                {/* Email */}
                                <a
                                    href={`mailto:${contactInfo.email}`}
                                    className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 dark:bg-[#252525] hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center group-hover:bg-red-200 dark:group-hover:bg-red-800/40 transition-colors">
                                        <Mail className="w-5 h-5 text-red-600 dark:text-red-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Email</p>
                                        <p className="text-gray-900 dark:text-white font-medium">{contactInfo.email}</p>
                                    </div>
                                </a>

                                {/* Address */}
                                <div className="flex items-start gap-4 p-3 rounded-xl bg-gray-50 dark:bg-[#252525]">
                                    <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-red-600 dark:text-red-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Office Address</p>
                                        <p className="text-gray-900 dark:text-white font-medium">{contactInfo.address}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-4">Connect with me</p>
                                <div className="flex justify-center gap-4">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 rounded-full bg-gray-100 dark:bg-[#252525] flex items-center justify-center 
                        hover:bg-red-600 hover:text-white dark:hover:bg-red-600 
                        text-gray-700 dark:text-gray-300 transition-all duration-300 hover:scale-110"
                                            title={social.label}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
