import Link from 'next/link';
import { Feather, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-stone-200/80 dark:border-stone-800/80 bg-paper-100/50 dark:bg-stone-950/60 pt-16 pb-12 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[1px] w-12 bg-stone-300 dark:bg-stone-800" />
          <Feather className="w-4 h-4 text-stone-400 dark:text-stone-600" />
          <div className="h-[1px] w-12 bg-stone-300 dark:bg-stone-800" />
        </div>

        {/* Automatic Signature Branding Preview */}
        <div className="mb-10 max-w-lg mx-auto p-6 rounded-2xl border border-dashed border-stone-300/80 dark:border-stone-800 bg-paper-50/50 dark:bg-stone-900/30">
          <p className="text-xs font-sans tracking-widest text-stone-400 dark:text-stone-500 uppercase mb-3">
            Author Signature & Branding
          </p>
          <div className="space-y-1 font-serif text-sm text-stone-700 dark:text-stone-300 leading-relaxed italic">
            <p className="text-stone-600 dark:text-stone-400 font-sans not-italic text-xs font-medium">Tag someone special</p>
            <p className="font-hindi not-italic text-base text-stone-900 dark:text-stone-100 my-1">
              क्योंकि कुछ एहसास कहे नहीं जाते — दिखा दिए जाते हैं।
            </p>
            <p className="text-stone-600 dark:text-stone-400 font-sans not-italic text-xs">
              May the right eyes read at the right time.
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 font-sans mb-8">
          <Link href="/diary" className="hover:text-stone-900 dark:hover:text-stone-200 transition-colors">
            All Writings
          </Link>
          <span>•</span>
          <Link href="/categories" className="hover:text-stone-900 dark:hover:text-stone-200 transition-colors">
            Categories
          </Link>
          <span>•</span>
          <Link href="/about" className="hover:text-stone-900 dark:hover:text-stone-200 transition-colors">
            Writing Philosophy
          </Link>
          <span>•</span>
          <Link href="/admin" className="hover:text-stone-900 dark:hover:text-stone-200 transition-colors">
            Admin Studio
          </Link>
        </div>

        {/* Philosophy Note */}
        <p className="text-xs text-stone-400 dark:text-stone-600 font-serif italic max-w-md mx-auto mb-4">
          "A place where words that couldn't be spoken finally found a home."
        </p>

        <p className="text-[11px] font-sans text-stone-400 dark:text-stone-600 flex items-center justify-center gap-1">
          Crafted with <Heart className="w-3 h-3 text-red-500/70 inline" /> for memories & poetry.
        </p>
      </div>
    </footer>
  );
}
