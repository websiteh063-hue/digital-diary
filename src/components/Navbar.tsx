'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Feather, BookOpen, Grid, User, Mail, PenTool, Menu, X, Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home', icon: Feather },
    { href: '/diary', label: 'My Diary', icon: BookOpen },
    { href: '/categories', label: 'Categories', icon: Grid },
    { href: '/about', label: 'About', icon: User },
    { href: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-paper-50/85 dark:bg-stone-950/85 border-b border-amber-500/20 dark:border-amber-400/20 transition-all shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-amber-500/40 dark:border-amber-400/40 flex items-center justify-center bg-gradient-to-tr from-amber-500/20 via-rose-500/10 to-indigo-500/20 group-hover:scale-105 transition-all shadow-sm">
            <Feather className="w-5 h-5 text-amber-700 dark:text-amber-400 transition-transform group-hover:-rotate-12" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl tracking-tight bg-gradient-to-r from-stone-950 via-amber-900 to-rose-950 dark:from-stone-50 dark:via-amber-300 dark:to-rose-200 bg-clip-text text-transparent font-semibold">
              Digital Diary
            </span>
            <span className="text-[10px] uppercase tracking-widest text-amber-700/80 dark:text-amber-400/80 font-sans font-medium">
              Personal Literary Space
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-sans tracking-wide transition-colors relative py-1 ${
                  isActive
                    ? 'text-amber-900 dark:text-amber-300 font-semibold'
                    : 'text-stone-700 dark:text-stone-300 hover:text-rose-700 dark:hover:text-amber-400'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-500 to-rose-500 rounded-full animate-fade-in" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <ThemeToggle />

          {/* PROMINENT DIRECT LINK TO ADMIN WRITING STUDIO */}
          <Link
            href="/admin"
            className="relative group flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-600 via-rose-600 to-amber-700 text-white font-sans text-xs uppercase font-bold tracking-wider shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 overflow-hidden"
            title="Go to Admin Writing Studio"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <PenTool className="w-3.5 h-3.5 text-amber-200" />
              <span>Writing Studio</span>
            </span>
            <Sparkles className="w-3 h-3 text-amber-200 relative z-10 animate-pulse-slow" />
            <span className="absolute inset-0 bg-gradient-to-r from-rose-600 via-amber-600 to-rose-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-stone-700 dark:text-stone-300 hover:bg-stone-200/50 dark:hover:bg-stone-800/50"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-amber-500/20 bg-paper-50/95 dark:bg-stone-950/95 px-4 py-6 space-y-3 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-base font-sans transition-colors ${
                pathname === link.href
                  ? 'bg-amber-500/10 text-amber-900 dark:text-amber-300 font-semibold border border-amber-500/30'
                  : 'text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-900'
              }`}
            >
              <link.icon className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              {link.label}
            </Link>
          ))}

          <div className="pt-2 border-t border-amber-500/20">
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-amber-600 via-rose-600 to-amber-700 text-white font-sans text-xs uppercase font-bold tracking-wider shadow-md"
            >
              <PenTool className="w-4 h-4" />
              Open Admin Writing Studio
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
