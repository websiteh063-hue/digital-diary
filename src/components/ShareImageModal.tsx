'use client';

import React, { useState, useRef } from 'react';
import { Writing, ShareCardConfig, AspectRatio, CardTheme } from '@/types/diary';
import { CanvasCard } from './CanvasCard';
import { X, Download, Share2, Copy, Check, Sparkles, Image as ImageIcon } from 'lucide-react';
import { toPng } from 'html-to-image';

interface ShareImageModalProps {
  writing: Writing;
  signatureUrl?: string;
  taglineText?: string;
  onClose: () => void;
}

export default function ShareImageModal({
  writing,
  signatureUrl = "/signature.png",
  taglineText,
  onClose
}: ShareImageModalProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const [config, setConfig] = useState<ShareCardConfig>({
    aspectRatio: "4:5",
    theme: "paper",
    fontFamily: "serif",
    textAlignment: "center",
    showSignature: true,
    showTagline: true,
  });

  const aspectRatios: { label: string; value: AspectRatio; desc: string }[] = [
    { label: "1:1", value: "1:1", desc: "Instagram Post" },
    { label: "4:5", value: "4:5", desc: "Instagram Portrait" },
    { label: "9:16", value: "9:16", desc: "Story / WhatsApp" },
    { label: "16:9", value: "16:9", desc: "Web / Twitter" },
  ];

  const themes: { label: string; value: CardTheme; colorClass: string }[] = [
    { label: "Paper", value: "paper", colorClass: "bg-[#FAF8F3] border-[#E7E5E4] text-stone-900" },
    { label: "Obsidian", value: "obsidian", colorClass: "bg-[#09090B] border-[#27272A] text-stone-100" },
    { label: "Sepia", value: "sepia", colorClass: "bg-[#F5EBE0] border-[#D6C5B3] text-[#3D2C1E]" },
    { label: "Crimson", value: "crimson", colorClass: "bg-[#180A0E] border-[#3B151E] text-[#FDE8E8]" },
    { label: "Indigo", value: "indigo", colorClass: "bg-[#0A0F1D] border-[#1E293B] text-[#EEF2FF]" },
    { label: "Slate", value: "slate", colorClass: "bg-[#18181B] border-[#27272A] text-[#FAFAFA]" },
  ];

  const handleDownload = async () => {
    if (!cardRef.current) return;
    setIsGenerating(true);
    try {
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 2,
      });

      const link = document.createElement('a');
      link.download = `${writing.slug}-diary-card.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Failed to generate image:', err);
      alert('Could not generate image. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleShare = async () => {
    if (!cardRef.current) return;
    setIsGenerating(true);
    try {
      const dataUrl = await toPng(cardRef.current, { pixelRatio: 2 });
      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], `${writing.slug}-diary-card.png`, { type: 'image/png' });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: writing.title,
          text: `"${writing.title}" from Digital Diary`,
        });
      } else {
        await navigator.clipboard.writeText(`${window.location.origin}/diary/${writing.slug}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error('Share error:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyText = () => {
    const textToCopy = `"${writing.title}"\n\n${writing.content}\n\nTag someone special\nक्योंकि कुछ एहसास कहे नहीं जाते — दिखा दिए जाते हैं।\nMay the right eyes read at the right time.`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-4xl bg-paper-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 dark:border-stone-800 bg-paper-100/50 dark:bg-stone-950/40">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <h3 className="font-serif text-lg text-stone-900 dark:text-stone-100 font-medium">
              Create Shareable Visual Card
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200/50 dark:hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6">
          
          {/* Controls Panel */}
          <div className="lg:col-span-5 space-y-5 order-2 lg:order-1">
            
            {/* Aspect Ratio */}
            <div>
              <label className="block text-xs font-sans uppercase tracking-wider text-stone-500 dark:text-stone-400 font-medium mb-2">
                Card Format
              </label>
              <div className="grid grid-cols-2 gap-2">
                {aspectRatios.map((r) => (
                  <button
                    key={r.value}
                    onClick={() => setConfig({ ...config, aspectRatio: r.value })}
                    className={`p-2.5 text-left rounded-xl border text-xs transition-all ${
                      config.aspectRatio === r.value
                        ? 'border-stone-800 dark:border-amber-400 bg-stone-900 text-stone-50 dark:bg-amber-400/10 dark:text-amber-300 font-medium'
                        : 'border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:border-stone-400'
                    }`}
                  >
                    <div className="font-semibold">{r.label}</div>
                    <div className="text-[10px] opacity-70">{r.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Theme Selector */}
            <div>
              <label className="block text-xs font-sans uppercase tracking-wider text-stone-500 dark:text-stone-400 font-medium mb-2">
                Background Theme
              </label>
              <div className="grid grid-cols-3 gap-2">
                {themes.map((t) => (
                  <button
                    key={t.value}
                    onClick={() => setConfig({ ...config, theme: t.value })}
                    className={`p-2 text-xs rounded-xl border flex items-center gap-2 transition-all ${
                      config.theme === t.value ? 'ring-2 ring-stone-900 dark:ring-amber-400 font-semibold' : ''
                    } ${t.colorClass}`}
                  >
                    <span className="w-3 h-3 rounded-full border border-black/20" />
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Text Alignment */}
            <div>
              <label className="block text-xs font-sans uppercase tracking-wider text-stone-500 dark:text-stone-400 font-medium mb-2">
                Text Alignment
              </label>
              <div className="flex gap-2">
                {(['left', 'center', 'right'] as const).map((align) => (
                  <button
                    key={align}
                    onClick={() => setConfig({ ...config, textAlignment: align })}
                    className={`flex-1 py-1.5 text-xs rounded-lg border capitalize transition-all ${
                      config.textAlignment === align
                        ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 border-stone-900 font-medium'
                        : 'border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400'
                    }`}
                  >
                    {align}
                  </button>
                ))}
              </div>
            </div>

            {/* Toggles */}
            <div className="pt-2 border-t border-stone-200 dark:border-stone-800 space-y-2">
              <label className="flex items-center justify-between text-xs text-stone-700 dark:text-stone-300 cursor-pointer">
                <span>Include Automatic Tagline</span>
                <input
                  type="checkbox"
                  checked={config.showTagline}
                  onChange={(e) => setConfig({ ...config, showTagline: e.target.checked })}
                  className="rounded text-stone-900 focus:ring-stone-500"
                />
              </label>

              <label className="flex items-center justify-between text-xs text-stone-700 dark:text-stone-300 cursor-pointer">
                <span>Include Saved Signature Image</span>
                <input
                  type="checkbox"
                  checked={config.showSignature}
                  onChange={(e) => setConfig({ ...config, showSignature: e.target.checked })}
                  className="rounded text-stone-900 focus:ring-stone-500"
                />
              </label>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 space-y-2">
              <button
                onClick={handleDownload}
                disabled={isGenerating}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 font-sans text-sm font-medium hover:bg-stone-800 dark:hover:bg-white transition-all shadow-md"
              >
                {isGenerating ? (
                  <span>Generating High-Res Card...</span>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    Download Image Card (PNG)
                  </>
                )}
              </button>

              <div className="flex gap-2">
                <button
                  onClick={handleShare}
                  disabled={isGenerating}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 border border-stone-300 dark:border-stone-700 rounded-xl text-xs font-sans text-stone-800 dark:text-stone-200 hover:bg-stone-200/50 dark:hover:bg-stone-800 transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  Share Card
                </button>
                <button
                  onClick={handleCopyText}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 border border-stone-300 dark:border-stone-700 rounded-xl text-xs font-sans text-stone-800 dark:text-stone-200 hover:bg-stone-200/50 dark:hover:bg-stone-800 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Copied Text' : 'Copy Writing Text'}
                </button>
              </div>
            </div>

          </div>

          {/* Canvas Live Card Preview */}
          <div className="lg:col-span-7 flex items-center justify-center bg-stone-100 dark:bg-stone-950/80 p-4 sm:p-6 rounded-xl border border-stone-200 dark:border-stone-800/80 order-1 lg:order-2 overflow-auto max-h-[600px]">
            <CanvasCard
              ref={cardRef}
              writing={writing}
              config={config}
              signatureUrl={signatureUrl}
              taglineText={taglineText}
            />
          </div>

        </div>
      </div>
    </div>
  );
}
