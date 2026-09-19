import Link from 'next/link';
import { getAllWritings } from '@/lib/db';
import WritingCard from '@/components/WritingCard';
import EnterDiaryTransition from '@/components/EnterDiaryTransition';
import { Feather, Heart, Flame, Sparkles, BookOpen, ArrowRight, PenTool, Lock } from 'lucide-react';
import { Category } from '@/types/diary';

export const revalidate = 0; // dynamic

export default function HomePage() {
  const allWritings = getAllWritings(false);

  const featuredWritings = allWritings.filter(w => w.featured).slice(0, 4);
  const latestWritings = allWritings.slice(0, 6);
  const mostReadWritings = [...allWritings].sort((a, b) => (b.view_count || 0) - (a.view_count || 0)).slice(0, 6);
  const emotionalWritings = allWritings.filter(w => ['Heartbreak', 'Love', 'Micro Poems', 'Poems'].includes(w.category)).slice(0, 6);

  const categoriesList: { name: Category; count: number; desc: string; gradient: string }[] = [
    { name: "Micro Poems", count: allWritings.filter(w => w.category === "Micro Poems").length, desc: "Brevity wrapped in soul", gradient: "from-indigo-500/20 via-purple-500/10 to-transparent border-indigo-500/30" },
    { name: "Poems", count: allWritings.filter(w => w.category === "Poems").length, desc: "Verses of quiet storms", gradient: "from-amber-500/20 via-yellow-500/10 to-transparent border-amber-500/30" },
    { name: "Quotes", count: allWritings.filter(w => w.category === "Quotes").length, desc: "Single lines that linger", gradient: "from-purple-500/20 via-pink-500/10 to-transparent border-purple-500/30" },
    { name: "Stories", count: allWritings.filter(w => w.category === "Stories").length, desc: "Moments etched in prose", gradient: "from-emerald-500/20 via-teal-500/10 to-transparent border-emerald-500/30" },
    { name: "Love", count: allWritings.filter(w => w.category === "Love").length, desc: "Tenderness and devotion", gradient: "from-rose-500/20 via-pink-500/10 to-transparent border-rose-500/30" },
    { name: "Heartbreak", count: allWritings.filter(w => w.category === "Heartbreak").length, desc: "The echoes of goodbye", gradient: "from-red-500/20 via-rose-500/10 to-transparent border-red-500/30" },
    { name: "Life", count: allWritings.filter(w => w.category === "Life").length, desc: "Lessons learnt along the way", gradient: "from-amber-600/20 via-orange-500/10 to-transparent border-amber-600/30" },
    { name: "Thoughts", count: allWritings.filter(w => w.category === "Thoughts").length, desc: "Midnight contemplations", gradient: "from-sky-500/20 via-blue-500/10 to-transparent border-sky-500/30" },
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      
      {/* HERO SECTION WITH RICH AMBIENT GLOW */}
      <section className="relative text-center pt-8 sm:pt-16 pb-12 border-b border-amber-500/20">
        
        {/* Background Ambient Glows */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-tr from-amber-500/20 via-rose-500/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />

        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-purple-500/10 text-amber-900 dark:text-amber-300 text-xs font-sans tracking-widest uppercase mb-8 shadow-sm animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
          A Personal Literary Sanctuary
        </div>

        {/* Title */}
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-tight bg-gradient-to-r from-stone-950 via-amber-950 to-rose-950 dark:from-stone-50 dark:via-amber-200 dark:to-rose-200 bg-clip-text text-transparent font-semibold max-w-4xl mx-auto mb-8 leading-[1.05]">
          My Diary
        </h1>

        {/* Subtitle */}
        <p className="font-serif italic text-xl sm:text-3xl text-stone-700 dark:text-stone-300 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-sm">
          "Some feelings are written. Some are lived.<br className="hidden sm:inline" />
          And some stay somewhere between the two."
        </p>

        {/* Enter the Diary & Write For Us Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <EnterDiaryTransition />

          {/* RENAMED LINK: Write For Us */}
          <Link
            href="/admin"
            className="flex items-center gap-2 px-6 py-4 rounded-full border border-amber-500/40 bg-paper-100/80 dark:bg-stone-900/80 hover:bg-amber-500/10 text-amber-900 dark:text-amber-300 font-sans text-xs tracking-widest uppercase font-bold transition-all shadow-md"
          >
            <PenTool className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            Write For Us &rarr;
          </Link>
        </div>

        {/* Short introduction card */}
        <div className="max-w-xl mx-auto p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-paper-100/80 via-paper-50 to-paper-100/80 dark:from-stone-900/80 dark:via-stone-950 dark:to-stone-900/80 border border-amber-500/20 text-stone-700 dark:text-stone-300 text-xs sm:text-sm font-sans leading-relaxed shadow-sm">
          Welcome to my quiet corner of the internet. Here you will find micro poems, quiet heartbreaks, romantic fragments, unposted thoughts, and stories that couldn't stay bottled up inside.
        </div>
      </section>

      {/* FEATURED WRITINGS */}
      {featuredWritings.length > 0 && (
        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-700 dark:text-amber-300">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900 dark:text-stone-100">
                  Featured Writing
                </h2>
                <p className="text-xs font-sans text-stone-500">Hand-picked personal favorites</p>
              </div>
            </div>
            <Link href="/diary" className="text-xs font-sans uppercase tracking-widest text-amber-700 dark:text-amber-400 font-bold hover:underline flex items-center gap-1">
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
            <div className="p-2 rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-700 dark:text-indigo-300">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900 dark:text-stone-100">
                Latest from the Diary
              </h2>
              <p className="text-xs font-sans text-stone-500">Fresh verses and recent entries</p>
            </div>
          </div>
          <Link href="/diary" className="text-xs font-sans uppercase tracking-widest text-amber-700 dark:text-amber-400 font-bold hover:underline flex items-center gap-1">
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
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-rose-500/10 via-paper-50 to-amber-500/10 dark:from-rose-950/40 dark:via-stone-950 dark:to-amber-950/40 border border-rose-500/30 space-y-8 shadow-md">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-rose-500/20 text-rose-600 dark:text-rose-400">
            <Heart className="w-6 h-6 fill-current" />
          </div>
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900 dark:text-stone-100">
              From the Heart
            </h2>
            <p className="text-xs font-sans text-stone-600 dark:text-stone-400">
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
            <div className="p-2 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-700 dark:text-amber-300">
              <Flame className="w-5 h-5 fill-current text-amber-600" />
            </div>
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900 dark:text-stone-100">
                Most Read
              </h2>
              <p className="text-xs font-sans text-stone-500">Popular pieces among readers</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {mostReadWritings.map((writing) => (
            <WritingCard key={writing.id} writing={writing} />
          ))}
        </div>
      </section>

      {/* COLORFUL CATEGORIES GRID */}
      <section className="space-y-8 pt-8 border-t border-amber-500/20">
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
              className={`group p-6 rounded-3xl border bg-gradient-to-br ${cat.gradient} hover:scale-105 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md`}
            >
              <div>
                <span className="text-[10px] font-sans uppercase tracking-widest text-stone-500 dark:text-stone-400 font-bold block mb-1">
                  {cat.count} {cat.count === 1 ? 'Piece' : 'Pieces'}
                </span>
                <h3 className="font-serif text-xl font-semibold text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                  {cat.name}
                </h3>
              </div>
              <p className="text-xs font-sans text-stone-600 dark:text-stone-400 mt-3 line-clamp-1">
                {cat.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* PROMINENT DIRECT PAGE BANNER FOR WRITE FOR US */}
      <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-amber-600 via-rose-600 to-amber-700 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-[11px] uppercase tracking-wider font-bold">
            <Lock className="w-3 h-3" /> Author Access
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold">
            Ready to write a new poem or story?
          </h3>
          <p className="text-xs sm:text-sm font-sans text-white/90 max-w-md">
            Go straight to your private Writing Studio to draft, format, auto-suggest tags, and publish with instant branding & default signature.
          </p>
        </div>

        <Link
          href="/admin"
          className="shrink-0 px-6 py-3.5 rounded-full bg-white text-stone-950 font-sans text-xs uppercase font-bold tracking-wider hover:bg-amber-100 hover:scale-105 transition-all shadow-lg flex items-center gap-2"
        >
          <PenTool className="w-4 h-4 text-amber-700" />
          Write For Us &rarr;
        </Link>
      </section>

    </div>
  );
}
