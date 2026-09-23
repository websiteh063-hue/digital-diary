import Link from 'next/link';
import { Writing, Category } from '@/types/diary';
import { Eye, ArrowUpRight, Calendar, Sparkles } from 'lucide-react';

interface WritingCardProps {
  writing: Writing;
  featured?: boolean;
}

const CATEGORY_STYLES: Record<Category, { badge: string; border: string; accent: string }> = {
  "Micro Poems": {
    badge: "bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border-indigo-500/30",
    border: "hover:border-indigo-500/50",
    accent: "group-hover:text-indigo-600 dark:group-hover:text-indigo-300",
  },
  "Poems": {
    badge: "bg-amber-500/15 text-amber-800 dark:text-amber-300 border-amber-500/30",
    border: "hover:border-amber-500/50",
    accent: "group-hover:text-amber-700 dark:group-hover:text-amber-300",
  },
  "Quotes": {
    badge: "bg-purple-500/15 text-purple-800 dark:text-purple-300 border-purple-500/30",
    border: "hover:border-purple-500/50",
    accent: "group-hover:text-purple-700 dark:group-hover:text-purple-300",
  },
  "Stories": {
    badge: "bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border-emerald-500/30",
    border: "hover:border-emerald-500/50",
    accent: "group-hover:text-emerald-700 dark:group-hover:text-emerald-300",
  },
  "Love": {
    badge: "bg-rose-500/15 text-rose-800 dark:text-rose-300 border-rose-500/30",
    border: "hover:border-rose-500/50",
    accent: "group-hover:text-rose-700 dark:group-hover:text-rose-300",
  },
  "Heartbreak": {
    badge: "bg-red-500/15 text-red-800 dark:text-red-300 border-red-500/30",
    border: "hover:border-red-500/50",
    accent: "group-hover:text-red-700 dark:group-hover:text-red-300",
  },
  "Life": {
    badge: "bg-amber-600/15 text-amber-900 dark:text-amber-200 border-amber-600/30",
    border: "hover:border-amber-600/50",
    accent: "group-hover:text-amber-800 dark:group-hover:text-amber-200",
  },
  "Thoughts": {
    badge: "bg-sky-500/15 text-sky-800 dark:text-sky-300 border-sky-500/30",
    border: "hover:border-sky-500/50",
    accent: "group-hover:text-sky-700 dark:group-hover:text-sky-300",
  },
};

export default function WritingCard({ writing, featured = false }: WritingCardProps) {
  const isHindi = /[\u0900-\u097F]/.test(writing.title + writing.content);
  const formattedDate = new Date(writing.created_at).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  const catStyle = CATEGORY_STYLES[writing.category] || CATEGORY_STYLES["Poems"];

  return (
    <article
      className={`group relative flex flex-col justify-between rounded-3xl border border-stone-200/80 dark:border-stone-800 bg-gradient-to-br from-paper-50 via-paper-100/40 to-paper-50 dark:from-stone-900/60 dark:via-stone-950/80 dark:to-stone-900/40 p-6 sm:p-7 ${catStyle.border} transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 ${
        featured ? 'md:col-span-2 md:p-8 bg-gradient-to-br from-amber-500/10 via-paper-50 to-rose-500/10 dark:from-amber-900/20 dark:via-stone-900 dark:to-rose-950/30 border-amber-500/40 dark:border-amber-400/40' : ''
      }`}
    >
      {/* Top Ambient Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 dark:bg-amber-400/5 rounded-full blur-2xl pointer-events-none group-hover:bg-amber-500/10 transition-colors" />

      <div>
        {/* Cover Image if available */}
        {writing.cover_image && featured && (
          <div className="w-full h-52 sm:h-72 mb-6 rounded-2xl overflow-hidden relative shadow-md">
            <img
              src={writing.cover_image}
              alt={writing.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6">
              <span className="text-white/90 text-xs font-serif italic">Featured Selection</span>
            </div>
          </div>
        )}

        {/* Header Row: Category Badge & Meta */}
        <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-widest font-sans mb-4">
          <span className={`px-3 py-1 rounded-full border text-[11px] font-semibold ${catStyle.badge}`}>
            {writing.category}
          </span>
          <div className="flex items-center gap-3 text-stone-500 dark:text-stone-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-amber-600 dark:text-amber-400" />
              {formattedDate}
            </span>
            {writing.view_count > 0 && (
              <span className="flex items-center gap-1 font-mono">
                <Eye className="w-3 h-3 text-rose-500" />
                {writing.view_count}
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3
          className={`text-stone-950 dark:text-stone-50 font-semibold ${catStyle.accent} transition-colors mb-3 leading-snug ${
            isHindi ? 'font-hindi text-2xl sm:text-3xl' : 'font-calligraphy text-4xl sm:text-5xl'
          }`}
        >
          <Link href={`/diary/${writing.slug}`} className="focus:outline-none">
            <span className="absolute inset-0 z-10" />
            {writing.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p
          className={`text-stone-900 dark:text-stone-100 text-lg sm:text-xl font-medium leading-relaxed line-clamp-3 mb-6 ${
            isHindi ? 'font-hindi' : 'font-serif italic'
          }`}
        >
          "{writing.excerpt}"
        </p>
      </div>

      {/* Footer Tags & Read Action */}
      <div className="flex items-center justify-between pt-4 border-t border-stone-200/70 dark:border-stone-800/80 mt-auto">
        <div className="flex flex-wrap gap-1.5">
          {writing.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-sans tracking-wide px-2 py-0.5 rounded-md bg-stone-200/50 dark:bg-stone-800/60 text-stone-600 dark:text-stone-400"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-1 text-xs font-sans tracking-wider uppercase font-bold text-amber-700 dark:text-amber-400 group-hover:translate-x-1 transition-transform">
          Read Piece
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </article>
  );
}
