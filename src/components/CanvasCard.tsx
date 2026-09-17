'use client';

import React, { forwardRef } from 'react';
import { Writing, ShareCardConfig, CardTheme, AspectRatio } from '@/types/diary';

interface CanvasCardProps {
  writing: Writing;
  config: ShareCardConfig;
  signatureUrl?: string;
  taglineText?: string;
}

export const CanvasCard = forwardRef<HTMLDivElement, CanvasCardProps>(({
  writing,
  config,
  signatureUrl = "/signature.png",
  taglineText = `Tag someone special\nक्योंकि कुछ एहसास कहे नहीं जाते — दिखा दिए जाते हैं।\nMay the right eyes read at the right time.`
}, ref) => {
  const { aspectRatio, theme, fontFamily, textAlignment, showSignature, showTagline } = config;

  // Aspect ratio dimensions mapping (for preview / rendering aspect ratio container)
  const ratioStyles: Record<AspectRatio, string> = {
    "1:1": "aspect-square w-full max-w-[540px]",
    "4:5": "aspect-[4/5] w-full max-w-[500px]",
    "9:16": "aspect-[9/16] w-full max-w-[420px]",
    "16:9": "aspect-[16/9] w-full max-w-[640px]",
  };

  // Color themes
  const themeStyles: Record<CardTheme, { bg: string; text: string; subtext: string; border: string; accent: string }> = {
    paper: {
      bg: "bg-[#FAF8F3]",
      text: "text-[#1C1917]",
      subtext: "text-[#57534E]",
      border: "border-[#E7E5E4]",
      accent: "text-[#8C7355]",
    },
    obsidian: {
      bg: "bg-[#09090B]",
      text: "text-[#F5F5F4]",
      subtext: "text-[#A1A1AA]",
      border: "border-[#27272A]",
      accent: "text-[#D4AF37]",
    },
    sepia: {
      bg: "bg-[#F5EBE0]",
      text: "text-[#3D2C1E]",
      subtext: "text-[#705540]",
      border: "border-[#D6C5B3]",
      accent: "text-[#A0522D]",
    },
    crimson: {
      bg: "bg-[#180A0E]",
      text: "text-[#FDE8E8]",
      subtext: "text-[#F4A261]",
      border: "border-[#3B151E]",
      accent: "text-[#E63946]",
    },
    indigo: {
      bg: "bg-[#0A0F1D]",
      text: "text-[#EEF2FF]",
      subtext: "text-[#818CF8]",
      border: "border-[#1E293B]",
      accent: "text-[#6366F1]",
    },
    slate: {
      bg: "bg-[#18181B]",
      text: "text-[#FAFAFA]",
      subtext: "text-[#A1A1AA]",
      border: "border-[#27272A]",
      accent: "text-[#E4E4E7]",
    },
  };

  const currentTheme = themeStyles[theme];

  // Font family class
  const isHindi = /[\u0900-\u097F]/.test(writing.title + writing.content);
  const fontClass = isHindi
    ? "font-hindi"
    : fontFamily === "serif"
    ? "font-serif"
    : fontFamily === "display"
    ? "font-display"
    : "font-sans";

  // Alignment
  const alignClass = textAlignment === "center" ? "text-center items-center" : textAlignment === "right" ? "text-right items-end" : "text-left items-start";

  // Smart text layout scaling based on content length
  const charCount = writing.content.length;
  let textSizeClass = "text-xl sm:text-2xl leading-relaxed";
  if (charCount < 80) {
    textSizeClass = "text-2xl sm:text-3xl font-medium leading-loose tracking-wide";
  } else if (charCount < 250) {
    textSizeClass = "text-lg sm:text-xl leading-relaxed";
  } else if (charCount < 500) {
    textSizeClass = "text-base sm:text-lg leading-relaxed";
  } else {
    textSizeClass = "text-xs sm:text-sm leading-normal";
  }

  const taglineLines = taglineText.split('\n');

  return (
    <div
      ref={ref}
      className={`relative flex flex-col justify-between p-8 sm:p-10 ${ratioStyles[aspectRatio]} ${currentTheme.bg} ${currentTheme.text} ${currentTheme.border} border shadow-2xl rounded-sm overflow-hidden select-none`}
      style={{ boxSizing: 'border-box' }}
    >
      {/* Decorative Brand Header */}
      <div className={`w-full flex items-center justify-between border-b pb-4 mb-4 ${currentTheme.border} opacity-80`}>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
          <span className="text-[11px] font-sans tracking-[0.25em] uppercase font-semibold opacity-70">
            Digital Diary
          </span>
        </div>
        <span className={`text-[10px] font-sans tracking-widest uppercase px-2 py-0.5 rounded border ${currentTheme.border} opacity-70`}>
          {writing.category}
        </span>
      </div>

      {/* Main Content Area */}
      <div className={`my-auto flex flex-col ${alignClass} w-full py-4`}>
        {/* Title */}
        <h2 className={`text-xl sm:text-2xl font-medium mb-4 tracking-tight ${currentTheme.accent} ${fontClass}`}>
          {writing.title}
        </h2>

        {/* Content */}
        <div className={`whitespace-pre-line ${textSizeClass} ${fontClass} opacity-95 max-w-full overflow-hidden`}>
          {writing.content}
        </div>
      </div>

      {/* Footer: Tagline & Signature */}
      <div className={`w-full border-t pt-4 mt-4 ${currentTheme.border} flex flex-col ${alignClass} space-y-3`}>
        
        {/* Tagline */}
        {showTagline && (
          <div className={`text-[11px] leading-snug space-y-0.5 ${currentTheme.subtext} font-sans ${alignClass}`}>
            <p className="font-medium opacity-90">{taglineLines[0]}</p>
            {taglineLines[1] && <p className="font-hindi text-xs my-0.5">{taglineLines[1]}</p>}
            {taglineLines[2] && <p className="italic opacity-80 text-[10px]">{taglineLines[2]}</p>}
          </div>
        )}

        {/* Signature */}
        {showSignature && signatureUrl && (
          <div className="pt-1 flex items-center justify-center">
            <img
              src={signatureUrl}
              alt="Author Signature"
              className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-sm transition-all"
              style={{ maxHeight: '48px' }}
            />
          </div>
        )}
      </div>
    </div>
  );
});

CanvasCard.displayName = "CanvasCard";
