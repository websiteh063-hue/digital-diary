import { Feather, Heart, Quote } from 'lucide-react';
import { getSettings } from '@/lib/db';

export const revalidate = 0;

export default function AboutPage() {
  const settings = getSettings();

  return (
    <div className="max-w-3xl mx-auto space-y-16 pb-16 animate-fade-in">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-stone-300 dark:border-stone-800 text-stone-600 dark:text-stone-400 text-xs font-sans tracking-widest uppercase">
          <Feather className="w-3.5 h-3.5" />
          The Writer
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl font-medium text-stone-950 dark:text-stone-50">
          About & Philosophy
        </h1>
      </div>

      {/* Author Card */}
      <div className="p-8 sm:p-12 rounded-3xl bg-paper-50 dark:bg-stone-900/40 border border-stone-200/90 dark:border-stone-800/80 shadow-sm space-y-8">
        
        {/* Profile Info */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-stone-200/80 dark:border-stone-800/80 pb-8">
          <div className="w-20 h-20 rounded-full border border-stone-300 dark:border-stone-700 bg-stone-200 dark:bg-stone-800 flex items-center justify-center font-serif text-3xl font-medium text-stone-800 dark:text-stone-200">
            {settings.author_name[0]}
          </div>

          <div className="text-center sm:text-left space-y-1">
            <h2 className="font-serif text-3xl font-medium text-stone-900 dark:text-stone-100">
              {settings.author_name}
            </h2>
            <p className="text-xs font-sans uppercase tracking-widest text-amber-700 dark:text-amber-400 font-medium">
              Independent Writer & Observer
            </p>
            <p className="text-sm font-sans text-stone-600 dark:text-stone-400 pt-2 leading-relaxed">
              {settings.author_bio}
            </p>
          </div>
        </div>

        {/* Central Writing Philosophy */}
        <div className="space-y-4 text-center py-4">
          <Quote className="w-8 h-8 mx-auto text-amber-600/60 opacity-80" />
          <h3 className="text-xs uppercase tracking-widest font-sans text-stone-500 font-semibold">
            Writing Philosophy
          </h3>
          <p className="font-serif italic text-2xl sm:text-3xl text-stone-900 dark:text-stone-100 max-w-xl mx-auto leading-relaxed">
            "{settings.writing_philosophy}"
          </p>
        </div>

        {/* Emotional Identity Statement */}
        <div className="p-6 rounded-2xl bg-paper-100/60 dark:bg-stone-950/60 border border-stone-200 dark:border-stone-800 space-y-3">
          <h4 className="font-serif text-lg font-medium text-stone-900 dark:text-stone-100 flex items-center gap-2">
            <Heart className="w-4 h-4 text-red-500/80" />
            Why This Diary Exists
          </h4>
          <p className="text-sm font-sans text-stone-600 dark:text-stone-400 leading-relaxed">
            "A place where words that couldn't be spoken finally found a home." This digital diary was created not as a corporate blog or commercial platform, but as an intimate, emotional, and cinematic sanctuary for quiet thoughts, poems, and heartbreaks.
          </p>
        </div>

      </div>

    </div>
  );
}
