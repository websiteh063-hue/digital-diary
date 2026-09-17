import Link from 'next/link';
import { Feather, Heart, PenTool } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-amber-500/20 bg-gradient-to-b from-paper-100/60 to-paper-200/40 dark:from-stone-950 dark:to-stone-900 pt-16 pb-12 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-10">
        
        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
          <div className="p-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-400">
            <Feather className="w-4 h-4" />
          </div>
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
        </div>

        {/* PROMINENT DIRECT LINK TO WRITE FOR US */}
        <div className="max-w-md mx-auto p-4 rounded-2xl bg-gradient-to-r from-amber-500/15 via-rose-500/15 to-purple-500/15 border border-amber-500/30 flex items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-[10px] font-sans uppercase tracking-widest text-amber-700 dark:text-amber-400 font-bold block">Author Private Access</span>
            <span className="font-serif text-sm text-stone-900 dark:text-stone-100 font-medium">Write For Us</span>
          </div>

          <Link
            href="/admin"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-900 text-stone-50 dark:bg-amber-400 dark:text-stone-950 font-sans text-xs uppercase font-bold tracking-wider hover:scale-105 transition-all shadow-md"
          >
            <PenTool className="w-3.5 h-3.5" />
            Write For Us &rarr;
          </Link>
        </div>

        {/* Automatic Signature Branding Preview */}
        <div className="max-w-lg mx-auto p-6 rounded-3xl border border-dashed border-amber-500/30 bg-paper-50/60 dark:bg-stone-900/40 shadow-sm space-y-2">
          <p className="text-[10px] font-sans tracking-widest text-amber-700 dark:text-amber-400 uppercase font-bold">
            Author Fixed Tagline & Signature
          </p>
          <div className="space-y-1 font-serif text-sm text-stone-800 dark:text-stone-200 leading-relaxed italic">
            <p className="text-stone-600 dark:text-stone-400 font-sans not-italic text-xs font-semibold">Tag someone special</p>
            <p className="font-hindi not-italic text-base text-stone-950 dark:text-stone-100 my-1 font-normal">
              क्योंकि कुछ एहसास कहे नहीं जाते — दिखा दिए जाते हैं।
            </p>
            <p className="text-stone-600 dark:text-stone-400 font-sans not-italic text-xs">
              May the right eyes read at the right time.
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-widest text-stone-600 dark:text-stone-400 font-sans">
          <Link href="/diary" className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors">
            All Writings
          </Link>
          <span>•</span>
          <Link href="/categories" className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors">
            Categories
          </Link>
          <span>•</span>
          <Link href="/about" className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors">
            Writing Philosophy
          </Link>
          <span>•</span>
          <Link href="/admin" className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors font-bold text-amber-800 dark:text-amber-300">
            Write For Us
          </Link>
        </div>

        {/* Philosophy Note */}
        <p className="text-xs text-stone-500 dark:text-stone-400 font-serif italic max-w-md mx-auto">
          "A place where words that couldn't be spoken finally found a home."
        </p>

        <p className="text-[11px] font-sans text-stone-500 dark:text-stone-500 flex items-center justify-center gap-1">
          Crafted with <Heart className="w-3 h-3 text-rose-500 inline" /> for memories & poetry.
        </p>
      </div>
    </footer>
  );
}
