import Link from 'next/link';
import { getAllWritings } from '@/lib/db';
import WritingCard from '@/components/WritingCard';
import EnterDiaryTransition from '@/components/EnterDiaryTransition';
import { Feather, Heart, Flame, Sparkles, BookOpen, ArrowRight } from 'lucide-react';
import { Category } from '@/types/diary';

export const revalidate = 0; // dynamic

export default function HomePage() {
  const allWritings = getAllWritings(false);

  const featuredWritings = allWritings.filter(w => w.featured).slice(0, 2);
  const latestWritings = allWritings.slice(0, 4);
  const mostReadWritings = [...allWritings].sort((a, b) => (b.view_count || 0) - (a.view_count || 0)).slice(0, 3);
  const emotionalWritings = allWritings.filter(w => ['Heartbreak', 'Love', 'Micro Poems'].includes(w.category)).slice(0, 3);

  const categoriesList: { name: Category; count: number; desc: string }[] = [
    { name: "Micro Poems", count: allWritings.filter(w => w.category === "Micro Poems").length, desc: "Brevity wrapped in soul" },
    { name: "Poems", count: allWritings.filter(w => w.category === "Poems").length, desc: "Verses of quiet storms" },
    { name: "Quotes", count: allWritings.filter(w => w.category === "Quotes").length, desc: "Single lines that linger" },
    { name: "Stories", count: allWritings.filter(w => w.category === "Stories").length, desc: "Moments etched in prose" },
    { name: "Love", count: allWritings.filter(w => w.category === "Love").length, desc: "Tenderness and devotion" },
    { name: "Heartbreak", count: allWritings.filter(w => w.category === "Heartbreak").length, desc: "The echoes of goodbye" },
    { name: "Life", count: allWritings.filter(w => w.category === "Life").length, desc: "Lessons learnt along the way" },
    { name: "Thoughts", count: allWritings.filter(w => w.category === "Thoughts").length, desc: "Midnight contemplations" },
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-12">
      
      {/* HERO SECTION */}
      <section className="relative text-center pt-10 sm:pt-16 pb-12 border-b border-stone-200/80 dark:border-stone-800/80">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-stone-300 dark:border-stone-800 bg-paper-100/60 dark:bg-stone-900/40 text-stone-600 dark:text-stone-400 text-xs font-sans tracking-widest uppercase mb-8 animate-fade-in">
          <Feather className="w-3.5 h-3.5 text-stone-700 dark:text-stone-300" />
          A Personal Writing Sanctuary
        </div>

        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-tight text-stone-950 dark:text-stone-50 font-medium max-w-4xl mx-auto mb-8 leading-[1.05]">
          My Diary
        </h1>

        <p className="font-serif italic text-lg sm:text-2xl text-stone-600 dark:text-stone-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          "Some feelings are written. Some are lived.<br className="hidden sm:inline" />
          And some stay somewhere between the two."
        </p>

        {/* Enter the Diary Experience Button */}
        <div className="flex justify-center mb-12">
          <EnterDiaryTransition />
        </div>

        {/* Short introduction to my writing */}
        <div className="max-w-xl mx-auto p-6 rounded-2xl bg-paper-100/40 dark:bg-stone-900/30 border border-stone-200/60 dark:border-stone-800/60 text-stone-600 dark:text-stone-400 text-xs sm:text-sm font-sans leading-relaxed">
          Welcome to my quiet corner of the internet. Here you will find micro poems, quiet heartbreaks, romantic fragments, unposted thoughts, and stories that couldn't stay bottled up inside.
        </div>
      </section>

      {/* FEATURED WRITINGS */}
      {featuredWritings.length > 0 && (
        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900 dark:text-stone-100">
                Featured Writing
              </h2>
            </div>
            <Link href="/diary" className="text-xs font-sans uppercase tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 flex items-center gap-1">
              View All <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredWritings.map((writing) => (
              <WritingCard key={writing.id} writing={writing} featured />
            ))}
          </div>
        </section>
      )}

      {/* LATEST FROM THE DIARY */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-stone-700 dark:text-stone-300" />
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900 dark:text-stone-100">
              Latest from the Diary
            </h2>
          </div>
          <Link href="/diary" className="text-xs font-sans uppercase tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 flex items-center gap-1">
            Browse All <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {latestWritings.map((writing) => (
            <WritingCard key={writing.id} writing={writing} />
          ))}
        </div>
      </section>

      {/* FROM THE HEART (Emotional / Love / Poems) */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-paper-100 via-paper-50 to-paper-200/50 dark:from-stone-900/60 dark:via-stone-950 dark:to-stone-900/40 border border-stone-200/80 dark:border-stone-800 space-y-8">
        <div className="flex items-center gap-3">
          <Heart className="w-5 h-5 text-red-500/80" />
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900 dark:text-stone-100">
              From the Heart
            </h2>
            <p className="text-xs font-sans text-stone-500 dark:text-stone-400">
              Pieces born from raw emotion, longing, and unsaid words.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {emotionalWritings.map((writing) => (
            <WritingCard key={writing.id} writing={writing} />
          ))}
        </div>
      </section>

      {/* MOST READ */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Flame className="w-5 h-5 text-amber-600" />
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900 dark:text-stone-100">
              Most Read
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {mostReadWritings.map((writing) => (
            <WritingCard key={writing.id} writing={writing} />
          ))}
        </div>
      </section>

      {/* CATEGORIES GRID */}
      <section className="space-y-8 pt-8 border-t border-stone-200/80 dark:border-stone-800/80">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="font-serif text-3xl font-medium text-stone-900 dark:text-stone-100">
            Explore by Category
          </h2>
          <p className="text-xs font-sans text-stone-500 dark:text-stone-400">
            Every mood and feeling has its own quiet shelf in the diary.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categoriesList.map((cat) => (
            <Link
              key={cat.name}
              href={`/diary?category=${encodeURIComponent(cat.name)}`}
              className="group p-5 rounded-2xl border border-stone-200 dark:border-stone-800 bg-paper-50 dark:bg-stone-900/50 hover:border-stone-400 dark:hover:border-stone-600 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-sans uppercase tracking-widest text-stone-400 dark:text-stone-500 font-semibold block mb-1">
                  {cat.count} {cat.count === 1 ? 'Piece' : 'Pieces'}
                </span>
                <h3 className="font-serif text-lg font-medium text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                  {cat.name}
                </h3>
              </div>
              <p className="text-xs font-sans text-stone-500 dark:text-stone-400 mt-3 line-clamp-1">
                {cat.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
