'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#2a2a2a]">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
                            <span className="text-white font-bold text-lg">B4</span>
                        </div>
                        <span className="text-white font-bold text-xl">Bet4.win</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="#games" className="text-gray-300 hover:text-white transition-colors">
                            Games
                        </Link>
                        <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                            About
                        </Link>
                        <Link href="#products" className="text-gray-300 hover:text-white transition-colors">
                            Products
                        </Link>
                        <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                            Contact
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
                        <Link href="#games" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                            Games
                        </Link>
                        <Link href="#about" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                            About
                        </Link>
                        <Link href="#products" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                            Products
                        </Link>
                        <Link href="#contact" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                            Contact
                        </Link>
                    </nav>
                )}
            </div>
        </header>
    );
}
