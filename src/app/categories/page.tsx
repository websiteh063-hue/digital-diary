import Link from 'next/link';
import { getAllWritings } from '@/lib/db';
import { Category } from '@/types/diary';
import { Grid, ArrowRight } from 'lucide-react';

export const revalidate = 0;

export default function CategoriesPage() {
  const writings = getAllWritings(false);

  const categories: { name: Category; count: number; desc: string; bg: string }[] = [
    { name: "Micro Poems", count: writings.filter(w => w.category === "Micro Poems").length, desc: "Brevity wrapped in soul and silence.", bg: "from-stone-900/10 to-stone-900/5" },
    { name: "Poems", count: writings.filter(w => w.category === "Poems").length, desc: "Verses of quiet storms and open skies.", bg: "from-amber-900/10 to-amber-900/5" },
    { name: "Quotes", count: writings.filter(w => w.category === "Quotes").length, desc: "Single lines that linger in your mind.", bg: "from-stone-800/10 to-stone-800/5" },
    { name: "Stories", count: writings.filter(w => w.category === "Stories").length, desc: "Moments and memories etched in prose.", bg: "from-orange-900/10 to-orange-900/5" },
    { name: "Love", count: writings.filter(w => w.category === "Love").length, desc: "Tenderness, warmth, and devotion.", bg: "from-rose-900/10 to-rose-900/5" },
    { name: "Heartbreak", count: writings.filter(w => w.category === "Heartbreak").length, desc: "The echoes of goodbye and unsaid words.", bg: "from-red-900/10 to-red-900/5" },
    { name: "Life", count: writings.filter(w => w.category === "Life").length, desc: "Lessons learnt along the winding path.", bg: "from-yellow-900/10 to-yellow-900/5" },
    { name: "Thoughts", count: writings.filter(w => w.category === "Thoughts").length, desc: "Midnight contemplations and reflections.", bg: "from-indigo-900/10 to-indigo-900/5" },
  ];

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-stone-300 dark:border-stone-800 text-stone-600 dark:text-stone-400 text-xs font-sans tracking-widest uppercase">
          <Grid className="w-3.5 h-3.5" />
          Taxonomy
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl font-medium text-stone-950 dark:text-stone-50">
          Categories
        </h1>
        <p className="font-serif italic text-base sm:text-lg text-stone-600 dark:text-stone-400">
          Explore writings categorized by mood, form, and emotion.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href={`/diary?category=${encodeURIComponent(cat.name)}`}
            className="group p-7 rounded-2xl border border-stone-200/90 dark:border-stone-800/80 bg-paper-50 dark:bg-stone-900/40 hover:border-stone-400 dark:hover:border-stone-600 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-sans uppercase tracking-widest text-stone-400 dark:text-stone-500 font-semibold">
                  {cat.count} {cat.count === 1 ? 'Piece' : 'Pieces'}
                </span>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 group-hover:text-stone-900 dark:group-hover:text-stone-100 transition-all" />
              </div>

              <h2 className="font-serif text-2xl font-medium text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors mb-2">
                {cat.name}
              </h2>

              <p className="text-xs font-sans text-stone-600 dark:text-stone-400 leading-relaxed">
                {cat.desc}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200/50 dark:border-stone-800/50 text-[11px] font-sans uppercase tracking-wider text-stone-500 font-medium">
              Browse Chapter &rarr;
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
