"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVars = {
        initial: {
            scaleY: 0,
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0] as const,
            },
        },
        exit: {
            scaleY: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1] as const,
            },
        },
    };

    const containerVars = {
        initial: {
            transition: {
                staggerChildren: 0.09,
                staggerDirection: -1,
            },
        },
        open: {
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.09,
                staggerDirection: 1,
            },
        },
    };

    const mobileLinkVars = {
        initial: {
            y: "30vh",
            transition: {
                duration: 0.5,
                ease: [0.37, 0, 0.63, 1] as const,
            },
        },
        open: {
            y: 0,
            transition: {
                ease: [0, 0.55, 0.45, 1] as const,
                duration: 0.7,
            },
        },
    };

    const navLinks = [
        { title: "Services", href: "#services" },
        { title: "Stories", href: "/gallery" },
        { title: "Album", href: "#album" },
        { title: "Live", href: "#live" },
        { title: "Contact", href: "#contact" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-luxury-white py-6 px-6 md:px-10 flex justify-between items-center">
            <div className="text-2xl font-serif font-bold tracking-widest z-50">
                <Link href="/">SHYAM HD</Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 font-sans text-sm tracking-widest uppercase">
                {navLinks.map((link, index) => (
                    <Link key={index} href={link.href} className="hover:text-gold transition-colors">
                        {link.title}
                    </Link>
                ))}
            </nav>

            {/* Mobile Navigation Toggle */}
            <div className="md:hidden z-50 cursor-pointer" onClick={toggleMenu}>
                {isOpen ? <IoMdClose size={30} /> : <RxHamburgerMenu size={30} />}
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed left-0 top-0 w-full h-screen bg-black origin-top flex flex-col justify-center items-center z-40"
                    >
                        <motion.div
                            variants={containerVars}
                            initial="initial"
                            animate="open"
                            exit="initial"
                            className="flex flex-col gap-8 font-serif text-4xl text-luxury-white text-center"
                        >
                            {navLinks.map((link, index) => (
                                <div key={index} className="overflow-hidden">
                                    <motion.div variants={mobileLinkVars}>
                                        <Link href={link.href} onClick={toggleMenu} className="hover:text-gold transition-colors">
                                            {link.title}
                                        </Link>
                                    </motion.div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
