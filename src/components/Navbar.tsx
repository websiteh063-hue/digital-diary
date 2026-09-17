'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Feather, BookOpen, Grid, User, Mail, PenTool, Menu, X } from 'lucide-react';
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
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-paper-50/80 dark:bg-stone-950/80 border-b border-stone-200/60 dark:border-stone-800/60 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-stone-300 dark:border-stone-700 flex items-center justify-center bg-stone-100/50 dark:bg-stone-900/50 group-hover:border-stone-500 transition-colors">
            <Feather className="w-5 h-5 text-stone-800 dark:text-stone-200 transition-transform group-hover:-rotate-12" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-tight text-stone-900 dark:text-stone-100 font-medium">
              Digital Diary
            </span>
            <span className="text-[10px] uppercase tracking-widest text-stone-500 dark:text-stone-400 font-sans">
              Personal Literary Space
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-sans tracking-wide transition-colors relative py-1 ${
                  isActive
                    ? 'text-stone-950 dark:text-stone-50 font-medium'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-stone-800 dark:bg-amber-400/80 rounded-full animate-fade-in" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <ThemeToggle />

          {/* Admin Studio Access */}
          <Link
            href="/admin"
            className="flex items-center gap-2 text-xs font-sans tracking-wide uppercase px-3 py-2 rounded-full border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-900 hover:text-stone-50 dark:hover:bg-stone-100 dark:hover:text-stone-950 transition-all duration-200 shadow-sm"
            title="Writing Studio Admin"
          >
            <PenTool className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Write</span>
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
        <div className="md:hidden border-b border-stone-200 dark:border-stone-800 bg-paper-50 dark:bg-stone-950 px-4 py-6 space-y-3 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-base font-sans transition-colors ${
                pathname === link.href
                  ? 'bg-stone-200/60 dark:bg-stone-800/60 text-stone-900 dark:text-stone-100 font-medium'
                  : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-900'
              }`}
            >
              <link.icon className="w-5 h-5 opacity-70" />
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
