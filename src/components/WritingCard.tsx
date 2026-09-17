import Link from 'next/link';
import { Writing } from '@/types/diary';
import { Eye, ArrowUpRight, Calendar } from 'lucide-react';

interface WritingCardProps {
  writing: Writing;
  featured?: boolean;
}

export default function WritingCard({ writing, featured = false }: WritingCardProps) {
  const isHindi = /[\u0900-\u097F]/.test(writing.title + writing.content);
  const formattedDate = new Date(writing.created_at).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <article
      className={`group relative flex flex-col justify-between rounded-2xl border border-stone-200/90 dark:border-stone-800/80 bg-paper-50 dark:bg-stone-900/40 p-6 sm:p-7 hover:border-stone-400 dark:hover:border-stone-600 transition-all duration-300 shadow-sm hover:shadow-md ${
        featured ? 'md:col-span-2 md:p-8 bg-gradient-to-br from-paper-100/60 to-paper-50 dark:from-stone-900/80 dark:to-stone-950/60 border-stone-300 dark:border-stone-700' : ''
      }`}
    >
      <div>
        {/* Cover Image if available */}
        {writing.cover_image && featured && (
          <div className="w-full h-48 sm:h-64 mb-6 rounded-xl overflow-hidden relative">
            <img
              src={writing.cover_image}
              alt={writing.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        )}

        {/* Top Header info */}
        <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 font-sans mb-3">
          <span className="px-2.5 py-1 rounded-full bg-stone-200/70 dark:bg-stone-800/70 text-stone-800 dark:text-stone-200 font-medium">
            {writing.category}
          </span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 opacity-60" />
              {formattedDate}
            </span>
            {writing.view_count > 0 && (
              <span className="flex items-center gap-1">
                <Eye className="w-3 h-3 opacity-60" />
                {writing.view_count}
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3
          className={`text-stone-900 dark:text-stone-100 font-medium group-hover:text-stone-600 dark:group-hover:text-amber-300/90 transition-colors mb-3 leading-snug ${
            isHindi ? 'font-hindi text-xl sm:text-2xl' : 'font-serif text-xl sm:text-2xl'
          }`}
        >
          <Link href={`/diary/${writing.slug}`} className="focus:outline-none">
            <span className="absolute inset-0 z-10" />
            {writing.title}
          </Link>
        </h3>

        {/* Content excerpt formatted like poetry or prose */}
        <p
          className={`text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed line-clamp-3 mb-6 ${
            isHindi ? 'font-hindi' : 'font-serif italic'
          }`}
        >
          "{writing.excerpt}"
        </p>
      </div>

      {/* Footer Tags & Arrow */}
      <div className="flex items-center justify-between pt-4 border-t border-stone-200/60 dark:border-stone-800/60 mt-auto">
        <div className="flex flex-wrap gap-1.5">
          {writing.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-sans tracking-wide text-stone-500 dark:text-stone-400 hover:text-stone-700"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-1 text-xs font-sans tracking-wide text-stone-800 dark:text-stone-200 font-medium group-hover:translate-x-1 transition-transform">
          Read
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </article>
  );
}
