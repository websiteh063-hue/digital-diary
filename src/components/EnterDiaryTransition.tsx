'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Feather, ArrowRight, Sparkles } from 'lucide-react';

export default function EnterDiaryTransition() {
  const [isEntering, setIsEntering] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsEntering(true);
  };

  return (
    <div className="relative inline-block group">
      <Link
        href="/diary"
        onClick={handleClick}
        className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-950 font-sans text-sm tracking-widest uppercase font-medium shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
      >
        <span className="relative z-10 flex items-center gap-2">
          <Feather className="w-4 h-4 transition-transform group-hover:-rotate-45" />
          Enter the Diary
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </span>

        {/* Paper & Ink Ripple effect */}
        <span className="absolute inset-0 bg-gradient-to-r from-amber-600 via-stone-800 to-stone-950 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Link>

      {/* Subtle floating badge */}
      <div className="absolute -top-3 -right-3 px-2 py-0.5 rounded-full bg-amber-400 text-stone-950 text-[10px] font-sans font-bold tracking-wider flex items-center gap-1 shadow-sm">
        <Sparkles className="w-2.5 h-2.5" />
        Personal
      </div>

      {/* Screen opening overlay effect when entering */}
      {isEntering && (
        <div className="fixed inset-0 z-50 pointer-events-none bg-paper-50 dark:bg-stone-950 opacity-0 animate-fade-in flex items-center justify-center">
          <div className="font-serif italic text-2xl text-stone-800 dark:text-stone-200">
            Opening Diary...
          </div>
        </div>
      )}
    </div>
  );
}
