'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Writing, SiteSettings } from '@/types/diary';
import FormattedContent from '@/components/FormattedContent';
import ShareImageModal from '@/components/ShareImageModal';
import { ArrowLeft, Sparkles, Copy, Check, Share2, Eye, Calendar, Tag, BookOpen } from 'lucide-react';

export default function WritingDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const [writing, setWriting] = useState<Writing | null>(null);
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedText, setCopiedText] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('large');

  useEffect(() => {
    if (slug) {
      fetchData();
    }
  }, [slug]);

  const fetchData = async () => {
    try {
      const res = await fetch('/api/writings');
      const data = await res.json();
      if (data.success) {
        const found = data.data.find((w: Writing) => w.slug === slug);
        if (found) {
          setWriting(found);
          // Increment view count
          fetch('/api/writings/view', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: found.id }),
          });
        }
      }

      const settingsRes = await fetch('/api/settings');
      const settingsData = await settingsRes.json();
      if (settingsData.success) {
        setSettings(settingsData.data);
      }
    } catch (err) {
      console.error("Error fetching writing details:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="py-28 text-center font-serif italic text-stone-500 text-lg">
        Opening chapter...
      </div>
    );
  }

  if (!writing) {
    return (
      <div className="py-28 text-center space-y-4">
        <h1 className="font-serif text-3xl text-stone-800 dark:text-stone-200">Writing Not Found</h1>
        <p className="text-sm font-sans text-stone-500">The chapter you are looking for does not exist or has been removed.</p>
        <Link href="/diary" className="inline-block px-4 py-2 rounded-full border text-xs font-sans uppercase tracking-widest">
          Return to Diary
        </Link>
      </div>
    );
  }

  const isHindi = /[\u0900-\u097F]/.test(writing.title + writing.content);
  const signatureUrl = writing.signature || settings?.signature_image || "/signature.png";
  const taglineText = writing.tagline || settings?.tagline || `Tag someone special\nक्योंकि कुछ एहसास कहे नहीं जाते — दिखा दिए जाते हैं।\nMay the right eyes read at the right time.`;

  const taglineLines = taglineText.split('\n');

  const formattedDate = new Date(writing.created_at).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const fontSizes = {
    normal: 'text-lg leading-relaxed',
    large: 'text-xl sm:text-2xl leading-relaxed',
    xlarge: 'text-2xl sm:text-3xl leading-loose',
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleCopyText = () => {
    const fullContent = `"${writing.title}"\n\n${writing.content}\n\n${taglineText}`;
    navigator.clipboard.writeText(fullContent);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto pb-20 space-y-10 animate-fade-in">
      
      {/* Top Header / Back Navigation */}
      <div className="flex items-center justify-between border-b border-stone-200/80 dark:border-stone-800/80 pb-4">
        <Link
          href="/diary"
          className="inline-flex items-center gap-2 text-xs font-sans tracking-wide uppercase text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Diary
        </Link>

        {/* Font Size Selector */}
        <div className="flex items-center gap-1 bg-paper-100 dark:bg-stone-900 p-1 rounded-lg border border-stone-200 dark:border-stone-800 text-xs font-sans text-stone-600 dark:text-stone-400">
          <span className="px-2 text-[10px] uppercase tracking-wider text-stone-400">Text Size:</span>
          {(['normal', 'large', 'xlarge'] as const).map((size) => (
            <button
              key={size}
              onClick={() => setFontSize(size)}
              className={`px-2 py-0.5 rounded capitalize ${
                fontSize === size ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-950 font-semibold' : 'hover:bg-stone-200 dark:hover:bg-stone-800'
              }`}
            >
              {size === 'normal' ? 'A' : size === 'large' ? 'A+' : 'A++'}
            </button>
          ))}
        </div>
      </div>

      {/* Main Article Container */}
      <article className="space-y-8 bg-paper-50 dark:bg-stone-950 p-6 sm:p-12 rounded-3xl border border-stone-200/80 dark:border-stone-800/80 shadow-sm">
        
        {/* Category & Meta */}
        <div className="space-y-3 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-stone-200/70 dark:bg-stone-800/70 text-stone-800 dark:text-stone-200 text-xs font-sans uppercase tracking-widest">
            {writing.category}
          </span>

          <h1 className={`text-3xl sm:text-5xl font-semibold tracking-tight text-stone-950 dark:text-stone-50 leading-tight ${isHindi ? 'font-hindi' : 'font-calligraphy italic'}`}>
            {writing.title}
          </h1>

          <div className="flex items-center justify-center gap-4 text-xs font-sans text-stone-500 dark:text-stone-400 pt-2">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 opacity-60" />
              {formattedDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5 opacity-60" />
              {writing.view_count || 1} reads
            </span>
          </div>
        </div>

        {/* Cover Image if present */}
        {writing.cover_image && (
          <div className="my-8 rounded-2xl overflow-hidden shadow-lg border border-stone-200 dark:border-stone-800">
            <img
              src={writing.cover_image}
              alt={writing.title}
              className="w-full max-h-[450px] object-cover"
            />
          </div>
        )}

        {/* Content Body */}
        <div className={`text-stone-900 dark:text-stone-100 ${fontSizes[fontSize]} ${isHindi ? 'font-hindi' : 'font-serif'} py-6 border-y border-stone-200/60 dark:border-stone-800/60`}>
          <FormattedContent content={writing.content} isHindi={isHindi} />
        </div>

        {/* Tags */}
        {writing.tags && writing.tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <Tag className="w-3.5 h-3.5 text-stone-400" />
            {writing.tags.map((tag) => (
              <Link
                key={tag}
                href={`/diary?search=${tag}`}
                className="text-xs font-sans text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 bg-stone-200/50 dark:bg-stone-900 px-2.5 py-1 rounded-full border border-stone-200/60 dark:border-stone-800"
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}

        {/* AUTOMATIC BRANDING & SIGNATURE FOOTER */}
        <div className="pt-10 mt-10 border-t border-dashed border-stone-300 dark:border-stone-800 text-center space-y-6">
          
          {/* Tagline */}
          <div className="space-y-1 text-sm font-sans text-stone-600 dark:text-stone-400 max-w-md mx-auto">
            <p className="font-medium text-stone-800 dark:text-stone-200">{taglineLines[0]}</p>
            {taglineLines[1] && (
              <p className="font-hindi text-base text-stone-950 dark:text-stone-100 my-1 font-normal">
                {taglineLines[1]}
              </p>
            )}
            {taglineLines[2] && (
              <p className="font-serif italic text-xs text-stone-500 dark:text-stone-400">
                {taglineLines[2]}
              </p>
            )}
          </div>

          {/* Signature Image */}
          {signatureUrl && (
            <div className="flex justify-center pt-2">
              <img
                src={signatureUrl}
                alt="Author Signature"
                className="h-14 sm:h-16 w-auto object-contain filter drop-shadow-sm"
              />
            </div>
          )}

        </div>

      </article>

      {/* BOTTOM ACTION BAR */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 sm:p-6 rounded-2xl bg-paper-100/60 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 shadow-sm">
        
        {/* Create Share Image Modal Button */}
        <button
          onClick={() => setShowShareModal(true)}
          className="flex items-center gap-2 px-5 py-3 rounded-xl bg-stone-900 text-stone-50 dark:bg-amber-400 dark:text-stone-950 font-sans text-xs sm:text-sm font-medium uppercase tracking-wider hover:scale-[1.02] transition-all shadow-md"
        >
          <Sparkles className="w-4 h-4" />
          Create Share Image
        </button>

        {/* Copy & Share actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 text-xs font-sans text-stone-700 dark:text-stone-300 hover:bg-stone-200/50 dark:hover:bg-stone-800 transition-colors"
          >
            {copiedLink ? <Check className="w-4 h-4 text-green-600" /> : <Share2 className="w-4 h-4" />}
            {copiedLink ? 'Link Copied' : 'Copy Link'}
          </button>

          <button
            onClick={handleCopyText}
            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 text-xs font-sans text-stone-700 dark:text-stone-300 hover:bg-stone-200/50 dark:hover:bg-stone-800 transition-colors"
          >
            {copiedText ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
            {copiedText ? 'Text Copied' : 'Copy Text'}
          </button>
        </div>
      </div>

      {/* SHARE MODAL */}
      {showShareModal && (
        <ShareImageModal
          writing={writing}
          signatureUrl={signatureUrl}
          taglineText={taglineText}
          onClose={() => setShowShareModal(false)}
        />
      )}

    </div>
  );
}
